<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  host: { type: String, required: true },
})

const STATE = {
  LOADING: 'loading',
  ONLINE: 'online',
  OFFLINE: 'offline',
  ERROR: 'error',
}

const state = ref(STATE.LOADING)
const data = ref(null)
const lastUpdatedAt = ref(null)
const errorMessage = ref('')

const API_URL = `https://api.mcsrvstat.us/3/${props.host}`

const fetchStatus = async () => {
  state.value = STATE.LOADING
  errorMessage.value = ''
  try {
    const res = await fetch(API_URL, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }
    const json = await res.json()
    data.value = json
    state.value = json.online ? STATE.ONLINE : STATE.OFFLINE
    lastUpdatedAt.value = new Date()
  } catch (err) {
    state.value = STATE.ERROR
    errorMessage.value = err?.message || '無法連線'
    lastUpdatedAt.value = new Date()
  }
}

let timer = null
onMounted(() => {
  fetchStatus()
  timer = window.setInterval(fetchStatus, 60_000)
})
onUnmounted(() => {
  if (timer) window.clearInterval(timer)
})

const statusText = computed(() => {
  switch (state.value) {
    case STATE.LOADING:
      return '檢測中…'
    case STATE.ONLINE:
      return '線上'
    case STATE.OFFLINE:
      return '離線'
    case STATE.ERROR:
      return '無法取得狀態'
    default:
      return ''
  }
})

const playerText = computed(() => {
  if (state.value !== STATE.ONLINE) return null
  const p = data.value?.players
  if (!p) return null
  return `${p.online ?? 0} / ${p.max ?? 0}`
})

const versionText = computed(() => {
  if (state.value !== STATE.ONLINE) return null
  return data.value?.version || null
})

const motdLines = computed(() => {
  if (state.value !== STATE.ONLINE) return []
  const lines = data.value?.motd?.clean
  if (!Array.isArray(lines)) return []
  return lines.map((line) => line.trim()).filter(Boolean)
})

const iconUrl = computed(() => {
  if (state.value !== STATE.ONLINE) return null
  return data.value?.icon || null
})

const updatedText = computed(() => {
  if (!lastUpdatedAt.value) return ''
  const d = lastUpdatedAt.value
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  const ss = String(d.getSeconds()).padStart(2, '0')
  return `${hh}:${mm}:${ss}`
})
</script>

<template>
  <section class="status" :class="`status--${state}`">
    <header class="status__head">
      <div class="status__title">
        <span class="status__dot" :class="`status__dot--${state}`" />
        <span>伺服器狀態</span>
        <span class="status__badge">{{ statusText }}</span>
      </div>
      <button
        class="status__refresh"
        type="button"
        :disabled="state === STATE.LOADING"
        @click="fetchStatus"
      >
        {{ state === STATE.LOADING ? '檢測中…' : '重新檢測' }}
      </button>
    </header>

    <div v-if="state === STATE.ONLINE" class="status__body">
      <div class="status__brand">
        <img v-if="iconUrl" :src="iconUrl" alt="Server icon" class="status__icon" />
        <div class="status__motd">
          <p v-for="(line, idx) in motdLines" :key="idx">{{ line }}</p>
        </div>
      </div>
      <dl class="status__meta">
        <div>
          <dt>線上玩家</dt>
          <dd>{{ playerText }}</dd>
        </div>
        <div>
          <dt>支援版本</dt>
          <dd>{{ versionText }}</dd>
        </div>
        <div>
          <dt>主機</dt>
          <dd>{{ host }}</dd>
        </div>
      </dl>
    </div>

    <div v-else-if="state === STATE.OFFLINE" class="status__body status__body--offline">
      <p>目前無法連線到 <code>{{ host }}</code>，伺服器可能正在維護或暫時離線。</p>
    </div>

    <div v-else-if="state === STATE.ERROR" class="status__body status__body--error">
      <p>無法取得狀態：{{ errorMessage }}</p>
      <p class="status__hint">請稍後再試，或前往 Discord 詢問管理員。</p>
    </div>

    <div v-else class="status__body status__body--loading">
      <p>正在向 mcsrvstat.us 查詢即時狀態…</p>
    </div>

    <footer v-if="updatedText" class="status__foot">
      最後更新：{{ updatedText }}
    </footer>
  </section>
</template>

<style scoped>
.status {
  width: 100%;
  padding: 22px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  text-align: left;
}

.status--online {
  border-color: rgba(76, 217, 100, 0.35);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(76, 217, 100, 0.15) inset;
}

.status--offline {
  border-color: rgba(255, 95, 95, 0.3);
}

.status--error {
  border-color: rgba(255, 196, 0, 0.35);
}

.status__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.status__title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  color: #f5f5f7;
  font-size: 16px;
}

.status__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #8a8f9d;
  box-shadow: 0 0 0 4px rgba(138, 143, 157, 0.2);
}

.status__dot--online {
  background: #4cd964;
  box-shadow: 0 0 0 4px rgba(76, 217, 100, 0.2);
  animation: pulse 2s ease-in-out infinite;
}

.status__dot--offline {
  background: #ff5f5f;
  box-shadow: 0 0 0 4px rgba(255, 95, 95, 0.2);
}

.status__dot--error {
  background: #ffc400;
  box-shadow: 0 0 0 4px rgba(255, 196, 0, 0.2);
}

.status__dot--loading {
  background: #5ac8fa;
  box-shadow: 0 0 0 4px rgba(90, 200, 250, 0.2);
  animation: pulse 1.2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.9); }
}

.status__badge {
  padding: 2px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  font-size: 12px;
  color: #d6d8df;
  font-weight: 500;
}

.status--online .status__badge {
  background: rgba(76, 217, 100, 0.18);
  color: #b8f0c1;
}
.status--offline .status__badge {
  background: rgba(255, 95, 95, 0.18);
  color: #ffc8c8;
}
.status--error .status__badge {
  background: rgba(255, 196, 0, 0.18);
  color: #ffe7a8;
}

.status__refresh {
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  color: #f5f5f7;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.status__refresh:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.12);
}

.status__refresh:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.status__body {
  margin-top: 16px;
  color: #c8cdda;
  font-size: 14px;
  line-height: 1.65;
}

.status__brand {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.status__icon {
  width: 64px;
  height: 64px;
  image-rendering: pixelated;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
}

.status__motd {
  flex: 1;
  font-family: 'JetBrains Mono', 'Fira Code', Menlo, monospace;
  font-size: 13px;
  color: #e6e8ef;
  word-break: break-word;
}

.status__motd p {
  margin: 0;
}

.status__meta {
  margin: 18px 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}

.status__meta > div {
  padding: 10px 12px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.status__meta dt {
  font-size: 12px;
  color: #8e94a4;
  letter-spacing: 0.05em;
}

.status__meta dd {
  margin: 4px 0 0;
  font-size: 15px;
  font-weight: 600;
  color: #ffd166;
  word-break: break-word;
}

.status__body--offline p,
.status__body--error p {
  margin: 0;
}

.status__body--error .status__hint {
  margin-top: 6px;
  font-size: 13px;
  color: #8e94a4;
}

.status__body code {
  padding: 2px 6px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  font-family: 'JetBrains Mono', 'Fira Code', Menlo, monospace;
  color: #ffd166;
}

.status__foot {
  margin-top: 14px;
  font-size: 12px;
  color: #6c7180;
  text-align: right;
}
</style>

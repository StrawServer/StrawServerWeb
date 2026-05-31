<script setup>
import { ref } from 'vue'
import iconUrl from '@/assets/icon/icon.png'
import ServerStatus from '@/components/ServerStatus.vue'

const serverIp = 'mc.strawserver.com'
const copied = ref(false)

const copyIp = async () => {
  try {
    await navigator.clipboard.writeText(serverIp)
    copied.value = true
    setTimeout(() => (copied.value = false), 1800)
  } catch {
    copied.value = false
  }
}

const features = [
  { icon: '🌲', title: '多人休閒生存', desc: '適合朋友一起慢慢玩、一起發展基地。' },
  { icon: '💰', title: '經濟系統', desc: '支援交易、商店與玩家之間的互動。' },
  { icon: '🏗️', title: '建築玩法', desc: '歡迎喜歡蓋房子、主城、景觀與大型建築的玩家。' },
  { icon: '⚙️', title: '紅石玩家友善', desc: '研究機關、自動農場與技術玩法都能發揮。' },
  { icon: '🌍', title: '多分流系統', desc: '不同分流分工，遊玩更清楚、更穩定。' },
  { icon: '⛏️', title: '資源分流', desc: '安心採集資源，不破壞主要世界。' },
  { icon: '🎉', title: '伺服器活動', desc: '不定期舉辦活動，增加玩家互動與樂趣。' },
]
</script>

<template>
  <main class="home">
    <section class="hero">
      <img :src="iconUrl" alt="StrawServer Logo" class="hero__logo" />
      <h1 class="hero__title">StrawServer</h1>
      <p class="hero__subtitle">稻草伺服器</p>
      <p class="hero__desc">
        以多人休閒、生存、建築、紅石、經濟與活動為核心的 Minecraft 伺服器。
      </p>

      <div class="ip-card">
        <div class="ip-card__row">
          <span class="ip-card__label">伺服器 IP</span>
          <code class="ip-card__value">{{ serverIp }}</code>
          <button class="ip-card__copy" type="button" @click="copyIp">
            {{ copied ? '已複製' : '複製' }}
          </button>
        </div>
        <p class="ip-card__hint">分流切換：遊戲內按下 <kbd>Shift</kbd> + <kbd>F</kbd></p>
      </div>

      <div class="hero__links">
        <a class="link-btn link-btn--primary" href="https://dc.strawserver.com/" target="_blank" rel="noopener">
          加入 Discord
        </a>
        <a class="link-btn" href="https://www.strawserver.com/" target="_blank" rel="noopener">
          前往官網
        </a>
      </div>

      <div class="hero__status">
        <ServerStatus :host="serverIp" />
      </div>
    </section>

    <section class="intro">
      <h2 class="section-title">關於 StrawServer</h2>
      <p>
        我們希望打造一個輕鬆但有秩序的遊玩環境，讓玩家不管是想慢慢生存、蓋大型建築、研究紅石機關、和朋友一起冒險，或是參與伺服器活動，都能找到適合自己的玩法。
      </p>
      <p>
        伺服器採用多分流系統，包含主要遊玩分流、資源分流與不同玩法區域，玩家可以依照需求自由切換，不用擔心資源被挖光，也能讓生存與建築環境更加穩定。
      </p>
    </section>

    <section class="features">
      <h2 class="section-title">伺服器特色</h2>
      <div class="features__grid">
        <article v-for="item in features" :key="item.title" class="feature-card">
          <div class="feature-card__icon">{{ item.icon }}</div>
          <h3 class="feature-card__title">{{ item.title }}</h3>
          <p class="feature-card__desc">{{ item.desc }}</p>
        </article>
      </div>
    </section>

    <section class="cta">
      <h2 class="section-title">準備好一起冒險了嗎？</h2>
      <p>
        如果你正在找一個可以長期遊玩、和朋友一起發展、又有多種玩法可以體驗的 Minecraft 伺服器，歡迎加入 StrawServer 稻草伺服器。
      </p>
      <p class="cta__motto">今天也一起在稻草伺服器挖到鑽石吧 💎✨</p>
    </section>

    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} StrawServer. All rights reserved.</p>
    </footer>
  </main>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 24px 32px;
  background: radial-gradient(
      circle at top,
      rgba(255, 196, 0, 0.14),
      transparent 60%
    ),
    #0e131d;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 760px;
  width: 100%;
}

.hero__logo {
  width: 140px;
  height: 140px;
  object-fit: contain;
  border-radius: 28px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  margin-bottom: 32px;
}

.hero__title {
  font-size: clamp(40px, 8vw, 64px);
  font-weight: 800;
  letter-spacing: 0.02em;
  background: linear-gradient(135deg, #ffd166, #ffae00);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__subtitle {
  margin-top: 8px;
  font-size: clamp(18px, 3.2vw, 24px);
  color: #d6d8df;
}

.hero__desc {
  margin-top: 20px;
  font-size: clamp(15px, 2.6vw, 18px);
  color: #aab0bd;
  line-height: 1.7;
  max-width: 620px;
}

.ip-card {
  margin-top: 40px;
  width: 100%;
  max-width: 520px;
  padding: 20px 22px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.ip-card__row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.ip-card__label {
  font-size: 13px;
  color: #9aa0b0;
  letter-spacing: 0.08em;
}

.ip-card__value {
  flex: 1;
  min-width: 200px;
  text-align: left;
  font-family: 'JetBrains Mono', 'Fira Code', Menlo, monospace;
  font-size: 17px;
  color: #ffd166;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 10px;
}

.ip-card__copy {
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 209, 102, 0.5);
  background: rgba(255, 174, 0, 0.16);
  color: #ffd166;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}

.ip-card__copy:hover {
  background: rgba(255, 174, 0, 0.28);
}

.ip-card__copy:active {
  transform: scale(0.96);
}

.ip-card__hint {
  margin-top: 12px;
  font-size: 13px;
  color: #8e94a4;
  text-align: left;
}

.ip-card__hint kbd {
  display: inline-block;
  padding: 2px 8px;
  margin: 0 2px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  font-family: inherit;
  font-size: 12px;
  color: #e6e8ef;
}

.hero__links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
  justify-content: center;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 22px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.04);
  color: #f5f5f7;
  font-size: 15px;
  font-weight: 600;
  transition: background 0.2s ease, transform 0.1s ease;
}

.link-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.link-btn--primary {
  background: linear-gradient(135deg, #5865f2, #4752c4);
  border-color: transparent;
  color: #fff;
}

.link-btn--primary:hover {
  background: linear-gradient(135deg, #6772f4, #5865f2);
}

.hero__status {
  width: 100%;
  max-width: 520px;
  margin-top: 32px;
}

.intro,
.features,
.cta {
  width: 100%;
  max-width: 960px;
  margin-top: 72px;
}

.intro p {
  color: #b3b8c6;
  line-height: 1.85;
  font-size: 16px;
  margin-top: 12px;
}

.section-title {
  font-size: clamp(22px, 4vw, 28px);
  font-weight: 700;
  color: #f5f5f7;
  margin-bottom: 20px;
  text-align: center;
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

.feature-card {
  padding: 22px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.2s ease, background 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.07);
}

.feature-card__icon {
  font-size: 28px;
  margin-bottom: 10px;
}

.feature-card__title {
  font-size: 17px;
  font-weight: 700;
  color: #ffd166;
  margin-bottom: 6px;
}

.feature-card__desc {
  font-size: 14px;
  line-height: 1.7;
  color: #aab0bd;
}

.cta {
  text-align: center;
}

.cta p {
  color: #b3b8c6;
  line-height: 1.8;
  margin-top: 8px;
}

.cta__motto {
  margin-top: 16px;
  font-size: 18px;
  color: #ffd166;
  font-weight: 600;
}

.footer {
  width: 100%;
  text-align: center;
  margin-top: 64px;
  padding-top: 24px;
  color: #6c7180;
  font-size: 13px;
}
</style>

<script setup>
import { ref } from 'vue'
import iconUrl from '@/assets/icon/icon.png'
import ServerStatus from '@/components/ServerStatus.vue'

const serverIp = 'mc.strawserver.com'
const discordUrl = 'https://dc.strawserver.com/'
const websiteUrl = 'https://www.strawserver.com/'
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
  {
    icon: '☁️',
    title: '玩家專屬空島',
    desc: '每位玩家都可以建立自己的空島，從草地、樹木、箱子、岩漿與水開始，慢慢擴張天空基地。',
  },
  {
    icon: '⛏️',
    title: '鵝卵石生礦系統',
    desc: '岩漿與水生成鵝卵石後，挖掘時有機率產出不同礦物，讓挖石頭也充滿期待與成長感。',
  },
  {
    icon: '🐄',
    title: '動物生成玩法',
    desc: '空島發展到一定程度後，可以逐步獲得動物資源，打造農場與牧場，讓島嶼越來越完整。',
  },
  {
    icon: '💰',
    title: '空島經濟系統',
    desc: '透過資源收集、交易、販賣物品與活動獲得金幣，成為農夫、礦物商人或天空商業帝國主人。',
  },
  {
    icon: '🏝️',
    title: '島嶼升級與發展',
    desc: '未來將加入島嶼等級、挑戰任務、排行榜、成就與更多進階玩法，不只是把島蓋大而已。',
  },
  {
    icon: '👥',
    title: '組隊合作',
    desc: '可以和朋友一起經營同一座空島，分工建築、刷資源、跑經濟，一起把小島變成天空城。',
  },
]

const infoItems = [
  { label: '伺服器 IP', value: serverIp },
  { label: 'Discord', value: 'dc.strawserver.com' },
  { label: '官網', value: 'www.strawserver.com' },
  { label: '玩法類型', value: '空島生存 / 經濟 / 島嶼發展 / 建築 / 合作' },
]
</script>

<template>
  <main class="home">
    <section class="hero">
      <img :src="iconUrl" alt="StrawServer Logo" class="hero__logo" />
      <p class="hero__eyebrow">稻草空島 StrawSkyBlock</p>
      <h1 class="hero__title">從一座小島開始你的世界</h1>
      <p class="hero__subtitle">只有一棵樹、一個箱子、一桶岩漿與一桶水，也能打造出屬於自己的天空王國。</p>
      <p class="hero__desc">
        歡迎加入稻草空島 StrawSkyBlock！這裡不是普通生存，而是從一座空島開始，靠雙手慢慢擴建、發展經濟、升級島嶼，把一片天空變成屬於你的世界。
      </p>

      <div class="ip-card">
        <div class="ip-card__row">
          <span class="ip-card__label">伺服器 IP</span>
          <code class="ip-card__value">{{ serverIp }}</code>
          <button class="ip-card__copy" type="button" @click="copyIp">
            {{ copied ? '已複製' : '複製' }}
          </button>
        </div>
        <p class="ip-card__hint">玩法類型：空島生存 / 經濟 / 島嶼發展 / 建築 / 合作</p>
      </div>

      <div class="hero__links">
        <a class="link-btn link-btn--primary" :href="discordUrl" target="_blank" rel="noopener">
          加入 Discord
        </a>
        <a class="link-btn" :href="websiteUrl" target="_blank" rel="noopener">
          官方網站
        </a>
        <RouterLink class="link-btn" to="/rules">
          伺服器規定
        </RouterLink>
        <RouterLink class="link-btn" to="/membership">
          會員等級
        </RouterLink>
        <RouterLink class="link-btn" to="/about">
          關於我們
        </RouterLink>
      </div>

      <div class="hero__status">
        <ServerStatus :host="serverIp" />
      </div>
    </section>

    <section class="intro">
      <h2 class="section-title">一切，從一座小島開始</h2>
      <p>
        在稻草空島中，每一塊泥土、每一顆樹苗、每一顆礦物都很重要。你可以慢慢擴建，也可以挑戰效率；可以獨自經營，也可以和朋友一起打造天空王國。
      </p>
      <p>
        從最基礎的資源出發，透過挖掘、交易、農牧與合作，逐步把小島發展成完整的天空基地。
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

    <section class="server-info" aria-label="伺服器資訊">
      <h2 class="section-title">伺服器資訊</h2>
      <div class="server-info__grid">
        <article v-for="item in infoItems" :key="item.label" class="info-card">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
        </article>
      </div>
    </section>

    <section class="cta">
      <h2 class="section-title">蓋出屬於自己的天空世界</h2>
      <p>
        稻草空島 StrawSkyBlock，邀請你從零開始，把每一次挖掘、每一次建造與每一次合作，累積成你的天空王國。
      </p>
      <p class="cta__motto">現在就加入 mc.strawserver.com 🌾</p>
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
  padding: 56px 24px 32px;
  background: radial-gradient(circle at 20% 0%, rgba(255, 209, 102, 0.22), transparent 34%),
    radial-gradient(circle at 82% 14%, rgba(93, 176, 255, 0.16), transparent 36%),
    linear-gradient(180deg, #0d1724 0%, #0e131d 52%, #10151f 100%);
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 860px;
  width: 100%;
}

.hero__logo {
  width: 132px;
  height: 132px;
  object-fit: contain;
  border-radius: 30px;
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.5);
  margin-bottom: 28px;
}

.hero__eyebrow {
  color: #ffd166;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.hero__title {
  font-size: clamp(40px, 8vw, 72px);
  font-weight: 900;
  letter-spacing: 0.01em;
  line-height: 1.12;
  background: linear-gradient(135deg, #fff1b8, #ffd166 46%, #7bdcff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__subtitle {
  margin-top: 18px;
  font-size: clamp(18px, 3.2vw, 25px);
  color: #e6e8ef;
  line-height: 1.7;
  max-width: 760px;
}

.hero__desc {
  margin-top: 18px;
  font-size: clamp(15px, 2.4vw, 18px);
  color: #aeb8c8;
  line-height: 1.9;
  max-width: 740px;
}

.ip-card {
  margin-top: 38px;
  width: 100%;
  max-width: 600px;
  padding: 20px 22px;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 22px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(10px);
}

.ip-card__row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.ip-card__label {
  font-size: 13px;
  color: #a8b0c0;
  letter-spacing: 0.08em;
}

.ip-card__value {
  flex: 1;
  min-width: 210px;
  text-align: left;
  font-family: 'JetBrains Mono', 'Fira Code', Menlo, monospace;
  font-size: 17px;
  color: #ffd166;
  padding: 9px 13px;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 12px;
}

.ip-card__copy {
  padding: 9px 17px;
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
  color: #98a2b5;
  text-align: left;
  line-height: 1.7;
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
  background: rgba(255, 255, 255, 0.05);
  color: #f5f5f7;
  font-size: 15px;
  font-weight: 700;
  transition: background 0.2s ease, transform 0.1s ease;
}

.link-btn:hover {
  background: rgba(255, 255, 255, 0.11);
  transform: translateY(-1px);
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
  max-width: 600px;
  margin-top: 32px;
}

.intro,
.features,
.server-info,
.cta {
  width: 100%;
  max-width: 1080px;
  margin-top: 72px;
}

.intro p {
  color: #b7bfcd;
  line-height: 1.9;
  font-size: 16px;
  margin-top: 12px;
  text-align: center;
}

.section-title {
  font-size: clamp(24px, 4vw, 34px);
  font-weight: 850;
  color: #fff7df;
  margin-bottom: 22px;
  text-align: center;
}

.features__grid,
.server-info__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 18px;
}

.feature-card,
.info-card {
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.2);
}

.feature-card {
  padding: 24px;
  transition: transform 0.2s ease, background 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.075);
}

.feature-card__icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.feature-card__title {
  font-size: 19px;
  font-weight: 800;
  color: #ffd166;
  margin-bottom: 8px;
}

.feature-card__desc {
  font-size: 14px;
  line-height: 1.8;
  color: #adb7c8;
}

.info-card {
  padding: 22px;
}

.info-card span {
  display: block;
  color: #9da8ba;
  font-size: 13px;
  letter-spacing: 0.08em;
  margin-bottom: 10px;
}

.info-card strong {
  color: #f5f5f7;
  font-size: 18px;
  line-height: 1.6;
}

.cta {
  text-align: center;
  padding: 34px 24px;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(255, 209, 102, 0.13), rgba(123, 220, 255, 0.08));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cta p {
  color: #c0c7d3;
  line-height: 1.8;
  margin-top: 8px;
}

.cta__motto {
  margin-top: 16px;
  font-size: 18px;
  color: #ffd166;
  font-weight: 800;
}

.footer {
  width: 100%;
  text-align: center;
  margin-top: 64px;
  padding-top: 24px;
  color: #737a8c;
  font-size: 13px;
}

@media (max-width: 640px) {
  .home {
    padding: 42px 16px 28px;
  }

  .hero__logo {
    width: 108px;
    height: 108px;
  }

  .ip-card__value {
    min-width: 100%;
    text-align: center;
  }

  .ip-card__copy {
    width: 100%;
  }

  .intro,
  .features,
  .server-info,
  .cta {
    margin-top: 52px;
  }
}
</style>

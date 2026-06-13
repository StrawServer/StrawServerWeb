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
    icon: 'island',
    title: '玩家專屬空島',
    desc: '每位玩家都可以建立自己的空島，從草地、樹木、箱子、岩漿與水開始，慢慢擴張天空基地。',
  },
  {
    icon: 'pickaxe',
    title: '鵝卵石生礦系統',
    desc: '岩漿與水生成鵝卵石後，挖掘時有機率產出不同礦物，讓挖石頭也充滿期待與成長感。',
  },
  {
    icon: 'cow',
    title: '動物生成玩法',
    desc: '空島發展到一定程度後，可以逐步獲得動物資源，打造農場與牧場，讓島嶼越來越完整。',
  },
  {
    icon: 'coin',
    title: '空島經濟系統',
    desc: '透過資源收集、交易、販賣物品與活動獲得金幣，成為農夫、礦物商人或天空商業帝國主人。',
  },
  {
    icon: 'upgrade',
    title: '島嶼升級與發展',
    desc: '未來將加入島嶼等級、挑戰任務、排行榜、成就與更多進階玩法，不只是把島蓋大而已。',
  },
  {
    icon: 'team',
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
    <div class="hero__decor" aria-hidden="true">
      <span class="orb orb--1"></span>
      <span class="orb orb--2"></span>
      <span class="orb orb--3"></span>
      <span class="grain grain--1"></span>
      <span class="grain grain--2"></span>
      <span class="grain grain--3"></span>
      <span class="grain grain--4"></span>
    </div>

    <section class="hero">
      <img :src="iconUrl" alt="StrawServer Logo" class="hero__logo hero__anim" />
      <p class="hero__eyebrow hero__anim">稻草空島 StrawServer</p>
      <h1 class="hero__title hero__anim">從一座小島開始你的世界</h1>
      <p class="hero__subtitle hero__anim">只有一棵樹、一個箱子、一桶岩漿與一桶水，也能打造出屬於自己的天空王國。</p>
      <p class="hero__desc hero__anim">
        歡迎加入稻草空島 StrawServer！這裡不是普通生存，而是從一座空島開始，靠雙手慢慢擴建、發展經濟、升級島嶼，把一片天空變成屬於你的世界。
      </p>

      <div class="ip-card hero__anim">
        <div class="ip-card__row">
          <span class="ip-card__label">伺服器 IP</span>
          <code class="ip-card__value">{{ serverIp }}</code>
          <button class="ip-card__copy" type="button" @click="copyIp">
            <span class="ip-card__copy-text" :class="{ 'is-copied': copied }">
              {{ copied ? '已複製' : '複製' }}
            </span>
          </button>
        </div>
        <p class="ip-card__hint">玩法類型：空島生存 / 經濟 / 島嶼發展 / 建築 / 合作</p>
      </div>

      <div class="hero__links hero__anim">
        <a class="link-btn link-btn--primary" :href="discordUrl" target="_blank" rel="noopener">
          加入 Discord
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

      <div class="hero__status hero__anim">
        <ServerStatus :host="serverIp" />
      </div>
    </section>

    <section class="intro" v-reveal>
      <h2 class="section-title">一切，從一座小島開始</h2>
      <p>
        在稻草空島中，每一塊泥土、每一顆樹苗、每一顆礦物都很重要。你可以慢慢擴建，也可以挑戰效率；可以獨自經營，也可以和朋友一起打造天空王國。
      </p>
      <p>
        從最基礎的資源出發，透過挖掘、交易、農牧與合作，逐步把小島發展成完整的天空基地。
      </p>
    </section>

    <section class="features">
      <h2 class="section-title" v-reveal>伺服器特色</h2>
      <div class="features__grid">
        <article
          v-for="(item, index) in features"
          :key="item.title"
          class="feature-card"
          v-reveal="{ delay: index * 90 }"
        >
          <div class="feature-card__icon" :class="`icon-${item.icon}`"></div>
          <h3 class="feature-card__title">{{ item.title }}</h3>
          <p class="feature-card__desc">{{ item.desc }}</p>
        </article>
      </div>
    </section>

    <section class="server-info" aria-label="伺服器資訊">
      <h2 class="section-title" v-reveal>伺服器資訊</h2>
      <div class="server-info__grid">
        <article
          v-for="(item, index) in infoItems"
          :key="item.label"
          class="info-card"
          v-reveal="{ delay: index * 90 }"
        >
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
        </article>
      </div>
    </section>

    <section class="cta" v-reveal>
      <h2 class="section-title">蓋出屬於自己的天空世界</h2>
      <p>
        稻草空島 StrawSkyBlock，邀請你從零開始，把每一次挖掘、每一次建造與每一次合作，累積成你的天空王國。
      </p>
      <p class="cta__motto">現在就加入 mc.strawserver.com</p>
    </section>

    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} StrawServer. All rights reserved.</p>
    </footer>
  </main>
</template>

<style scoped>
.home {
  position: relative;
  overflow: hidden;
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

/* ===== 背景裝飾動畫元素 ===== */
.hero__decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  animation: float-orb 16s ease-in-out infinite;
}

.orb--1 {
  width: 360px;
  height: 360px;
  top: -80px;
  left: -60px;
  background: radial-gradient(circle, rgba(255, 196, 0, 0.45), transparent 70%);
}

.orb--2 {
  width: 300px;
  height: 300px;
  top: 240px;
  right: -80px;
  background: radial-gradient(circle, rgba(88, 101, 242, 0.4), transparent 70%);
  animation-delay: -5s;
  animation-duration: 20s;
}

.orb--3 {
  width: 260px;
  height: 260px;
  bottom: 120px;
  left: 12%;
  background: radial-gradient(circle, rgba(76, 217, 100, 0.28), transparent 70%);
  animation-delay: -9s;
  animation-duration: 24s;
}

.grain {
  position: absolute;
  opacity: 0.32;
  animation: drift 18s linear infinite;
  width: 28px;
  height: 28px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.grain--1 { top: 14%; left: 8%; animation-duration: 19s; }
.grain--2 { top: 22%; right: 10%; width: 36px; height: 36px; animation-duration: 26s; animation-delay: -6s; }
.grain--3 { top: 58%; left: 16%; width: 24px; height: 24px; animation-duration: 22s; animation-delay: -3s; }
.grain--4 { top: 68%; right: 14%; width: 32px; height: 32px; animation-duration: 30s; animation-delay: -12s; }

.grain--1,
.grain--3 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffd166' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L2 22h20L12 2z'/%3E%3Cpath d='M8 22l4-10 4 10'/%3E%3C/svg%3E");
}

.grain--2,
.grain--4 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a5b4fc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17.5 19c0-1.7-1.3-3-3-3c-1.1 0-2.1.6-2.6 1.5c-.5-.9-1.5-1.5-2.6-1.5c-1.7 0-3 1.3-3 3'/%3E%3Cpath d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.5 0 1 0 1.5-.1'/%3E%3Cpath d='M22 12c0-2.5-1.1-4.7-2.9-6.2'/%3E%3Cpath d='M22 12c0 2.5-1.1 4.7-2.9 6.2'/%3E%3Cpath d='M12 2v3'/%3E%3Cpath d='M12 19v3'/%3E%3Cpath d='M2 12h3'/%3E%3Cpath d='M19 12h3'/%3E%3C/svg%3E");
}

@keyframes float-orb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -28px) scale(1.08); }
}

@keyframes drift {
  0% { transform: translateY(0) rotate(0deg); opacity: 0.32; }
  50% { opacity: 0.5; }
  100% { transform: translateY(-44px) rotate(14deg); opacity: 0.32; }
}

.hero {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 760px;
  width: 100%;
}

/* ===== Hero 進場動畫（依序淡入上浮）===== */
.hero__anim {
  opacity: 0;
  animation: hero-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.hero__logo.hero__anim { animation-delay: 0.05s; }
.hero__eyebrow.hero__anim { animation-delay: 0.18s; }
.hero__title.hero__anim { animation-delay: 0.28s; }
.hero__subtitle.hero__anim { animation-delay: 0.38s; }
.hero__desc.hero__anim { animation-delay: 0.48s; }
.ip-card.hero__anim { animation-delay: 0.58s; }
.hero__links.hero__anim { animation-delay: 0.68s; }
.hero__status.hero__anim { animation-delay: 0.78s; }

@keyframes hero-rise {
  from {
    opacity: 0;
    transform: translateY(26px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__anim {
    opacity: 1;
    animation: none;
  }
  .orb,
  .grain {
    animation: none;
  }
}

.hero__logo {
  width: 140px;
  height: 140px;
  object-fit: contain;
  border-radius: 28px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  margin-bottom: 32px;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease;
}

.hero__logo:hover {
  transform: translateY(-6px) rotate(-3deg) scale(1.04);
  box-shadow: 0 28px 70px rgba(255, 174, 0, 0.35);
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

.ip-card__copy:focus-visible {
  outline: 2px solid #ffd166;
  outline-offset: 2px;
}

.ip-card__copy-text {
  display: inline-block;
}

.ip-card__copy-text.is-copied {
  animation: copy-pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes copy-pop {
  0% { transform: scale(0.7); opacity: 0.4; }
  100% { transform: scale(1); opacity: 1; }
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
  transition: background 0.25s ease, transform 0.18s ease,
    box-shadow 0.25s ease, border-color 0.25s ease;
}

.link-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
  border-color: rgba(255, 209, 102, 0.5);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.32);
}

.link-btn:active {
  transform: translateY(-1px) scale(0.98);
}

.link-btn:focus-visible {
  outline: 2px solid #ffd166;
  outline-offset: 3px;
}

.link-btn--primary {
  background: linear-gradient(135deg, #5865f2, #4752c4);
  border-color: transparent;
  color: #fff;
}

.link-btn--primary:hover {
  background: linear-gradient(135deg, #6772f4, #5865f2);
  box-shadow: 0 12px 28px rgba(88, 101, 242, 0.4);
}

.hero__status {
  width: 100%;
  max-width: 520px;
  margin-top: 32px;
}

.intro,
.features,
.server-info,
.cta {
  position: relative;
  z-index: 1;
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
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 209, 102, 0.35);
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.34);
}

.feature-card__icon {
  width: 44px;
  height: 44px;
  margin-bottom: 10px;
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.icon-island {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffd166' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L2 22h20L12 2z'/%3E%3Cpath d='M8 22l4-10 4 10'/%3E%3C/svg%3E");
}

.icon-pickaxe {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffd166' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'/%3E%3C/svg%3E");
}

.icon-cow {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffd166' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='4' y='6' width='16' height='12' rx='2'/%3E%3Cpath d='M8 6V4a2 2 0 0 1 4 0v2'/%3E%3Cpath d='M12 6V4a2 2 0 0 1 4 0v2'/%3E%3Ccircle cx='8' cy='12' r='1'/%3E%3Ccircle cx='16' cy='12' r='1'/%3E%3Cpath d='M10 16h4'/%3E%3C/svg%3E");
}

.icon-coin {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffd166' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 6v12'/%3E%3Cpath d='M15 9.5a3 3 0 0 0-3-3'/%3E%3Cpath d='M9 14.5a3 3 0 0 0 3 3'/%3E%3C/svg%3E");
}

.icon-upgrade {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffd166' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v20'/%3E%3Cpath d='M2 12h20'/%3E%3Cpath d='M7 7l5-5 5 5'/%3E%3Cpath d='M7 17l5 5 5-5'/%3E%3C/svg%3E");
}

.icon-team {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffd166' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='9' cy='7' r='4'/%3E%3Cpath d='M23 21v-2a4 4 0 0 0-3-3.87'/%3E%3Cpath d='M16 3.13a4 4 0 0 1 0 7.75'/%3E%3C/svg%3E");
}

.feature-card:hover .feature-card__icon {
  transform: scale(1.25) rotate(-6deg);
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

.server-info__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.info-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.28s ease, background 0.28s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 209, 102, 0.32);
  background: rgba(255, 255, 255, 0.06);
}

.info-card span {
  font-size: 13px;
  letter-spacing: 0.06em;
  color: #8e94a4;
}

.info-card strong {
  font-size: 16px;
  font-weight: 700;
  color: #ffd166;
  word-break: break-word;
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
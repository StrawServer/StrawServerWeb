<script setup>
const roles = [
  {
    title: '服主',
    description: '負責伺服器整體方向、系統規劃、技術維護與重大決策，確保伺服器能穩定運作並持續更新。',
  },
  {
    title: '副服主',
    description: '協助服主管理伺服器日常事務，包含玩家問題處理、制度規劃、活動協調與團隊溝通。',
  },
  {
    title: '管理員',
    description: '負責維護伺服器秩序、處理玩家糾紛、審查違規行為，並協助玩家解決遊玩上的問題。',
  },
  {
    title: '建築師',
    description: '負責伺服器建築、主城、活動場地、地圖美化與整體視覺設計，讓伺服器世界更有特色。',
  },
  {
    title: '工程師',
    description: '協助伺服器插件設定、系統測試、錯誤排查、功能開發與分流維護，提升伺服器穩定性與遊玩體驗。',
  },
  {
    title: '活動企劃',
    description: '負責設計伺服器活動、節日企劃、任務內容與獎勵規劃，讓玩家有更多互動與挑戰。',
  },
]
</script>

<template>
  <main class="about-page">
    <nav class="site-nav" aria-label="主要導覽">
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/rules">伺服器規定</RouterLink>
      <RouterLink to="/membership">會員等級</RouterLink>
      <RouterLink to="/about">關於我們</RouterLink>
    </nav>

    <section class="page-hero">
      <p class="eyebrow">About StrawServer</p>
      <h1>團隊｜稻草伺服器 StrawServer</h1>
      <p>
        稻草伺服器由一群熱愛 Minecraft、重視玩家體驗與伺服器品質的成員共同維護。
      </p>
    </section>

    <section class="story-card">
      <h2>我們在做什麼</h2>
      <p>
        我們的團隊負責伺服器規劃、系統設定、活動設計、玩家協調、建築製作與技術維護，目標是打造一個穩定、公平、有趣且適合長期遊玩的 Minecraft 社群。
      </p>
    </section>

    <section class="roles-section" aria-label="團隊職責">
      <h2>團隊職責</h2>
      <div class="roles-grid">
        <article v-for="role in roles" :key="role.title" class="role-card">
          <h3>{{ role.title }}</h3>
          <p>{{ role.description }}</p>
        </article>
      </div>
    </section>

    <section class="belief-card">
      <h2>我們的理念</h2>
      <p>
        我們希望稻草伺服器不只是單純的 Minecraft 伺服器，而是一個玩家能夠一起生存、建築、交易、冒險與交流的社群。
      </p>
      <p>
        團隊會持續聽取玩家意見，改善伺服器環境，並推出更多有趣的玩法與活動。
      </p>
    </section>

    <section class="join-card">
      <div>
        <p class="eyebrow">Join Our Team</p>
        <h2>想加入團隊？</h2>
        <p>
          如果你對伺服器管理、建築、插件設定、活動企劃或玩家協助有興趣，歡迎加入我們的 Discord，向團隊提出申請。
        </p>
      </div>
      <a class="discord-link" href="https://dc.strawserver.com/" target="_blank" rel="noopener">加入 Discord</a>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  padding: 28px 22px 64px;
  background: radial-gradient(circle at top right, rgba(255, 209, 102, 0.15), transparent 40%), #0e131d;
}

.site-nav {
  max-width: 1080px;
  margin: 0 auto 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.site-nav a {
  padding: 10px 16px;
  border-radius: 999px;
  color: #d8dbe5;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 700;
}

.site-nav a.router-link-active,
.site-nav a:hover {
  color: #17120a;
  background: linear-gradient(135deg, #ffd166, #ffae00);
  border-color: transparent;
}

.page-hero,
.story-card,
.roles-section,
.belief-card,
.join-card {
  width: 100%;
  max-width: 1080px;
  margin-inline: auto;
}

.page-hero {
  text-align: center;
  padding: 48px 22px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
}

.eyebrow {
  color: #ffd166;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.page-hero h1 {
  font-size: clamp(32px, 6vw, 56px);
  color: #fff7df;
  margin-bottom: 18px;
}

.page-hero p:not(.eyebrow) {
  max-width: 760px;
  margin: 0 auto;
  color: #b7bdcc;
  line-height: 1.9;
}

.story-card,
.belief-card,
.join-card,
.role-card {
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 24px;
}

.story-card,
.belief-card,
.join-card {
  margin-top: 28px;
  padding: 28px;
}

.story-card h2,
.roles-section h2,
.belief-card h2,
.join-card h2 {
  color: #f5f5f7;
  font-size: clamp(24px, 4vw, 32px);
  margin-bottom: 14px;
}

.story-card p,
.belief-card p,
.join-card p,
.role-card p {
  color: #b5bbca;
  line-height: 1.9;
}

.roles-section {
  margin-top: 42px;
}

.roles-section > h2 {
  text-align: center;
  margin-bottom: 20px;
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.role-card {
  padding: 24px;
}

.role-card h3 {
  color: #ffd166;
  font-size: 21px;
  margin-bottom: 10px;
}

.belief-card p + p {
  margin-top: 12px;
}

.join-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  background: linear-gradient(135deg, rgba(255, 209, 102, 0.13), rgba(255, 255, 255, 0.045));
}

.discord-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 13px 22px;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, #5865f2, #4752c4);
  font-weight: 800;
}

.discord-link:hover {
  background: linear-gradient(135deg, #6772f4, #5865f2);
}

@media (max-width: 720px) {
  .about-page {
    padding-inline: 16px;
  }

  .page-hero,
  .story-card,
  .belief-card,
  .join-card {
    padding: 24px 18px;
  }

  .join-card {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>

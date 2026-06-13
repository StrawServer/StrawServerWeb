<script setup>
const levels = [
  {
    level: 1,
    title: '小稻草',
    price: '50 ~ 100',
    titleDays: '365 天',
    claims: '3 個',
    homes: '3 個',
    flightDays: '7 天',
    dailyRewardDays: '30 天',
    dailyReward: '100 金幣',
    coins: '2,000 金幣',
  },
  {
    level: 2,
    title: '稻田旅人',
    price: '100 ~ 300',
    titleDays: '365 天',
    claims: '5 個',
    homes: '5 個',
    flightDays: '30 天',
    dailyRewardDays: '30 天',
    dailyReward: '200 金幣',
    coins: '6,000 金幣',
  },
  {
    level: 3,
    title: '稻穗收藏家',
    price: '300 ~ 500',
    titleDays: '365 天',
    claims: '8 個',
    homes: '8 個',
    flightDays: '60 天',
    dailyRewardDays: '30 天',
    dailyReward: '350 金幣',
    coins: '12,000 金幣',
  },
  {
    level: 4,
    title: '豐收守護者',
    price: '500 ~ 1000',
    titleDays: '365 天',
    claims: '12 個',
    homes: '12 個',
    flightDays: '120 天',
    dailyRewardDays: '30 天',
    dailyReward: '600 金幣',
    coins: '25,000 金幣',
  },
  {
    level: 5,
    title: '稻田之星',
    price: '1000 ~ 3000',
    titleDays: '365 天',
    claims: '20 個',
    homes: '20 個',
    flightDays: '360 天',
    dailyRewardDays: '30 天',
    dailyReward: '1,000 金幣',
    coins: '60,000 金幣',
  },
  {
    level: 6,
    title: '自訂稱號',
    price: '3000 以上',
    titleDays: '365 天',
    claims: '30 個',
    homes: '30 個',
    flightDays: '永久',
    dailyRewardDays: '30 天',
    dailyReward: '1,500 金幣',
    coins: '100,000 金幣',
  },
]

const tableColumns = [
  { key: 'level', label: '等級' },
  { key: 'title', label: '稱號' },
  { key: 'titleDays', label: '稱號天數' },
  { key: 'price', label: '金額範圍' },
  { key: 'claims', label: '領地數' },
  { key: 'homes', label: '家數' },
  { key: 'flightDays', label: '飛行天數' },
  { key: 'dailyRewardDays', label: '簽到獎勵天數' },
  { key: 'dailyReward', label: '每日簽到獎勵' },
  { key: 'coins', label: '獲取金幣數' },
]
</script>

<template>
  <main class="membership-page">
    <nav class="site-nav" aria-label="主要導覽">
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/rules">伺服器規定</RouterLink>
      <RouterLink to="/membership">會員等級</RouterLink>
      <RouterLink to="/about">關於我們</RouterLink>
    </nav>

    <section class="page-hero" v-reveal>
      <p class="eyebrow">Sponsor Member Levels</p>
      <h1>稻草伺服器 贊助會員階級</h1>
      <p>
        支持稻草伺服器的玩家會依照贊助金額範圍獲得對應稱號與福利，稱號為期 365 天，每日簽到獎勵為期 30 天，並包含領地數、家數、飛行天數與金幣獎勵。
      </p>
    </section>

    <section class="level-grid" aria-label="贊助會員階級卡片">
      <article
        v-for="(item, index) in levels"
        :key="item.level"
        class="level-card"
        v-reveal="{ delay: (index % 3) * 90 }"
      >
        <div class="level-card__topline">
          <span class="level-card__badge">Lv. {{ item.level }}</span>
          <span class="level-card__price">{{ item.price }}</span>
        </div>
        <h2>{{ item.title }}</h2>
        <dl class="level-card__perks">
          <div>
            <dt>稱號天數</dt>
            <dd>{{ item.titleDays }}</dd>
          </div>
          <div>
            <dt>領地數</dt>
            <dd>{{ item.claims }}</dd>
          </div>
          <div>
            <dt>家數</dt>
            <dd>{{ item.homes }}</dd>
          </div>
          <div>
            <dt>飛行</dt>
            <dd>{{ item.flightDays }}</dd>
          </div>
          <div>
            <dt>簽到天數</dt>
            <dd>{{ item.dailyRewardDays }}</dd>
          </div>
          <div>
            <dt>簽到獎勵</dt>
            <dd>{{ item.dailyReward }}</dd>
          </div>
          <div class="level-card__coins">
            <dt>獲取金幣</dt>
            <dd>{{ item.coins }}</dd>
          </div>
        </dl>
      </article>
    </section>

    <section class="table-card" aria-label="贊助會員階級表格" v-reveal>
      <table>
        <thead>
          <tr>
            <th v-for="column in tableColumns" :key="column.key">{{ column.label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in levels" :key="`row-${item.level}`">
            <td v-for="column in tableColumns" :key="column.key">
              {{ item[column.key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style scoped>
.membership-page {
  min-height: 100vh;
  padding: 28px 22px 64px;
  background: radial-gradient(circle at top, rgba(255, 209, 102, 0.16), transparent 42%), #0e131d;
}

.site-nav {
  max-width: 1180px;
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
  transition: color 0.25s ease, background 0.25s ease,
    transform 0.18s ease, border-color 0.25s ease;
}

.site-nav a:hover {
  transform: translateY(-2px);
}

.site-nav a.router-link-active,
.site-nav a:hover {
  color: #17120a;
  background: linear-gradient(135deg, #ffd166, #ffae00);
  border-color: transparent;
}

.page-hero,
.level-grid,
.table-card {
  width: 100%;
  max-width: 1180px;
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
  font-size: clamp(34px, 6vw, 58px);
  color: #fff7df;
  margin-bottom: 18px;
}

.page-hero p:not(.eyebrow) {
  max-width: 760px;
  margin: 0 auto;
  color: #b7bdcc;
  line-height: 1.9;
}

.level-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 18px;
  margin-top: 30px;
}

.level-card {
  position: relative;
  overflow: hidden;
  min-height: 280px;
  padding: 24px;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.035));
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.22);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.3s ease, box-shadow 0.3s ease;
}

.level-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 209, 102, 0.45);
  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.34);
}

.level-card::after {
  content: '';
  position: absolute;
  right: -40px;
  bottom: -54px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: rgba(255, 209, 102, 0.12);
  transition: transform 0.5s ease, background 0.4s ease;
}

.level-card:hover::after {
  transform: scale(1.5);
  background: rgba(255, 209, 102, 0.2);
}

.level-card__topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.level-card__badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #17120a;
  background: linear-gradient(135deg, #ffd166, #ffae00);
  font-size: 13px;
  font-weight: 900;
}

.level-card h2 {
  margin-top: 22px;
  color: #f5f5f7;
  font-size: 24px;
}

.level-card__price {
  color: #ffd166;
  font-size: 18px;
  font-weight: 900;
  white-space: nowrap;
}

.level-card__perks {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-top: 22px;
}

.level-card__perks div {
  padding: 12px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.level-card__perks dt {
  color: #8f96a8;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.level-card__perks dd {
  margin-top: 5px;
  color: #e7ebf4;
  font-size: 15px;
  font-weight: 800;
}

.level-card__perks .level-card__coins {
  grid-column: 1 / -1;
}

.table-card {
  margin-top: 30px;
  padding: 16px;
  border-radius: 24px;
  overflow-x: auto;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 1120px;
}

th,
td {
  padding: 16px 18px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

th {
  color: #ffd166;
  font-size: 13px;
  letter-spacing: 0.06em;
  white-space: nowrap;
}

td {
  color: #c9cedb;
  font-weight: 650;
  white-space: nowrap;
}

tr:last-child td {
  border-bottom: 0;
}

@media (max-width: 640px) {
  .membership-page {
    padding-inline: 16px;
  }

  .page-hero {
    padding: 34px 18px;
  }

  .level-card__perks {
    grid-template-columns: 1fr;
  }
}
</style>

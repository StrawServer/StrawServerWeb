<script setup>
const levels = [
  { level: 1, title: '小稻草', price: '50 ~ 100' },
  { level: 2, title: '稻田旅人', price: '100 ~ 300' },
  { level: 3, title: '稻穗收藏家', price: '300 ~ 500' },
  { level: 4, title: '豐收守護者', price: '500 ~ 1000' },
  { level: 5, title: '稻田之星', price: '1000 ~ 3000' },
  { level: 6, title: '符合規則可自訂義', price: '> 3000' },
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

    <section class="page-hero">
      <p class="eyebrow">Member Levels</p>
      <h1>會員等級</h1>
      <p>
        支持稻草伺服器的玩家會依照支持區間獲得對應稱號。第 6 級可在符合伺服器規則與管理規範下申請自訂義稱號。
      </p>
    </section>

    <section class="level-grid" aria-label="會員等級卡片">
      <article v-for="item in levels" :key="item.level" class="level-card">
        <span class="level-card__badge">Lv. {{ item.level }}</span>
        <h2>{{ item.title }}</h2>
        <p class="level-card__price">{{ item.price }}</p>
      </article>
    </section>

    <section class="table-card" aria-label="會員等級表格">
      <table>
        <thead>
          <tr>
            <th>等級</th>
            <th>稱號</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in levels" :key="`row-${item.level}`">
            <td>{{ item.level }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.price }}</td>
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
.level-grid,
.table-card {
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
  font-size: clamp(36px, 6vw, 58px);
  color: #fff7df;
  margin-bottom: 18px;
}

.page-hero p:not(.eyebrow) {
  max-width: 720px;
  margin: 0 auto;
  color: #b7bdcc;
  line-height: 1.9;
}

.level-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
  margin-top: 30px;
}

.level-card {
  position: relative;
  overflow: hidden;
  min-height: 170px;
  padding: 24px;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.035));
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.22);
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
  margin-top: 8px;
  color: #ffd166;
  font-size: 20px;
  font-weight: 800;
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
  min-width: 520px;
}

th,
td {
  padding: 16px 18px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

th {
  color: #ffd166;
  font-size: 14px;
  letter-spacing: 0.08em;
}

td {
  color: #c9cedb;
  font-weight: 650;
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
}
</style>

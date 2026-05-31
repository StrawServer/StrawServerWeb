<script setup>
import iconUrl from '@/assets/icon/icon.png'
</script>

<template>
  <main class="home">
    <section class="hero">
      <img :src="iconUrl" alt="StrawServer Logo" class="hero__logo" />
      <h1 class="hero__title">StrawServer</h1>
      <p class="hero__subtitle">稻草伺服器</p>
      <p class="hero__desc">
        穩定、高效、彈性的伺服器與雲端服務。
      </p>
      <div class="hero__tags">
        <span class="tag">高可用</span>
        <span class="tag">低延遲</span>
        <span class="tag">彈性擴充</span>
      </div>
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
  justify-content: space-between;
  padding: 64px 24px 24px;
  background: radial-gradient(
      circle at top,
      rgba(255, 196, 0, 0.12),
      transparent 60%
    ),
    #0e131d;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 720px;
  margin: auto 0;
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
}

.hero__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
  justify-content: center;
}

.tag {
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 14px;
  color: #f1d488;
}

.footer {
  width: 100%;
  text-align: center;
  padding-top: 32px;
  color: #6c7180;
  font-size: 13px;
}
</style>

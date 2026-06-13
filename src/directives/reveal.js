/**
 * v-reveal：以 IntersectionObserver 實作的捲動進場動畫指令。
 *
 * 用法：
 *   <section v-reveal>...</section>
 *   <article v-reveal="{ delay: 120 }">...</article>
 *
 * 元素進入視窗時會加上 `is-revealed` class 觸發 CSS 過場。
 * 若使用者啟用「減少動態效果」(prefers-reduced-motion)，則直接顯示，不套用任何位移動畫。
 */

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const observers = new WeakMap()

const reveal = {
  mounted(el, binding) {
    const { delay = 0 } = binding.value || {}

    el.classList.add('reveal')
    if (delay) {
      el.style.setProperty('--reveal-delay', `${delay}ms`)
    }

    // 不支援 IntersectionObserver 或使用者要求減少動態時，立即顯示。
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-revealed')
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    const observer = observers.get(el)
    if (observer) {
      observer.disconnect()
      observers.delete(el)
    }
  },
}

export default reveal

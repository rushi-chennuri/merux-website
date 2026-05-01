import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to every element with class "reveal".
 * When an element enters the viewport it gets the "visible" class added,
 * triggering the CSS fade-up transition defined in index.css.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

/**
 * MERUX Logo
 *
 * Badge    : Blue→purple gradient rounded square, overlapping MR with drop-shadow depth
 * Wordmark : "MeRux" — M & R in gradient, e/u/x dark
 *
 * Props:
 *   size     — height in px (default 42)
 *   dark     — white wordmark for dark backgrounds
 *   iconOnly — badge only, no wordmark
 *
 * TIP: Drop your actual PNG at /public/mr-logo.png and swap <Badge> to
 *      <img src="/mr-logo.png" …> for pixel-perfect rendering.
 */
import { useId } from 'react'

export default function Logo({ size = 42, dark = false, iconOnly = false }) {
  const uid      = useId().replace(/[^a-z0-9]/gi, '')
  const wordDark = dark ? '#FFFFFF' : '#0F172A'
  const font     = '"Arial Black", Arial, sans-serif'

  const Badge = () => (
    <img
      src="/mr-logo.png"
      alt="MERUX"
      width={size}
      height={size}
      style={{ display: 'block', flexShrink: 0 }}
    />
  )

  if (iconOnly) return <Badge />

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.28 }}>
      <Badge />

      <svg
        height={size}
        viewBox="0 0 292 88"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ display: 'block' }}
      >
        <defs>
          <linearGradient id={`${uid}wg`} x1="0" y1="0" x2="292" y2="88" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#2563EB" />
            <stop offset="55%"  stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#E91E8C" />
          </linearGradient>
        </defs>
        <text x="0" y="68" fontFamily={font} fontSize="68" fontWeight="900" letterSpacing="0.5">
          <tspan fill={`url(#${uid}wg)`}>M</tspan>
          <tspan fill={wordDark}>e</tspan>
          <tspan fill={`url(#${uid}wg)`}>R</tspan>
          <tspan fill={wordDark}>ux</tspan>
        </text>
      </svg>
    </div>
  )
}

/**
 * MERUX Logo  —  OpenText-style badge + wordmark
 *
 * Left  : rounded-square badge with "MR" in white on blue-purple gradient
 * Right : "MeRux" wordmark — M and R in gradient, e / u / x dark
 *
 * Props:
 *   size     — height in px (default 42)
 *   dark     — white wordmark for dark backgrounds
 *   iconOnly — badge only (no wordmark text)
 */
import { useId } from 'react'

export default function Logo({ size = 42, dark = false, iconOnly = false }) {
  const raw = useId()
  const uid = raw.replace(/[^a-z0-9]/gi, '')

  /* ── Badge gradient ── */
  const BadgeDef = () => (
    <linearGradient id={`${uid}bd`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stopColor="#2563EB" />
      <stop offset="100%" stopColor="#7C3AED" />
    </linearGradient>
  )

  /* ── Icon-only mode: just the MR badge ── */
  if (iconOnly) {
    return (
      <svg
        width={size} height={size}
        viewBox="0 0 88 88"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="MERUX"
      >
        <defs><BadgeDef /></defs>
        <rect width="88" height="88" rx="20" fill={`url(#${uid}bd)`} />
        {/* M — slightly right of centre so merged pair is visually centred */}
        <text
          x="20" y="63"
          fontFamily='"Arial Black", Arial, sans-serif'
          fontSize="46" fontWeight="900"
          fill="white"
        >M</text>
        {/* R — overlapping the right leg of M */}
        <text
          x="49" y="63"
          fontFamily='"Arial Black", Arial, sans-serif'
          fontSize="46" fontWeight="900"
          fill="white"
        >R</text>
      </svg>
    )
  }

  /* ── Full logo ── */
  // Badge: 88×88 in viewBox. Wordmark "MeRux" starts at x=106.
  // Approximate char widths at fontSize 68, Arial Black:
  //   M ≈ 54 · e ≈ 40 · R ≈ 46 · u ≈ 42 · x ≈ 40  → total ≈ 222
  // So viewBox width = 106 + 222 + 8 buffer = 336

  const wordDark = dark ? '#FFFFFF' : '#0F172A'
  const font     = '"Arial Black", Arial, sans-serif'
  const fontSz   = 68

  return (
    <svg
      width={size * 4.5} height={size}
      viewBox="0 0 400 88"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MERUX"
    >
      <defs>
        <BadgeDef />
        {/*
          Wordmark gradient spans from where M starts (x=106)
          to where R ends (~x=245) — M reads electric-blue, R reads vivid-purple.
        */}
        <linearGradient id={`${uid}wg`} x1="106" y1="0" x2="245" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#2563EB" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>

      {/* ── Badge ── */}
      <rect x="0" y="0" width="88" height="88" rx="20" fill={`url(#${uid}bd)`} />
      {/* M — large, anchored left; R overlaps its right leg for a merged monogram */}
      <text x="8"  y="63" fontFamily={font} fontSize="46" fontWeight="900" fill="white">M</text>
      <text x="45" y="63" fontFamily={font} fontSize="46" fontWeight="900" fill="white">R</text>

      {/* ── Wordmark "MeRux" ── */}
      <text
        x="106" y="68"
        fontFamily={font}
        fontSize={fontSz}
        fontWeight="900"
        letterSpacing="0.5"
      >
        {/* M — gradient blue */}
        <tspan fill={`url(#${uid}wg)`}>M</tspan>
        {/* e — dark */}
        <tspan fill={wordDark}>e</tspan>
        {/* R — gradient purple */}
        <tspan fill={`url(#${uid}wg)`}>R</tspan>
        {/* ux — dark */}
        <tspan fill={wordDark}>ux</tspan>
      </text>
    </svg>
  )
}

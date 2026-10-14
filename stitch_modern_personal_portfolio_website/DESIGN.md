---
name: Sapphire Minimal
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#4e565d'
  on-tertiary: '#ffffff'
  tertiary-container: '#676e76'
  on-tertiary-container: '#eaf1fa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#dce3ec'
  tertiary-fixed-dim: '#c0c7d0'
  on-tertiary-fixed: '#151c23'
  on-tertiary-fixed-variant: '#40484f'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 4rem
    fontWeight: '800'
    lineHeight: 4.5rem
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.75rem
    fontWeight: '800'
    lineHeight: 3.25rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: 3rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.875rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
    letterSpacing: '0'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
    letterSpacing: '0'
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-lg: 2rem
  margin: 1.25rem
  margin-md: 2.5rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies an editorial, high-precision aesthetic engineered for modern digital portfolios, executive profiles, and creative technologist showcases. The design language balances pristine gallery minimalism with cutting-edge SaaS refinement.

Key brand attributes:
- **Clarity & Authority:** Heavy use of intentional whitespace, deliberate structural alignment, and sharp typographical hierarchy evoke deep craft and expertise.
- **Sophisticated Vibrancy:** A surgical deployment of electric sapphire accents breaks through a monochromatic white-and-slate canvas, directing focus to projects, interactive states, and calls to action.
- **Micro-tactility:** Interactive surfaces leverage fine borders, fluid transitions, and weightless ambient shadows to provide immediate, polished tactile feedback without visual clutter.

## Colors

The palette establishes an ultra-clean, high-contrast light mode surface structure using crisp cool slates paired with saturated electric sapphire.

- **Primary (`#2563EB`):** Grounded sapphire blue used for key calls to action, brand anchors, active navigation states, and focal emphasis.
- **Secondary (`#3B82F6`):** Vibrant cobalt blue used for interactive hover layers, link focus, animated glows, and subtle indicator dots.
- **Tertiary (`#EFF6FF`):** Icy blue wash used for chip backgrounds, active pill highlights, callout containers, and subtle element borders.
- **Neutral (`#0F172A`):** Deep slate black for high-legibility display headlines and primary body text.
- **Surfaces & Borders:** Base background canvas sits at pure white (`#FFFFFF`) layered over subtle cool grey section bands (`#F8FAFC`). Hairline borders use muted zinc/slate shades (`#E2E8F0` and `#F1F5F9`) to define spatial boundaries cleanly.

## Typography

The type system pairs the geometric warmth and modern structural elegance of Plus Jakarta Sans for all structural prose and display headers with Inter for dense, functional interface metadata.

- **Display & Headlines:** Set tight negative tracking (-0.02em to -0.03em) on headings to deliver a bespoke editorial feel. Plus Jakarta Sans maintains legibility even at dramatic scale.
- **Body:** Kept airy with generous line height (1.6 to 1.7x font size) ensuring prolonged reading comfort across case studies and bio sections.
- **Labels & Tags:** Driven by Inter with slight uppercase letter tracking on small tags (`label-sm`) to delineate status, categories, and technological stacks distinctly from narrative prose.

## Layout & Spacing

A 12-column responsive grid anchored by a maximum content container of 1280px.

- **Desktop (>= 1024px):** 12 columns with `2rem` gutters and minimum `4rem` outer margins. Content utilizes generous vertical rhythmic padding between sections (`6rem` to `8rem`).
- **Tablet (768px - 1023px):** 8 columns with `1.5rem` gutters and `2.5rem` outer margins.
- **Mobile (< 768px):** 4 columns with `1rem` gutters and `1.25rem` outer canvas padding. Section gaps compress to `3.5rem`.
- **Rhythm Philosophy:** Whitespace acts as an active structural boundary. Avoid packing unrelated cards closely; allow negative space to emphasize individual projects and achievements.

## Elevation & Depth

Visual hierarchy combines low-contrast hairline outlines with subtle, diffused, sapphire-tinted ambient drop shadows.

- **Level 0 (Flat Canvas):** Surfaces sit flush on `#FFFFFF` or `#F8FAFC`. Contours are delineated strictly through 1px borders colored `#E2E8F0` or `#F1F5F9`.
- **Level 1 (Resting Cards & Navigation Bar):** 1px border (`#E2E8F0`) reinforced with a faint ambient shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`.
- **Level 2 (Hover States & Dropdowns):** Subtle upward translation (`translate-y: -2px`) paired with a light, cool blue-tinted drop shadow: `0 12px 24px -4px rgba(37, 99, 235, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03)`.
- **Level 3 (Modals & Command Menus):** High-definition overlay depth: `0 24px 48px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.05)`.
- **Glassmorphism Header:** Floating top navigation features a frosted acrylic backdrop blur (`backdrop-filter: blur(12px)`) with `rgba(255, 255, 255, 0.8)` fill and a bottom border of `rgba(226, 232, 240, 0.8)`.

## Shapes

The design system standardizes on a refined, balanced rounding language:

- **Containers & Project Cards:** Default to `rounded-lg` (1rem / 16px) or `rounded-xl` (1.5rem / 24px), projecting an approachable, modern feel while preserving geometric stability.
- **Buttons, Inputs & Interactive Controls:** Standardized at `rounded-md` (0.5rem / 8px) or `rounded-lg` (0.75rem / 12px) for sharp ergonomic handoffs.
- **Pills, Badges & Micro-tags:** Always rendered full-radius (`rounded-full` / 9999px) to establish a distinct, organic contrast against square case-study thumbnails and card containers.

## Components

### Buttons
- **Primary:** Filled `#2563EB`, text `#FFFFFF`, font weight 600. Subtle shadow `0 2px 4px rgba(37, 99, 235, 0.2)`. On hover: background shifts to `#3B82F6` with slight vertical lift (`translate-y: -1px`).
- **Secondary / Outline:** `#FFFFFF` background with 1px border in `#E2E8F0` and `#0F172A` text. On hover: border transitions to `#2563EB` and text to `#2563EB` over `#EFF6FF` tint.
- **Ghost:** Transparent background with `#0F172A` text. On hover: background `#F1F5F9`.

### Chips & Pill Tags
- Fully rounded pill geometry (`padding: 0.25rem 0.75rem`).
- Background `#EFF6FF`, text `#2563EB`, 1px border `#DBEAFE`.
- Neutral status pills: `#F8FAFC` background, `#475569` text, 1px `#E2E8F0` border.
- Interactive tech stack tags scale smoothly on hover (`scale: 1.03`) with a soft blue glow.

### Cards (Portfolio & Showcase)
- White surface (`#FFFFFF`) framed by a 1px `#E2E8F0` border and 16px corner radius.
- Project media containers use an inner overflow clip with subtle scale zoom (`scale: 1.02`) on hover.
- Cards transition effortlessly across 200ms ease-out, lifting 2px with an enhanced sapphire-tinted elevation shadow.

### Input Fields & Contact Controls
- Background `#FFFFFF` or `#F8FAFC`, 1px border `#CBD5E1`.
- Placeholder text in `#94A3B8`.
- Focus state: border ring transition to `#2563EB` with an ambient outer glow ring `0 0 0 3px rgba(37, 99, 235, 0.15)`.

### Navigation
- Floating header container with rounded pill or soft-corner geometry, fixed or sticky at page top.
- Surface: translucent frosted glass (`rgba(255, 255, 255, 0.85)` + `backdrop-filter: blur(12px)`).
- Nav links: font size 14px, weight 500 in `#475569`, transitioning to `#2563EB` on hover or active status indicator dot.

### Lists & Timeline / Experience Blocks
- Uncluttered minimalist layout featuring a fine continuous 1px `#E2E8F0` left spine.
- Timeline node dots: 8px solid `#2563EB` disks surrounded by a 4px halo of `#EFF6FF`.
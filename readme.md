# fatsecret Design System

## Overview

fatsecret is a global food diary and calorie counter platform used by millions of people to track nutrition, manage weight, and build healthy habits. The product spans:

- **Mobile App** (iOS & Android) — the primary product surface; food diary, barcode scanner, calorie counter, macro tracker, exercise logging
- **Website** (fatsecret.com) — web access to diary, food database, recipes, community forums
- **fatsecret Platform API** — nutrition data API licensed to third-party developers

The brand is approachable, data-forward, and health-positive — it takes nutrition seriously without being clinical or cold. The primary brand color is **mint green** (`#009C41`), evoking freshness, health, and progress. A distinct **Premium** tier uses **amber/gold** for monetization features.

---

## Sources

| Source | Notes |
| --- | --- |
| `uploads/fsds.json` | Figma design system token export (W3C token format). Figma collection ID: `VariableCollectionId:2207:3610`. Light + Dark modes. |

No Figma file URL or codebase was provided. The JSON covers the full color and dimension primitive/semantic token system. Typography tokens were not included in the export — see the **Font Substitution** caveat below.

---

## Typography

All text uses **Inter** (Google Fonts), weights 400–900.

---

## Content Fundamentals

### Tone

- **Direct and supportive.** Copy is action-oriented and empowering, never preachy or judgmental.
- **Second person ("you").** UI copy speaks to the user directly: "Your diary", "Track your meals", "You've reached your goal."
- **Concise.** Labels are short. Calorie counts and macro numbers are the star — copy supports them, not the other way around.
- **Positive framing.** Achievements, streaks, and goals use celebratory but grounded language.

### Casing

- **Sentence case** for most UI copy: "Add a food", "Log your exercise"
- **Title Case** only for section headers and navigation items: "Food Diary", "My Profile"
- **ALL CAPS** sparingly, for labels only (e.g., nutrient abbreviations: KCAL, PROT, CARB, FAT)

### Numbers

Numbers are prominent — calories, macros, weights — and should always be legible at a glance. Use numerals, never spell out: "1,200 calories", not "twelve hundred calories".

### Emoji

Not used in product UI. The product is data-forward and clean.

### Voice Examples

- ✅ "You've logged 3 meals today"
- ✅ "Tap to add food"
- ✅ "Great progress this week!"
- ❌ "Oops! Don't forget to eat! 🥗"
- ❌ "Logging your food is a key component of maintaining a healthy caloric balance."

---

## Visual Foundations

### Colors

Primary palette is **mint green** — a mid-tone, slightly desaturated green that reads as fresh and healthy without being garish. Neutral palette has a subtle **blue tint** (`#F7F8FF` as the lightest neutral), giving the UI a cool, trustworthy feel rather than pure grey.

- **Primary:** Mint 50 `#009C41` — CTAs, active states, primary buttons
- **Brand Primary:** Same as primary; the "fatsecret green"
- **Premium:** Amber 60 `#E59C0F` — premium tier features, paywall indicators
- **Surface:** Neutral 0 `#F7F8FF` — off-white with a blue tint, the default background
- **On-Surface Strong:** Neutral 100 `#030B19` — near-black with a deep blue cast

Full semantic token reference: see `tokens/colors.css` and `tokens/dark.css`.

### Typography

Humanist sans-serif. Clean, readable, optimised for numeric data. Type scale follows Material Design 3 conventions with Display, Headline, Title, Body, and Label roles.

### Spacing

8px base grid. Named scale from `4xs` (2px) through `6xl` (160px). Cards use `md` (32px) padding; list items use `sm` (16px); dense UI uses `2xs` (8px) gaps.

### Backgrounds

- Default app background: `surface` (`#F7F8FF`)
- Cards float on `surface-container-lowest` (`#FFFFFF`) with subtle shadow
- No full-bleed gradients in core UI; gradients used sparingly in onboarding/marketing
- Dark mode surfaces are very dark navy-black (`#030B19`, `#0C1525`)

### Animations

- Subtle, quick, functional — not decorative
- Easing: standard ease-out for entrances, ease-in for exits
- Transitions: 150–250ms typical
- No bouncy or spring animations in core data UI; reserved for celebration moments (streak achievements, goal completions)

### Hover & Press States

- Hover: slight background overlay (8% opacity on primary, 5% on neutrals)
- Press: deeper overlay (12–16% opacity) + slight scale-down on icon buttons
- State layers follow Material Design conventions (built into `state-layer-on-primary` tokens)

### Borders

- Cards: no border by default; rely on elevation/shadow for separation
- Inputs: `border-weak` (`#BCBEC6`) resting, `border-strong` (`#696C75`) focused
- Dividers: `border-weak` as `<hr>` or separator lines

### Shadows

- Cards: subtle soft shadow (`0 1px 3px rgba(3,11,25,0.08), 0 1px 2px rgba(3,11,25,0.04)`)
- Elevated elements (bottom nav, modals): stronger shadow
- No harsh or dramatic shadows; UI feels flat-elevated, not skeuomorphic

### Corner Radii

- `small` (4px): chips, tags, badges
- `medium` (8px): inputs, list items, small cards
- `large` (12px): cards, bottom sheets, modals
- `x-large` (16px): large cards, hero sections
- `pill` (9999px): primary buttons, capsule-style elements

### Cards

White (`surface-container-lowest: #FFFFFF`) on a slightly-off-white background, with `border-radius: large (12px)`, subtle shadow, no border. Dense information layout inside — calorie summaries, nutrient breakdowns, food entries.

### Imagery

- Product photography: warm, natural food photography
- Icons: line-style (Lucide / similar stroke-weight icon set)
- No hand-drawn illustrations visible in token data; clean, digital aesthetic
- Avatars: rounded rectangle (not circular) — avatar-specific border-radius tokens provided (9px at 24px size, 15px at 40px, etc.)

### Transparency & Blur

- Modal scrims: `scrim` token (black)
- Alpha overlays on surfaces use `neutral-alpha` tokens (both on-light and on-dark variants)
- Blur: used for bottom sheet and modal backdrops in modern implementations

### Color Imagery

- Food photography should be warm, appetizing, natural
- UI image containers: soft rounded corners
- No black-and-white or heavily filtered imagery in standard product

---

## Iconography

The design system does not include icon assets in the provided export. Based on fatsecret's product style:

- **Line icons** — stroke-based, consistent weight (\~1.5–2px stroke at 24px)
- **Lucide Icons** (or equivalent) — recommended CDN substitution; matches the clean, modern health app aesthetic
- **Sizing:** 16px (small/inline), 20px (standard), 24px (primary UI), 32px (featured)
- **Color:** Inherits from `on-surface-strong` or `primary` token; never hardcoded
- **No emoji** used as icons in UI
- No icon font detected in token export; SVG-based icons assumed

Usage: navigation icons (diary, search, nutrition, profile), action icons (add, delete, edit, scan), status icons (success ✓, warning !, error ✗)

---

## File Index

```
/
├── readme.md                        — This document
├── SKILL.md                         — Agent skill definition
├── styles.css                       — Global CSS entry point (@imports only)
├── tokens/
│   ├── colors.css                   — Color primitives + light theme semantic tokens
│   ├── dark.css                     — Dark theme overrides (prefers-color-scheme + .dark)
│   ├── typography.css               — Type scale + Inter font import
│   ├── spacing.css                  — Space, sizing, avatar size tokens
│   └── borders.css                  — Border radius + border tokens
├── assets/
│   └── (logos, icons — see ICONOGRAPHY)
├── guidelines/                      — Foundation specimen cards (Design System tab)
│   ├── colors-brand.card.html
│   ├── colors-neutral.card.html
│   ├── colors-palette.card.html
│   ├── colors-semantic.card.html
│   ├── colors-dark.card.html
│   ├── type-display.card.html
│   ├── type-body.card.html
│   ├── type-labels.card.html
│   ├── spacing.card.html
│   ├── borders.card.html
│   ├── elevation.card.html
│   └── motion.card.html
├── components/
│   ├── core/                        — Button, Badge, Avatar, Tag, Chip
│   ├── forms/                       — Input, Switch, Checkbox
│   ├── layout/                      — Card, Divider
│   └── feedback/                    — ProgressBar, MacroBar
```

### Components

| Component | Directory | Description |
| --- | --- | --- |
| `Button` + `IconButton` | `components/core/` | Primary, secondary, ghost, premium, destructive variants; sm/md/lg |
| `Badge` | `components/core/` | Status badges with solid + subtle variants; dot indicator option |
| `Avatar` | `components/core/` | Rounded-rect avatar; image + initials fallback; sm/md/lg/xl |
| `Tag` + `TagGroup` | `components/core/` | Selectable / dismissible filter chips |
| `Input` | `components/forms/` | Text input with label, helper, error, leading/trailing icon |
| `Switch` | `components/forms/` | Toggle for settings; sm/md size; with label + helper |
| `Card` + `Divider` | `components/layout/` | Content card (5 elevation levels); horizontal rule |
| `ProgressBar` | `components/feedback/` | Calorie/nutrient bar; auto-red over limit; xs–lg sizes |
| `MacroBar` | `components/feedback/` | 3-segment protein/carbs/fat breakdown bar |


### Guidelines Cards (Design System Tab)

| Card | Group | File |
| --- | --- | --- |
| Brand Colors | Colors | `guidelines/colors-brand.card.html` |
| Neutral Scale | Colors | `guidelines/colors-neutral.card.html` |
| Color Palette | Colors | `guidelines/colors-palette.card.html` |
| Semantic Colors — Light | Colors | `guidelines/colors-semantic.card.html` |
| Dark Theme | Colors | `guidelines/colors-dark.card.html` |
| Display & Headline | Type | `guidelines/type-display.card.html` |
| Body & Title | Type | `guidelines/type-body.card.html` |
| Labels & Numeric | Type | `guidelines/type-labels.card.html` |
| Spacing Scale | Spacing | `guidelines/spacing.card.html` |
| Border Radius | Spacing | `guidelines/borders.card.html` |
| Elevation | Spacing | `guidelines/elevation.card.html` |
| Motion | Spacing | `guidelines/motion.card.html` |


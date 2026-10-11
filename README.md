# VITILIGO HUB — See Beyond the Skin

> **"Different skin. Same dreams."**  
> *Clear information. Expert insights. Practical support.*

VITILIGO HUB is a warm, trustworthy, science-backed global education and support platform for individuals living with vitiligo, their families, and healthcare professionals. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 🎨 Design System & Palette

- **Navy** (`#0B1F6B`): Primary buttons, bold serif headlines, logo
- **Royal Blue** (`#1D5FE0`): Links, focus rings, "Understand Vitiligo" section accent
- **Violet / Lavender** (`#7C5CE0`): "My Life & Daily Living" section accent, secondary badges
- **Teal / Green** (`#1FA37A`): "Treatment & Care", positive clinical milestones, support
- **Coral / Orange** (`#F2884B`): "Expert Insights", warm conversational highlights
- **Rose / Pink** (`#E8456B`): Stigma topics, myth / "Not true" badges
- **Background**: Soft blue-lavender ambient gradient (`#F4F8FF` → `#F6F1FF`) with subtle pastel mesh
- **Card Tints**: Pale blue (`#EAF2FF`), lavender (`#EFEAFF`), mint (`#E3F6EF`), peach (`#FFEDE3`), pink (`#FDE8EE`)
- **Typography**: 
  - Headlines: **Playfair Display** (classic, warm editorial serif)
  - Body & UI: **Inter** (clean, Grade 8 accessible readability)
  - Quotes: **Caveat** (handwritten script font)

Design tokens are codified in [`lib/tokens.ts`](lib/tokens.ts) and [`app/globals.css`](app/globals.css).

---

## 🌐 Bilingual Support (i18n-Ready)

- Complete **English (`en`)** and **Hindi (`hi`)** dictionary in [`data/translations.json`](data/translations.json).
- Dynamic language switcher in the sticky header and footer, powered by [`components/LanguageContext.tsx`](components/LanguageContext.tsx).

---

## 🗂️ Content Architecture (Typed JSON)

All core clinical and community content lives in typed JSON files:
- [`data/myths.json`](data/myths.json): 9 evidence-based myths vs facts with citations to AAD, IADVL, and WHO.
- [`data/faqs.json`](data/faqs.json): Expert Q&As with reviewer credentials, hospital affiliations, and review dates.
- [`data/stories.json`](data/stories.json): Patient journeys categorized by cohort (Newly diagnosed, Confidence, Parents, etc.).
- [`data/resources.json`](data/resources.json): Directory of dermatologists, patient support groups, and downloadable toolkits.
- [`data/topics.json`](data/topics.json): Section landing metadata, colors, and routing.
- [`data/clinical_assumptions.json`](data/clinical_assumptions.json): Clinical statements requiring Medical Advisory Board review.

---

## 🧭 Site Map & Routes

| Route | Description |
|---|---|
| `/` | **Home**: Hero, Audience Chooser (4 cards), Topic Explorer, 3-question Starter Quiz, 70M+ Prevalence banner, Two Perspectives, Anonymous Chatbot, Quick Help icons. |
| `/about` | **About**: Mission, core values, 4-stage medical review process, advisory board, funding transparency. |
| `/understand` | **Understand Vitiligo**: The basics, 3 expandable cards for beyond the skin (sun sensitivity, autoimmune thyroid comorbidities, hearing loss), age-specific facts. |
| `/understand/stigma` | **Stigma & Misconceptions**: Myths vs Facts interactive flip carousel, cultural beliefs across regions (South Asia, Africa, Middle East). |
| `/understand/biology` | **Biology Infographic**: Side-by-side healthy vs vitiligo skin, interactive cross-section hotspots (surface, melanin, melanocytes, basal layer). |
| `/my-life` | **My Life & Daily Living**: "Walk in My Skin" interactive day timeline (7:00 AM to 9:00 PM), family, workplace, emotional wellbeing, appearance choices. |
| `/treatment` | **Treatment & Care**: 4 numbered steps ("Why should I see a dermatologist?"), plain-language therapies, treatment journey milestones, innovation explainer. |
| `/expert-insights` | **Expert Insights**: Two Perspectives split cards (Patient vs Doctor), Anonymous Chatbot panel, weekly expert Q&A digest, HCP guidelines and scoring tools. |
| `/resources` | **Resources & Support**: Searchable dermatologist directory, international support groups, downloadable toolkits, awareness events. |
| `/patient-journeys` | **Patient Journeys**: Filterable stories grid by cohort with accessible video modals and transcripts. |
| `/global-data` | **Global Data**: Interactive choropleth map, regional epidemiological breakdowns, data sources. |

---

## 🚀 Getting Started & Run Instructions

### 1. Prerequisites
- Node.js 18+ or 20+
- npm, pnpm, or yarn

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 🩺 Clinical Review Assumptions (Deliverable 5)

The following items are documented in [`data/clinical_assumptions.json`](data/clinical_assumptions.json) for formal review by the Medical Advisory Board:
1. **Prevalence Range (70M+)**: Extrapolated from global meta-analyses (0.5%–2.0% global prevalence). Consensus recommended on whether to publish dynamic country-level ranges.
2. **Subclinical Hearing Loss Association (12%–38%)**: Inner ear melanocyte association noted by AAD. Phrasing carefully constructed to avoid alarming patients while encouraging baseline auditory awareness.
3. **Thyroid Screening Frequency**: Recommending baseline TSH and periodic antibody testing for generalized vitiligo.
4. **Dietary Anti-Stigma Guidance**: Explicit medical confirmation that food combinations (fish + milk, sour foods) do not cause or worsen vitiligo.
5. **Repigmentation Expectations**: Milestone guidance indicating visible follicular repigmentation typically begins at 8–12 weeks, with full response requiring 6–12 months.

---

## ♿ Accessibility & Standards

- **WCAG 2.2 AA compliant**: High contrast typography, keyboard-navigable tabs and carousels, visible focus rings.
- **Accessible Video Player**: Video modals feature transcripts, closed-caption indicators, and no autoplay.
- **Privacy by Design**: Anonymous question collection requires zero login or personally identifiable information (PII).

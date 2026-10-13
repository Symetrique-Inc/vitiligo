# VITILIGO HUB — See Beyond the Skin
> **A Symetrique Initiative**  
> *"Different skin. Same dreams."*  
> *Clear information. Expert insights. Practical support.*

Vitiligo Hub is a calm, trustworthy, science-backed digital platform built to serve people living with vitiligo, their families, and healthcare professionals. The website strictly adheres to:
- **DOC A**: *"Symetrique Vitiligo Website — Content & Navigation Spec"* (authoritative build specification)
- **DOC B**: *"Vitiligo Hub — Website Content"* (full page copy)

---

## 🧭 Site Map & Canonical Routes

| Route | Page | Source & Scope |
|---|---|---|
| `/` | **Home (P01-HOME)** | DOC A: Hero, 4 "How can we help you today?" audience tiles overlapping hero, About Symetrique (3 paragraphs, 3 feature cards, Data Promise callout, CTA band). |
| `/about` | **About Vitiligo Hub (P04-ABOUT)** | DOC B: Our Mission, What We Do, Why Vitiligo, Our Values (4 cards), Partner with Us contact form (`#partner`). |
| `/understand-vitiligo` | **Understand Vitiligo (P03-UV)** | DOC A: Half-height hero, 5-tile grid, "What is vitiligo?" text block & info callout, 2-panel SVG/HTML skin biology infographic with accessible tooltips, 3-item comorbidity accordion (Sun, Autoimmune/Thyroid, Hearing), Lancet 2024 Key Numbers (28.5M) with interactive map, Next steps CTA band. |
| `/understand-vitiligo/stigma-and-misconceptions` | **Stigma & Misconceptions (P03-STIGMA)** | DOC A: Breadcrumb, sticky in-page tab bar (`#p03-s02`–`#p03-s06`), 10-card Myths vs Facts carousel, Why Stigma Happens (6 question chips + 3 region cards + closing statement), "Your skin, your choice" quote band, Why see a dermatologist (4 numbered cards 01–04) + Your Care Team block directly below in `#p03-s05`, Real stories video row. |
| `/living-with-vitiligo` | **My Life & Daily Living (P05-LIFE)** | DOC B: Everyday life beyond the skin, Emotional Wellbeing, Relationships and Family, Work and Social Life, Sun Protection, Skincare & Cosmetic Options, `#stories` anchor. |
| `/treatment-and-care` | **Treatment & Care (P06-CARE)** | DOC B: Treatment Overview, Topical Treatments (Corticosteroids, Calcineurin inhibitors, Ruxolitinib), Light Therapy (Narrowband UVB, Excimer), Surgical Options (Grafting, Melanocyte transplant), Emerging Treatments, Country approval note, Interactive & printable Doctor Checklist, Find a Doctor CTA. |
| `/expert-insights` | **Expert Insights (P07-EXPERT)** | DOC B: Two Perspectives (Doctor blue card, Patient pink card), What's New in Vitiligo Research (4 cards), Patient Journeys (coming soon), Anonymous "Ask the Expert" Q&A form (`#ask`). |
| `/resources` | **Resources & Support (P08-SUPPORT)** | DOC B: "You are not alone", Mental Health Support (3 items + neutral helpline guidance), Community features (coming soon), What to Look For in a Dermatologist (4 criteria). |
| `/find-a-doctor` | **Find a Dermatologist (P09-DOCTOR)** | DOC A: Verified specialist directory search (city or PIN code) in clearly marked coming soon state. |
| `/share` | **Share Your Experience** | DOC A & B: Patient-reported outcome initiative, strict 4-bullet Data Promise, DPDP Act 2023 compliance notice. |
| `/privacy` | **Privacy Policy** | DOC A: Legal placeholder with data governance commitments. |
| `/terms` | **Terms of Use** | DOC A: Educational use and platform terms. |
| `/contact` | **Contact Us** | DOC A: Symetrique contact channels and feedback form. |

Legacy aliases (`/understand`, `/understand/stigma`, `/my-life`, `/treatment`) automatically redirect permanently to the canonical routes.

---

## 🎨 Design System

- **Navy (`#0B1F6B`)**: Logo, H1/H2 headlines, primary buttons, footer headings.
- **Royal Blue (`#1D5FE0`)**: Links, focus rings, "Understand Vitiligo" accent, active nav indicator.
- **Violet / Lavender (`#7C5CE0`)**: Secondary buttons, "My Life & Daily Living" accent.
- **Teal (`#1FA37A`)**: Positive verdicts, "Treatment & Care" accent, "Find a Doctor" button.
- **Coral (`#F2884B`)**: Warm accent, "Expert Insights" accent.
- **Rose (`#E8456B`)**: Myth "✕ Not true" state, stigma accents, patient perspective.
- **Pastel Tints**: Blue (`#EAF2FF`), lilac (`#EFEAFF`), mint (`#E3F6EF`), peach (`#FFEDE3`), pink (`#FDE8EE`).
- **Typography**: 
  - Headlines: **Playfair Display** (editorial serif)
  - Body & UI: **Inter** (accessible, readable sans-serif)
  - Signature Script: **Caveat** (*"Different skin. Same dreams."*)

---

## 🌐 Global Elements (G1–G6)

1. **G1 Header**: Sticky navigation with 3-petal lotus/leaf mark, wordmark "VITILIGO HUB", subline "See Beyond the Skin", 7 nav items in exact order, client-side Search modal, English/Hindi language switcher, and navy "Find a Doctor" pill button.
2. **G2 Footer**: 3 columns (About blurb, Explore links, Symetrique links) and copyright bar (`© 2026 Symetrique. All rights reserved.`).
3. **G3 Medical Disclaimer**: Prominent in the footer on every page, always visible, never collapsed:
   > *"The information on Vitiligo Hub is for general education only. It is not medical advice and does not replace a consultation with a qualified doctor. Always speak to a dermatologist or your healthcare professional about your own skin and treatment. If you have urgent health concerns, contact a doctor or your local emergency service."*
4. **G4 Content Review Stamp**: Above the footer on every content page, driven by CMS fields in `content/siteContent.ts`:
   > `Medically reviewed by: [Reviewer name, qualification] · Last reviewed: [DD Month YYYY] · Next review: [DD Month YYYY]`
5. **G5 Collapsible Sources Block**: Expandable sources list at the end of each page, with inline pill tags and `rel="noopener noreferrer"` links.
6. **G6 Cookie Banner**: Exact text, persistent consent storage via `localStorage`, 3 choices: *[Accept all]*, *[Essential only]*, *[Settings]*.

---

## 🔬 Conflict Resolutions & Source of Truth

- **10 Myth Cards**: We implement DOC A's 10 numbered myth cards (front: quote + red ✕ + "Not true." + one-line fact; back: full explanation + source tag), not DOC B's shorter 8.
- **Authoritative Key Numbers**: We strictly use the **Lancet Public Health 2024 systematic review** (0.36% lifetime prevalence, ~28.5 million people; adults 0.67% / ~37.1M; children 0.24% / ~5.8M; South Asia & Central Europe ~0.52%). `"70M+"` is completely eradicated.
- **Cultural Beliefs**: DOC A's softer wording is displayed on the 3 region cards (South Asia, Africa, Middle East), with DOC B's fuller paragraphs available in an expandable accordion.
- **Dermatologist & Care Team**: DOC A's 4 numbered cards (01–04) appear with the "Source: AAD" line. Directly below inside the same section (`#p03-s05`), DOC B's "Your Care Team" is rendered with all 4 multidisciplinary roles.
- **Understand Vitiligo Tiles**: 5 tiles rendered in a 2-column grid where the 5th tile spans gracefully.

---

## 🛠️ How to Edit Copy & CMS Fields

All text lives in typed content files—**never hardcoded in components**:

### 1. Editing the Reviewer & Review Dates (G4 Stamp)
Open [`content/siteContent.ts`](content/siteContent.ts):
```typescript
export const siteReviewStamp: ContentReviewStamp = {
  reviewerName: 'Dr. Jane Doe, MD, FAAD',
  qualification: 'Consultant Dermatologist & Pigmentary Disorder Specialist',
  lastReviewed: '14 October 2026',
  nextReview: '14 October 2027',
};
```

### 2. Editing Sources (G5 Block)
In [`content/siteContent.ts`](content/siteContent.ts), update `commonSources.p03` with updated URLs or citations.

### 3. Editing Myths, Cultural Beliefs, or Page Copy
In [`content/siteContent.ts`](content/siteContent.ts):
- `tenMyths`: Modify myth questions, verdicts, explanations, and icons.
- `regionCards`: Update cultural beliefs copy.
- `treatmentContent`: Update therapies, phototherapy guidelines, and doctor checklist questions.
- `expertInsightsContent`: Update perspectives, research briefs, and Q&A settings.
- `resourcesContent`: Update mental health support resources and dermatologist criteria.

### 4. Swapping Photography & Visuals
All consented imagery is located in `public/images/`:
- `public/images/hero-panoramic.jpg` (Home hero)
- `public/images/card-understand.jpg` (Understand Vitiligo hero)
- `public/images/card-mylife.jpg` (Living with Vitiligo hero)
- `public/images/card-treatment.jpg` (Treatment & Care hero)
- `public/images/card-expert.jpg` (Expert Insights hero)
- `public/images/card-resources.jpg` (Resources hero)

Replace any image with the new file keeping the same name, or update the `src` attribute in the respective page file.

---

## 💻 Development & Deployment Commands

### Install Dependencies
```bash
npm install
```

### Run Locally (Dev Server)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type-Check & Build Production Bundle
```bash
npm run build
```

### Static Export Build
To generate a static export (`out/` directory):
```bash
npm run build
```
(Configurable with `output: 'export'` in `next.config.ts`).

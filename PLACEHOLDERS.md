# VITILIGO HUB — Placeholders & Open Items Registry

This document catalogues every item marked as a `[PLACEHOLDER ...]` or `[SOURCE LINKS TO BE ADDED]` across the Vitiligo Hub platform, in accordance with **DOC A ("Symetrique Vitiligo Website — Content & Navigation Spec")** and **DOC B ("Vitiligo Hub — Website Content")**.

---

## 1. CMS & Medical Review Placeholders (G4 Content Review Stamp)
Every content page features a medical review stamp driven by typed CMS data fields (`content/siteContent.ts`), not hard-coded in components:

- **Reviewer Name**: `[Reviewer name, qualification]`
- **Last Reviewed Date**: `[DD Month YYYY]`
- **Next Review Date**: `[DD Month YYYY]`

*Action required from Symetrique*: Designate the board-certified medical reviewer and set initial validation dates prior to public release.

---

## 2. Pending Medical & Scientific Source Links (G5 Sources Block)
The platform links to verified sources (AAD clinical guidelines, Lancet Public Health 2024 systematic review). The following source citations require final publication URLs:

1. **IADVL Public Information on Vitiligo**:
   - `[LINK TO BE ADDED]` — Indian Association of Dermatologists, Venereologists and Leprologists patient education portal URL.
2. **Cultural Beliefs Studies (P03-S03)**:
   - `[SOURCE LINKS TO BE ADDED — deck cites a DOI and two PubMed Central papers]` — Anthological and clinical studies covering beliefs in South Asia, Africa, and the Middle East.

---

## 3. Media & Video Placeholders
Per DOC A specifications, only consented, authentic photography and video are used. Stock photography and generative AI altering vitiligo on faces are strictly forbidden.

1. **Patient Story Videos (P03-S06 & /living-with-vitiligo#stories)**:
   - `[PLACEHOLDER: 3 consented patient videos with captions in English and Hindi]`
2. **Hero Panoramic Group Photo (P01-S01)**:
   - Alt text: *"A group of people of different ages and skin tones, some with vitiligo, standing together with a doctor."*
   - Current state: Dev-mode illustrative high-fidelity visual slot with consented photography notice.
3. **Understand Vitiligo Hero Close-up (P02-S01)**:
   - Alt text: *"Close-up of a person with vitiligo patches on the cheek."*
4. **Section Landing Hero Images**:
   - `/living-with-vitiligo`: Young man smiling outdoors.
   - `/treatment-and-care`: Caring hands in clinical examination.
   - `/expert-insights`: Doctor in clinical consultation.
   - `/resources`: Hands joined in support.

---

## 4. Feature & Programme Launch Placeholders

1. **Find a Doctor Directory (`/find-a-doctor`)**:
   - Search by city or PIN code is presented in coming-soon disabled state.
   - Symetrique is curating directory data with dermatology societies.
2. **Share Your Experience (`/share`)**:
   - Patient-reported outcome submission portal is staged.
   - Legal notice: `[Consent wording and data-sharing terms under review with Symetrique legal in accordance with India's Digital Personal Data Protection Act, 2023]`.
3. **Ask the Expert Anonymous Submission (`/expert-insights#ask`)**:
   - Front-end interactive form with 500-character limit and educational disclaimer.
   - `TODO`: Connect front-end submit handler to Symetrique secure API endpoint.
4. **Partner with Us (`/about#partner`)**:
   - Front-end form with consent checkbox.
   - `TODO`: Connect submit handler to Symetrique partnerships endpoint.
5. **Community Features (`/resources#community`)**:
   - Moderated peer community is staged as coming soon.
6. **Legal Pages (`/privacy`, `/terms`, `/contact`)**:
   - Explicit note: `[Content to be provided by Symetrique legal]`.

---

## 5. Internationalisation (i18n) & Translations
- **Locale scaffolding**: Configured for English (`en`, default) and Hindi (`hi`, हिन्दी).
- **Flag**: `[HI translation pending – medical review]`
- All UI strings and page copy are keyed in structured files (`/data/translations.json`, `/content/siteContent.ts`).
- English values are complete. Hindi keys are initialized with English fallbacks awaiting medical translation sign-off.

---

## 6. Open Questions for Symetrique (DOC A, Page 17)
The following 6 strategic items must be confirmed by the Symetrique leadership team before final production rollout:

1. [x] **Prevalence Figure Confirmed**: The deck mockup showed "70M+"; this build strictly implements the authoritative **Lancet Public Health 2024 systematic review** (0.36% lifetime prevalence, ~28.5 million; adults 0.67% / ~37.1M; children 0.24% / ~5.8M; South Asia & Central Europe ~0.52%). "70M+" has been completely eradicated.
2. [ ] **Add Source Links**: Finalize the DOI and two PubMed Central links for the cultural-beliefs cards (P03-S03) and the IADVL public portal reference.
3. [ ] **Medical Reviewer Name & Date**: Provide the board-certified reviewer name and first official review date for the G4 stamp.
4. [ ] **Legal Compliance Review**: Confirm consent wording and data-sharing terms with legal counsel in line with India's **Digital Personal Data Protection Act, 2023** prior to launching `/share`.
5. [ ] **Brand Name Confirmation**: Confirm exact branding: `"Vitiligo Hub by Symetrique"` (used across the platform) or an alternate variation.
6. [ ] **Medical Hindi Translation**: Provide Hindi translations certified by a professional medical translator for all educational and clinical terms.

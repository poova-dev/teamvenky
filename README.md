# TeamVenky — Elite Personal Fitness Coaching

Official multi-page website for **TeamVenky (Coach Venkatesh K)** based in **Coimbatore, Tamil Nadu**.

Built with a high-contrast luxury athletic aesthetic, real client transformation showcase, and direct WhatsApp coaching consultation.

## 🚀 Features

- **Mobile-First 5-Second Conversion Flow**: Engineered for visitors arriving from Instagram (`@venkateshkofficial`) to immediately understand the offering, view social proof, and book a consultation within 5 seconds.
- **Interactive Before/After Sliders**: Draggable comparison slider showing real client transformations with touch-optimized controls.
- **Branded Consultation Assessment**: Full Google Form replacement with qualification questionnaire and 1-click WhatsApp enquiry generator.
- **Multi-Page Architecture**:
  - `index.html`: Main landing page with Hero, Trust metrics, Coach profile, 6 Program blocks, interactive Before/After preview, Consultation quick form, and Instagram social wall.
  - `about.html`: Coach Venkatesh K's background, natural bodybuilding stage philosophy, and Coimbatore coaching standards.
  - `programs.html`: Dedicated deep dives for Fat Loss, Muscle Hypertrophy, Natural Bodybuilding & Contest Prep, Total Body Recomposition, Online Elite Coaching, and Coimbatore Home Personal Training.
  - `transformations.html`: Comprehensive client results gallery and case studies.
  - `consultation.html`: Full coaching assessment questionnaire with instant WhatsApp message formatting.
- **Sticky Mobile Action Bar**: Dual-action `[ WhatsApp ]` and `[ Start Coaching ]` bar anchored at the bottom with iOS safe-area support across all pages.
- **Luxury Monochrome Aesthetic**: High-contrast black, titanium carbon, and crisp white styling with subtle emerald WhatsApp conversion highlights.

## 🛠 Tech Stack

- **HTML5 & Semantic Structure**
- **Vanilla CSS (Design System)**: Custom variables, glassmorphism, responsive grid, and touch-action pan-y
- **Tailwind CSS (Utility Framework)**
- **JavaScript (ES6+)**: Touch/mouse drag sliders, FAQ accordions, animated counters, mobile drawer, and WhatsApp URL encoder
- **Google Fonts**: *Barlow Condensed* (Athletic Display) + *Manrope* (High-Legibility Body)

## 📁 Directory Structure

```
├── index.html              # Main landing page
├── about.html              # Coach bio & philosophy
├── programs.html           # 6 core fitness programs
├── transformations.html    # Client results & case studies
├── consultation.html       # Coaching assessment form
├── assets/
│   ├── css/style.css       # Design tokens & master stylesheet
│   ├── js/main.js          # Interactive features & form logic
│   └── images/             # Optimized coach & transformation photography
└── README.md
```

## 🌐 Local Setup

Clone the repository and launch any local static server:

```bash
git clone https://github.com/poova-dev/teamvenky.git
cd teamvenky
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your web browser.

---

© 2026 TeamVenky. All rights reserved. Coimbatore, Tamil Nadu, India.

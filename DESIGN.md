# Design System Specification: The Architectural Curator



## 1. Overview & Creative North Star

**The Creative North Star: "The Architectural Curator"**



Most ERP systems fail by becoming "spreadsheets with buttons"—cluttered, rigid, and exhausting. This design system rejects the grid-prison. We treat data as an architectural element. Our goal is to move from "Managing Data" to "Curating Insights."



By leveraging **The Architectural Curator** philosophy, we utilize intentional white space, tonal layering, and high-contrast editorial typography to create a sense of calm authority. We break the "template" look through asymmetric information density—where critical KPIs breathe in expansive layouts while dense data tables are tucked into sophisticated, recessed containers. This is not just a tool; it is a high-performance environment.



---



## 2. Colors & Tonal Depth

We move beyond lines to define space. Our palette is built on a foundation of "Cool Neutrals" and "Corporate Depth."



### The "No-Line" Rule

**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning.

Structure is defined through background shifts. A `surface-container-low` (`#eff4f7`) sidebar sitting against a `surface` (`#f7fafc`) main canvas provides all the separation the eye needs without the visual noise of a stroke.



### Surface Hierarchy & Nesting

Treat the UI as a series of physical layers. Use the surface-container tiers to define importance:

* **Level 0 (Canvas):** `surface` (`#f7fafc`) - The base of the entire application.

* **Level 1 (Recessed):** `surface-container-low` (`#eff4f7`) - For secondary navigation or background utility areas.

* **Level 2 (Active Cards):** `surface-container-lowest` (`#ffffff`) - Reserved for primary content cards and data tables to make them "pop" against the canvas.

* **Level 3 (Elevation):** `surface-container-high` (`#dfeaef`) - For hover states or active selection indicators.



### The "Glass & Gradient" Rule

To inject "soul" into the ERP:

* **Glassmorphism:** Use for floating modals or global search overlays. Apply `surface` color at 70% opacity with a `backdrop-filter: blur(12px)`.

* **Signature Textures:** Main CTAs or Hero KPI cards should use a subtle linear gradient from `primary` (`#455f88`) to `primary-dim` (`#39537c`) at a 135-degree angle. This adds a "weighted" premium feel that flat hex codes lack.



---



## 3. Typography: Editorial Authority

We utilize a dual-typeface system to balance high-end brand feel with extreme data legibility.



* **Display & Headlines (Manrope):** Chosen for its geometric, modern structure. Used for page titles (`headline-lg`) and KPI values (`display-sm`). It signals confidence and modernity.

* **Body & Data (Inter):** The workhorse. Used for all data tables, labels, and paragraph text. Inter’s tall x-height ensures that even at `body-sm` (`0.75rem`), financial figures remain crystal clear.



**The Hierarchy Rule:**

Large `display-md` headers should always sit near `label-md` metadata. This "Big/Small" contrast is a hallmark of editorial design, guiding the user's eye to the most important figure first.



---



## 4. Elevation & Depth: The Layering Principle

Hierarchy is achieved through **Tonal Layering**, not structural scaffolding.



* **The Stacking Principle:** To create a "lifted" card, do not reach for a shadow first. Place a `surface-container-lowest` card on a `surface-container-low` section. The subtle shift in hex code creates a natural, soft lift.

* **Ambient Shadows:** Use only for "Floating" elements (e.g., Popovers). Shadows must be: `box-shadow: 0 12px 32px -4px rgba(40, 52, 57, 0.08)`. Note the use of `on-surface` (`#283439`) as the shadow tint rather than pure black.

* **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` (`#a7b4ba`) at **15% opacity**. It should be felt, not seen.



---



## 5. Components



### Complex Data Tables

* **Container:** No outer border. Use `surface-container-lowest` as the table background.

* **Headers:** `label-md` in `on-surface-variant`, uppercase with 0.05em letter spacing.

* **Rows:** No horizontal dividers. Use a `2.5` (`0.5rem`) vertical spacing between rows and a subtle `surface-container-low` background on hover.

* **Alignment:** Numeric data is always right-aligned using tabular-nums CSS.



### KPI Cards

* **Style:** `surface-container-lowest` background.

* **Accents:** A 4px vertical "accent bar" on the left using `primary` or `tertiary` to categorize the data type (e.g., Financial vs. Operational).

* **Typography:** The primary metric uses `display-sm` (Manrope).



### Action Buttons

* **Primary:** `primary` (`#455f88`) background with `on-primary` text. Radius: `md` (`0.375rem`).

* **Secondary (The Ghost):** No background, no border. Use `primary` text with a `surface-container-high` background only on hover.

* **Tertiary:** For low-priority actions, use `on-surface-variant` text.



### Sidebar Navigation

* **Background:** `surface-container-low`.

* **Active State:** A "pill" shape using `primary-container` background and `on-primary-container` text. Do not use an indicator line; use the shape to "cradle" the label.



---



## 6. Do’s and Don'ts



### Do

* **Do** use `20` (`4.5rem`) or `24` (`5.5rem`) spacing for page margins to create a "gallery" feel.

* **Do** use `tertiary` (`#5d5d78`) for "Utility" data—information that is necessary but not the primary focus of the page.

* **Do** leverage `surface-bright` for momentary "flash" animations when data updates.



### Don’t

* **Don't** use 100% black text. Always use `on-surface` (`#283439`) to maintain a premium, ink-on-paper feel.

* **Don't** use standard "Alert Red" for everything. Use the `error` (`#9f403d`) and `error-container` tokens for a more sophisticated, "muted urgency."

* **Don't** use dividers to separate list items. Use the spacing scale (e.g., `spacing-3`) to create logical groupings.
# Design System Strategy: Industrial Precision

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"Architectural Brutalism."** This concept moves beyond standard construction motifs to embrace the raw power, structural integrity, and high-tech precision of modern engineering. It is a system built on the philosophy that "strength is in the details."

We depart from the standard digital template by utilizing **intentional asymmetry** and **overlapping architectural layers.** The UI should feel like a high-end editorial blueprint: expansive, authoritative, and meticulously organized. By leveraging sharp 0px corners, we emphasize a "no-compromise" reliability, while grid-patterned overlays and high-contrast typography scales create a signature high-impact experience that feels both massive and precise.

---

## 2. Colors
Our palette is rooted in the "High-Vis" safety of the job site, refined for a premium digital environment.

*   **Primary (#705d00) & Primary Container (#FFD700):** Our "Construction Yellow." Used sparingly to draw the eye to critical actions and authoritative accents.
*   **Neutral Hierarchy (Deep Charcoals & Crisp Whites):** We use `inverse_surface` (#313030) for heavy, industrial backgrounds and `surface` (#fcf9f8) for expansive, "blueprint" white space.

### The "No-Line" Rule
Standard 1px borders are prohibited for sectioning. Structural definition must be achieved through **background color shifts**. For example, a `surface_container_low` section should transition directly into a `surface` section. This creates a cleaner, more modern editorial flow that feels built rather than drawn.

### Surface Hierarchy & Nesting
Treat the UI as a physical assembly of materials.
*   **Base:** `surface` (#fcf9f8).
*   **Nested Elements:** Use `surface_container` tiers to create depth. A project card using `surface_container_highest` sitting on a `surface_container_low` section provides natural, structural hierarchy without the clutter of lines.

### Signature Textures & Gradients
To avoid a "flat" look, utilize a subtle **Diagonal Hazard Gradient** (transitioning from `primary` to `primary_container` at a 45-degree angle) for high-impact CTA buttons or hero headline underlays. This mimics industrial safety markings while adding visual "soul."

---

## 3. Typography
Typography is our "Steel Frame"—it provides the structure for the entire experience.

*   **Display & Headline (Space Grotesk):** An architectural sans-serif with a technical, high-tech edge. Use `display-lg` (3.5rem) for hero statements to convey massive scale and authority.
*   **Body & Titles (Work Sans):** Chosen for its legibility and clean, professional personality. It balances the "loudness" of the display type with functional clarity.
*   **Editorial Scale:** Use extreme contrast between `display-lg` and `label-sm`. Large headlines should command the page, while labels act as technical annotations, reinforcing the "blueprint" aesthetic.

---

## 4. Elevation & Depth
In this design system, depth is a matter of **Tonal Layering**, not decorative shadows.

*   **The Layering Principle:** Achieve "lift" by stacking light on dark or dark on light. A `surface_container_lowest` card placed on a `surface_dim` background creates a natural elevation that feels integrated into the architecture of the site.
*   **Ambient Shadows:** Where floating elements (like Modals) are required, use a high-dispersion shadow: `0px 20px 40px rgba(28, 27, 27, 0.06)`. This mimics soft, ambient site lighting rather than a harsh digital drop shadow.
*   **The "Ghost Border" Fallback:** If a container requires a boundary (e.g., on a complex photograph), use the `outline_variant` token at **15% opacity**. This creates a "hairline" feel that suggests precision without adding weight.
*   **Glassmorphism:** Use `surface_container_highest` at 80% opacity with a `20px` backdrop-blur for navigation bars. This allows the high-quality photography to bleed through, maintaining a sense of space and environment.

---

## 5. Components

### Buttons
*   **Primary:** Sharp edges (0px radius). Background: `primary_container` (#FFD700). Text: `on_primary_container`. Hover state should involve a subtle shift to the diagonal hazard gradient.
*   **Secondary:** Sharp edges. `outline` (#7e775f) "Ghost Border" with `on_surface` text.

### Inputs & Fields
*   **Architecture:** Use `surface_container_low` for the input fill. No bottom border; instead, use a high-contrast label in `label-md` uppercase to act as the "structural header" for the field.

### Cards & Lists
*   **The Divider Ban:** Vertical white space and background shifts are the only permitted separators.
*   **Project Cards:** Large, full-bleed imagery using `surface_container_highest` as the base. Typography should overlap the image in a "blueprint label" style.

### Industrial Accents (New)
*   **The Progress Gauge:** For project milestones, use a heavy, 8px stroke weight using the `primary` color, contrasting against a `surface_variant` track.
*   **Grid Overlays:** Apply a subtle 40px dot-grid or line-grid pattern to `surface_dim` sections to reinforce the feeling of a drafting table or technical plan.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Massive Photography:** Images should feel immersive. Crop them to emphasize the scale and texture of concrete, steel, and glass.
*   **Embrace White Space:** Use the Spacing Scale generously. High-end design requires room to breathe; do not crowd the "construction site."
*   **Align to the Grid:** Every element must feel like it was placed with a laser level. Asymmetry is intentional, but alignment is absolute.

### Don’t:
*   **Don't Round Corners:** 0px radius is the law. Any rounding breaks the "Industrial Precision" aesthetic.
*   **Don't Use Generic Icons:** Icons should be thick-stroked and technical. Avoid "friendly" or "bubbly" iconography.
*   **Don't Use Pure Black:** Use `inverse_surface` (#313030) for dark backgrounds. It feels more like expensive slate or treated steel than a default digital black.
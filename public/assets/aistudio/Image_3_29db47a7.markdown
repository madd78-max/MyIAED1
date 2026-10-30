---
name: Vibrant Customization System
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#434656'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#747688'
  outline-variant: '#c4c5d9'
  surface-tint: '#124af0'
  primary: '#0040e0'
  on-primary: '#ffffff'
  primary-container: '#2e5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#b8c3ff'
  secondary: '#a43b2f'
  on-secondary: '#ffffff'
  secondary-container: '#fd7d6c'
  on-secondary-container: '#71160f'
  tertiary: '#535555'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c6d6d'
  on-tertiary-container: '#f0f0f0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001356'
  on-primary-fixed-variant: '#0035be'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4a9'
  on-secondary-fixed: '#410000'
  on-secondary-fixed-variant: '#84241a'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-margin-mobile: 20px
  container-margin-desktop: 80px
  gutter: 24px
---

## Brand & Style
The brand personality is energetic, Mediterranean-inspired, and highly creative, reflecting the artistic spirit of Valencia. It targets Gen Z and Millennial creators who view their devices as extensions of their personal style. The UI should evoke an emotional response of "creative possibility"—making the user feel like an artist rather than a consumer.

The design style is **Modern / Vibrant**, blending clean, high-end layouts with playful, high-energy accents. We utilize a "Product-First" philosophy where the UI serves as a sophisticated frame for high-quality, high-saturation product photography. The aesthetic remains professional through disciplined spacing, but maintains playfulness through bouncy interaction patterns and a bold, summery color palette.

## Colors
The palette is anchored by **Electric Blue**, representing the Mediterranean Sea and modern technology. This is our primary action color. **Soft Coral** provides a warm, energetic contrast used for highlights, celebratory moments, and "Add to Cart" interactions. 

**Clean White** and a very light grey (`#F8F9FA`) form the foundation of the interface, ensuring the colorful custom cases remain the focal point. We use a deep charcoal (`#1A1C1E`) for typography to maintain high legibility and a premium feel without the harshness of pure black.

## Typography
We employ a dual-font strategy to balance character with utility. **Montserrat** is used for all headlines and display text, providing a geometric, bold, and confident voice that feels modern and architectural. 

**Inter** is used for all body text, UI labels, and inputs. Its high x-height and technical precision ensure maximum readability during the complex task of product customization. Tighten letter spacing on larger Montserrat headlines to create a "poster" aesthetic, while maintaining standard spacing for Inter to ensure accessibility.

## Layout & Spacing
The system uses a **Fluid Grid** model with a base-8 rhythmic scale. 

- **Mobile:** 4-column grid with 20px side margins. Content is mostly stacked vertically to allow large, immersive product previews.
- **Tablet/Desktop:** 12-column grid. We use an "Asymmetric Split" for the customization interface: the left 7 columns are dedicated to the live 3D product preview, while the right 5 columns contain the customization controls in a scrollable panel.

Vertical spacing should be generous (`lg` or `xl` units) between sections to give the design an editorial, high-end feel.

## Elevation & Depth
Depth is created using **Ambient Shadows** and **Tonal Layers**. We avoid heavy, black shadows in favor of shadows tinted with the Primary Electric Blue (e.g., `rgba(46, 91, 255, 0.08)`). 

- **Level 0 (Floor):** Light grey background (`#F8F9FA`).
- **Level 1 (Cards/Surface):** Pure white with a 1px soft border (`#E9EFFF`).
- **Level 2 (Floating/Active):** White surface with a medium, diffused blue-tinted shadow to indicate interactivity or modal priority.
- **Customization Layer:** The product preview uses a subtle inner shadow to simulate the physical depth of a phone case.

## Shapes
The shape language mirrors the physical product: the rounded corners of a modern smartphone. 

- **Buttons & Inputs:** Use the standard `rounded` (0.5rem) setting.
- **Product Cards:** Use `rounded-lg` (1rem) to create a friendly, approachable container.
- **Feature Banners:** Use `rounded-xl` (1.5rem) for large-scale layout elements.
- **Selection Rings:** Circular indicators for color pickers should always be 100% rounded (pills).

## Components
- **Buttons:** Primary buttons use a solid Electric Blue fill with white text. Secondary buttons use an Electric Blue outline with a subtle `accent_blue_light` hover state. "Add to Cart" uses the Soft Coral to draw immediate attention.
- **Customization Chips:** Small, pill-shaped toggles for selecting finishes (Matte, Glossy, Tough). Use a 2px Electric Blue border for the active state.
- **Live Preview Card:** A large, elevated container that holds the dynamic 3D render of the case. It should have "infinite" padding to feel like a photography studio.
- **Input Fields:** Minimalist style with a 1px border. On focus, the border thickens and transitions to Electric Blue with a soft outer glow.
- **The "Case Builder" Dock:** A sticky bottom navigation on mobile that allows quick switching between "Layout," "Text," "Images," and "Finish."
---
name: Specimen Register
description: A catalogue interface for editing and inspecting MongoDB product documents.
colors:
  ground: "#ebf7f8"
  surface: "#f6f9fa"
  pane: "#eff5f6"
  field: "#f8fafb"
  blue-black: "#182838"
  muted-ink: "#63717a"
  rule: "#aab5bc"
  strong-rule: "#7f8890"
  cobalt: "#1857f6"
  chartreuse: "#d7ef62"
  tag-blue: "#d7e2fa"
  error: "#a43535"
  out-of-stock: "#f0c0bd"
typography:
  display:
    fontFamily: 'Assistant, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "42px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: 'Assistant, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.018em"
  title:
    fontFamily: 'Assistant, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: 'Assistant, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.35
  label:
    fontFamily: 'Assistant, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.1
  micro-label:
    fontFamily: 'Assistant, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.035em"
  input:
    fontFamily: 'Assistant, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1
  status:
    fontFamily: 'Assistant, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1
  code:
    fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", monospace'
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.45
rounded:
  label: "3px"
  filter: "4px"
  chip: "4px"
  button: "5px"
  record: "5px"
  badge: "6px"
  field: "6px"
  code-box: "6px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#1046dc"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.blue-black}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0 22px"
    height: "48px"
  search-filter:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.blue-black}"
    typography: "{typography.body}"
    rounded: "{rounded.filter}"
    padding: "8px 16px"
    height: "48px"
  editor-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.blue-black}"
    typography: "{typography.input}"
    rounded: "{rounded.field}"
    padding: "0 14px"
    height: "40px"
  tag-chip:
    backgroundColor: "{colors.tag-blue}"
    textColor: "{colors.blue-black}"
    typography: "{typography.body}"
    rounded: "{rounded.chip}"
    padding: "2px 8px 2px 10px"
    height: "30px"
  stock-badge:
    backgroundColor: "{colors.chartreuse}"
    textColor: "#18242a"
    typography: "{typography.status}"
    rounded: "{rounded.badge}"
    padding: "3px 13px"
    size: "118px 33px"
  catalogue-record-selected:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.record}"
    padding: "7px 12px"
  document-preview:
    backgroundColor: "{colors.pane}"
    textColor: "#111820"
    typography: "{typography.code}"
    rounded: "{rounded.code-box}"
    padding: "14px 18px"
---

# Design System: Specimen Register

## Overview

**Creative North Star: "The Specimen Register"**

Records read as entries in a working register: aligned labels, blue-black rails, and a cool pale ground keep product, stock, and document structure easy to scan. Cobalt marks the selected record and primary actions; chartreuse carries the sample and stock signals. Assistant handles interface text, while monospaced text is reserved for editable Specs and the MongoDB preview.

On wide screens, the five-column index spans the page, then the editor and nested document preview sit side by side. At narrow widths, search controls stack, rows become labeled product cards, and the editor and preview follow vertically. Borders, fills, and restrained corner radii carry depth; surfaces stay flat.

**Key Characteristics:**
- Cool blue-gray canvas, blue-black ink, and precise rules.
- Cobalt for selection and primary action; chartreuse for sample and stock signals.
- Assistant interface type paired with monospaced Specs and JSON.
- Catalogue index and paired record editor/document view, with a stacked mobile form.

## Colors

The palette pairs cool blue-gray surfaces and blue-black ink with a clear cobalt action color, a chartreuse stock signal, and restrained state colors.

### Primary
- **Register Cobalt** (`{colors.cobalt}`): The primary button fill and selected product row/card make the current action and record immediately legible.

### Secondary
- **Chartreuse Signal** (`{colors.chartreuse}`): Marks the sample-data label and stock status badges. Keep this functional color out of primary actions and selection.

### Neutral
- **Cool Ground** (`{colors.ground}`): The page canvas and unselected catalogue rows.
- **Quiet Surface** (`{colors.surface}`): Secondary controls and flat input surfaces.
- **Blue-Black Ink** (`{colors.blue-black}`): Main text, masthead, table headings, pane headings, and field labels.
- **Pane Mist** (`{colors.pane}`): The paired editor and document pane background.
- **Field White** (`{colors.field}`): Editable controls.
- **Muted Ink** (`{colors.muted-ink}`): Supporting metadata and quiet empty-state text.
- **Fine Rule** (`{colors.rule}`) and **Strong Rule** (`{colors.strong-rule}`): Row dividers and component outlines.
- **Tag Blue** (`{colors.tag-blue}`): Removable tag chips.
- **Validation Red** (`{colors.error}`) and **Out-of-Stock Blush** (`{colors.out-of-stock}`): Form errors and the out-of-stock badge state.

**The Cobalt Selection Rule.** Cobalt carries the primary action and selected record. Chartreuse remains a sample or stock marker.

## Typography

**Display Font:** Assistant (with system UI and Segoe UI fallbacks)
**Body Font:** Assistant (with system UI and Segoe UI fallbacks)
**Label/Mono Font:** SFMono-Regular, Consolas, Liberation Mono, monospace

**Character:** Assistant gives the catalogue, controls, and stock values a sturdy, compact reading voice. Monospaced text makes the editable specs and live document visibly structured without changing the surrounding interface.

### Hierarchy
- **Display** (700, 42px, line-height 1): The page title; it scales down at narrower widths.
- **Headline** (700, 28px, line-height 1): The edit pane heading.
- **Title** (700, 26px, line-height 1): The MongoDB document pane heading and upper end of table column headings.
- **Body** (500, 18px, line-height 1.35): Default desktop interface copy, labels, and catalogue values; numeric values use tabular figures.
- **Label** (700, 18px, line-height 1.1): Field labels and compact table/control headings.
- **Micro-label** (700, 11px, letter-spacing 0.035em, uppercase): Mobile card metadata labels.
- **Input** (500, 20px, line-height 1): Single-line editor values.
- **Code** (500, 18px, line-height 1.45): The MongoDB preview and editable Specs object.

**The Structured Text Rule.** Use monospace for Specs and the JSON document; keep ordinary controls and catalogue values in Assistant.

## Layout

The wide layout is full-width with percentage page gutters and a five-column catalogue index above two equal record panes. The index keeps its header visible while its rows scroll, with a height sized for the header and about four records. Search and category controls share one horizontal row above it. The editor and document preview use a 16px gap and remain paired while space allows.

At 1080px and below, page gutters become fixed and form columns tighten. At 760px and below, search and category filters stack; the index becomes a vertical list of product cards with product/category, price/stock, and status groupings; the editor and JSON pane stack below the catalogue. At 360px and below, the masthead title and sample marker stack to keep the action visible.

The desktop interface uses generous, aligned control rows, while the mobile card grid preserves compact scanning. Repeated 8–24px spacing values form the practical rhythm; wider layout gaps and control padding are taken from the relevant component rather than expanded into a global scale.

**The Paired Record Rule.** Keep the catalogue, editable record, and matching JSON document in one continuous workflow; pair the latter two on wide screens and stack them after the mobile card list.

## Elevation & Depth

This is a flat, ruled interface with no box shadows. Depth comes from tonal surface changes, thin borders, dark header strips, and the cobalt selected row. Focus uses a visible outline, not an elevation effect.

**The Ruled Surface Rule.** Separate resting surfaces with fills and borders; do not add shadow as a default layer.

## Shapes

Corners stay gently rounded and consistent, from small label blocks to input fields (3–6px). Buttons and record containers use a restrained 5px radius; fields and code boxes use 6px. The search/filter control is a joined pair with opposing corners, not two floating pills. Borders define the table frame, record panes, and mobile product cards; no surface uses clipping or decorative geometry.

## Components

### Buttons
- **Character:** Confident, compact actions with a clear cobalt primary and a quiet outlined secondary.
- **Shape:** Gently rounded (5px); standard buttons are 48px high with 22px horizontal padding.
- **Primary:** Cobalt fill, white text, and a darker cobalt hover state. The masthead action is wider; form actions have their own minimum widths.
- **Secondary:** Pale surface, blue-black text, and a strong neutral outline.
- **Hover / Focus:** Hover shifts the fill; press scales slightly. Keyboard focus receives a 3px cobalt outline.
- **Mobile:** Form actions reduce to 44px high; the masthead action stays compact beside the title.

### Chips
- **Style:** Removable tags use a pale blue fill, blue-black text, and small rounded corners (4px).
- **State:** The × control is transparent at rest and gains a light-blue hover fill. Stock badges use chartreuse for in-stock and low-stock labels, with a blush fill for out-of-stock; every state also carries visible text.

### Cards / Containers
- **Corner Style:** Product cards and record panes use gently rounded corners (5px); the JSON well uses 6px.
- **Background:** Editor and document panes share a pale mist surface; mobile catalogue cards use the page ground unless selected.
- **Shadow Strategy:** No shadow; use borders and dark pane headings.
- **Border:** Strong neutral rule around panes and mobile product cards; the table uses horizontal rules and a framed scroll region on wide screens.
- **Internal Padding:** Pane content uses 18–20px; mobile cards use compact 7px by 12px padding.

### Inputs / Fields
- **Style:** Fields are pale, outlined controls (6px radius). Field labels are blue-black blocks aligned in a separate left column.
- **Focus:** A 3px cobalt-tinted outline and accent border indicate focus; filter focus applies to the joined control.
- **Structured Fields:** Specs is a vertically resizable monospace textarea; tags wrap as removable chips inside one field.

### Signature Component: Catalogue Index and Record Pair

The index is a five-column table on wide screens, with a sticky dark header, tabular numeric values, and cobalt fill for the selected product. At 760px and below, the same record fields become individual cards with small uppercase captions; the selected card keeps its cobalt fill. Preserve visible status text alongside its color.

### Signature Component: MongoDB Document Preview

The preview sits beside the editor under its own dark title strip on wide screens, then follows the editor on mobile. It uses a pale inset code well, preserved whitespace, tabular numerals, and the monospace stack so nested fields remain easy to scan. The live document follows edits in the paired form.

## Do's and Don'ts

### Do:
- **Do** use cobalt for the primary action and selected catalogue record, and chartreuse for sample/status marks.
- **Do** keep prices and stock aligned with tabular figures and preserve the five-column index on wide layouts.
- **Do** keep editable Specs and the MongoDB preview monospaced, with whitespace preserved.
- **Do** retain a visible text label for each stock state.
- **Do** keep the editor and document preview paired on wide screens and stacked after the catalogue on mobile.

### Don't:
- **Don't** use chartreuse as a general action or selection color.
- **Don't** add default shadows or decorative gradients; the system uses flat fills and rules.
- **Don't** reduce stock states to color alone.
- **Don't** turn the catalogue into a single-record feed; the product index remains part of the editing workflow.

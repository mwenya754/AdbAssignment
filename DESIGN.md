---
name: Specimen Register
description: A catalogue interface for editing and inspecting MongoDB product documents.
colors:
  ground: "#EEF2F1"
  surface: "#FFFFFF"
  pane: "#EEF2F1"
  field: "#FFFFFF"
  deep-ink: "#14211F"
  muted-ink: "#0F5E54"
  rule: "#B7C9C5"
  strong-rule: "#0F5E54"
  deep-teal: "#0F5E54"
  gold: "#F2B84B"
  mint: "#D6F3EC"
  error: "#C9211E"
  out-of-stock: "#C9211E"
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
    backgroundColor: "{colors.deep-teal}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.deep-spruce}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0 22px"
    height: "48px"
  search-filter:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.filter}"
    padding: "8px 16px"
    height: "48px"
  editor-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.input}"
    rounded: "{rounded.field}"
    padding: "0 14px"
    height: "40px"
  tag-chip:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.chip}"
    padding: "2px 8px 2px 10px"
    height: "30px"
  stock-badge:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.status}"
    rounded: "{rounded.badge}"
    padding: "3px 13px"
    size: "118px 33px"
  catalogue-record-selected:
    backgroundColor: "{colors.deep-teal}"
    textColor: "#ffffff"
    rounded: "{rounded.record}"
    padding: "7px 12px"
  document-preview:
    backgroundColor: "{colors.deep-spruce}"
    textColor: "{colors.mint}"
    typography: "{typography.code}"
    rounded: "{rounded.code-box}"
    padding: "14px 18px"
---

# Design System: Specimen Register

## Overview

**Creative North Star: "The Specimen Register"**

Records read as entries in a working register: aligned labels, deep-spruce rails, and a pale gray ground keep product, stock, and document structure easy to scan. The presentation's deep teal marks selected records and primary actions; warm gold carries sample and stock signals. Assistant handles interface text, while monospaced text is reserved for editable Specs and the MongoDB preview.

On wide screens, the five-column index spans the page, then the editor and nested document preview sit side by side. At narrow widths, search controls stack, rows become labeled product cards, and the editor and preview follow vertically. Borders, fills, and restrained corner radii carry depth; surfaces stay flat.

**Key Characteristics:**
- Pale gray canvas, deep spruce ink, mint accents, and precise rules.
- Deep teal for selection and primary action; warm gold for sample and stock signals.
- Assistant interface type paired with monospaced Specs and JSON.
- Catalogue index and paired record editor/document view, with a stacked mobile form.

## Colors

The presentation palette uses pale gray (`#EEF2F1`), dark ink (`#14211F`), deep spruce (`#12302B`), and slide teal (`#0F5E54`), supported by mint (`#D6F3EC`), warm gold (`#F2B84B`), and restrained error red (`#C9211E`).

### Primary
- **Presentation Teal** (`{colors.deep-teal}`): The primary button fill and selected product row/card make the current action and record immediately legible.

### Secondary
- **Warm Gold Signal** (`{colors.gold}`): Marks the sample-data label and stock status badges. Keep this functional color out of primary actions and selection.

### Neutral
- **Pale Ground** (`{colors.ground}`): The page canvas and unselected catalogue rows.
- **Quiet Surface** (`{colors.surface}`): Secondary controls and flat input surfaces.
- **Deep Ink** (`{colors.deep-ink}`): Main text and catalogue values.
- **Deep Spruce** (`#12302B`): Masthead, table headings, pane headings, and field labels.
- **Pane Mist** (`{colors.pane}`): The paired editor and document pane background.
- **Field White** (`{colors.field}`): Editable controls.
- **Teal Metadata** (`{colors.muted-ink}`): Supporting metadata and quiet empty-state text.
- **Fine Rule** (`{colors.rule}`) and **Strong Rule** (`{colors.strong-rule}`): Row dividers and component outlines.
- **Mint** (`{colors.mint}`): Removable tag chips and document-preview text.
- **Presentation Red** (`{colors.error}`): Form errors and the out-of-stock badge state.

**The Presentation Palette Rule.** Deep teal carries primary actions, focus, and selected records; warm gold remains a sample or stock marker.

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

This is a flat, ruled interface with no box shadows. Depth comes from tonal surface changes, thin borders, dark header strips, and the deep-teal selected row. Focus uses a visible outline, not an elevation effect.

**The Ruled Surface Rule.** Separate resting surfaces with fills and borders; do not add shadow as a default layer.

## Shapes

Corners stay gently rounded and consistent, from small label blocks to input fields (3–6px). Buttons and record containers use a restrained 5px radius; fields and code boxes use 6px. The search/filter control is a joined pair with opposing corners, not two floating pills. Borders define the table frame, record panes, and mobile product cards; no surface uses clipping or decorative geometry.

## Components

### Buttons
- **Character:** Confident, compact actions with a clear teal primary and a quiet outlined secondary.
- **Shape:** Gently rounded (5px); standard buttons are 48px high with 22px horizontal padding.
- **Primary:** Deep-teal fill, white text, and a darker spruce hover state. The masthead action is wider; form actions have their own minimum widths.
- **Secondary:** Pale surface, dark-ink text, and a strong teal outline.
- **Hover / Focus:** Hover shifts the fill; press scales slightly. Keyboard focus receives a 3px teal outline.
- **Mobile:** Form actions reduce to 44px high; the masthead action stays compact beside the title.

### Chips
- **Style:** Removable tags use a pale mint fill, deep-ink text, and small rounded corners (4px).
- **State:** The × control is transparent at rest and gains a mint hover fill. Stock badges use warm gold for in-stock and low-stock labels, with presentation red for out-of-stock; every state also carries visible text.

### Cards / Containers
- **Corner Style:** Product cards and record panes use gently rounded corners (5px); the JSON well uses 6px.
- **Background:** Editor and document panes share a pale mist surface; mobile catalogue cards use the page ground unless selected.
- **Shadow Strategy:** No shadow; use borders and dark pane headings.
- **Border:** Strong neutral rule around panes and mobile product cards; the table uses horizontal rules and a framed scroll region on wide screens.
- **Internal Padding:** Pane content uses 18–20px; mobile cards use compact 7px by 12px padding.

### Inputs / Fields
- **Style:** Fields are pale, outlined controls (6px radius). Field labels are deep-spruce blocks aligned in a separate left column.
- **Focus:** A 3px teal-tinted outline and accent border indicate focus; filter focus applies to the joined control.
- **Structured Fields:** Specs is a vertically resizable monospace textarea; tags wrap as removable chips inside one field.

### Signature Component: Catalogue Index and Record Pair

The index is a five-column table on wide screens, with a sticky spruce header, tabular numeric values, and deep-teal fill for the selected product. At 760px and below, the same record fields become individual cards with small uppercase captions; the selected card keeps its deep-teal fill. Preserve visible status text alongside its color.

### Signature Component: MongoDB Document Preview

The preview sits beside the editor under its own dark title strip on wide screens, then follows the editor on mobile. It uses a deep-spruce code surface with mint text, preserved whitespace, tabular numerals, and the monospace stack so nested fields remain easy to scan. The live document follows edits in the paired form.

## Do's and Don'ts

### Do:
- **Do** use presentation teal for the primary action and selected catalogue record, and warm gold for sample/status marks.
- **Do** keep prices and stock aligned with tabular figures and preserve the five-column index on wide layouts.
- **Do** keep editable Specs and the MongoDB preview monospaced, with whitespace preserved.
- **Do** retain a visible text label for each stock state.
- **Do** keep the editor and document preview paired on wide screens and stacked after the catalogue on mobile.

### Don't:
- **Don't** use warm gold as a general action or selection color.
- **Don't** add default shadows or decorative gradients; the system uses flat fills and rules.
- **Don't** reduce stock states to color alone.
- **Don't** turn the catalogue into a single-record feed; the product index remains part of the editing workflow.

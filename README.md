# VERDICT - High Fidelity Intelligence Platform

VERDICT is a premium financial intelligence web application that provides dual-lens analysis (Investment Banking + Strategic Consulting) for public companies.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (Recommended: Node 20 LTS)
- npm or yarn

### Installation

1.  **Install dependencies**:
    ```bash
    npm install
    # If you encounter errors with `napi-postinstall`, try:
    npm install --ignore-scripts
    # Then rebuild binaries if needed:
    npm rebuild
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🏗️ Project Structure

-   `/app`: Next.js App Router pages.
    -   `/`: Hero / Landing page.
    -   `/analyze`: Analysis Loading page with state simulation.
    -   `/memo/[id]`: Investment Committee Memo view.
    -   `/consulting/[id]`: Strategic Consulting Report view.
-   `/components`: Reusable UI components.
    -   `/ui`: Core design system primitives (Button, Card, Input).
    -   `/hero`, `/analyze`, `/memo`, `/consulting`: Feature-specific components.
-   `/lib`: Utilities and API stubs.

## 🎨 Design System

This project uses a custom Tailwind configuration to achieve a "High Fidelity Terminal" aesthetic:
-   **Colors**: Dark mode base (`#0a0a0a`) with high contrast borders and semantic accents (Blue for IB, Green for Consulting).
-   **Typography**: `Inter` for UI clarity, `JetBrains Mono` for data precision.
-   **Shape**: Strict `rounded-none` utility for sharp edges.

## 🔧 Troubleshooting

If you see `sh: next: command not found`, it usually means `npm install` didn't link the binaries correctly. Try running `npm install` again or use `npx next dev`.

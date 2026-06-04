// Doc navigation — pure data (no React, no component imports) so this file stays
// HMR-safe. The order here is the order shown in the sidebar. Each `id` maps to
// an .mdx article wired up in App.tsx.

export interface DocPage {
  id: string;
  title: string;
  /** One-line summary for the nav. */
  blurb: string;
}

export const DOCS: DocPage[] = [
  {
    id: 'getting-started',
    title: 'Getting started',
    blurb: 'What immediately.run is, and how to open and fork an app.',
  },
  {
    id: 'authoring',
    title: 'Authoring an app',
    blurb: 'The few rules that keep an app running on immediately.run.',
  },
  {
    id: 'capabilities',
    title: 'What apps can do',
    blurb: 'The capability model — what an app may and may not reach.',
  },
];

export const DEFAULT_DOC = DOCS[0].id;

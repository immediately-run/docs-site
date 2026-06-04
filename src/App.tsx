// Root component — immediately.run renders the default export of THIS file.
// Global CSS is imported here (not main.tsx). App owns which doc is active and
// maps each id to its .mdx article; the nav and prose are presentational.
import { useState } from 'react';
import './index.css';
import './App.css';
import DocNav from './components/DocNav';
import { DEFAULT_DOC } from './data/docs';
import GettingStarted from './content/getting-started.mdx';
import Authoring from './content/authoring.mdx';
import Capabilities from './content/capabilities.mdx';

// id -> article. Kept here (a component file) rather than in data/, so the data
// module stays free of component imports and HMR-safe.
const ARTICLES: Record<string, React.ComponentType> = {
  'getting-started': GettingStarted,
  authoring: Authoring,
  capabilities: Capabilities,
};

function App() {
  const [active, setActive] = useState(DEFAULT_DOC);
  const Article = ARTICLES[active] ?? GettingStarted;

  return (
    <div className="shell">
      <aside className="sidebar">
        <DocNav active={active} onSelect={setActive} />
      </aside>
      <main className="content">
        <article className="prose">
          <Article />
        </article>
      </main>
    </div>
  );
}

export default App;

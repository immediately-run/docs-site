// The docs sidebar nav. Presentational — the active id and the select handler
// are owned by App. One component per file.
import { DOCS } from '../data/docs';

function DocNav({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav className="docnav" aria-label="Documentation">
      <p className="docnav__brand">immediately.run docs</p>
      <ul className="docnav__list">
        {DOCS.map((doc) => (
          <li key={doc.id}>
            <button
              type="button"
              className={`docnav__link${doc.id === active ? ' is-active' : ''}`}
              aria-current={doc.id === active ? 'page' : undefined}
              onClick={() => onSelect(doc.id)}
            >
              <span className="docnav__title">{doc.title}</span>
              <span className="docnav__blurb">{doc.blurb}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DocNav;

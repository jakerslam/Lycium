import "./Sidebar.css";

export default function Sidebar({sections, currentSectionIndex, onSectionSelect}) {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Sections</h3>
      <div className="sidebar-list">
        {sections.map((section, idx) => (
          <div
            key={section.id}
            className={`sidebar-item ${idx == currentSectionIndex ? "active" : ""}`}
            onClick={() => onSectionSelect(idx)}
            >
            {section.title}
          </div>
        ))}
      </div>
    </aside>
  )
}
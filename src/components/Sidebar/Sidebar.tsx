import "./Sidebar.css";

export default function Sidebar({
  sections,
  currentSectionIndex, 
  onSectionSelect,
  currentCourseKey,
  onCourseChange,
  courses
}) {
  
  return (
    <aside className="sidebar">
      
      {/* Course selector at the top */}
      <div className="course-selector">
        <label className="course-label">
          Course:&nbsp;
          <select
            value={currentCourseKey}
            onChange={onCourseChange}
            className="course-select"
          >
            {Object.values(courses).map((course) => (
              <option key={course.key} value={course.key}>
                {course.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      
      {/* Section list below the course selector */}
      <h3 className="sidebar-title">Sections</h3>
      
      <div className="sidebar-section-list">
        {sections.map((section, idx) => {
          const showModuleHeader =
            idx === 0 || section.moduleIndex !== sections[idx - 1].moduleIndex;
          return (
            <div key={section.id}>
              {/* MODULE HEADER */}
              {showModuleHeader && (
                <div className="module-header">
                  Module {section.moduleIndex + 1}: {section.moduleTitle}
                </div>
              )}

              {/* SECTION ITEM */}
              <div
                className={`sidebar-item ${
                  idx === currentSectionIndex ? "active" : ""
                }`}
                onClick={() => onSectionSelect(idx)}
              >
                {section.displayNumber} {section.title}
              </div>
            </div>
          );
        })}
      </div>

      
    </aside>
  )
}
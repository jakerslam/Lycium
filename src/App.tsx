// App.jsx

import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentView from "./components/ContentView/ContentView";
import TopBar from "./components/TopBar/TopBar";
import aiCourse from "./data/introToAiCourse.json";
import webDevCourse from "./data/webDevCourse.json";
import pythonCourse from "./data/introToPythonCourse.json"


function App() {
  const courses = {
    ai: {
        key: "ai",
        title: aiCourse.title,
        data: aiCourse
      },
    web: {
        key: "web",
        title: webDevCourse.title,
        data: webDevCourse
      },
    python: {
      key: "python",
      title: pythonCourse.title,
      data: pythonCourse
    }
  }
  const [currentCourseKey, setCurrentCourseKey] = useState("ai");
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const selectedCourse = courses[currentCourseKey].data;
  const courseTitle = selectedCourse.title;
  
  const sections = selectedCourse.modules.flatMap((module, moduleIndex) =>
    module.sections.map((section, sectionIndex) => ({
      ...section,
      moduleIndex,                      
      moduleTitle: module.title,       
      displayNumber: `${moduleIndex + 1}.${sectionIndex + 1}`,
    }))
  );
  
  const currentSection = sections[currentSectionIndex];
  const moduleIndex = currentSection.moduleIndex;
  const moduleTitle = currentSection.moduleTitle;
  const isFirstSection = currentSectionIndex === 0;
  const isLastSection = currentSectionIndex === sections.length - 1;

  // Handler called when user clicks in the sidebar
  function handleSectionSelect(index) {
    setCurrentSectionIndex(index);
  }

  function handleNextSection() {
    setCurrentSectionIndex((prevIndex) => {
      if (prevIndex >= sections.length - 1) {
        return prevIndex;
      }
      return prevIndex + 1;
    }
    );
  }

  function handlePrevSection() {
    setCurrentSectionIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return prevIndex;
      }
      return prevIndex - 1;
    });
  }
  
  function handleCourseChange(evt) {
    const newKey = evt.target.value;
    setCurrentCourseKey(newKey);
    setCurrentSectionIndex(0); // We might save progress in the future but for now it resets to the first section
  }
  
  return (
  <div className="app-root">
    <header className="top-bar">
      <h1 className="top-bar-title">Lycium - Democratized learning</h1>
    </header>
    <div className="main-layout">
    <Sidebar
      sections={sections}
      currentSectionIndex={currentSectionIndex}
      onSectionSelect={handleSectionSelect}
      currentCourseKey={currentCourseKey}
      onCourseChange={handleCourseChange}
      courses={courses}
    />

    <ContentView 
      courseTitle={courseTitle} 
      section={currentSection}
      moduleTitle = {moduleTitle}
      moduleIndex = {moduleIndex}
      onNext={handleNextSection}
      onPrev={handlePrevSection}
      isFirstSection={isFirstSection}
      isLastSection={isLastSection}
      />
      </div>
  </div>
  );
}

export default App;


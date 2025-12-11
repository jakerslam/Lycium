// App.jsx

import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentView from "./components/ContentView/ContentView";

function App() {
  const sections = [
    {
      id: "s1",
      title: "What is AI?",
      content:
        "AI is about building systems that can perform tasks that typically require human intelligence."
    },
    {
      id: "s2",
      title: "History of AI",
      content:
        "Modern AI began in the 1950s with pioneers like Alan Turing, John McCarthy, and others."
    },
    {
      id: "s3",
      title: "Types of AI",
      content:
        "We can roughly categorize AI into narrow AI, general AI, and superintelligent AI."
    }
  ];

  const courseTitle = "Intro to Artificial Intelligence";

  // which section is currently selected
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const currentSection = sections[currentSectionIndex];

  // Handler called when user clicks in the sidebar
  function handleSectionSelect(index) {
    setCurrentSectionIndex(index);
  }

  return (
    <div className="app-root">
      <Sidebar
        sections={sections}
        currentSectionIndex={currentSectionIndex}
        onSectionSelect={handleSectionSelect}
      />

      <ContentView courseTitle={courseTitle} section={currentSection} />
    </div>
  );
}

export default App;


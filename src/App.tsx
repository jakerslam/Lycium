import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const sections = [
    {id: "s1", title: "What is AI?", content:"AI is a broad field of computer science that focuses on creating machines that can perform tasks that typically require human intelligence."},
    {id: "s2", title: "What is Machine Learning?", content:"Machine Learning is a subset of AI that involves training models on data to make predictions or decisions without being explicitly programmed."},
    {id: "s3", title: "What is Deep Learning?", content:"Deep Learning is a subset of Machine Learning that uses neural networks with many layers to model complex patterns in data."}
  ];
  const currentSection = sections[0];
  
  return (
      <div>

        <div className="app-root">
          <aside className="sidebar">
            <h3 className="sidebar-title">Sections</h3>
            <div className="sidebar-list">
              {sections.map((section) => (
                <div key={section.id} className="sidebar-item">
                  {section.title}
                </div>
              ))}
            </div>
          </aside>

          <main className="content-view">
            <h1 className="course-title">Intro to Artificial Intelligence</h1>
            <h2 className="section-title">{currentSection.title}</h2>
            <p className="section-content">
              {currentSection.content}
            </p>
          </main>
        </div>

      </div>
  )
}

export default App

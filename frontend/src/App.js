// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>LeetSensei</h1>
//       <button>Pseudocode</button>
//       <button>Solution</button>
//     </div>
//   );
// }

// export default App;


import './App.css';
import './script';
import React, { useState } from 'react';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`App ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar">
        <h1>LeetSensei</h1>
        <button onClick={toggleSidebar}>Toggle Menu</button>
        <ul>
          <li>Problems</li>
          <li>Explore</li>
          <li>Contests</li>
        </ul>
      </div>
      <main>
        {/* Content for your LeetCode app goes here */}
      </main>
    </div>
  );
}

export default App;

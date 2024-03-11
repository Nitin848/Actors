import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListActor from './Components/listActor';  
import ActorEditor from './Components/ActorEditor';  

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ListActor />} />
          <Route path="/actors" element={<ListActor />} />
          <Route path="/add-actor" element={<ActorEditor />} />
          <Route path="/update-actor/:actorId" element={<ActorEditor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import StopWatch from './apps/stopwatch/Stopwatch';
import MainContent from './components/main-content/Main-content';
import './App.css'
function App() {
  const [app, setApp] = useState("default");
  console.log(app);
  return (<>
  <div className="app">
     <Sidebar setApp={setApp} className='sidebar'></Sidebar>
     <MainContent className='main-content' app={app}></MainContent>
  </div>
  </>)
}

export default App

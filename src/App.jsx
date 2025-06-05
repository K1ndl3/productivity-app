import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/Main-content/Main-content';
import './App.css'
function App() {
  const [app, setApp] = useState("todo-list");
  console.log(app);
  return (<>
  <div className="app">
     <Sidebar setApp={setApp} className='sidebar'></Sidebar>
     <MainContent className='main-content' app={app}></MainContent>
  </div>
  </>)
}

export default App

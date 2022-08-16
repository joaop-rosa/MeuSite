import './App.css';
import { HomeScreen, AboutScreen, ProjectScreen } from './ui/screens';
import { HeaderNav } from './ui/components';
function App() {
  return (
    <>
      <HeaderNav />
      <HomeScreen id='home' />
      <AboutScreen id='about' />
      <ProjectScreen id='project' />
    </>
  )
}

export default App;

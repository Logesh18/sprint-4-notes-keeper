import './App.css';
import * as modules from 'src/Components/notescreator'
function App() {
  return (
    <div>
        <modules.Header/>
        <modules.CreateArea/>
        <modules.Footer/>
    </div>
  );
}

export default App;

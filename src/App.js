import './App.css';
import { useKeyboardListState } from './hooks/useKeyState';


function App() {
  const listOfKeyPresses = useKeyboardListState();
  return (
    <main>
      <ul>
        {listOfKeyPresses.map(keyPressString => <li>{keyPressString}</li>)}
      </ul>
    </main>
  );
}

export default App;

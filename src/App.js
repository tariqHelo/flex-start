import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          <ul class="flex-container row">
            <li class="flex-item">1</li>
            <li class="flex-item">2</li>
            <li class="flex-item">3</li>
            <li class="flex-item">4</li>
            <li class="flex-item">5</li>
          </ul>

          <ul class="flex-container row-reverse">
            <li class="flex-item">1</li>
            <li class="flex-item">2</li>
            <li class="flex-item">3</li>
            <li class="flex-item">4</li>
            <li class="flex-item">5</li>
          </ul>

          <ul class="flex-container column">
            <li class="flex-item">1</li>
            <li class="flex-item">2</li>
            <li class="flex-item">3</li>
            <li class="flex-item">4</li>
            <li class="flex-item">5</li>
          </ul>

          <ul class="flex-container column-reverse">
            <li class="flex-item">1</li>
            <li class="flex-item">2</li>
            <li class="flex-item">3</li>
            <li class="flex-item">4</li>
            <li class="flex-item">5</li>
          </ul>
        </div> 
  );
}

export default App;

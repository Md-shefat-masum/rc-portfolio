import { BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage.js'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <MainPage></MainPage>
        </BrowserRouter>
    </div>
  );
}

export default App;

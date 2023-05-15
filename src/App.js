import './App.css';
import MainLayout from "./MainLayout/MainLayout";
import savedCities from './components/saved_cities';
import {localStorItem, updateLocalStorItem} from './components/helper';

function App() {
  if (!(localStorage[localStorItem])) {
    updateLocalStorItem(savedCities);
  }
  return (
        < MainLayout />
  );
}

export default App;

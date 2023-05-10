import './App.css';
import MainLayout from "./MainLayout/MainLayout";
import savedCities from './SavedCities/saved_cities'

function App() {
  if (!(localStorage.getItem('savedCities'))) {
    localStorage.setItem('savedCities', JSON.stringify(savedCities))
    console.log('else')
  }
  return (
        < MainLayout />
  );
}

export default App;

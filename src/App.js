import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';

/*
An index.js file allow you to import its parent folder as a module. 
how? - when importing a module, js try to find index.js to import by default. 
a component exported by default in index.js can be thus imported easily, and given a meaningful, useful name too!
*/

function App() {
  return (
    <div>
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;

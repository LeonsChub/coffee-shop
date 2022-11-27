import FrontPage from './components/FrontPage';
import NavHeader from './components/NavHeader'

function App() {
  return (
    <div className="App">
      <NavHeader />
      <FrontPage></FrontPage>
      <div className="footer p-2 text-white" >©Leon Pavlenko 2022</div>
    </div>
  );
}

export default App;

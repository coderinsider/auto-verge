import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
   return (
      <>
      <header>
         <div className="container header-action">
            <div className="logo-panel">
                  <img src={logo} />
            </div>
            <div className="menu-panel">
               <nav>
                  <a href="/login">Login</a>
               </nav>
            </div>
         </div>
         
      </header>
      <section className="bodywrapper">
         <div className="App">
            <div className="wrapper">
               <h1>Application</h1>
               <Router>
                  <Routes>
                     <Route path="/login" exact element={<Login />}/>
                  </Routes>
               </Router>
            </div>
         </div>
      </section>
      <footer></footer>
      </>
   );
}

export default App;

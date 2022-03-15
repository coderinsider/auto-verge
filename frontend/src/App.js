import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
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
                  <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="/login">Login</a></li>
                     <li><a href="/register">Register</a></li>
                  </ul>
               </nav>
            </div>
         </div>
         
      </header>
      <section className="bodywrapper">
         <div className="App">
            <div className="wrapper">
               <Router>
                  <Routes>
                     <Route path="/login" exact element={<Login />}/>
                     <Route path="/register" exact element={<Register />}/>
                  </Routes>
               </Router>
            </div>
         </div>
      </section>
      <footer>
         <p style={{textAlign: 'center'}}>&copy; Copyright. 2022</p>
      </footer>
      </>
   );
}

export default App;

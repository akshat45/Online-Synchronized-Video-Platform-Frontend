import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from './Components/Loader';
import "./App.css";
import TermsOfService from './Components/TermsOfService';
import PrivacyPolicy from './Components/PrivacyPolicy';

const Login = lazy(() => import("./Components/Login"));
const Signup = lazy(() => import("./Components/Signup"));
const Room = lazy(() => import("./Components/Mainpage/Mainpage"));
const Home = lazy(() => import("./Components/Home"));

const Changepassword = lazy(() => import("./Components/Changepassword"));

function App() {
  return (
    <BrowserRouter>
     <Suspense fallback={<div className='App'><Loader margin/></div>}>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/toc" exact>
            <TermsOfService />
          </Route>
          <Route path="/privacy" exact>
            <PrivacyPolicy />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/changepassword" exact>
            <Changepassword/>
          </Route>
          <Route path="/room/:roomId">
            <Room />
          </Route>
        </Switch>
      </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

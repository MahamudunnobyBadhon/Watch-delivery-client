import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/HomePage/Home/Home';
import AuthProvider from './Components/context/AuthProvider';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import DashBoardPage from './Components/DashBoard/DashBoardPage/DashBoardPage';
import Explore from './Components/Explore/Explore';
import TakeOrder from './Components/TakeOrder/TakeOrder';
import NoPage from './Components/NoPage/NoPage';


function App() {
  return (
    <div>
     <AuthProvider>
     <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/explore">
            <Explore></Explore>
          </PrivateRoute>
          <PrivateRoute path="/servicedetails/:id">
            <TakeOrder></TakeOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <DashBoardPage></DashBoardPage>
          </PrivateRoute>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="*">
              <NoPage></NoPage>
            </Route>
        </Switch>
      </Router>
     </AuthProvider>
      
    </div>
  );
}

export default App;

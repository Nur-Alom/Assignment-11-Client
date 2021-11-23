import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MyOrders from './Pages/MyOrders/MyOrders';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import AddNewService from './Pages/AddNewService/AddNewService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home></Home>} />

            <Route path="/home" element={<Home></Home>} />

            <Route path="/login" element={<Login></Login>} />

            <Route path="/manageAllOrders" element={<PrivateRoute><ManageOrders /></PrivateRoute>} />

            <Route path="/myOrders" element={<PrivateRoute><MyOrders /></PrivateRoute>} />

            <Route path="/addService" element={<PrivateRoute><AddNewService /></PrivateRoute>} />

            <Route path="/pack/:packId" element={<PrivateRoute><PlaceOrder /></PrivateRoute>} />

            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;

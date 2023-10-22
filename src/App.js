import './App.css'
import Home from './screens/Home'
import Login from './screens/Login'
import{
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import { useContext } from 'react';
import MyOrder from './screens/MyOrder';
import Confirm from './screens/Confirm';
/*const mongo=require('mongoose');
const db='mongodb+srv://bikesh:root@cluster0.eve5qul.mongodb.net/khana?retryWrites=true&w=majority&appName=AtlasApp'
mongo.connect(db).then(()=>{
  console.log('connected');
}).catch((err)=>{
  console.log('not connected');
})*/
export default function App() {
  
  return (
    <CartProvider>
    <Router>
    <div>
      
      <Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/login' element={<Login/>}/>
  <Route exact path='/Signup' element={<Signup/>}/>
  <Route exact path='/myOrder' element={<MyOrder/>}/>
  <Route exact path='/orderplaced' element={<Confirm/>}/>
      </Routes>
      </div>
      </Router>
    </CartProvider>
  )
}


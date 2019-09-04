import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss";
//import './assets/css/light-bootstrap-dashboard-react.css'
import './assets/sass/lbd/mixins/_cards.scss'
 import "./assets/css/custom.css";
 import './assets/css/normalize.css'
 import './assets/css/pe-icon-7-stroke.css';
 //import './assets/css/skeleton.css';
 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee ,fas} from '@fortawesome/free-solid-svg-icons'
import { Provider } from 'react-redux';
import AdminLayout from "layouts/Admin.jsx";
import Reducer from './reducers/membershipReducer'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
library.add(fab, faCheckSquare, faCoffee,fas)
const store = createStore(Reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

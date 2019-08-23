import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//import './assets/css/light-bootstrap-dashboard-react.css'
//import './assets/css/light-bootstrap-dashboard-react.min.css'
  import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import './assets/css/prog-tracker.css'
import './assets/css/normalize.css'
//import './assets/csss/light-bootstrap-dashboard-react.css'
//import './assets/css/custom.css'
import './assets/css/skeleton.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee ,fas} from '@fortawesome/free-solid-svg-icons'
import AdminLayout from "layouts/Admin.jsx";
library.add(fab, faCheckSquare, faCoffee,fas)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

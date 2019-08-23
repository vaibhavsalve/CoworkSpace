import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import  Invoice from './views/Invoice/Invoice.js'
import Membershipform from './views/bootsrtapform/Membershipform'
import MemForm from './views/src/Memform'
import UsersProfile from './views/Users'
import Invoices from './views/Invoices'
import Addroom from './views/Roomform'

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/invoice",
    name: "Invoice",
    icon: "pe-7s-graph",
    component: Invoice,
    layout: "/admin"
  },
  {
    path: "/AddRooms",
    name: "AddRooms",
    icon: "pe-7s-graph",
    component: Addroom,
    layout: "/admin"
  },
  {
    path: "/Membership",
    name: "Membership",
    icon: "pe-7s-graph",
    component: MemForm,
    layout: "/admin"
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "pe-7s-user",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  {
    path: "/users",
    name: "Users details",
    icon: "pe-7s-user",
    component: UsersProfile,
    layout: "/admin"
  },
  // {
  //   path: "/invoices",
  //   name: "Invoices",
  //   icon: "pe-7s-user",
  //   component: Invoices,
  //   layout: "/admin"
  // },
  {
    path: "/table",
    name: "Rooms List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  
];

export default dashboardRoutes;

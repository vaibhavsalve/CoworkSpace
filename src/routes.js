import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import  Invoice from './views/Invoice/Invoice.js'
import MemForm from './views/src/Memform'
import UsersProfile from './views/Users'
import customersDetails from './views/Customers'
import BookingDetails from './views/Room_booking'
import MembershipDetails from './views/MembershipDetails'

import DeskDetails from './views/Desk_details'



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
    path: "/membership",
    name: "Membership",
    icon: "pe-7s-graph",
    component: MemForm,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users details",
    icon: "pe-7s-user",
    component: UsersProfile,
    layout: "/admin"
  },
  {
    path: "/MembershipDetails",
    name: "MembershipDetails",
    icon: "pe-7s-user",
    component: MembershipDetails,
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
  {
    path: "/desk",
    name: "Desk Details",
    icon: "pe-7s-note2",
    component: DeskDetails,
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
    path: "/customersDetails",
    name: "Customers List",
    icon: "pe-7s-note2",
    component: customersDetails,
    layout: "/admin"
  },
  {
    path: "/BookingDetails",
    name: "BookingDetails",
    icon: "pe-7s-note2",
    component: BookingDetails,
    layout: "/admin"
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  
 
  
];

export default dashboardRoutes;

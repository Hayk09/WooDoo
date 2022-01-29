  // import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import Homepage from "./HomePage";
import Login from "./Login"
import Register from "./Register/Register"
import ForgottenPassword from "./ForgottenPassword";
// import Profile from "./Profile"
// import About from "./About"
// import Contacts from "./Contacts"
// import Delivery from "./Delivery"
// import Like from "./Like"
// import LivingRoom from "./LivingRoom"
// import BedRoom from "./BedRoom"
// import Kitchen from "./Kitchen"
// import BathRoom from "./BathRoom"
// import Hallway from "./Hallway"
// import Other from "./Other"


const config = [
  {
    component: Homepage,
    path: "/",
    secure: false,
    layout: DefaultLayout,
    exact: true,
  },
  {
    component: Login,
    path: "/login",
    secure: false,
    layout:  DefaultLayout  ,
    exact:  false,
  },
  {
    component: Register,
    path: "/register",
    secure: false,
    layout: DefaultLayout,
    exact: false,
  },
  {
    component: ForgottenPassword,
    path: "/forgotpassword",
    secure: false,
    layout: DefaultLayout,
  },
  // {
  //   component: Profile,
  //   path: "/profile",
  //   secure: false,
  //   layout: DefaultLayout,
  //   exact: true,
  // },
  // {
  //   component: About,
  //   path: "/about",
  //   secure: false,
  //   layout: DefaultLayout,
  //   exact: true,
  // },
  // {
  //   component: Contacts,
  //   path: "/contacts",
  //   secure: false,
  //   layout: DefaultLayout,
  //   exact: true,
  // },
  // {
  //   component: Delivery,
  //   path: "/delivery",
  //   secure: false,
  //   layout: DefaultLayout,
  //   exact: true,
  // },
  // {
  //   component: Like,
  //   path: "/like",
  //   secure: false,
  //   layout: DefaultLayout,
  //   exact: true,
  // },
  // {
  //   component: LivingRoom,
  //   path: "/livingroom",
  //   secure: false,
  //   layout: DefaultLayout,
  //   exact: true,
  // },
  // {
  //   component: BedRoom,
  //   path: "/bedroom",
  //   secure: false,
  //   layout: DefaultLayout,
  //   exact: true,
  // },
  // {
  //   component: Kitchen,
  //   path: "/kitchen",
  //   secure: false,
  //   layout: DefaultLayout,
  //   exact: true,
  // },
  // {
  //   component: BathRoom,
  //   path: "/bathroom",
  //   secure: false,
  //   layout: DefaultLayout,
  //   exact: true,
  // },
  // {
  //   component: Hallway,
  //   path: "/hallway",
  //   secure: false,
  //   layout: DefaultLayout,
  //   exact: true,
  // },
  // {
  //   component: Other,
  //   path: "/Other",
  //   secure: false,
  //   layout: DefaultLayout,
  //   exact: true,
  // },
  
];

export default config;

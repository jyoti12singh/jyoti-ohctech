import { createBrowserRouter } from "react-router-dom";
import Root from "./components/pages/Root";
import ErrorPage from "./components/pages/ErrorPage";
import Ohcs from "./components/pages/Ohcs";
import Roles from "./components/pages/Roles";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./components/pages/Login";
import PersistLogin from "./utils/PersistLogin";
import OhcList from "./components/pages/OhcList";
import AdminHome from "./components/pages/AdminHome";
import UserList from "./components/pages/UserList";
// import UserForm from "./components/pages/UserForm";
// import OhcForm from "./components/pages/OhcForm";
// import MenuForm from "./components/pages/MenuForm";
import MenuList from "./components/pages/MenuList";
import RoleList from "./components/pages/RoleList";
import AddDocDetailList from "./components/pages/AddDocDetailList";
import MedFreqList from "./components/pages/MedFreqList";
import AilTimingList from "./components/pages/AilmentTimingList";
import MedTimingList from "./components/pages/MedTimingList";
import AilmentList from "./components/pages/AilmentList";
import RefferalList from "./components/pages/RefferalList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    index: true,
  },
  {
    path: "/",
    element: <PersistLogin />,
    children: [
      {
        // element: <ProtectedRoute />,
        children: [
          {
            path: "/ohcSelection",
            element: <Ohcs />,
          },
          {
            path: "/roleSelection",
            element: <Roles />,
          }
        ],
      },
    ],
  },

  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PersistLogin />,
        children: [
          {
            // element: <ProtectedRoute />,
            children: [
              {
                path:'/adminHome',
                element:<AdminHome />
              },
              {
                path:'/ohcList',
                element:<OhcList />
              },
              {
                path:'/medFreqList',
                element:<MedFreqList />
              },
              {
                path:'/medTimingList',
                element:<MedTimingList />
              },
              {
                path:'/AilTimingList',
                element:<AilTimingList/>
              },
              {
                path:'/userList',
                element: <UserList />
              },
              {
                path:'/roleList',
                element:<RoleList />
              },
              {
                path:'/menuList',
                element:<MenuList />
              },
              {
                path:'/addDocdetailList',
                element:<AddDocDetailList/>
              },
              {
                path:'/ailmentList',
                element:<AilmentList/>
              },
              {
                path:'/refferalList',
                element:<RefferalList/>
              }
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;

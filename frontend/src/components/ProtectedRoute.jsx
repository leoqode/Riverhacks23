import { Navigate, Outlet } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ authed, redirectPath, children }) {

  if (!authed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />
}
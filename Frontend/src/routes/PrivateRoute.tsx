import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: PropsWithChildren) {
  return localStorage.getItem("token") ? (
    <div>{children}</div>
  ) : (
    <Navigate to={"/signin"} />
  );
}

export default PrivateRoute;

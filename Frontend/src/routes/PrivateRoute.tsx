import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
type PropsType = PropsWithChildren;

function PrivateRoute({ children }: PropsType) {
  return sessionStorage.getItem("token") ? (
    <div>{children}</div>
  ) : (
    <Navigate to={"/signin"} />
  );
}

export default PrivateRoute;

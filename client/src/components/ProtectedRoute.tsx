import { ParentNodeProps } from "../interface";

function ProtectedRoute({ children }: ParentNodeProps) {
  return <div>{children} </div>;
}
export default ProtectedRoute;

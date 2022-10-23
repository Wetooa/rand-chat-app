import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { HomePage, RandomChatPage, LandingPage, RegisterPage } from "./pages";
import { SharedLayout, ProtectedRoute, NotFoundPage } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/random-chat" element={<RandomChatPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Outlet />
              </ProtectedRoute>
            }
          >
            <Route index element={<HomePage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

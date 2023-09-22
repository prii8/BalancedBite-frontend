import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import Register from "./pages/Register/Register";
import Recipe from "./pages/Recipe/Recipe";
import AppLayout from "./pages/AppLayout/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserTarget from "./pages/UserTarget/UserTarget";
import UserPreferences from "./pages/UserPreferences/UserPreferences";
import { useAppSelector } from "./redux/store";
import CustomLoader from "./pages/GlobalComponents/CustomLoader/CustomLoader";
import Favourite from "./pages/Favourite/Favourite";
import Timeline from "./pages/Timeline/Timeline";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import { requestNotificationPermission, setupMessageListener } from './notificationService';
import { useEffect } from "react"
import Subscription from "./pages/Subscription/Payment/Plans";

export default function App() {

  const { isLoading } = useAppSelector((state) => state);

  useEffect(() => {
    async function requestPermissionAndSetupListener() {
      try {
        // Request notification permission and set up a message listener
        await requestNotificationPermission();
        setupMessageListener((payload) => {
          console.log('Received message:', payload);
          // Handle the received message here
        });
      } catch (error) {
        console.error('Error requesting permission or setting up listener:', error);
      }
    }

    requestPermissionAndSetupListener();
  }, []);

  if ((isLoading !== null && isLoading !== false))
    return (
      <CustomLoader />
    )
  else
    return (



      <div>


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/loader" element={<CustomLoader />} />
            


            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route
                path="preferences"
                element={
                  <ProtectedRoute>
                    <UserPreferences />
                  </ProtectedRoute>
                }
              />
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="plans" element={<ProtectedRoute><Subscription /></ProtectedRoute>} />
              <Route
                path="timeline"
                element={
                  <ProtectedRoute>
                    <Timeline />
                  </ProtectedRoute>
                }
              />
              <Route
                path="favourite"
                element={
                  <ProtectedRoute>
                    <Favourite />
                  </ProtectedRoute>
                }
              />
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="recipe"
                element={
                  <ProtectedRoute>
                    <Recipe />
                  </ProtectedRoute>
                }
              />
              <Route
                path="target"
                element={
                  <ProtectedRoute>
                    <UserTarget />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>

      </div>

    );
};
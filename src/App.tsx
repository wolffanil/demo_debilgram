import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import AuthLayout from "./__auth/AuthLayout";

const ChatPage = lazy(() => import("./__root/pages/ChatPage"));
const DevicePage = lazy(() => import("./__root/pages/DevicePage"));
const PageNotFound = lazy(() => import("./__root/pages/PageNotFound"));
const StartPage = lazy(() => import("./__root/pages/StartPage"));
const UpdateProfile = lazy(() => import("./__root/pages/UpdateProfile"));
const UsersPage = lazy(() => import("./__root/pages/UsersPage"));

const Login = lazy(() => import("./__auth/pages/Login"));
const Register = lazy(() => import("./__auth/pages/Register"));

// import { Login, Register } from "./__auth/pages";
// import {
//   ChatPage,
//   DevicePage,
//   PageNotFound,
//   StartPage,
//   UpdateProfile,
//   UsersPage,
// } from "./__root/pages";
// import Profile from "./components/ui/Profile";
const Profile = lazy(() => import("./components/ui/Profile"));
import LoadingPage from "./components/ui/LoadingPage";
import RootLayout from "./__root/RootLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route
            path="/signin"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Register />
              </Suspense>
            }
          />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<StartPage />} />
          <Route
            path="/update-profile"
            element={
              <Suspense fallback={<LoadingPage />}>
                <UpdateProfile />
              </Suspense>
            }
          />
          <Route
            path="/devices"
            element={
              <Suspense fallback={<LoadingPage />}>
                <DevicePage />
              </Suspense>
            }
          />
          <Route
            path="/users"
            element={
              <Suspense fallback={<LoadingPage />}>
                <UsersPage />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Profile ver="myProfile" />
              </Suspense>
            }
          />
          <Route
            path="/users/:id"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Profile ver="userProfile" />
              </Suspense>
            }
          />
          <Route
            path="/users/:id/group"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Profile ver="groupProfile" />
              </Suspense>
            }
          />
          <Route
            path="/chats/:chatId"
            element={
              <Suspense fallback={<LoadingPage />}>
                <ChatPage />
              </Suspense>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--backgraund-color)",
            color: "var(--text-color)",
          },
        }}
      />
    </>
  );
}

export default App;

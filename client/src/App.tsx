import React, { useState } from "react";
import SavedPost from "./components/SavedPost";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Layout } from "./components/Layout";
import { theme } from "./styles/theme";
import NewStory from "./components/NewStory";
import NewsFeed from "./components/NewsFeed";
import Login from "./pages/login/Login";
import { SetUserContext, UserContext } from "./utils/context";
import Register from "./pages/register/Register";

export function App() {
  const [userData, setUserData] = useState({});

  const handleLoginData = (user: any) => {
    setUserData(user);
  };

  return (
    <UserContext.Provider value={userData}>
      <SetUserContext.Provider value={handleLoginData}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path="/home" element={<Layout />}>
              <Route path="/home" element={<NewsFeed />} />
              <Route path="me" element={<div>Pagina personale </div>} />
              <Route path="me/stories" element={<div>I tuoi post</div>} />
              <Route path="me/saved" element={<SavedPost />} />
            </Route>
            <Route
              path="/login"
              element={<Login handleLoginData={handleLoginData} />}
            />
            <Route path="/register" element={<Register />} />
            {/* Non va renderizzato in <Outlet/> di <Layout/> */}
            <Route path="/new-story" element={<NewStory />} />
          </Routes>
        </ThemeProvider>
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
}

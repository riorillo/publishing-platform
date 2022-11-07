import React, { useEffect, useState } from "react";
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
import YourStories from "./components/YourStories";

export function App() {
  const [userData, setUserData] = useState({});

  const handleLoginData = (user: any) => {
    setUserData(user);
    localStorage.setItem("userContext", JSON.stringify(user))
  };

  useEffect(()=>{
    const checkIfStorage :string | null = localStorage.getItem("userContext")
    if(checkIfStorage && checkIfStorage !== null) {
      console.log("storage:",JSON.parse(checkIfStorage));
      
      setUserData(JSON.parse(checkIfStorage))
    }
  },[])

  return (
    <UserContext.Provider value={userData}>
      <SetUserContext.Provider value={handleLoginData}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path="/home" element={<Layout />}>
              <Route path="/home" element={<NewsFeed />} />
              <Route path="me" element={<div>Pagina personale </div>} />
              <Route path="me/stories" element={<YourStories/>} />
              <Route path="me/saved" element={<SavedPost />} />
            </Route>
            <Route
              path="/login"
              element={<Login />}
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

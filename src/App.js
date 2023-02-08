import React, { useEffect } from "react";
import { Router, Route, Link, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Pages/login.component";
import Register from "./components/Pages/register.component";
import PostsPage from "./components/Pages/postspage.component";
import UserPage from "./components/Pages/userpage.component";
import HeaderComponent from "./components/Pages/header.component";
import PrivateRoute from "./common/Router/PrivateRoute";
import PublicRoute from "./common/Router/PublicRoute";
import ProfileSettings from "./components/Pages/profilesettings.component";
import UsersPage from "./components/Pages/userspage.component";
import MessengerHub from "./hub/MessengerHub";
import "./App.css";
import FriendsComponent from "./components/Pages/friends.component";
import RequestPage from "./components/Pages/RequestPage"
import ChatsPage from "./components/Pages/Chatspage";

const App = () => {
  
  return (
    <BrowserRouter>
      <HeaderComponent />
        <Routes>      
          <Route path="/*" element={<PostsPage />} />
          <Route path="/home" element={<PostsPage />} />

          <Route path="/login" element={<PublicRoute elem={<Login />} />} />
          <Route path="/register" element={<PublicRoute elem={<Register />} />} />

          <Route path="/users" element={<PrivateRoute elem={<UsersPage />} />} />
          <Route path="/friends" element={<PrivateRoute elem={<FriendsComponent />} />} />
          <Route path="/requests" element={<PrivateRoute elem={<RequestPage />} />} />
          <Route path="/profile" element={<PrivateRoute elem={<ProfileSettings />} />} />
          <Route path="/userpage" element={<PrivateRoute elem={<UserPage />} />} />
          <Route path="/messenger" element={<PrivateRoute elem={<MessengerHub />} />} />
          <Route path="/chatspage/*" element={<PrivateRoute elem={<ChatsPage />} />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

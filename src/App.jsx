import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Videos from './components/Videos';
import Images from './components/Images';
import Documents from './components/Documents';
import AdminUsers from './components/AdminUsers';
import AdminContents from './components/AdminContents';
import AdminCategories from './components/AdminCategories';
import AdminTopics from './components/AdminTopics';
import AdminUserTypes from './components/AdminUserTypes';
import AdminReactionTypes from './components/AdminReactionTypes';
import UploadContent from './components/UploadContent';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/images" element={<Images />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/contents" element={<AdminContents />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
          <Route path="/admin/topics" element={<AdminTopics />} />
          <Route path="/admin/user-types" element={<AdminUserTypes />} />
          <Route path="/admin/reaction-types" element={<AdminReactionTypes />} />
          <Route path="/upload" element={<UploadContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

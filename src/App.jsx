import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import React, { createContext, useState, useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Layout from './Layout.jsx';

import HomePage from './pages/HomePage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/SignUp.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Courses from './pages/Course.jsx';
import Gallery from './pages/Gallery.jsx';
import PlacedStudents from './pages/placedStudents.jsx';
import TestSection from './pages/TestSection.jsx';
import FacultyPage from './pages/FacultyPage.jsx';

// Auth Context
import { AuthProvider } from './context/AuthContext.jsx';

// Student Pages
import StudentMyProfile from './pages/student/StudentMyProfile.jsx';
import StudentMyTest from './pages/student/StudentMyTest.jsx';
import StudentResultDownload from './pages/student/StudentResultDownload.jsx';
import AttemptTestPro from './pages/test/AttemptTestPro.jsx';

// Protected route wrapper
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Theme Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='contactus' element={<ContactUs />} />
      <Route path='courses' element={<Courses />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='placements' element={<PlacedStudents />} />
      <Route path='test' element={<TestSection />} />
      <Route path='faculty' element={<FacultyPage />} />

      {/* Protected Routes */}
      <Route path='test/attempt/:testId' element={
        <ProtectedRoute>
          <AttemptTestPro />
        </ProtectedRoute>
      } />
      <Route path='student/profile' element={
        <ProtectedRoute>
          <StudentMyProfile />
        </ProtectedRoute>
      } />
      <Route path='student/tests' element={
        <ProtectedRoute>
          <StudentMyTest />
        </ProtectedRoute>
      } />
      <Route path='student/downloads' element={
        <ProtectedRoute>
          <StudentResultDownload />
        </ProtectedRoute>
      } />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
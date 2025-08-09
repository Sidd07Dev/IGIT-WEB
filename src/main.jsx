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

import Gallery from './pages/Gallery.jsx';
import PlacedStudents from './pages/placedStudents.jsx';
import TestSection from './pages/TestSection.jsx';
import FacultyPage from './pages/FacultyPage.jsx';

// Auth Context
import { AuthProvider } from './context/AuthContext.jsx';

// Student Pages
import StudentProfile from './pages/student/Profile.jsx';
import StudentResource from './pages/student/Resource.jsx';
import StudentBatchmates from './pages/student/Batchmates.jsx';
import AttemptTestPro from './pages/test/AttemptTestPro.jsx';
import StudentAttendance from './pages/student/Attendance.jsx'
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
          <StudentProfile />
        </ProtectedRoute>
      } />
      <Route path='student/resources' element={
        <ProtectedRoute>
          <StudentResource />
        </ProtectedRoute>
      } />
        <Route path='student/attendance' element={
        <ProtectedRoute>
          <StudentAttendance />
        </ProtectedRoute>
      } />
      <Route path='student/batchmates' element={
        <ProtectedRoute>
          <StudentBatchmates />
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
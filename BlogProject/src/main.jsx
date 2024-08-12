import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './pages/Home.jsx';
import { AuthLayout } from './components/index.js'
import Signup from './pages/Signup.jsx';
import AllPost from './pages/AllPost.jsx';
import AddPost from './pages/AddPost.jsx';
import EditPost from './pages/EditPost.jsx';
import Post from './pages/Post.jsx';
import Login from './pages/Login.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      } />

      <Route path='/signup' element={
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      } />

      <Route path='/all-post' element={
        <AuthLayout authentication>
          <AllPost />
        </AuthLayout>
      } />

      <Route path='/add-post' element={
        <AuthLayout authentication>
          <AddPost />
        </AuthLayout>
      } />

      <Route path='/edit-post/:slug' element={
        <AuthLayout authentication>
          {" "}
          <EditPost />
        </AuthLayout>
      } />

      <Route path='/post/:slug' element={
        <AuthLayout authentication>
          <Post />
        </AuthLayout>
      } />

      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </React.StrictMode>
  </Provider>

)

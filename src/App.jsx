import { Provider } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Questions from "./Components/Questions/Questions";
import store from "./App/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from "./Components/Layouts/MainLayout";
import LandingPage from "./Components/LandingPage/LandingPage";
import { useState } from "react";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<LandingPage/>}></Route>
      <Route path="questions" element={<Questions/>}></Route>
    </Route>
  )
);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  );
}

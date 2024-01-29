import { Provider } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import QuestionsPage from "./Components/Questions/QuestionsPage";
import store from "./App/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from "./Components/Layouts/MainLayout";
import LandingPage from "./Components/LandingPages/MainPage/LandingPage";
import PrizePage from "./Components/LandingPages/PrizePage/PrizePage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<LandingPage/>}></Route>
      <Route path="questions" element={<QuestionsPage/>}></Route>
      <Route path="prize" element={<PrizePage/>}></Route>
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

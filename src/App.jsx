import HomePage from "./pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Header from "./components/Header/Header";
import MoreCastPage from "./pages/СastPage/MoreCastPage/MoreCastPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />,
      </>
    ),
  },
  {
    path: `/movie/:id`,
    element: (
      <>
        <Header />
        <DetailsPage />
      </>
    ),
  },
  {
    path: `/movie/:id/credits`,
    element: (
      <>
        <Header />
        <MoreCastPage />
      </>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

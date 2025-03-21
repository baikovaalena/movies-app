import HomePage from "./pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Header from "./components/Header/Header";
import PageMorePeople from "./pages/СastCrew/PageMorePeople/PageMorePeople";

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
        <PageMorePeople />
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

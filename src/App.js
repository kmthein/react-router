import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Main />,
      errorElement: <Error />, 
      children: [
      {index: true, element: <Home />},
      {path: "/about", element: <About />},
      {path: "/products", element: <Products />},
      {path: "/product/:id", element: <ProductDetail />}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import React from "react";
import { Header, Body, MainContainer, WatchVideo } from "./components/index";
import { Provider } from "react-redux";
import store from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchVideo />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;

import React from "react";
import TabNav from "./components/TabNav.js";
import PageHeader from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";

export default function App() {
  return (
    <main>
      <PageHeader />
      <TabNav />
      <AppRouter />
    </main>
  );
}

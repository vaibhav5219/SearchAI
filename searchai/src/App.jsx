import React from "react";
import SearchAIHome from './components/SearchAIHome.jsx';
import TabManager from './components/TabManager.jsx';

export default function App() {
  return (
    <div className="h-screen w-screen bg-zinc-950">
      {/* <SearchAIHome /> */}
      <TabManager />
    </div>
  );
}
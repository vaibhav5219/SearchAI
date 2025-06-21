import React from 'react';
import { ChevronLeft, ChevronRight, RefreshCcw, Search } from 'lucide-react';

const engines = [
  { name: 'chatgpt.com', icon: 'C' },
  { name: 'gemini.com', icon: 'G' },
  { name: 'YouTube', icon: '▶️' },
  { name: 'bing.com', icon: 'B' },
  { name: 'google.com', icon: '🌐' },
  { name: 'Add Engine', icon: '+' },
];

const SearchAIHome = ({ tab, updateTabData }) => {
  const handleSearch = (e) => {
    if (e.key === 'Enter' && tab.search.trim()) {
      const query = encodeURIComponent(tab.search.trim());
      const url = `https://${tab.engine}/search?q=${query}`;
      updateTabData({ url }); // ✅ Update tab's `url` instead of opening new tab
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-white text-gray-800">
      {/* Top Bar */}
      <div className="flex items-center gap-4 px-4 py-3 bg-white shadow-md border-b-2">
        <button className="hover:bg-gray-200 p-2 rounded-full">
          <ChevronLeft size={20} />
        </button>
        <button className="hover:bg-gray-200 p-2 rounded-full">
          <ChevronRight size={20} />
        </button>
        <button className="hover:bg-gray-200 p-2 rounded-full">
          <RefreshCcw size={20} />
        </button>
        <input
          type="text"
          placeholder="Search or enter URL"
          className="ml-4 flex-1 px-4 py-2 rounded-full border bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={tab.url}
          onChange={(e) => updateTabData({ search: e.target.value })}
          onKeyDown={handleSearch}
        />
      </div>

      {/* Centered Text */}
      {
        !tab.url && (
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="text-7xl font-semibold mb-6 select-none">
            <span className="text-cyan-500">S</span>
            <span className="text-cyan-500">e</span>
            <span className="text-cyan-500">a</span>
            <span className="text-cyan-500">r</span>
            <span className="text-cyan-500">c</span>
            <span className="text-cyan-500">h</span>
            <span className="text-red-600 text-8xl ml-2">A</span>
            <span className="text-red-600 text-8xl">I</span>
          </div>

          <div className="flex items-center w-[70%] max-w-xl px-4 py-2 border-gray-300 rounded-full shadow-lg focus-within:ring-2 focus-within:ring-blue-400 mb-8">
            <Search className="text-gray-500 mr-2" size={20} />
            <input
              type="text"
              placeholder="Search any query or URL..."
              className="flex-1 bg-transparent border-none focus:border-none focus:ring-0 outline-none"
              value={tab.search}
              onChange={(e) => updateTabData({ search: e.target.value })}
              onKeyDown={handleSearch}
            />
          </div>

          {/* Scrollable Engine Buttons */}
          <div className="w-[60%] px-4 flex justify-center">
            <div className="flex overflow-x-auto space-x-4 no-scrollbar items-center justify-center">
              {engines.map((engine, index) => (
                <div key={index} className="flex flex-col items-center cursor-pointer">
                  <button
                    className={` whitespace-nowrap rounded-full border flex items-center justify-center ${
                      tab.engine === engine.name
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-800'
                    } shadow-sm hover:bg-blue-100 transition`}
                    onClick={() => updateTabData({ engine: engine.name })}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold">
                      {engine.icon}
                    </div>
                    <span className="ml-2 mr-4">{engine.name}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab.url && (
        <webview
          src={tab.url}
          className="flex-1 w-full h-full"
          allowpopups="true"
          webpreferences="nativeWindowOpen=yes"
        />
      )}
    </div>
  );
};

export default SearchAIHome;

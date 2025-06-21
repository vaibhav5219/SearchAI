import React, { useState } from 'react';
import SearchAIHome from './SearchAIHome.jsx';
import TabBar from './TabBar.jsx';

const TabManager = () => {
  const [tabs, setTabs] = useState([{ id: 1, search: '', engine: 'chatgpt.com' }]);
  const [activeTab, setActiveTab] = useState(1);

  const addTab = () => {
    const newId = tabs.length ? Math.max(...tabs.map(t => t.id)) + 1 : 1;
    setTabs([...tabs, { id: newId, search: '', engine: 'chatgpt.com' }]);
    setActiveTab(newId);
  };

  const updateTabData = (id, newData) => {
    setTabs(tabs.map(tab => (tab.id === id ? { ...tab, ...newData } : tab)));
  };

  return (
    <div className="flex flex-col h-full w-full bg-white overflow-hidden">
      <TabBar tabs={tabs} setTabs={setTabs} setActiveTab={setActiveTab} activeTab={activeTab} addTab={addTab}/>

      {/* Active Tab Content */}
      <div className="flex-1 overflow-hidden">
        {tabs.map(tab =>
          tab.id === activeTab ? (
            <SearchAIHome
              key={tab.id}
              tab={tab}
              updateTabData={newData => updateTabData(tab.id, newData)}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default TabManager;

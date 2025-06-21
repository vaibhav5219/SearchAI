import React from "react";
import CustomTitleBar from "./CustomTitleBar.jsx";

const TabBar = ({tabs, setTabs, setActiveTab, activeTab, addTab}) => {
    return (<>
    {/* Tab Bar */}
      <div className="h-[5%] flex shadow-sm relative z-0">
        {tabs.map(tab => (
          <div key={tab.id} className="min-w-fit">
            <div className={`flex items-center pt-1 ${
                  tab.id === activeTab ? 'bg-white border-b-0 relative z-10' : 'bg-cyan-100'
                }`}
              >
              <div
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 rounded-tl-xl hover:cursor-pointer`}
              >
                New Tab
              </div>
              
              {/* Close Button */}
              <div
                onClick={() =>
                  setTabs(prev => {
                    const filtered = prev.filter(t => t.id !== tab.id);
                    if (tab.id === activeTab && filtered.length > 0) {
                      return filtered.map((t, i) =>
                        i === 0 ? { ...t, active: true } : { ...t }
                      );
                    }
                    setActiveTab(filtered.length ? filtered[0].id : null);
                    return filtered;
                  })
                }
                className={`text-2xl group-hover:opacity-100 transition hover:cursor-pointer px-4 rounded-tr-xl`}
                title="Close Tab"
              >
                ×
              </div>
            </div>

            {/* Bottom outward curve */}
            {tab.id === activeTab ? (
              <div className="left-0 right-0 w-full h-2 bg-white"></div>
            ) :(
              <div className="left-0 right-0 w-full h-2 bg-cyan-100 rounded-b-full"></div>
            )
          }
          </div>
        ))}
        <div className="flex items-center bg-cyan-100 min-w-full rounded-bl-lg rounded-tl-lg">
          <div
            onClick={addTab}
            className="ml-2 p-1 text-2xl text-zinc-950 rounded-full hover:bg-slate-100 hover:cursor-pointer"
          >
            +
          </div>
          <div className="justify-items-end">
            <CustomTitleBar />
          </div>
        </div>
      </div>
    </>)
};

export default TabBar;
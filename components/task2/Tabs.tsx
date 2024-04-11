export default function Tabs({
  tabs,
  activeTab,
  setActiveTab
}: {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <div className="flex space-x-2 md:space-x-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`rounded-xl border px-5 py-1.5 text-sm ${
            activeTab === tab
              ? 'border-secondary-400 bg-secondary-50 text-secondary-400'
              : 'cursor-pointer border-gray-300 text-gray-400 transition-all duration-300 hover:border-secondary-400 hover:bg-secondary-50 hover:text-secondary-400'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

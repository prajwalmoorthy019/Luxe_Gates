import Sidebar from "../components/sidebar/Sidebar";
function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f5f6fa] flex p-5 gap-5">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        <div className="bg-white rounded-[32px] shadow-lg border border-zinc-200 min-h-[calc(100vh-40px)] overflow-hidden">

          {children}

        </div>

      </div>

    </div>
  );
}

export default MainLayout;
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-zinc-100">
      <Sidebar />

      <div className="flex-1 p-4">
        <div className="bg-white rounded-[32px] min-h-full p-8 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
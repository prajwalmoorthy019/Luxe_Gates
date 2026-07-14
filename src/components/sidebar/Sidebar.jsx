import {
  LayoutDashboard,
  Users,
  FileText,
  Image,
  Settings,
  LogOut,
} from "lucide-react";

import { useLocation } from "react-router-dom";
import { useState } from "react";

import SidebarItem from "./SidebarItem";
import SidebarProfile from "./SidebarProfile";
import LogoutModal from "./LogoutModal";

import logo from "../../assets/luxe-logo.png";

function Sidebar() {
  const location = useLocation();

  const [showLogout, setShowLogout] = useState(false);

  const menus = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={21} />,
    },
    {
      title: "Customers",
      path: "/customers",
      icon: <Users size={21} />,
    },
    {
      title: "Quotations",
      path: "/quotations",
      icon: <FileText size={21} />,
    },
    {
      title: "Gallery",
      path: "/gallery",
      icon: <Image size={21} />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <Settings size={21} />,
    },
  ];

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    setShowLogout(false);
    window.location.replace("/");
  };

  return (
    <>
      <aside className="w-[320px] bg-gradient-to-b from-[#08111F] via-[#0B1220] to-[#10192D] rounded-[34px] shadow-[0_20px_60px_rgba(0,0,0,0.45)] border border-yellow-600/20 flex flex-col justify-between overflow-hidden">

        {/* ================= LOGO ================= */}

        <div>

          <div className="pt-10 px-8 text-center">

            <div className="relative mx-auto w-28 h-28">

              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-700 blur-xl opacity-30 animate-pulse"></div>

              <div className="relative bg-[#111A2A] rounded-full p-4 border border-yellow-600/30 shadow-2xl">

                <img
                  src={logo}
                  alt="Luxe Gates"
                  className="w-full object-contain"
                />

              </div>

            </div>

            <h1 className="mt-8 text-3xl font-black tracking-[10px] text-white">
              LUXE
            </h1>

            <h2 className="text-yellow-400 text-xl tracking-[14px] font-bold">
              GATES
            </h2>

            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto my-5"></div>

            <p className="text-zinc-400 uppercase tracking-[5px] text-xs">
              Premium Gate Solutions
            </p>

          </div>

          {/* ================= MENU ================= */}

          <div className="mt-10 px-5 space-y-3">

            {menus.map((menu) => (
              <SidebarItem
                key={menu.path}
                title={menu.title}
                path={menu.path}
                icon={menu.icon}
                active={location.pathname === menu.path}
              />
            ))}

          </div>

        </div>

        {/* ================= FOOTER ================= */}

        <div className="p-5">

          <SidebarProfile />

          <button
            onClick={() => setShowLogout(true)}
            className="mt-5 w-full bg-gradient-to-r from-red-500 to-red-700 rounded-2xl py-4 text-white font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300 shadow-xl"
          >
            <LogOut size={20} />
            Sign Out
          </button>

        </div>

      </aside>

      <LogoutModal
        open={showLogout}
        onCancel={() => setShowLogout(false)}
        onConfirm={handleSignOut}
      />
    </>
  );
}

export default Sidebar;
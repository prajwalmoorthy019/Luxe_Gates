
import {
  LayoutDashboard,
  Users,
  FileText,
  Image,
  Settings,
  LogOut,
} from "lucide-react";

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import LogoutModal from "./LogoutModal";
import logo from "../assets/luxe-logo.png";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate(); // <-- This was missing
  const [showLogout, setShowLogout] = useState(false);

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={22} />,
    },
    {
      name: "Customers",
      path: "/customers",
      icon: <Users size={22} />,
    },
    {
      name: "Quotations",
      path: "/quotations",
      icon: <FileText size={22} />,
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: <Image size={22} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={22} />,
    },
  ];

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");

    setShowLogout(false);

    window.location.replace("/");
  };

  return (
    <>
      <div className="w-[300px] bg-[#0b1220] rounded-[32px] shadow-2xl border border-[#1d2740] flex flex-col justify-between overflow-hidden">

        {/* Logo */}
        <div>

          <div className="flex flex-col items-center pt-10">

            <img
              src={logo}
              alt="Luxe Gates"
              className="w-56 rounded-2xl shadow-2xl"
            />

            <h2 className="text-white text-2xl font-bold mt-6 tracking-wider">
              LUXE GATES
            </h2>

            <p className="text-zinc-400 text-sm tracking-[4px] uppercase mt-2">
              Premium Gate Solutions
            </p>

          </div>

          {/* Navigation */}

          <div className="mt-10 px-6 space-y-4">

            {menus.map((menu) => {
              const active = location.pathname === menu.path;

              return (
                <Link
                  key={menu.path}
                  to={menu.path}
                  className={`flex items - center gap - 5 px - 6 py - 4 rounded - 2xl transition - all duration - 300 font - semibold text - lg
                  ${active
                      ? "bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-700 text-white shadow-xl scale-[1.02]"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white hover:translate-x-1"
                    } `}
                >
                  {menu.icon}

                  <span>{menu.name}</span>

                </Link>
              );
            })}

          </div>

        </div>

        {/* Footer */}

        <div className="p-6 border-t border-white/10">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700"></div>

            <div>

              <h3 className="text-white font-semibold">
                Admin User
              </h3>

              <p className="text-zinc-400 text-sm">
                Administrator
              </p>

            </div>

          </div>

          <button
            onClick={() => setShowLogout(true)}
            className="w-full bg-red-500 hover:bg-red-600 rounded-2xl py-4 text-white font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02]"
          >
            <LogOut size={20} />
            Sign Out
          </button>

        </div>

      </div>

      <LogoutModal
        open={showLogout}
        onCancel={() => setShowLogout(false)}
        onConfirm={handleSignOut}
      />
    </>
  );
}

export default Sidebar;

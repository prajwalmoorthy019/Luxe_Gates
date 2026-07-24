import MainLayout from "../layouts/MainLayout";

import {
  User,
  Building2,
  Shield,
  Bell,
  Palette,
  Camera,
} from "lucide-react";

function Settings() {
  return (
    <MainLayout>

      <div className="min-h-screen bg-[#fafafa] p-10">

        {/* ================= HEADER ================= */}

        <div className="mb-10">

          <p className="uppercase tracking-[5px] text-yellow-700 font-bold text-sm">
            Luxe Gates
          </p>

          <h1 className="text-6xl font-black mt-2">
            Settings
          </h1>

          <p className="text-2xl text-zinc-500 mt-3">
            Manage your business preferences and account settings
          </p>

        </div>

        <div className="space-y-8">

          {/* ================= PROFILE ================= */}

          <div className="bg-white rounded-[34px] shadow-lg border border-zinc-100 p-10">

            <div className="flex items-center gap-5 mb-10">

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-700 flex items-center justify-center text-white">

                <User size={30} />

              </div>

              <div>

                <h2 className="text-3xl font-black">
                  Profile
                </h2>

                <p className="text-zinc-500 mt-2">
                  Update your administrator profile information
                </p>

              </div>

            </div>

            <div className="grid grid-cols-[220px_1fr] gap-10">

              {/* Profile Image */}

              <div className="flex flex-col items-center">

                <div className="relative">

                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 to-amber-700 flex items-center justify-center text-white text-6xl font-black shadow-xl">

                    P

                  </div>

                  <button
                    className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-yellow-600 transition-all"
                  >

                    <Camera size={18} />

                  </button>

                </div>

                <p className="mt-5 font-semibold text-zinc-700">
                  Business Owner
                </p>

              </div>

              {/* Form Starts */}

              <div className="grid grid-cols-2 gap-6">
                <div>

                  <label className="block text-sm font-semibold text-zinc-600 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    defaultValue="Pooja"
                    className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-lg outline-none focus:border-yellow-500 transition-all"
                  />

                </div>

                <div>

                  <label className="block text-sm font-semibold text-zinc-600 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    defaultValue="pooja@luxegates.com"
                    className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-lg outline-none focus:border-yellow-500 transition-all"
                  />

                </div>

                <div>

                  <label className="block text-sm font-semibold text-zinc-600 mb-2">
                    Mobile Number
                  </label>

                  <input
                    type="text"
                    defaultValue="+91 98765 43210"
                    className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-lg outline-none focus:border-yellow-500 transition-all"
                  />

                </div>

                <div>

                  <label className="block text-sm font-semibold text-zinc-600 mb-2">
                    Role
                  </label>

                  <input
                    type="text"
                    defaultValue="Business Owner"
                    disabled
                    className="w-full rounded-2xl border border-zinc-200 bg-zinc-100 px-5 py-4 text-lg"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* ================= COMPANY INFORMATION ================= */}

          <div className="bg-white rounded-[34px] shadow-lg border border-zinc-100 p-10">

            <div className="flex items-center gap-5 mb-10">

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-700 flex items-center justify-center text-white">

                <Building2 size={30} />

              </div>

              <div>

                <h2 className="text-3xl font-black">
                  Company Information
                </h2>

                <p className="text-zinc-500 mt-2">
                  Business details displayed on quotations
                </p>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div>

                <label className="block text-sm font-semibold text-zinc-600 mb-2">
                  Company Name
                </label>

                <input
                  type="text"
                  defaultValue="Luxe Gates"
                  className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-lg outline-none focus:border-yellow-500 transition-all"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold text-zinc-600 mb-2">
                  GST Number
                </label>

                <input
                  type="text"
                  placeholder="Enter GST Number"
                  className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-lg outline-none focus:border-yellow-500 transition-all"
                />

              </div>

              <div className="col-span-2">

                <label className="block text-sm font-semibold text-zinc-600 mb-2">
                  Company Address
                </label>

                <textarea
                  rows="4"
                  placeholder="Enter Company Address"
                  className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-lg outline-none resize-none focus:border-yellow-500 transition-all"
                />

              </div>

            </div>

          </div>

          {/* ================= SECURITY ================= */}
          <div className="bg-white rounded-[34px] shadow-lg border border-zinc-100 p-10">

            <div className="flex items-center gap-5 mb-10">

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-700 flex items-center justify-center text-white">

                <Shield size={30} />

              </div>

              <div>

                <h2 className="text-3xl font-black">
                  Security
                </h2>

                <p className="text-zinc-500 mt-2">
                  Update your account password
                </p>

              </div>

            </div>

            <div className="grid grid-cols-3 gap-6">

              <div>

                <label className="block text-sm font-semibold text-zinc-600 mb-2">
                  Current Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-yellow-500 transition-all"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold text-zinc-600 mb-2">
                  New Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-yellow-500 transition-all"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold text-zinc-600 mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-yellow-500 transition-all"
                />

              </div>

            </div>

          </div>

          {/* ================= NOTIFICATIONS ================= */}

          <div className="bg-white rounded-[34px] shadow-lg border border-zinc-100 p-10">

            <div className="flex items-center gap-5 mb-10">

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-700 flex items-center justify-center text-white">

                <Bell size={30} />

              </div>

              <div>

                <h2 className="text-3xl font-black">
                  Notifications
                </h2>

                <p className="text-zinc-500 mt-2">
                  Choose what notifications you want to receive
                </p>

              </div>

            </div>

            <div className="space-y-6">

              {[
                "Email Notifications",
                "Quotation Updates",
                "Customer Activity",
                "Monthly Reports",
              ].map((item) => (

                <div
                  key={item}
                  className="flex justify-between items-center p-5 rounded-2xl border border-zinc-200 hover:border-yellow-300 transition-all"
                >

                  <div>

                    <h3 className="font-bold text-lg">
                      {item}
                    </h3>

                    <p className="text-zinc-500 text-sm mt-1">
                      Receive updates for {item.toLowerCase()}
                    </p>

                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">

                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />

                    <div className="w-14 h-8 bg-zinc-300 rounded-full peer peer-checked:bg-yellow-500 transition-all"></div>

                    <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-all peer-checked:translate-x-6"></div>

                  </label>

                </div>

              ))}

            </div>

          </div>

          {/* ================= APPEARANCE ================= */}

          <div className="bg-white rounded-[34px] shadow-lg border border-zinc-100 p-10">

            <div className="flex items-center gap-5 mb-10">

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-700 flex items-center justify-center text-white">

                <Palette size={30} />

              </div>

              <div>

                <h2 className="text-3xl font-black">
                  Appearance
                </h2>

                <p className="text-zinc-500 mt-2">
                  Customize the look and feel of Luxe Gates
                </p>

              </div>

            </div>

            <div className="grid grid-cols-3 gap-6">

              <div className="border-2 border-yellow-500 rounded-3xl p-6 cursor-pointer hover:shadow-lg transition-all">

                <div className="h-32 rounded-2xl bg-white border border-zinc-200"></div>

                <h3 className="font-bold mt-5 text-xl">
                  Light Theme
                </h3>

                <p className="text-zinc-500 mt-2">
                  Default appearance
                </p>

              </div>

              <div className="border border-zinc-200 rounded-3xl p-6 opacity-60 cursor-not-allowed">

                <div className="h-32 rounded-2xl bg-zinc-900"></div>

                <h3 className="font-bold mt-5 text-xl">
                  Dark Theme
                </h3>

                <p className="text-zinc-500 mt-2">
                  Coming Soon
                </p>

              </div>

              <div className="border border-zinc-200 rounded-3xl p-6 opacity-60 cursor-not-allowed">

                <div className="h-32 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-700"></div>

                <h3 className="font-bold mt-5 text-xl">
                  Luxe Gold
                </h3>

                <p className="text-zinc-500 mt-2">
                  Premium Theme (Coming Soon)
                </p>

              </div>

            </div>

          </div>

          {/* ================= SAVE BUTTON ================= */}

          <div className="flex justify-end pb-10">

            <button
              className="
              px-12
              py-5
              rounded-2xl
              bg-gradient-to-r
              from-yellow-500
              to-amber-700
              text-white
              text-lg
              font-bold
              shadow-xl
              hover:shadow-[0_20px_50px_rgba(212,175,55,.35)]
              hover:scale-105
              transition-all
              duration-300
              "
            >

              Save Changes

            </button>

          </div>

        </div>

      </div>

    </MainLayout>

  );
}

export default Settings;
import MainLayout from "../layouts/MainLayout";

import {
  Bell,
  FileText,
  Clock3,
  CheckCircle,
  Users,
  Plus,
  Image,
  BarChart3,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

function Dashboard() {

  const stats = [

    {
      title: "Total Quotations",
      value: "128",
      icon: <FileText size={30} />,
      color: "bg-yellow-100 text-yellow-700",
      growth: "+18%",
    },

    {
      title: "Pending",
      value: "32",
      icon: <Clock3 size={30} />,
      color: "bg-orange-100 text-orange-600",
      growth: "+12%",
    },

    {
      title: "Approved",
      value: "96",
      icon: <CheckCircle size={30} />,
      color: "bg-green-100 text-green-600",
      growth: "+25%",
    },

    {
      title: "Customers",
      value: "156",
      icon: <Users size={30} />,
      color: "bg-blue-100 text-blue-600",
      growth: "+20%",
    },

  ];

  const chartData = [

    { month: "Jan", quotations: 18 },

    { month: "Feb", quotations: 25 },

    { month: "Mar", quotations: 32 },

    { month: "Apr", quotations: 28 },

    { month: "May", quotations: 45 },

    { month: "Jun", quotations: 52 },

  ];

  return (

    <MainLayout>

      <div className="p-10">
        {/* ================= HEADER ================= */}

        <div className="flex items-start justify-between mb-12">

          {/* LEFT */}

          <div>

            <p className="text-yellow-600 font-bold tracking-[4px] uppercase">
              Good Morning ☀️
            </p>

            <h1 className="text-6xl font-black text-zinc-900 mt-3">
              Pooja
            </h1>

            <p className="text-zinc-500 text-xl mt-3">
              Welcome back to Luxe Gates Management
            </p>

            <p className="text-zinc-400 mt-2">
              Tuesday • 14 July 2026
            </p>

          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-8">

            {/* Notification */}

            <button className="relative w-14 h-14 rounded-2xl bg-white shadow-lg border border-zinc-100 hover:shadow-xl transition-all duration-300">

              <Bell
                size={24}
                className="mx-auto text-zinc-700"
              />

              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">

                3

              </div>

            </button>

            {/* Profile */}

            <div className="bg-white rounded-3xl px-6 py-4 shadow-lg border border-zinc-100 flex items-center gap-4 hover:shadow-xl transition-all">

              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-700 flex items-center justify-center text-black font-black text-lg shadow-lg">

                P

              </div>

              <div>

                <h3 className="text-lg font-bold">
                  Pooja
                </h3>

                <p className="text-zinc-500">
                  Business Owner
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= KPI CARDS ================= */}

        <div className="grid grid-cols-4 gap-7 mb-10">

          {stats.map((item, index) => (

            <div
              key={index}
              className="group bg-white rounded-[30px] border border-zinc-100 hover:border-yellow-300 hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden cursor-pointer"
            >

              {/* Gold Top Border */}

              <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-700"></div>

              <div className="p-8">

                <div className="flex justify-between items-start">

                  <div>

                    <p className="text-zinc-500 text-lg">
                      {item.title}
                    </p>

                    <h2 className="text-6xl font-black text-zinc-900 mt-5">
                      {item.value}
                    </h2>

                    <div className="flex items-center gap-2 mt-7">

                      <div className="w-2 h-2 rounded-full bg-green-500"></div>

                      <span className="text-green-600 font-semibold">
                        {item.growth} this month
                      </span>

                    </div>

                  </div>

                  <div
                    className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 ${item.color}`}
                  >
                    {item.icon}
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* ================= CHART SECTION ================= */}

        <div className="grid grid-cols-2 gap-8 mb-10">

          {/* LEFT */}

          <div className="bg-white rounded-[30px] border border-zinc-100 shadow-lg p-8">

            <div className="flex justify-between items-center mb-8">

              <div>

                <h2 className="text-2xl font-bold">
                  Quotation Analytics
                </h2>

                <p className="text-zinc-500 mt-1">
                  Last 6 Months Performance
                </p>

              </div>

              <select className="border rounded-xl px-4 py-2">

                <option>2026</option>

              </select>

            </div>

            <div className="h-[320px]">

              <ResponsiveContainer width="100%" height="100%">

                <AreaChart data={chartData}>

                  <defs>

                    <linearGradient
                      id="quotationGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >

                      <stop
                        offset="5%"
                        stopColor="#D4AF37"
                        stopOpacity={0.45}
                      />

                      <stop
                        offset="95%"
                        stopColor="#D4AF37"
                        stopOpacity={0}
                      />

                    </linearGradient>

                  </defs>

                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip
                    contentStyle={{
                      borderRadius: 18,
                      border: "none",
                      boxShadow: "0 20px 50px rgba(0,0,0,.15)",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="quotations"
                    stroke="#C89B3C"
                    strokeWidth={5}
                    fill="url(#quotationGradient)"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-[30px] border border-zinc-100 shadow-lg overflow-hidden">
            <div className="p-8 border-b border-zinc-100 flex justify-between items-center">

              <div>

                <h2 className="text-2xl font-bold">
                  Recent Quotations
                </h2>

                <p className="text-zinc-500 mt-1">
                  Latest customer quotations
                </p>

              </div>

              <button className="bg-gradient-to-r from-yellow-500 to-amber-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg">
                View All
              </button>

            </div>

            <div className="divide-y divide-zinc-100">

              {[
                {
                  id: "QT-0128",
                  customer: "Rahul Sharma",
                  amount: "₹2,45,000",
                  status: "Pending",
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  id: "QT-0127",
                  customer: "Anita Desai",
                  amount: "₹3,10,000",
                  status: "Approved",
                  color: "bg-green-100 text-green-700",
                },
                {
                  id: "QT-0126",
                  customer: "Vikram Mehta",
                  amount: "₹1,80,000",
                  status: "Sent",
                  color: "bg-blue-100 text-blue-700",
                },
              ].map((quote) => (

                <div
                  key={quote.id}
                  className="flex justify-between items-center px-8 py-6 hover:bg-zinc-50 transition-all"
                >

                  <div>

                    <h3 className="font-bold text-lg">
                      {quote.customer}
                    </h3>

                    <p className="text-zinc-500">
                      {quote.id}
                    </p>

                  </div>

                  <div className="text-xl font-bold">
                    {quote.amount}
                  </div>

                  <div className={`px-4 py-2 rounded-full text-sm font-semibold ${quote.color}`}>
                    {quote.status}
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* ================= QUICK ACTIONS ================= */}

        <div className="grid grid-cols-4 gap-6">

          {[
            {
              title: "New Quotation",
              subtitle: "Create quotation",
              icon: <Plus size={26} />,
            },
            {
              title: "Customers",
              subtitle: "Manage customers",
              icon: <Users size={26} />,
            },
            {
              title: "Gallery",
              subtitle: "Browse designs",
              icon: <Image size={26} />,
            },
            {
              title: "Reports",
              subtitle: "Business analytics",
              icon: <BarChart3 size={26} />,
            },
          ].map((item) => (

            <div
              key={item.title}
              className="group bg-white rounded-[28px] border border-zinc-100 p-7 hover:border-yellow-300 hover:shadow-[0_20px_50px_rgba(212,175,55,.18)] transition-all duration-300 cursor-pointer"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all">

                {item.icon}

              </div>

              <h3 className="mt-6 text-xl font-bold text-zinc-900">
                {item.title}
              </h3>

              <p className="mt-2 text-zinc-500">
                {item.subtitle}
              </p>

            </div>

          ))}

        </div>

      </div>

    </MainLayout>

  );

}

export default Dashboard;
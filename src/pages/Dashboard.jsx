import MainLayout from "../layouts/MainLayout";

import {
  Bell,
  Users,
  FileText,
  CheckCircle2,
  Clock3,
} from "lucide-react";


import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const chartData = [
  { month: "Jan", revenue: 420000 },
  { month: "Feb", revenue: 520000 },
  { month: "Mar", revenue: 690000 },
  { month: "Apr", revenue: 610000 },
  { month: "May", revenue: 980000 },
  { month: "Jun", revenue: 1120000 },
];

const stats = [
  {
    title: "Total Quotations",
    value: "128",
    growth: "+18% this month",
    icon: <FileText size={34} />,
    bg: "bg-yellow-100",
    iconColor: "text-yellow-700",
  },
  {
    title: "Pending",
    value: "32",
    growth: "+12% this month",
    icon: <Clock3 size={34} />,
    bg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Approved",
    value: "96",
    growth: "+25% this month",
    icon: <CheckCircle2 size={34} />,
    bg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Customers",
    value: "156",
    growth: "+20% this month",
    icon: <Users size={34} />,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

const quotations = [
  {
    id: "QT-0128",
    customer: "Rahul Sharma",
    project: "Sliding Gate Installation",
    amount: "₹2,45,000",
    status: "Pending",
    date: "14 Jul 2026",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "QT-0127",
    customer: "Anita Desai",
    project: "Main Entrance Gate",
    amount: "₹3,10,000",
    status: "Approved",
    date: "13 Jul 2026",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "QT-0126",
    customer: "Vikram Mehta",
    project: "Villa Sliding Gate",
    amount: "₹1,80,000",
    status: "Sent",
    date: "12 Jul 2026",
    color: "bg-blue-100 text-blue-700",
  },
];

function Dashboard() {
  return (
    <MainLayout>

      <div className="p-10 bg-[#fafafa] min-h-screen">

        {/* ================= HEADER ================= */}

        <div className="flex justify-between items-start mb-10">

          <div>

            <p className="uppercase tracking-[5px] text-yellow-700 font-bold text-sm">
              Good Morning ☀️
            </p>

            <h1 className="text-6xl font-black mt-2">
              Pooja
            </h1>

            <p className="text-3xl text-zinc-500 mt-3">
              Welcome back to Luxe Gates Management
            </p>

            <p className="text-zinc-400 mt-4 text-lg">
              Tuesday • 14 July 2026
            </p>

          </div>

          <div className="flex items-center gap-8">

            <div className="relative bg-white rounded-2xl shadow-lg p-5">

              <Bell size={28} />

              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
                3
              </span>

            </div>

            <div className="bg-white rounded-3xl shadow-lg px-7 py-5 flex items-center gap-5">

              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-2xl font-bold">
                P
              </div>

              <div>

                <h3 className="font-bold text-2xl">
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

        <div className="grid grid-cols-4 gap-8 mb-10">
          {stats.map((card) => (

            <div
              key={card.title}
              className="bg-white rounded-[32px] p-8 border border-zinc-100 shadow-lg hover:shadow-[0_20px_50px_rgba(212,175,55,.18)] hover:-translate-y-1 transition-all duration-300"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">
                    {card.title}
                  </p>

                  <h2 className="text-5xl font-black mt-4">
                    {card.value}
                  </h2>

                  <p className="text-green-600 mt-5 font-semibold">
                    {card.growth}
                  </p>

                </div>

                <div
                  className={`w-20 h-20 rounded-3xl flex items-center justify-center ${card.bg}`}
                >
                  <div className={card.iconColor}>
                    {card.icon}
                  </div>
                </div>

              </div>

            </div>

          ))}

        </div>

        {/* ================= ANALYTICS ================= */}

        <div className="grid grid-cols-[2fr_1fr] gap-8 mb-10">

          {/* LEFT */}

          <div className="bg-white rounded-[34px] shadow-lg border border-zinc-100 p-8">

            <div className="flex justify-between items-center mb-8">

              <div>

                <h2 className="text-3xl font-black">
                  Business Performance
                </h2>

                <p className="text-zinc-500 mt-2">
                  Revenue generated over the last six months
                </p>

              </div>

            </div>

            {/* Revenue Summary */}

            <div className="grid grid-cols-3 gap-5 mb-8">

              <div className="rounded-3xl bg-gradient-to-r from-yellow-500 to-amber-700 text-white p-6 shadow-xl">

                <p className="text-sm opacity-80">
                  Revenue
                </p>

                <h2 className="text-4xl font-black mt-3">
                  ₹12.5L
                </h2>

                <p className="mt-2 text-sm">
                  +18% this month
                </p>

              </div>

              <div className="rounded-3xl bg-white border border-zinc-200 p-6 shadow-md">

                <p className="text-zinc-500 text-sm">
                  Quotations
                </p>

                <h2 className="text-4xl font-black mt-3">
                  128
                </h2>

                <p className="text-green-600 mt-2 text-sm">
                  +26 New
                </p>

              </div>

              <div className="rounded-3xl bg-white border border-zinc-200 p-6 shadow-md">

                <p className="text-zinc-500 text-sm">
                  Customers
                </p>

                <h2 className="text-4xl font-black mt-3">
                  156
                </h2>

                <p className="text-blue-600 mt-2 text-sm">
                  +12 Added
                </p>

              </div>

            </div>

            <div className="h-[340px]">

              <ResponsiveContainer width="100%" height="100%">

                <AreaChart data={chartData}>

                  <defs>

                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">

                      <stop offset="5%" stopColor="#EAB308" stopOpacity={0.45} />

                      <stop offset="95%" stopColor="#EAB308" stopOpacity={0} />

                    </linearGradient>

                  </defs>

                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#CA8A04"
                    strokeWidth={4}
                    fill="url(#colorRevenue)"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* RIGHT SIDE STARTS */}

          <div className="space-y-8">

            {/* Dashboard Summary */}

            <div className="bg-gradient-to-br from-[#0B1220] via-[#10192D] to-[#172033] rounded-[34px] p-8 text-white shadow-xl">

              <p className="uppercase tracking-[4px] text-yellow-400 text-sm font-bold">
                Today's Summary
              </p>

              <h2 className="text-4xl font-black mt-4">
                ₹5,42,000
              </h2>

              <p className="text-zinc-300 mt-3">
                Estimated business generated today
              </p>

              <div className="mt-8 space-y-5">

                <div>

                  <div className="flex justify-between text-sm mb-2">

                    <span>Quotation Progress</span>

                    <span>82%</span>

                  </div>

                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">

                    <div className="h-full w-[82%] bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between text-sm mb-2">

                    <span>Customer Satisfaction</span>

                    <span>96%</span>

                  </div>

                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">

                    <div className="h-full w-[96%] bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>

                  </div>

                </div>

              </div>

            </div>

            {/* Recent Quotations */}

            <div className="bg-white rounded-[34px] shadow-lg border border-zinc-100 overflow-hidden">

              <div className="flex justify-between items-center px-8 py-7 border-b border-zinc-100">

                <div>

                  <h2 className="text-2xl font-black">
                    Recent Quotations
                  </h2>

                  <p className="text-zinc-500 mt-2">
                    Latest customer quotations
                  </p>

                </div>

                <button className="bg-gradient-to-r from-yellow-500 to-amber-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all">

                  View All

                </button>

              </div>

              <div className="divide-y divide-zinc-100">

                {quotations.map((quote) => (

                  <div
                    key={quote.id}
                    className="group flex justify-between items-center px-8 py-6 rounded-2xl hover:bg-gradient-to-r hover:from-yellow-50 hover:to-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >

                    {/* Left */}

                    <div className="flex items-center gap-5 min-w-[340px]">

                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-700 flex items-center justify-center text-white text-xl font-bold shadow-lg">

                        {quote.customer.charAt(0)}

                      </div>

                      <div>

                        <h3 className="font-bold text-lg text-zinc-900">

                          {quote.customer}

                        </h3>

                        <p className="text-zinc-500 text-sm mt-1">

                          {quote.project}

                        </p>

                        <p className="text-zinc-400 text-xs mt-1">

                          {quote.id} • {quote.date}

                        </p>

                      </div>

                    </div>

                    {/* Right */}

                    <div className="flex items-center gap-6">

                      <div className="w-[150px] text-right">

                        <p className="text-2xl font-black">

                          {quote.amount}

                        </p>

                      </div>

                      <span
                        className={`w-[120px] text-center py-2 rounded-full text-sm font-bold ${quote.color}`}
                      >

                        {quote.status}

                      </span>

                      <button className="w-24 py-2 rounded-xl border border-zinc-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all font-semibold">

                        View

                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* ================= QUICK ACTIONS ================= */}
      </div>

    </MainLayout>

  );
}

export default Dashboard;







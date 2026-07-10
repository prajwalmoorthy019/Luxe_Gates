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
      icon: <FileText size={28} />,
      color: "bg-yellow-100 text-yellow-700",
      growth: "↑ 18% from last month",
      growthColor: "text-green-600",
    },

    {
      title: "Pending Quotations",
      value: "32",
      icon: <Clock3 size={28} />,
      color: "bg-orange-100 text-orange-600",
      growth: "↑ 12% from last month",
      growthColor: "text-orange-600",
    },

    {
      title: "Accepted Quotations",
      value: "96",
      icon: <CheckCircle size={28} />,
      color: "bg-green-100 text-green-600",
      growth: "↑ 25% from last month",
      growthColor: "text-green-600",
    },

    {
      title: "Total Customers",
      value: "156",
      icon: <Users size={28} />,
      color: "bg-blue-100 text-blue-600",
      growth: "↑ 20% from last month",
      growthColor: "text-blue-600",
    },
  ];

  const chartData = [
    {
      month: "Jan",
      quotations: 18,
    },

    {
      month: "Feb",
      quotations: 25,
    },

    {
      month: "Mar",
      quotations: 32,
    },

    {
      month: "Apr",
      quotations: 28,
    },

    {
      month: "May",
      quotations: 45,
    },

    {
      month: "Jun",
      quotations: 52,
    },
  ];

  return (

    <MainLayout>

      {/* TOP HEADER */}
      <div className="flex items-start justify-between mb-10">

        <div>

          <h1 className="text-5xl font-bold text-zinc-900">
            Dashboard
          </h1>

          <p className="text-zinc-500 text-xl mt-2">
            Welcome back, Admin 👋
          </p>

        </div>

        {/* PROFILE */}
        <div className="flex items-center gap-6">

          {/* NOTIFICATION */}
          <div className="relative cursor-pointer">

            <Bell size={28} className="text-zinc-700" />

            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              3
            </div>

          </div>

          {/* PROFILE */}
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700"></div>

            <div>

              <h3 className="font-semibold text-lg">
                Admin User
              </h3>

              <p className="text-zinc-500">
                Administrator
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-4 gap-6 mb-8">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-white border border-zinc-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300"
          >

            <div className="flex items-start justify-between mb-6">

              <div>

                <p className="text-zinc-500 text-lg">
                  {item.title}
                </p>

                <h2 className="text-5xl font-bold mt-4 text-zinc-900">
                  {item.value}
                </h2>

              </div>

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}>

                {item.icon}

              </div>

            </div>

            <p className={`font-medium ${item.growthColor}`}>
              {item.growth}
            </p>

          </div>

        ))}

      </div>

      {/* MIDDLE SECTION */}
      <div className="grid grid-cols-2 gap-6 mb-8">

        {/* CHART SECTION */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-8">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-2xl font-semibold text-zinc-900">
              Quotations Overview
            </h2>

            <select className="border border-zinc-200 rounded-xl px-4 py-2 outline-none">

              <option>This Month</option>

            </select>

          </div>

          {/* REAL CHART */}
          <div className="h-[300px]">

            <ResponsiveContainer width="100%" height="100%">

              <AreaChart data={chartData}>

                <defs>

                  <linearGradient
                    id="colorQuotation"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="5%"
                      stopColor="#c59a3d"
                      stopOpacity={0.4}
                    />

                    <stop
                      offset="95%"
                      stopColor="#c59a3d"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#71717a" }}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="quotations"
                  stroke="#c59a3d"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorQuotation)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* RECENT QUOTATIONS */}
        <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden">

          <div className="p-8 flex items-center justify-between border-b border-zinc-100">

            <h2 className="text-2xl font-semibold">
              Recent Quotations
            </h2>

            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-xl transition-all">

              View All

            </button>

          </div>

          <div className="divide-y divide-zinc-100">

            {[
              {
                id: "QT-2024-0128",
                customer: "Rahul Sharma",
                amount: "₹ 2,45,000",
                status: "Pending",
                color: "bg-orange-100 text-orange-600",
              },

              {
                id: "QT-2024-0127",
                customer: "Vikram Mehta",
                amount: "₹ 1,80,000",
                status: "Sent",
                color: "bg-blue-100 text-blue-600",
              },

              {
                id: "QT-2024-0126",
                customer: "Anita Desai",
                amount: "₹ 3,15,000",
                status: "Accepted",
                color: "bg-green-100 text-green-600",
              },

              {
                id: "QT-2024-0125",
                customer: "Suresh Nair",
                amount: "₹ 2,20,000",
                status: "Pending",
                color: "bg-orange-100 text-orange-600",
              },
            ].map((quote, index) => (

              <div
                key={index}
                className="p-6 flex items-center justify-between hover:bg-zinc-50 transition-all"
              >

                <div>

                  <h3 className="font-semibold text-zinc-900">
                    {quote.id}
                  </h3>

                  <p className="text-zinc-500 mt-1">
                    {quote.customer}
                  </p>

                </div>

                <div className="font-semibold text-zinc-900">
                  {quote.amount}
                </div>

                <div className={`px-4 py-2 rounded-full text-sm font-medium ${quote.color}`}>

                  {quote.status}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-4 gap-6">

        {[
          {
            title: "New Quotation",
            subtitle: "Create New",
            icon: <Plus size={24} />,
          },

          {
            title: "Add Customer",
            subtitle: "Create New",
            icon: <Users size={24} />,
          },

          {
            title: "View Gallery",
            subtitle: "Browse Designs",
            icon: <Image size={24} />,
          },

          {
            title: "Reports",
            subtitle: "View Reports",
            icon: <BarChart3 size={24} />,
          },
        ].map((item, index) => (

          <div
            key={index}
            className="bg-white border border-zinc-200 rounded-3xl p-6 flex items-center gap-5 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >

            <div className="w-14 h-14 rounded-2xl bg-yellow-100 text-yellow-700 flex items-center justify-center">

              {item.icon}

            </div>

            <div>

              <h3 className="text-lg font-semibold text-zinc-900">
                {item.title}
              </h3>

              <p className="text-zinc-500">
                {item.subtitle}
              </p>

            </div>

          </div>

        ))}

      </div>

    </MainLayout>
  );
}

export default Dashboard;
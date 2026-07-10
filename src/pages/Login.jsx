import bgImage from "../assets/luxe_gates_login_page.png";

function Login() {
  return (
    <div className="min-h-screen flex bg-zinc-100">

      {/* LEFT SIDE IMAGE */}
<div className="hidden lg:flex w-1/2 relative p-4">

  <img
    src={bgImage}
    alt="Luxe Gates"
    className="w-full h-full object-cover rounded-3xl"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20 rounded-3xl" />

</div>

      {/* RIGHT SIDE LOGIN */}
      <div className="flex-1 flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white rounded-3xl p-12 shadow-xl">

          <h2 className="text-5xl font-bold text-zinc-900 mb-3">
            Welcome Back
          </h2>

          <p className="text-zinc-500 mb-10 text-lg">
            Sign in to continue to Luxe Gates
          </p>

          {/* FORM */}
          <div className="space-y-6">

            <div>
              <label className="block mb-2 font-medium text-zinc-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-zinc-300 rounded-xl px-5 py-4 outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-zinc-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-zinc-300 rounded-xl px-5 py-4 outline-none focus:border-yellow-500"
              />
            </div>

            {/* REMEMBER */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-zinc-600">
                <input type="checkbox" />
                Remember me
              </label>

              <button className="text-yellow-600 hover:underline">
                Forgot password?
              </button>

            </div>

            {/* BUTTON */}
            <button
              className="w-full bg-yellow-600 hover:bg-yellow-700 transition-all text-white py-4 rounded-xl text-lg font-semibold"
            >
              Sign In
            </button>

          </div>

          {/* FOOTER */}
          <div className="mt-14 text-center text-sm text-zinc-400">
            © 2026 Luxe Gates. All rights reserved.
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
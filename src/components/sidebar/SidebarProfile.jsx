function SidebarProfile() {
    return (
        <div className="bg-[#141d2d] rounded-3xl p-5 border border-yellow-600/10 shadow-xl">

            <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-700 flex items-center justify-center text-black font-bold text-lg shadow-lg">
                    P
                </div>

                <div>

                    <h3 className="text-white font-bold text-lg">
                        Pooja
                    </h3>

                    <p className="text-zinc-400 text-sm">
                        Administrator
                    </p>

                    <div className="flex items-center gap-2 mt-2">

                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

                        <span className="text-green-400 text-xs">
                            Online
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default SidebarProfile;
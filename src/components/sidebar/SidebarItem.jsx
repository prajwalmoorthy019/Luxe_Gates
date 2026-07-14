import { Link } from "react-router-dom";

function SidebarItem({ icon, title, path, active }) {
    return (
        <Link
            to={path}
            className={`
      group
      relative
      flex
      items-center
      gap-4
      px-5
      py-4
      rounded-2xl
      transition-all
      duration-300
      overflow-hidden

      ${active
                    ? "bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-700 text-white shadow-xl"
                    : "text-zinc-300 hover:bg-white/5 hover:text-yellow-400"
                }
      `}
        >
            <div
                className={`
        w-11
        h-11
        rounded-xl
        flex
        items-center
        justify-center
        transition-all
        duration-300

        ${active
                        ? "bg-white/20"
                        : "bg-[#172238] group-hover:bg-yellow-500 group-hover:text-black"
                    }
        `}
            >
                {icon}
            </div>

            <span className="text-lg font-semibold tracking-wide">
                {title}
            </span>
        </Link>
    );
}

export default SidebarItem;
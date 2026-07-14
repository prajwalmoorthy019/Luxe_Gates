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

      overflow-hidden

      transition-all

      duration-300

      ${active
                    ? "bg-gradient-to-r from-[#D4AF37] via-[#C89B3C] to-[#A67C1F] text-white shadow-[0_12px_30px_rgba(212,175,55,0.35)]"
                    : "text-zinc-300 hover:bg-[#182234] hover:text-white"
                }
      `}
        >
            {/* Active Indicator */}

            {active && (
                <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-white"></div>
            )}

            {/* Icon */}

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
                        : "bg-[#111A2A] group-hover:bg-[#D4AF37] group-hover:text-black"
                    }
        `}
            >
                {icon}
            </div>

            {/* Title */}

            <span className="font-semibold tracking-wide">
                {title}
            </span>

        </Link>
    );
}

export default SidebarItem;
import { Eye, Pencil, Trash2 } from "lucide-react";

function GalleryCard({ gate, onView, onDelete, onEdit }) {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border hover:shadow-xl transition-all">

            <img
                src={gate.image}
                alt={gate.name}
                className="w-full h-64 object-cover"
            />

            <div className="p-5">

                <div className="flex justify-between items-center mb-3">

                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                        {gate.category}
                    </span>

                    <span className="font-bold">
                        {gate.price}
                    </span>

                </div>

                <h2 className="text-xl font-semibold mb-5">
                    {gate.name}
                </h2>

                <div className="flex gap-2">

                    {/* View */}
                    <button
                        onClick={() => onView(gate)}
                        className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl py-3 flex justify-center items-center gap-2"
                    >
                        <Eye size={18} />
                        View
                    </button>

                    {/* Edit */}
                    <button
                        onClick={() => onEdit(gate)}
                        className="w-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center"
                    >
                        <Pencil color="white" size={18} />
                    </button>

                    {/* Delete */}
                    <button
                        onClick={() => onDelete(gate.id)}
                        className="w-12 bg-red-600 hover:bg-red-700 rounded-xl flex items-center justify-center"
                    >
                        <Trash2 color="white" size={18} />
                    </button>

                </div>

            </div>

        </div>
    );
}

export default GalleryCard;
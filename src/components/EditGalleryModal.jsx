import { useState } from "react";

function EditGalleryModal({ gate, onSave, onClose }) {
    const [name, setName] = useState(gate.name);
    const [category, setCategory] = useState(gate.category);
    const [price, setPrice] = useState(gate.price);
    const [image, setImage] = useState(gate.image);

    const categories = [
        "Sliding",
        "Swing",
        "Designer",
        "Industrial",
        "Cantilever",
        "Wood Finish",
        "Uploaded",
    ];

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const imageUrl = URL.createObjectURL(e.target.files[0]);
            setImage(imageUrl);
        }
    };

    const handleSave = () => {
        onSave({
            ...gate,
            name,
            category,
            price,
            image,
        });
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

            <div className="bg-white rounded-3xl w-[550px] max-h-[90vh] overflow-y-auto p-8 relative">

                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-3xl hover:text-red-500"
                >
                    ×
                </button>

                <h2 className="text-3xl font-bold mb-6">
                    Edit Gate
                </h2>

                {/* Image Preview */}

                <div className="flex justify-center mb-6">

                    <img
                        src={image}
                        alt={name}
                        className="w-72 h-48 object-cover rounded-2xl border shadow"
                    />

                </div>

                {/* Name */}

                <div className="mb-5">

                    <label className="block mb-2 font-semibold">
                        Gate Name
                    </label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border rounded-xl p-3 outline-none focus:border-yellow-600"
                    />

                </div>

                {/* Category */}

                <div className="mb-5">

                    <label className="block mb-2 font-semibold">
                        Category
                    </label>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border rounded-xl p-3 outline-none focus:border-yellow-600"
                    >
                        {categories.map((item) => (
                            <option key={item}>{item}</option>
                        ))}
                    </select>

                </div>

                {/* Price */}

                <div className="mb-5">

                    <label className="block mb-2 font-semibold">
                        Price
                    </label>

                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full border rounded-xl p-3 outline-none focus:border-yellow-600"
                    />

                </div>

                {/* Replace Image */}

                <div className="mb-8">

                    <label className="block mb-2 font-semibold">
                        Replace Image
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full"
                    />

                </div>

                {/* Buttons */}

                <div className="flex justify-end gap-4">

                    <button
                        onClick={onClose}
                        className="px-6 py-3 rounded-xl border hover:bg-zinc-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-xl"
                    >
                        Save Changes
                    </button>

                </div>

            </div>

        </div>
    );
}

export default EditGalleryModal;
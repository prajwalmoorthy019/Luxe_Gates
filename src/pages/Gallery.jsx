import { useState, useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import GalleryCard from "../components/GalleryCard";
import { Search, Upload } from "lucide-react";
import galleryData from "../data/galleryData";
import initialGalleryData from "../data/galleryData";
import EditGalleryModal from "../components/EditGalleryModal";

function Gallery() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedGate, setSelectedGate] = useState(null);
  const [editingGate, setEditingGate] = useState(null);

  const fileInputRef = useRef(null);

  const [uploadedImages, setUploadedImages] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [galleryImages, setGalleryImages] = useState(initialGalleryData);

  const categories = [
    "All",
    "Sliding",
    "Swing",
    "Designer",
    "Industrial",
    "Cantilever",
    "Wood Finish",
    "Uploaded",
  ];

  const processFiles = (files) => {
    const newImages = Array.from(files).map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name.replace(/\.[^/.]+$/, ""),
      category: "Uploaded",
      price: "-",
      image: URL.createObjectURL(file),
      uploaded: true,   // 👈 Add this
    }));

    setUploadedImages((prev) => [...newImages, ...prev]);
  };

  const handleImageUpload = (event) => {
    processFiles(event.target.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    processFiles(e.dataTransfer.files);
  };

  const deleteImage = (id) => {
    if (!window.confirm("Delete this image?")) return;

    // Remove uploaded images
    setUploadedImages((prev) =>
      prev.filter((image) => image.id !== id)
    );

    // Remove default gallery images
    setGalleryImages((prev) =>
      prev.filter((image) => image.id !== id)
    );

    // Close modal if open
    if (selectedGate?.id === id) {
      setSelectedGate(null);
    }
  };

  const updateImage = (updatedGate) => {
    setUploadedImages((prev) =>
      prev.map((img) =>
        img.id === updatedGate.id ? updatedGate : img
      )
    );

    setGalleryImages((prev) =>
      prev.map((img) =>
        img.id === updatedGate.id ? updatedGate : img
      )
    );

    setEditingGate(null);
  };

  const allImages = [...uploadedImages, ...galleryImages];

  const filteredGallery = allImages.filter((gate) => {
    const matchesSearch = gate.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || gate.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-5xl font-bold">
            Gallery
          </h1>

          <p className="text-zinc-500 mt-2">
            Browse premium gate designs
          </p>
        </div>

        <div>
          <button
            onClick={() => fileInputRef.current.click()}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2"
          >
            <Upload size={18} />
            Upload Images
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={handleImageUpload}
          />
        </div>

      </div>

      {/* Drag & Drop */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
        className={`mb-8 border-2 border-dashed rounded-3xl p-14 text-center cursor-pointer transition-all duration-300 ${dragActive
          ? "border-yellow-500 bg-yellow-50"
          : "border-zinc-300 bg-white hover:border-yellow-500 hover:bg-zinc-50"
          }`}
      >

        <div className="text-6xl mb-4">
          📷
        </div>

        <h2 className="text-2xl font-semibold">
          Drag & Drop Images Here
        </h2>

        <p className="text-zinc-500 mt-2">
          or click anywhere to browse images
        </p>

      </div>

      {/* Search */}
      <div className="bg-white rounded-3xl border p-5 mb-6">

        <div className="flex items-center gap-3 border rounded-2xl px-4 py-3">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search gate..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          />

        </div>

      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-8">

        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-5 py-2 rounded-full transition ${category === item
              ? "bg-yellow-600 text-white"
              : "bg-white border hover:bg-zinc-100"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredGallery.map((gate) => (

          <GalleryCard
            key={gate.id}
            gate={gate}
            onView={setSelectedGate}
            onDelete={deleteImage}
            onEdit={setEditingGate}
          />

        ))}

      </div>

      {/* Modal */}
      {selectedGate && (

        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

          <div className="bg-white rounded-3xl p-6 max-w-4xl w-[90%] relative">

            <button
              onClick={() => setSelectedGate(null)}
              className="absolute top-4 right-5 text-3xl hover:text-red-500"
            >
              ×
            </button>

            <img
              src={selectedGate.image}
              alt={selectedGate.name}
              className="w-full h-[500px] object-cover rounded-2xl"
            />

            <h2 className="text-3xl font-bold mt-6">
              {selectedGate.name}
            </h2>

            <p className="text-zinc-500 mt-2">
              {selectedGate.category}
            </p>

            <p className="text-yellow-700 text-2xl font-bold mt-4">
              {selectedGate.price}
            </p>

          </div>

        </div>

      )}
      {editingGate && (
        <EditGalleryModal
          gate={editingGate}
          onSave={updateImage}
          onClose={() => setEditingGate(null)}
        />
      )}
    </MainLayout>
  );
}

export default Gallery;
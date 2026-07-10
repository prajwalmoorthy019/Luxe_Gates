function Pagination({
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    onPageChange,
}) {
    const start = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div className="flex items-center justify-between mt-6">

            <p className="text-zinc-500">
                Showing {start}–{end} of {totalItems} customers
            </p>

            <div className="flex items-center gap-2">

                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="px-4 py-2 rounded-xl border disabled:opacity-40"
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => onPageChange(i + 1)}
                        className={`w-10 h-10 rounded-xl transition
              ${currentPage === i + 1
                                ? "bg-yellow-600 text-white"
                                : "border hover:bg-zinc-100"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="px-4 py-2 rounded-xl border disabled:opacity-40"
                >
                    Next
                </button>

            </div>

        </div>
    );
}

export default Pagination;
function LogoutModal({ open, onCancel, onConfirm }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-3xl p-8 w-[400px] shadow-2xl">

                <h2 className="text-3xl font-bold mb-4">
                    Sign Out
                </h2>

                <p className="text-zinc-600 mb-8">
                    Are you sure you want to sign out of Luxe Gates?
                </p>

                <div className="flex justify-end gap-4">

                    <button
                        onClick={onCancel}
                        className="px-6 py-3 rounded-xl border hover:bg-zinc-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white"
                    >
                        Sign Out
                    </button>

                </div>

            </div>

        </div>
    );
}

export default LogoutModal;
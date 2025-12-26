import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const HistorySidebar = ({ isOpen, onClose, onLoadReview }) => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (isOpen) {
            fetchHistory();
        }
    }, [isOpen]);

    const fetchHistory = async () => {
        setLoading(true);
        try {
            // const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
            const res = await axios.get(`${API_URL}/ai/history`)
            setHistory(res.data);
        } catch (error) {
            console.log("Failed to fetch history: ", error);
        } finally {
            setLoading(false)
        }
    }

    const handleClearHistory = async () => {
        if (!window.confirm("Are you sure you want to delete all past reviews? This cannot be undone")) {
            return;
        }

        try {
            await axios.delete(`${API_URL}/ai/history`)
            console.log("History deleted successfully.")
            setHistory([])
        } catch (error) {
            console.error("Failed to clear history: ", error)
            res.status(500).send("Failed to clear history. Please try again.")
        }
    }

    return (
        <div
            className={`fixed inset-y-0 left-0 w-80 bg-[#1a1a1a] shadow-2xl transform transition-transform duration-300 z-50 border-r border-gray-700 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-900">
                <h2 className="text-white font-bold text-lg">📜 Past Reviews</h2>

                <div className="flex gap-2">
                    <button
                        onClick={handleClearHistory}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded transition-colors"
                        title="Clear All History"
                    >
                        Clear
                    </button>

                    <button onClick={onClose} className="text-gray-400 hover:text-white p-2">
                        ✖
                    </button>
                </div>
            </div>

            <div className="overflow-y-auto h-full p-4 pb-20 custom-scrollbar">
                {loading ? (
                    <p className="text-gray-500 text-center mt-10">Loading history...</p>
                ) : history.length === 0 ? (
                    <p className="text-gray-500 text-center mt-10">No reviews yet.</p>
                ) : (
                    history.map((item) => (
                        <div
                            key={item._id}
                            onClick={() => onLoadReview(item)}
                            className="bg-gray-800 p-3 rounded-lg mb-3 cursor-pointer hover:bg-gray-700 hover:border-blue-500 border border-transparent transition-all group"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded uppercase">
                                    {item.language || 'Code'}
                                </span>
                                <span className="text-xs text-gray-500">
                                    {new Date(item.createdAt).toLocaleDateString()}
                                </span>
                            </div>

                            <p className="text-gray-400 text-sm line-clamp-2 font-mono bg-black/30 p-2 rounded">
                                {item.code.slice(0, 50)}...
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default HistorySidebar
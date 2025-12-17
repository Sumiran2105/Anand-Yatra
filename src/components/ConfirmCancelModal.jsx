import React from "react";
import { motion } from "framer-motion";

export default function ConfirmCancelModal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center"
      >
        <h2 className="text-lg font-bold text-gray-900">Cancel Booking?</h2>

        <p className="text-gray-600 mt-2">
          Are you sure you want to cancel this booking?
        </p>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-xl border border-gray-300 hover:bg-gray-100"
          >
            No
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600"
          >
            Yes, Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
}

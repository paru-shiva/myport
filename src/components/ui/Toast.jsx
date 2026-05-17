import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 left-4 right-4 z-[100] mx-auto flex max-w-md items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl sm:left-auto sm:right-6"
        >
          {type === 'success' ? (
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" aria-hidden />
          ) : (
            <XCircle className="h-5 w-5 shrink-0 text-red-400" aria-hidden />
          )}
          <p className="flex-1 text-sm text-slate-200">{message}</p>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white"
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

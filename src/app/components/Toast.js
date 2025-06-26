"use client";
import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ToastContext = createContext();

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}


export function ToastProvider({ children }) {

  const [toasts, setToasts] = useState([]);
  const position = 'top-right';

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((message, options = {}) => {
    const {
      type = 'info',
      duration = 5000
    } = options;

    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type, visible: true }]);

    if (duration !== 0) {
      setTimeout(() => {
        dismissToast(id);
      }, duration);
    }
  }, [dismissToast]);

  const handleDismiss = useCallback(() => {
    dismissToast();
  }, [dismissToast]);

  // Clean up window.toast when component unmounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.toast = showToast;
      return () => {
        delete window.toast;
      };
    }
  }, [showToast]);

  const getPositionClasses = (pos) => {
    const classes = {
      'top-left': 'top-4 left-4',
      'top-center': 'top-4 left-1/2 -translate-x-1/2',
      'top-right': 'top-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
      'bottom-right': 'bottom-4 right-4',
    };
    return classes[pos];
  };

  const getToastColor = (type) => {
    const colors = {
      info: 'bg-blue-600',
      success: 'bg-green-600',
      error: 'bg-red-600',
      warning: 'bg-amber-500',
    };
    return colors[type];
  };

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}
      
      <div className={`fixed z-50 space-y-2 ${getPositionClasses(position)}`}>
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: position.includes('right') ? 100 : position.includes('left') ? -100 : 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className={`flex items-center justify-between min-w-[300px] max-w-md px-4 py-3 rounded-lg shadow-lg text-white ${getToastColor(toast.type)}`}
            >
              <span>{toast.message}</span>
              <button 
                onClick={() => dismissToast(toast.id)}
                className="ml-4 text-white hover:text-white/70 focus:outline-none"
                aria-label="Dismiss toast"
              >
                &times;
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
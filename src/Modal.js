import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ isOpen, children, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 30,
            left: "50%",
            transform: "translate3d(-50%, 0, 0)",
          }}
        >
          <motion.div initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 30 }}>
            <button onClick={onClose}>Close</button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

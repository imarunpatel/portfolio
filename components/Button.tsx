"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Modal from "./ui/Modal";
import PdfViewer from "./PdfViewer";

const Button = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <motion.div onClick={openModal} className="inline-flex h-12 w-fit animate-shimmer cursor-pointer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      Resume
    </motion.div>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
        <PdfViewer file="/resume.pdf" />
    </Modal>
    </>
  );
};

export default Button;

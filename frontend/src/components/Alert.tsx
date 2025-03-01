import React, { useEffect } from "react";

interface AlertProps {
  message: string | null;
  type: "success" | "error";
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto-close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-lg text-white text-center max-w-md w-full
      ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Alert;

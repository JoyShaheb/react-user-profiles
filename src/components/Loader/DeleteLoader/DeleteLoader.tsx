import React from "react";
import styles from "./DeleteLoader.module.scss";

function DeleteLoader({ message }: { message: string }) {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className={`${styles.overlay} fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}
    >
      <div className="relative w-full h-full max-w-md h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-normal text-gray-500 dark:text-gray-400">
              {message}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteLoader;

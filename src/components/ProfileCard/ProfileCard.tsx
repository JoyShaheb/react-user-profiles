import React from "react";
import { Link } from "react-router-dom";
import { IPerson } from "../../types";

export interface CardProps extends IPerson {
  onDelete: (id: string) => void;
}
const ProfileCard: React.FC<CardProps> = ({
  firstName,
  id,
  lastName,
  picture,
  title,
  onDelete,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-full" src={picture} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title} {firstName} {lastName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {/* description here */}
        </p>
        <div className="flex gap-2">
          <Link
            to={`/users/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <i className="bi bi-eye"></i>
          </Link>
          <button
            onClick={() => onDelete(id)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-800"
          >
            <i className="bi bi-trash3-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

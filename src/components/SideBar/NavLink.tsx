import { Link } from "react-router-dom";

type NavLinkProps = {
  to: string;
  text: string;
  icon?: React.ReactNode;
  count?: number;
};

const NavLink: React.FC<NavLinkProps> = ({ to, text, icon, count }) => {
  return (
    <Link
      to={to}
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {icon}
      <span className="flex-1 ml-3 whitespace-nowrap">{text}</span>
      {count && (
        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
          {count}
        </span>
      )}
    </Link>
  );
};

export default NavLink;

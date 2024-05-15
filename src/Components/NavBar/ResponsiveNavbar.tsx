import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth/authStore";

interface ResponsiveNavbarProps {
  isOpen: boolean;
}

export const ResponsiveNavbar: React.FC<ResponsiveNavbarProps> = ({
  isOpen,
}) => {
  const { user, userId } = useAuthStore((state) => ({
    userId: state.userId,
    user: state.userData,
  }));

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen
          ? "opacity-100 w-full flex flex-col items-center lg:bg-inherit backdrop-blur-md px-8"
          : "opacity-0 hidden"
      } md:hidden`}
    >
      <ul className="flex font-medium text-text flex-col items-center gap-5 divide-y divide-slate-600 py-2 w-full my-5">
        <li className="w-full border-t border-slate-600 text-center pt-2 hover:text-secondary duration-300 transition-all">
          <Link to={"/about"}>About us</Link>
        </li>
        <li className="pt-2 w-full text-center hover:text-secondary duration-300 transition-all">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="pt-2 w-full text-center hover:text-secondary duration-300 transition-all">
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>

      <div className="border-t border-slate-600 w-full py-5 flex items-center justify-center">
        {userId ? (
          <>
            <Link to={user?.role === 'admin' ? '/dashboard/admin': '/profile'}>
              {user?.role === 'admin' ? 'dashboard': 'perfil'}
            </Link>
          </>
        ) : (
          <button className="bg-secondary hover:bg-orange-600 transition-all duration-200 px-4 py-2 text-white font-semibold rounded-sm">
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};

import { IoMdMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { UserMenu } from "../../userMenu/UserMenu";

const Header = (
  props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
  }
) => {
 

  return (
    <header className="sticky top-0 z-40 flex w-full bg-white drop-shadow-sm">
      <div className="flex flex-grow items-center justify-between lg:justify-end px-4 py-4 shadow-md md:px-6 2xl:px-11">

        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation()
              props.setSidebarOpen(!props.sidebarOpen);
            }}
          >
            <IoMdMenu size={20} className="text-comp"/>
          </button>

          <Link className="block flex-shrink-0 lg:hidden" to={'/'}>
            <IoHomeOutline size={20} className="text-comp"/>
          </Link>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <UserMenu /> 
        </div>

      </div>
    </header>
  )
}

export default Header

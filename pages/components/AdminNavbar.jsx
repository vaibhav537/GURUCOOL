import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const AdminNavbar = () => {
  const router = useRouter();

  const handleLogout = () => {
   localStorage.removeItem('ADMIN_ACCESS');
   router.push("/admin")
    
  }
  return (
    <div>
      <div>
        <Image
          src="/images/AdminLogo.png"
          width={150}
          height={150}
          alt="LOGO"
          className="select-none pl-10 ml+-[7px] w-[166px] mb-5  transition-all duration-1000 dark:invert-[1]"
        />
        <p className=" text-xl ml-[24px] font-extrabold  dark:text-slate-200 transition-all duration-1000 select-none  text-teal-900 drop-shadow-2xl font-Garamond dark:shadow-white">
          MEET IN - ADMIN
        </p>
        <ul className="flex flex-col mt-[3rem]">
          <Link legacyBehavior href={"/admin/ifqRPHleaQkbEvmwOPEqb"}>
            <a
              className={`select-none  flex uppercase items-center  border-2 justify-center p-2 font-Crimson font-semibold mb-[2rem] text-[23px] 
              ${
                router.pathname == "/admin/ifqRPHleaQkbEvmwOPEqb"
                  ? " border-black bg-teal-200 rounded hover:border-gray-500 text-black hover:text-teal-700 transition-all "
                  : "text-black border-teal-300 dark:border-slate-800  lg:text-gray-500 hover:text-teal-700 transition-all "
              }
            `}
            >
              Home Admin
            </a>
          </Link>
          <Link legacyBehavior href={"/admin/Addcategory"}>
            <a
              className={`select-none  flex items-center border-2 uppercase  justify-center p-2 font-Crimson font-semibold mb-[2rem] text-[23px]
              ${
                router.pathname == "/admin/Addcategory"
                  ? "  border-black bg-teal-200 rounded hover:border-gray-500 text-black hover:text-teal-700 transition-all "
                  : "text-black border-teal-300 dark:border-slate-800   lg:text-gray-500 hover:text-teal-700 transition-all "
              }
            `}
            >
              Add Category
            </a>
          </Link>
          <Link legacyBehavior href={"/admin/DeleteCategory"}>
            <a
              className={`select-none  flex items-center border-2   justify-center p-2 font-Crimson font-semibold mb-[2rem] text-[23px] 
              ${
                router.pathname == "/admin/DeleteCategory"
                  ? " border-black bg-teal-200 rounded hover:border-gray-500 text-black hover:text-teal-700 transition-all "
                  : "text-black  border-teal-300 dark:border-slate-800  lg:text-gray-500 hover:text-teal-700 transition-all "
              }
            `}
            >
              DELETE CATEGORY
            </a>
          </Link>
          <Link legacyBehavior href={"/admin/UpdateCategory"}>
            <a
              className={`select-none  flex items-center border-2   uppercase justify-center p-2 font-Crimson font-semibold mb-[2rem] text-[23px] 
            ${
              router.pathname == "/admin/UpdateCategory"
                ? " border-black bg-teal-200 rounded hover:border-gray-500 text-black hover:text-teal-700 transition-all "
                : "text-black  border-teal-300 dark:border-slate-800  lg:text-gray-500 hover:text-teal-700 transition-all "
            }
          `}
            >
              Update Category
            </a>
          </Link>
          <Link legacyBehavior href={"/admin/Ranking"}>
            <a
              className={`select-none  flex uppercase items-center  border-2 justify-center p-2 font-Crimson font-semibold mb-[2rem] text-[23px] 
              ${
                router.pathname == "/admin/Ranking"
                  ? " border-black bg-teal-200 rounded hover:border-teal-500 text-black hover:text-teal-700 transition-all "
                  : "text-black border-teal-300 dark:border-slate-800  lg:text-gray-500 hover:text-teal-700 transition-all "
              }
            `}
            >
              Ranking
            </a>
          </Link>
          <div
            className="select-none  flex uppercase items-center justify-center p-2 font-Crimson font-semibold mb-[2rem] text-[23px] 
                   bg-teal-300 rounded hover:border-teal-500 text-slate-500 hover:text-teal-700 transition-all "
            onClick={handleLogout}
          >
            Logout
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AdminNavbar;

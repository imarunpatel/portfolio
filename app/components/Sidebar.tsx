import Image from "next/image";
import Link from "next/link";

export const menuItems = [
  { name: "Home", path: "/", icon: 'fa-solid fa-igloo' },
  { name: "Experience", path: "/experience", icon: 'fa-solid fa-address-card' },
  { name: "Project", path: "/project", icon: 'fa-solid fa-computer'},
  { name: "Contact", path: "/contact", icon: 'fa-solid fa-address-book'},
];

const Sidebar = () => {

  return (
    <aside className="hidden sm:block w-14 md:w-48 h-screen transition-all duration-100 
                ease-out shadow-md fixed bg-violet-50/5">
      <div className="flex flex-col justify-between h-full">
        <div className="pt-10 flex justify-center">
          <div className="avatar w-10 md:w-24 rounded-full overflow-hidden">
              <Image layout="responsive" src="https://arunpatel.skillstrack.in/img/arun.jpg" alt="Avatar" width={1} height={1} />
          </div>
        </div>
        <nav className="mt-4">
          <ul>
            {menuItems.map((item) => (
              <li key={item.path} className="hover:bg-gray-200 flex">
                <Link href={item.path} className=" p-4 flex items-center text-gray-500 gap-2 w-full">
                  <i className={item.icon}></i>
                  <span className="hidden md:block">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="bottom pys-6 px-2">
          {/* LinkedIn, Facebook */}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
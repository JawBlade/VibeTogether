import { HiHome } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

function Navbar(){ 
  return (
    <>  
        <div className='flex justify-between items-center outline text-white m-1 p-2'>
            <div>
                <img src="/logo2.png" className="content-center w-16 h-16 rounded-full object-cover object-center" />
            </div>

            <div className="flex items-center space-x-2 m-4">

            <div className="rounded-full p-2 bg-[#1f1f1f] hover:bg-[#2a2a2a] transition duration-200 ease-in transform hover:scale-105">
                <HiHome className="h-7 w-7 " />
            </div>

            <div className="flex items-center rounded-full p-2 bg-[#1f1f1f] hover:bg-[#2a2a2a] transition-colors duration-200 ease-in hover:border border-white/10">

                <GoSearch className="h-7 w-7 mr-2 text-gray-300 group-hover:text-white" />

                <input
                type="text"
                placeholder="What do you want to play?"
                className="bg-transparent text-white group-hover:text-white focus:outline-none w-64"
                />
            </div>

            </div>

            <div className="outline content-center rounded-full object-cover object-center mr-4">
                <CgProfile className="h-10 w-10" />
            </div>
        </div>
    </>
  );
};

export default Navbar;
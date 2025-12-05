import { HiHome } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

function Navbar(){ 
  return (
    <>  
        <div className='flex justify-between items-center outline text-white m-1 p-2'>
            <div>
                <img src="/logo2.png" className="content-center w-15 h-15 rounded-full object-cover object-center" />
            </div>

            <div className="flex items-center space-x-4 content-center rounded-full object-cover object-center m-4">

                <div className="outline rounded-full p-2 ">
                    <HiHome />
                </div>

                <div className="w-50 outline rounded-full p-2">
                    <GoSearch />
                </div>
                
            </div>

            <div className="outline content-center rounded-full object-cover object-center">
                <CgProfile />
            </div>
        </div>
    </>
  );
};

export default Navbar;
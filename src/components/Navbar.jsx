import { HiHome } from "react-icons/hi";
import { GoSearch } from "react-icons/go";

function Navbar(){ 
  return (
    <>  
        <div className='flex items-center outline text-white m-1'>
            <div>
                <img src="/logo2.png" className="content-center w-32 h-32 rounded-full object-cover object-center" />
            </div>

            <div className="outline content-center rounded-full object-cover object-center m-4">
                <HiHome />
            </div>

            <div className="outline content-center rounded-full object-cover object-center">
                <GoSearch />
            </div>
        </div>
    </>
  );
};

export default Navbar;
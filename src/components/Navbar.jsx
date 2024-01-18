import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {
  const count = useSelector((state) => state);
  const total= count.cart.length
  
  return (
    <div>
      <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          
          <div className="ml-5">
            <img 
          className="h-14"
          
          src="./logo.png"></img>

          </div>
        </NavLink>

        <div className="flex item-center font-medium text-slate-100 
        mr-5 space-x-6">
          <NavLink to="/">
          <p>Home</p>
          </NavLink>

          <NavLink to="/cart" 
          className="relative">
          
          <FaShoppingCart className="text-2xl"></FaShoppingCart>
          {
            count.cart.length >0 &&
            <div 
          className="absolute bg-green-600 text-xs w-5 h-5 
          flex justify-center items-center animate-bounce -top-1 -right-2 
          rounded-full top- text-white"
          >{total}</div>
          }
          </NavLink>
        </div>
      </div>
    </div>
  )
};

export default Navbar;

import React from "react";
import {Link} from "react-router-dom"
import { SlBasket, SlHeart, SlUser  } from "react-icons/sl";

function Header() {
  return (
    <div className=" flex items-center justify-between border-b border-gray-200 p-5">
      <Link to="/" className='logo flex items-center gap-5'>
        <img src='/react.svg' alt='logo' className='logo__img ' />
        <div className='logo__text'>
          <strong className='uppercase text-2xl'>
            React sneakers
          </strong>
          <span className='block'>Магазин лучших кроссовок</span>
        </div>
      </Link>
      
     <div className="flex items-center gap-10">
        <Link to="basket" className="flex items-center gap-2 cursor-pointer hover:scale-110 "><SlBasket/> <span className="font-semibold">1205 rub</span></Link>
        <Link to="bookmarks" className="flex items-center gap-2 cursor-pointer hover:scale-110"><SlHeart/> <span>Закладки</span></Link>
        <Link to="/" className="flex items-center gap-2 cursor-pointer hover:scale-110"><SlUser/> <span>Профиль</span></Link>
     </div>
    </div>
  );
}

export default Header;

import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaSearch, FaRegHeart, FaHeart, FaPlus, FaCheck } from "react-icons/fa";
import { sneakers } from "../data/sneakers";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import {
  setSneakers,
  toggleBasket,
  toggleFavorite,
} from "../redux/slices/sneakersSlice";
import { useState } from "react";

function Cards() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSneakers(sneakers));
  }, [dispatch]);
  const [nameFilter, setNameFilter] = useState("")

  const sneakersData = useSelector((state) => state.sneakers.sneakers);
  
  const filterSneakers = sneakersData.filter((card) => card.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
  const handleToggleBasket = (card) => {
    dispatch(toggleBasket(card.id));
  };
  const handleToggleIsFavorite = (card) => {
    dispatch(toggleFavorite(card.id));
  };
  return (
    <>
      <div className='bg-[#F4EFE9] flex items-center justify-between mt-10 rounded-3xl'>
        <div className='ml-20'>
          <h3 className='banner__title text-4xl font-bold text-[#A5D364] text-left'>
            Stan Smith, <span className='block text-black'>Forever</span>
          </h3>
          <button className='hover:scale-110 cursor-pointer px-10 py-2 mt-10 text-white text-xl bg-[#A5D364] rounded-3xl'>
            КУПИТЬ
          </button>
        </div>
        <img src='image-banner.png' alt='banner' />
        <MdKeyboardArrowRight className='bg-white w-10 h-10 rounded-full -mr-5 cursor-pointer hover:h-20' />
      </div>
      <div className='flex items-center justify-between mt-5 '>
        <h3 className='font-bold text-3xl '>Все кроссовки</h3>
        <div className='flex items-center gap-2 px-4 py-2 w-100 border-1 border-gray-300 rounded-2xl '>
          {" "}
          <FaSearch className='text-gray-400' />{" "}
          <input
            type='text'
            value={nameFilter}
            onChange={(e)=> setNameFilter(e.target.value)}
            className='bg-none p-2 w-full'
            placeholder='Поиск...'
          />{" "}
        </div>
      </div>
      <div className='grid grid-cols-4 gap-10 mt-10'>
        {filterSneakers.map((card, i) => (
          <div
            key={i}
            className='border-1 rounded-4xl p-5 border-gray-300 text-left relative'
          >
            <div
              onClick={() => handleToggleIsFavorite(card)}
              className='p-2 border-1 border-gray-400 absolute top-2 right-2 rounded-full cursor-pointer'
            >
              {card.isFavorite ? (
                <FaHeart className='text-red-500' />
              ) : (
                <FaRegHeart />
              )}
            </div>
            <div
              onClick={() => handleToggleBasket(card)}
              className={`border border-gray-400 absolute bottom-4 right-2 rounded-xl cursor-pointer p-2 
              ${card.toBasket && "bg-green-500 text-white"}`}
            >
              {card.toBasket ? <FaCheck className='text-white' /> : <FaPlus />}
            </div>

            <img className="w-full" src={card.image} />
            <h4 className='font-semibold'>{card.name}</h4>
            <p className='text-gray-400'>
              ЦЕНА:{" "}
              <span className='block font-bold text-black'>
                {card.price} {card.currency}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;

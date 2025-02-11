import React from "react";

import { FaRegHeart, FaHeart, FaPlus, FaCheck } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggleBasket, toggleFavorite } from "../redux/slices/sneakersSlice";

function Bookmarks() {
  const sneakers = useSelector((state) => state.sneakers.sneakers);
  const bookmarks = sneakers.filter((card) => card.isFavorite === true);
  const dispatch = useDispatch();
  const handleToggleBasket = (card) => {
    dispatch(toggleBasket(card.id));
  };

  const handleToggleIsFavorite = (card) => {
    dispatch(toggleFavorite(card.id));
  };
  return (
    <div className='mt-10'>
      <h3 className='font-bold text-2xl col-span-5 '>Мои закладки</h3>
      {bookmarks.length ? (
        <div className='grid grid-cols-5 gap-5 mt-10'>
          {bookmarks.map((card, i) => (
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
                {card.toBasket ? (
                  <FaCheck className='text-white' />
                ) : (
                  <FaPlus />
                )}
              </div>

              <img src={card.image} />
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
      ) : (
        <div className='col-span-5 text-center mt-10'>
          <img src='/emptyBookmark.svg' className='m-auto' />
          <h3 className='font-semibold text-2xl mt-10'> Закладок нет :(</h3>
          <p className='text-gray-300'>Вы ничего не добавляли в закладки </p>
          <a
            href='/'
            className='bg-green-400 text-white px-10 py-2 flex items-center gap-10 justify-center rounded-2xl text-xl hover:text-black mt-10'
          >
            {" "}
            <MdArrowBack /> Вернуться назад
          </a>
        </div>
      )}
    </div>
  );
}

export default Bookmarks;

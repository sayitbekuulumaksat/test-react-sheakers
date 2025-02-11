import React from "react";
import { MdClear, MdArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleBasket } from "../redux/slices/sneakersSlice";

function Basket() {
  const dispatch = useDispatch();
  const sneakers = useSelector((state) => state.sneakers.sneakers);

  const handleRemoveFromBasket = (card) => {
    dispatch(toggleBasket(card.id));
  };
  const basket = sneakers.filter((card) => card.toBasket === true);
  const totalPrice = basket.reduce((sum, card) => sum + card.price, 0);
const tax = (totalPrice * 0.05).toFixed(2); 

  return (
    <div className='text-left   mt-10'>
      <h3 className='font-bold text-2xl'>Корзина</h3>
      {basket.length ? (
        <div>
          {basket.map((card, i) => (
            <div
              key={i}
              className='border-1 border-gray-300 mt-2 h-30 p-5 flex items-center gap-5 relative rounded-2xl w-100 text-left relative'
            >
              <img src={card.image} alt='' className='h-full ' />
              <div>
                <h4>{card.name}</h4>
                <strong>{card.price + card.currency}</strong>
              </div>
              <div
                onClick={() => handleRemoveFromBasket(card)}
                className='absolute p-2 rounded-xl right-2 bottom-2 bg-gray-200 cursor-pointer hover:scale-110'
              >
                <MdClear />
              </div>
            </div>
          ))}
          <div className='grid gap-3 mt-5 items-end'>
            <div className='flex items-center gap-1 justify-between'>
              <span>Итого:</span>
              <hr className='w-40' />
              <strong>{totalPrice}</strong>
            </div>
            <div className='flex items-center gap-1 justify-between'>
              <span>Налог 5%:</span>
              <hr className='w-40' />
              <strong>{tax}</strong>
            </div>
            <button className='bg-green-500 p-2 rounded-xl cursor-pointer hover:text-white'>
              Оформить заказы
            </button>
          </div>
        </div>
      ) : (
        <div className='text-center mt-10'>
          <img src='/basketEmpty.svg' className='m-auto' />
          <h3 className='font-semibold text-2xl mt-10'> Корзина пустая</h3>
          <p className='text-gray-300'>
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
          </p>
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

export default Basket;

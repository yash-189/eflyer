import React from 'react';
import ButtonOne from '../button/ButtonOne';

const ProductCard = ({ id, title, price, image, description, rating,category }) => {




  const handleAddToCart = async () => {
 
  };

  const handleOnClick = (id) => {
  
  };

  return (
    <>
      <div
        className="flex flex-col max-w-xs items-center my-4 p-1 rounded  hover:shadow transition-all pb-4  bg-white"
       
      >
          <p className="text-gray-900 font-bold capitalize  mb-2  text-center px-4 whitespace-break-spaces">{category}</p>

        <div onClick={() => handleOnClick(id)} className="flex flex-col items-center cursor-pointer">
          <img src={image} className="w-full h-80 object-contain p-2" alt={title} />

          <h4 className="text-lg px-10 text-center font-semibold flex capitalize mt-1 sm:h-14 h-auto truncate whitespace-break-spaces">{title}</h4>
          <div className="flex sm:mt-4 mt-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`cursor-pointer text-xl ${index < (rating || 0) ? 'text-[gold]' : 'text-[#D3D3D3]'}`}

              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
        <div className='sm:h-28 h-auto'>
          <p className="text-gray-500 sm:mt-4 mt-2 text-sm text-center px-4 whitespace-break-spaces">{description.slice(0, 80)}...</p>

          <h3 className="text-xl font-semibold flex items-center mt-4 text-[#ffc300] mb-2 justify-center font-arimo">
            ₹{price}
          </h3>
        </div>
        <div
          className={`mt-4 mb-4 w-40 `}
        >
        
            <ButtonOne title={'Add to cart'} onClick={() => handleAddToCart()} />
         
        </div>
      </div>
    </>
  );
};

export default ProductCard;

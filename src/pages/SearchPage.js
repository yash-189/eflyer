import React, { useEffect } from 'react';
import ProductCard from '../components/cards/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/loader/Loader';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { searchItem, selectItemError, selectItemStatus, selectItems } from '../features/items/itemSlice';

const SearchPage = () => {

  const {searchTerm} = useParams()
  const dispatch = useDispatch()
  const items = useSelector(selectItems)
  const status = useSelector(selectItemStatus)
  const error = useSelector(selectItemError)

  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])


  useEffect(() => {
   dispatch(searchItem(searchTerm))
  }, [dispatch])
  




  if (status === 'loading') {
    return <div className=' h-[calc(90vh-4rem)] w-full flex justify-center items-center'>
      <Loader />
    </div>;
  }

  if (status === 'error') {
    return <div>{error}</div>;
  }

  

  return (
    <>
    
      <section className="font-arimo container max-w-screen-xl mx-auto py-8 min-h-screen mt-56 ">
      <h2 className='font-arimo text-3xl text-center font-bold px-4 mb-4 relative after:w-40 after:bg-transparent after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:border-b-4 after:border-[#ffc300] z-0  '>Search results ({items.length})</h2>
     
        <hr className='mb-10 px-4' />
{items=='' && <p className='text-center'>No result found</p>}
<div className='flex flex-wrap justify-around  gap-4'>
          {items.map((product) => (
            <ProductCard id={product.id} title={product.title} price={product.price} image={product.image} description={product.description} rating={product?.rate} category={product.category} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SearchPage;

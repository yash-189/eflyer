import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import { Carousel } from 'flowbite-react'
import ProductCard from '../components/cards/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchitems } from '../features/items/api'
import {  selectItemStatus, selectItems } from '../features/items/itemSlice'
import { useNavigate } from 'react-router-dom'
import banner from '../assets/banner.png'
import { Loader } from '../components/loader/Loader'



const LeftIcon = () => {
    return (
        <button className='bg-black/20 rounded-full text-white p-4 hover:bg-black/40'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

        </button>
    )
}
const RightIcon = () => {
    return (
        <button className='bg-black/20 rounded-full text-white p-4 hover:bg-black/40'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>


        </button>
    )
}


const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const items = useSelector(selectItems)


    const status = useSelector(selectItemStatus)

    useEffect(() => {

        dispatch(fetchitems())
    }, [dispatch])



    // if (status === 'loading') {
    //     return (
    //         <div className=' h-[calc(90vh-4rem)] w-full flex justify-center items-center fixed z-50 '>
    //             <Loader />
    //         </div>
    //     )
    // }

   

    return (
        <>



            <section className=' mx-auto   font-arimo '>
              


                 
                    <div className=' '>


                        <Carousel leftControl={<LeftIcon />} rightControl={<RightIcon />} draggable={false} className='font-arimo md:h-full sm:h-[20rem] h-56 ' >
                            <div className='relative flex justify-center items-center  h-full'>
                                <div className='absolute md:mt-10 mt-0 md:bottom-20 bottom-10  z-10 text-center' >
                                  
                                    <button onClick={() => navigate('/explore')} type='button' className=' px-4 py-3 uppercase rounded text-white bg-black hover:bg-black/80 transition-colors  '>

                                        Buy Now
                                    </button>
                                </div>
                                <img
                                    className='md:h-screen h-[30rem] w-full relative md:object-cover object-contain '
                                    alt="..."
                                    src={banner}
                                />
                            </div>
{/* 
                                <img
                                    alt="..."
                                    className='h-full object-cover'
                                    src={banner}
                                /> */}
                          




                        </Carousel>
                    </div>

 
       



                <div className='md:mt-20 mt-10 max-w-screen-xl mx-auto'>
                    <h2 className='font-arimo text-4xl text-center font-bold px-4 mb-4 relative after:w-40 after:bg-transparent after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:border-b-4 after:border-[#ffc300] z-0  '>Man & Woman Fashion</h2>
                    <hr className='mb-10 px-4' />


                    <div className='flex flex-wrap justify-around  gap-4'>


                        {items && items?.map((product) => {
                            return <ProductCard id={product.id} title={product.title} price={product.price} image={product.image} description={product.description} rating={product?.rate} category={product.category} />
                        })}
                    </div>

                </div>

            </section>

          
            <Footer />
        </>
    )
}

export default Home
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchByCategory, fetchCategory } from '../features/items/api'
import { searchItem, selectCategories } from '../features/items/itemSlice'





const Navbar = () => {

  const navigate = useNavigate()
  const location = useLocation()


  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const [showNav, setshowNav] = useState(false)
  const categories = useSelector(selectCategories)
  const [showCategories, setshowCategories] = useState(false)
  const [showbgColor, setshowbgColor] = useState(false)
  const [categy, setcategy] = useState('')





  useEffect(() => {



    dispatch(fetchCategory())
 
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      console.log("🚀 ~ file: Navbar.js:54 ~ useEffect ~ location.pathname:", location.pathname);
      setshowbgColor(true);
    } else {
      setshowbgColor(false);
    }
  }, [location.pathname])
  

  const handleSearchOnchange = (e) => {
    setSearchTerm(e.target.value)

  }




  const handleSearchOnclick = (productname) => {
    setSearchTerm(productname)
    dispatch(searchItem(searchTerm));
    navigate(`search/${productname}`)

  }

  const handleSearchOnSubmit = (e) => {
    e.preventDefault()

    dispatch(searchItem(searchTerm));
    navigate(`search/${searchTerm}`)

  }

  const handleCategory = (category)=>{
    setcategy(category)
    dispatch(fetchByCategory(category))
    navigate(`search/${category}`)
  }

  const moduleStyle = {
    '--notchSize': '3.5rem',
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - var(--notchSize)), calc(100% - var(--notchSize)) 100%, var(--notchSize) 100%, 0 calc(100% - var(--notchSize)))',
  };





  return (
    <>

      <nav className={` z-50 w-full top-0 font-arimo absolute ${showbgColor && 'bg-[#ffc300]'} pb-2`}>
        <div className="max-w-screen-xl  mx-auto px-4 py-4 bg-black/90 text-white md:block hidden " style={moduleStyle}>
          <div className='flex flex-wrap items-center justify-between max-w-2xl mx-auto '>
            <Link to={'/'} className="">
              Best Sellers

            </Link>
            <Link to={'/'} className="">
              Gift Ideas

            </Link>
            <Link to={'/'} className="">
              New Releases

            </Link>
            <Link to={'/'} className="">
              Today's Deals

            </Link>
            <Link to={'/'} className="">
              Customer Service

            </Link>
          </div>
        </div>
        <Link to={'/'}>
          <h1 className=' text-center font-extrabold mt-4 text-5xl text-white md:block hidden'>Eflyer</h1>
        </Link>

        <div className="max-w-screen-xl flex flex-wrap items-center md:justify-evenly justify-between  mx-auto py-4 px-4 rounded-none bg-black md:bg-transparent ">

          <button onClick={() => setshowNav(prev => !prev)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2  text-sm  rounded-lg text-white  focus:outline-none   z-50  order-2 md:order-1" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open menu</span>
            <svg className="w-10 h-10" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>

          <div className='relative order-1 md:order-2  '>
            <p onMouseOver={() => setshowCategories(true)} onMouseOut={() => setshowCategories(false)} className='text-white cursor-pointer  font-medium flex items-center md:bg-black p-2 rounded'>{categy || 'All Category'}<span className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            </span></p>
            <div onMouseOut={() => setshowCategories(false)} onMouseOver={() => setshowCategories(true)} className={`bg-white w-52 z-30  absolute p-4 rounded-md ${showCategories ? 'block transition-all delay-1000' : 'hidden'} `}>
              {categories?.map((category) => {
                return <p className='border-b py-1 text-gray-700 hover:text-[#ffc300] cursor-pointer' onClick={() => handleCategory(category)} >
                  {category}
                </p>
              })}
            </div>

          </div>



          <form onSubmit={handleSearchOnSubmit} className="flex items-center  md:w-2/5 w-full md:order-3 order-3">
            <label for="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="search" value={searchTerm}
                onChange={handleSearchOnchange} id="search" className="bg-gray-50 focus:ring-0 focus-within:outline-none text-gray-900 text-sm rounded-t rounded-b rounded-l  block w-full pl-10 p-2.5  border-none" placeholder="Search" required />




            </div>
            <button onClick={() => handleSearchOnclick(searchTerm)} type="submit" className="p-2.5 text-sm font-medium text-white rounded-r bg-orange-500    hover:scale-105 transition-transform focus:outline-none ">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span className="sr-only">Search</span>
            </button>
          </form>


          <div className='md:flex hidden order-4'>

            <div className='relative'>
             
              <p className='text-black cursor-pointer  font-medium flex items-center bg-white p-2 rounded'>
              <img src={require('../assets/uk.png')} className='h-4 w-4 mr-2 rounded' /> English<span className='ml-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              </span></p>


            </div>






            <NavLink to={'/cart'} className={({ isActive, isPending }) =>
              isPending ? "text-white" : isActive ? "text-white  py-2 pl-4 pr-4  flex border-l" : " py-2 pl-4 pr-4  flex items-center uppercase text-white"
            } >

              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className='h-6 w-6 mr-2 text-white'
              >
                <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
              </svg>

              account


            </NavLink>






            <NavLink to={'/cart'} className={({ isActive, isPending }) =>
              isPending ? "text-white" : isActive ? "text-white  py-2 pl-4 pr-4  flex border-l" : " py-2 pl-4 pr-4  flex items-center uppercase text-white"
            } >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                className='h-6 w-6 mr-2'
              >
                <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
              Cart

            </NavLink>
          </div>


        </div>


{/* mobile sidebar */}

<aside className={`bg-black text-white rounded  px-4 text-center py-4  md:hidden flex flex-col gap-4 w-1/2 h-screen absolute top-0 transition-all duration-300  ${showNav?'translate-x-0':'-translate-x-96'}`}>
<Link to={'/'} className='border-b pb-4'>
          <h1 className=' text-center font-extrabold mt-4 text-4xl text-white'>Eflyer</h1>
        </Link> 

            <Link to={'/'} className="">
              Best Sellers

            </Link>
            <Link to={'/'} className="">
              Gift Ideas

            </Link>
            <Link to={'/'} className="">
              New Releases

            </Link>
            <Link to={'/'} className="">
              Today's Deals

            </Link>
            <Link to={'/'} className="">
              Customer Service

            </Link>









<NavLink to={'/cart'}  >

 

  Account


</NavLink>






<NavLink to={'/cart'} >
 
  Cart

</NavLink>

<div className='relative w-11/12 mx-auto'>
  <p className='text-black cursor-pointer  font-medium flex items-center bg-white p-2 rounded '> English<span className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
  </span></p>


</div>
        
</aside>


      </nav>

    </>
  )
}

export default Navbar
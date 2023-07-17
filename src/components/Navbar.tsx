import  { Link } from 'react-router-dom';
import { ImCart } from 'react-icons/im'
import { useShoppingCart } from '../context/ShoppingCartContext';

const Navbar = () => {
  const { openCart, cartQuantity} = useShoppingCart();
  return (
    <div className='sm:px-40 px-10 py-6 shadow-md w-full flex flex-row justify-between items-center'>
      <div className='flex flex-row gap-10'>
        {/* <Link to='/'>
          <p className='font-bold text-gray-400 hover:text-black'>Home</p>
        </Link> */}

        <Link to='/store'>
          <p className='font-bold text-gray-400 hover:text-black'>Store</p>
        </Link>

        <Link to='/cartitems'>
          <p className='font-bold text-gray-400 hover:text-black'>CartItems</p>
        </Link>
      </div>
      <button className='rounded-full border border-solid border-gray-400 p-3 relative' data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation" onClick={openCart}>
          <ImCart/>
          <div className='rounded-full border-none bg-red-700 text-center absolute -right-3.5 -bottom-3.5 w-7 h-7'>
            <div className='text-white p-0 m-0 flex items-center justify-center'> {cartQuantity} </div>  
          </div>  
      </button>
    </div>
  )
}

export default Navbar
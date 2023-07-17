import { formatCurrency } from '../utils/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

interface StoreItemTypes {
  id:number,
  name:string,
  price:number,
  imgUrl:string
}


const StoreItem = ({id, name, price, imgUrl} : StoreItemTypes)  => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  // const [isAddToCartVisible, setIsAddToCartVisible] = useState(true)
  
  const quantity = getItemQuantity(id)

  return (
    <div className="flex flex-wrap justify-between">
    <div className='bg-white mt-5 border border-solid border-gray-400 rounded-md'>
      <img src= {imgUrl} alt = {name} className="object-cover rounded-t-md" style={{objectFit:'cover',width:'500px', height:'300px'}}/>
      <div className="flex flex-row justify-between px-5 my-5">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-2xl font-semibold text-gray-400">{formatCurrency(price)}</p>
      </div>
      <div className='px-5 mb-3'>
      {quantity === 0 ? (
        <button className='bg-sky-500 w-full p-2 rounded-md text-white font-semibold' onClick={() => increaseCartQuantity(id)}>
          + Add To Cart
        </button>
      ) : (
        <div className='w-full flex flex-col items-center'>
        <div className='flex justify-center items-center gap-4 mb-3 text-lg'>
            <button className='bg-sky-600 w-8 h-8 text-white flex items-center justify-center font-semibold rounded-md shadow-md'
                    onClick={() => decreaseCartQuantity(id)}>
              -
            </button>
              <span className='font-semibold text-xl'>{ getItemQuantity(id)} </span>in cart
            <button className='bg-sky-600 w-8 h-8 text-white flex items-center justify-center font-semibold rounded-md shadow-md'
                    onClick={() => increaseCartQuantity(id)}>
              + 
            </button>
        </div>
            <button className='bg-red-500 rounded-md text-white font-semibold px-16 py-2' onClick={() => removeFromCart(id)}>
              Remove
            </button>
        </div>          
      )}
      </div>

    </div>
  </div>
  )
}

export default StoreItem
import { useShoppingCart } from "../context/ShoppingCartContext"
import StoreItems from "../data/data.json";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemsProps = {
  id:number,
  quantity:number
}

const CartItem = ( { id, quantity }:CartItemsProps ) => {
  const { removeFromCart } = useShoppingCart();
  const item = StoreItems.find(item => item.id === id)
  if (item == null) return null

  return (
    <div className="w-full flex flex-row justify-between mb-3 pr-7">
      <div className="flex gap-2">
        <img src= {item.imgUrl} alt="" style={{width:"110px",height:'90px', objectFit:'cover'}}/>

        <div className="flex flex-col justify-center">
          <h5 className="font-semibold">{item.name} {quantity > 1 && (
            <span className="font-medium text-sm text-gray-500">
              x {quantity}
            </span>
          )}</h5>
          <span>{formatCurrency(item.price)}</span>
        </div>
      </div>

      <div className="flex flex-row items-center gap-3">
        <h3> {formatCurrency(item.price * quantity )} </h3>
        <XMarkIcon strokeWidth={2} className="h-7 w-7 p-0 border border-solid border-red-400 hover:bg-red-500 hover:text-white rounded-sm" onClick={() =>  removeFromCart(id) }/>
      </div>

    </div>
  )
}

export default CartItem
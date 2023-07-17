
import storeItems from '../data/data.json'
import StoreItem from '../components/StoreItem'


// interface StoreItemTypes {
//   id:number,
//   name:string,
//   price:number,
//   imgUrl:string
// }

const Store = () => {
  return (
    <div className='mb-10'>
      <h1 className="font-medium text-4xl">Store</h1>
      <div className='w-full flex flex-row gap-5 flex-wrap'>
        {
        storeItems?.map((item) => (
          <StoreItem key={item.id}  {...item}/>
        ))
      }
      </div>
    </div>
  )
}

export default Store
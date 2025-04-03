import CartButtons from "./CartButtons";


function CartItem({item, fromCart}) {
    const {id, name, imageUrl, price} = item;
  return (
    <div 
        key={id}
        className='group relatuve flex flex-col gap-y-2 border border-zinc-200 round-md bg-white p-24'>
        <CartButtons item={item} fromCart={fromCart} />
        <img 
            src={imageUrl} 
            alt="Product Image" 
            width={300} 
            height={300} 
            className={`${!fromCart && 'group-hover:-translate-y-2 transition-all'} duration-500`}
        />
        <div className='absolure bottom-5 left-5'>
            <h1 className={`text-zinc-700 ${fromCart && 'text-sm'}`}>{name}</h1>
            <span className={`text-pink-400 ${fromCart && 'text-sm'}`}>${price}</span>       
        </div>
       
    </div>
  )
}

export default CartItem
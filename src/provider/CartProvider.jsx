import {cartContext} from '../context/CartContext';

const CartProvider=({children})=>{
  const [carts, setCarts] = useState(()=>{
    const saved = localStorage.getItem("carts");
    return saved ? JSON.parse(saved) : [];
  });
  const createCart = (user) => {
    const newCart = {
      userEmail: ,
      products: [],
    };
    setCarts((prevCarts) => [...prevCarts, newCart]);
  };
  const addProductToCart = (userId, product) => {
    const existingCart = carts.find((cart) => cart.userId === userId && cart.products.find((p) => p.id === product.id));
    if(!existingCart){
      setCarts((prevCarts)=>{
        const updatedCarts = prevCarts.map((cart)=>{
          if(cart.userId === userId){
            return {
              ...cart,
              products: [...cart.products, product]
            }
          }
        })
        localStorage.setItem("carts", JSON.stringify(updatedCarts));
        return updatedCarts;
      })
    }
  };
  return (
    <cartContext.Provider value={{ carts, createCart, addProductToCart }}>
      {children}
    </cartContext.Provider>
  )
}
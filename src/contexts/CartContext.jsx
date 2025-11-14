import { createContext, useContext , useState , useEffect} from "react";


const cartContext = createContext()


export default function CartProvider({children}){
    
      const [cartItems, setCartItems] = useState([]);

useEffect(()=>{
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
},[])


 const handleAddToCart = (item) => {
    // Get existing cart or create new one
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if item already exists
    const itemIndex = existingCart.findIndex((cartItem) => cartItem.name === item.name);

    if (itemIndex !== -1) {
      // Increase quantity if exists
      existingCart[itemIndex].quantity += 1;
    } else {
      // Add new item
      existingCart.push({ ...item, quantity: 1 });
    }

    // Save updated cart
    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    alert(`${item.name} added to cart ✅`);
  };

  function handleRemoveFromCart(item){
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = existingCart.filter((cartItem) => cartItem.name !== item.name);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);  
  }

  function handleDecrementQuantity(item){
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];   
    const itemIndex = existingCart.findIndex((cartItem) => cartItem.name === item.name);
    if (itemIndex !== -1) {
        if(existingCart[itemIndex].quantity > 1){
            existingCart[itemIndex].quantity -= 1;
        } else {
            existingCart.splice(itemIndex, 1);
        }
    }
    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    setCartItems(existingCart);
  }

  function handleIncrementQuantity(item){
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];   
    const itemIndex = existingCart.findIndex((cartItem) => cartItem.name === item.name);
    if (itemIndex !== -1) {
        existingCart[itemIndex].quantity += 1;
    }
    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    setCartItems(existingCart);
  }

  function handleClearCart(){
    localStorage.removeItem("cartItems");
    setCartItems([]);
  }
    return <cartContext.Provider value={{cartItems, setCartItems, handleAddToCart, handleRemoveFromCart, handleDecrementQuantity, handleClearCart, handleIncrementQuantity}}>{children}</cartContext.Provider>
}

export  const useCartContext = () => {
    const context = useContext(cartContext);
    if(!context){
        throw new Error("Cart context must be used within CartProvider");
    }
    return context; 
} 
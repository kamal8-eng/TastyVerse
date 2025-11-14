import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useCartContext } from "./contexts/CartContext";

function Cart() {

const { cartItems,  setCartItems , handleAddToCart, handleIncrementQuantity, handleDecrementQuantity, handleRemoveFromCart, handleClearCart } = useCartContext();

  // const [cartItems, setCartItems] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const navigate = useNavigate(); // ✅ Added this

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);



  // const saveCart = (items) => {
  //   setCartItems(items);
  //   localStorage.setItem("cartItems", JSON.stringify(items));
  // };

  // const increaseQuantity = (index) => {
  //   const updatedCart = [...cartItems];
  //   updatedCart[index].quantity += 1;
  //   saveCart(updatedCart);
  // };

  // const decreaseQuantity = (index) => {
  //   const updatedCart = [...cartItems];
  //   if (updatedCart[index].quantity > 1) {
  //     updatedCart[index].quantity -= 1;
  //     saveCart(updatedCart);
  //   } else {
  //     handleRemoveItem(index);
  //   }
  // };

  // const handleRemoveItem = (index) => {
  //   const updatedCart = cartItems.filter((_, i) => i !== index);
  //   saveCart(updatedCart);
  // };

  // const handleClearCart = () => {
  //   localStorage.removeItem("cartItems");
  //   setCartItems([]);
  // };

  const handleCheckout = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setShowPayment(true);
    } else {
      alert("Please login first to checkout.");
      navigate("/login"); 
    }
  };

  const handleConfirmPayment = () => {
    setPaymentConfirmed(true);
    handleClearCart();
  };

  const total = cartItems.reduce((acc, item) => {
    const price = Number(item.price.replace(/[^0-9]/g, ""));
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-amber-200 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-lg p-8">
        <h2 className="text-5xl font-extrabold text-center text-orange-600 mb-10">
          Your Cart
        </h2>

        {paymentConfirmed ? (
          <div className="text-center space-y-6 py-20">
            <h3 className="text-4xl font-bold text-green-600">
              ✅ Payment Confirmed!
            </h3>
            <p className="text-2xl text-gray-700">
              Thank you for your order. It will be processed shortly.
            </p>
            <button
              onClick={() => navigate("/")} 
              className="mt-6 bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-xl hover:bg-orange-600 transition"
            >
              Back to Menu
            </button>
          </div>
        ) : showPayment ? (
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Payment Details
            </h3>
            <div className="bg-gradient-to-r from-orange-400 to-amber-400 text-white py-8 rounded-3xl shadow-lg">
              <p className="text-2xl font-semibold">Account Number: 123456789</p>
              <p className="text-2xl font-semibold mt-2">Account Name: TasteVerse</p>
              <p className="text-2xl font-semibold mt-2">Bank: UBA</p>
              <p className="mt-6 text-xl">
                Total to Pay:{" "}
                <span className="font-bold text-white text-3xl">
                  ₦{total.toLocaleString()}
                </span>
              </p>
            </div>

            <button
              onClick={handleConfirmPayment}
              className="bg-green-500 text-white font-bold py-3 px-10 rounded-full text-xl hover:bg-green-600 transition"
            >
              Confirm Payment
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          <p className="text-center text-2xl text-gray-600">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-300 pb-4"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-2xl shadow-md"
                    />
                    <div>
                      <h3 className="text-2xl font-bold">{item.name}</h3>
                      <p className="text-orange-500 text-xl font-semibold">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleDecrementQuantity(item)}
                      className="px-3 py-1 bg-orange-400 text-white text-2xl font-bold rounded-full hover:bg-orange-500"
                    >
                      −
                    </button>
                    <span className="text-2xl font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrementQuantity(item)}
                      className="px-3 py-1 bg-orange-400 text-white text-2xl font-bold rounded-full hover:bg-orange-500"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() =>handleRemoveFromCart(item)}
                    className="text-red-600 font-bold text-xl hover:text-red-800 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-10">
              <h3 className="text-3xl font-bold text-gray-800">
                Total: ₦{total.toLocaleString()}
              </h3>

              <div className="flex gap-4">
                <button
                  onClick={handleClearCart}
                  className="bg-red-500 text-white font-bold py-3 px-6 rounded-full text-xl hover:bg-red-600 transition"
                >
                  Clear Cart
                </button>

                <button
                  onClick={handleCheckout}
                  className="bg-green-500 text-white font-bold py-3 px-6 rounded-full text-xl hover:bg-green-600 transition"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
import React from "react";
import { useCartContext } from "./contexts/CartContext";

function Home() {
  const { cartItems, handleAddToCart } = useCartContext();
  console.log(cartItems, "cart from context");

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-lime-50 to-emerald-100 text-gray-900 font-sans">
      
      {/* Hero Section */}
      <header
        className="relative text-center py-36 bg-cover bg-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('/images/supermarket-hero.jpg')", // Replace with a local supermarket image in public/images
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        <div className="relative z-10">
          <h1 className="md:text-7xl font-extrabold mb-5 tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]">
            FreshMart
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light italic opacity-90">
            Fresh products, unbeatable prices.
          </p>
        </div>
      </header>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        {/* <div className="flex items-center justify-between mb-10 flex-wrap gap-6"> */}
          {/* {[
            { name: "All", link: "/", color: "from-green-400 to-green-600" },
            { name: "Maincourse", link: "/maincourse", color: "from-emerald-400 to-green-500" },
            { name: "Vegetables", link: "/vegetables", color: "from-lime-400 to-green-400" },
            { name: "Snacks", link: "/snacks", color: "from-cyan-400 to-blue-500" },
            { name: "Drinks", link: "/drinks", color: "from-blue-400 to-indigo-500" },
          ].map((cat) => ( */}
            {/* <a
              key={cat.name}
              href={cat.link} 
              className={`flex items-center gap-4 hover:scale-105 transition-transform duration-200`}
            >
              <div className={`w-2 h-12 bg-gradient-to-b ${cat.color} rounded-full`}></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{cat.name}</h2>
            </a> */}
          {/* ))} */}
        {/* </div> */}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { src: "/wings.jpg", name: "Chicken Wings (5 pcs)", price: "₦7000" },
            { src: "/rollss.jpg", name: "Spring Rolls", price: "₦4200" },
            { src: "/bread.jpg", name: "Garlic Bread", price: "₦5500" },
            { src: "/beef.jpg", name: "Beef Suya", price: "₦3000" },
            { src: "/chicken.jpg", name: "Chicken Suya", price: "₦4000" },
            { src: "/puff.jpg", name: "Puff Puff", price: "₦1000" },
            { src: "/steak.jpg", name: "Grilled Steak", price: "₦6000" },
            { src: "/friedrice.jpg", name: "Fried Rice & Chicken", price: "₦4000" },
            { src: "/jollof.jpg", name: "Jollof Rice & Turkey", price: "₦4500" },
            { src: "/shawarma.jpg", name: "Beef Shawarma", price: "₦2500" },
            { src: "/spaghetti.jpg", name: "Spaghetti Bolognese", price: "₦3500" },
            { src: "/chickenshawarma.jpg", name: "Chicken Shawarma", price: "₦3000" },
            { src: "/cake.jpg", name: "Chocolate Cake", price: "₦5000" },
            { src: "/icecream.jpg", name: "Ice Cream Sundae", price: "₦4000" },
            { src: "/salad.jpg", name: "Fruit Salad", price: "₦3200" },
            { src: "/cheese.jpg", name: "Cheesecake", price: "₦4500" },
            { src: "/waffles.jpg", name: "Waffles & Syrup", price: "₦6500" },
            { src: "/pancakes.jpg", name: "Pancakes & Syrup", price: "₦7000" },
            { src: "/fanta.jpg", name: "Fanta", price: "₦700" },
            { src: "/fresh.jpg", name: "Fresh Yo!", price: "₦1500" },
            { src: "/smooth.jpg", name: "Smoothie", price: "₦2000" },
            { src: "/coke.jpg", name: "Coca-Cola", price: "₦700" },
            { src: "/viju.jpg", name: "Viju Wheat", price: "₦1200" },
            { src: "/holl.jpg", name: "Hollandia Yogurt", price: "₦1400" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-sm rounded-2xl border border-green-200 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white p-6"
            >
              <img
                src={item.src}
                alt={item.name}
                className="rounded-2xl mb-5 mx-auto object-cover shadow-md"
              />
              <h4 className="font-semibold text-xl mb-5 tracking-wide text-center">{item.name}</h4>

              <div className="flex items-center justify-between">
                <p className="text-green-700 font-extrabold text-2xl">{item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="px-10 py-2 flex items-center justify-center rounded-full bg-green-600 text-white text-2xl font-bold hover:bg-green-700 transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

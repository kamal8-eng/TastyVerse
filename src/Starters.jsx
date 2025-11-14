function Starters() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-100 text-gray-900 font-sans">

      <header className="relative text-center py-39 bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10">
          <h1 className="md:text-8xl font-extrabold mb-5 tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]">
        TastyVerse
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light italic opacity-90">
            Savor the taste, feel the vibe.
          </p>
        </div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[80px] bg-gradient-to-r from-transparent via-orange-400/30 to-transparent blur-3xl opacity-60"></div>
      </header>

      
 <section className="max-w-7xl mx-auto py-24 px-6   bg-gradient-to-tr from-orange-500 to-amber-400">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-8">

            
            <a href="/" className="flex items-center gap-4 hover:scale-105 transition-transform duration-200">
              <div className="w-2 h-12 bg-gradient-to-b from-orange-500 to-amber-400 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">All</h2>
            </a>
          
            <a href="/starters" className="flex items-center gap-4 hover:scale-105 transition-transform duration-200">
              <div className="w-2 h-12 bg-gradient-to-b from-orange-500 to-amber-400 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Starters</h2>
            </a>

            <a href="/maincourse" className="flex items-center gap-4 hover:scale-105 transition-transform duration-200">
              <div className="w-2 h-12 bg-gradient-to-b from-orange-500 to-amber-400 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Main Course</h2>
            </a>

             <a href="/desserts" className="flex items-center gap-4 hover:scale-105 transition-transform duration-200">
              <div className="w-2 h-12 bg-gradient-to-b from-orange-500 to-amber-400 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Desserts</h2>
            </a>

            <a href="/drinks" className="flex items-center gap-4 hover:scale-105 transition-transform duration-200">
              <div className="w-2 h-12 bg-gradient-to-b from-orange-500 to-amber-400 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Drinks</h2>
            </a>
          </div>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
         {[
  { src: "/wings.jpg", name: "Chicken Wings (5 pcs)", price: "₦7000" },
  { src: "/rollss.jpg", name: "Spring Rolls", price: "₦4200" },
  { src: "/bread.jpg", name: "Garlic Bread", price: "₦5500" },
  { src: "/beef.jpg", name: "Beef Suya", price: "₦3000" },
  { src: "/chicken.jpg", name: "Chicken Suya", price: "₦4000" },
  { src: "/puff.jpg", name: "Puff Puff", price: "₦1000" },
].map((item, i) => (
  <div
    key={i}
    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-orange-100 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white p-6"
  >
    <img
      src={item.src}
      alt={item.name}
      className="rounded-2xl mb-5 mx-auto object-cover shadow-md"
    />
    <h4 className="font-semibold text-xl mb-5 tracking-wide text-center">
      {item.name}
    </h4>

    <div className="flex items-center justify-between">
      <p className="text-orange-600 font-extrabold text-2xl">{item.price}</p>
      <button
        onClick={() => {
          let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
          const existingItem = cart.find((cartItem) => cartItem.name === item.name);

          if (existingItem) {
            existingItem.quantity += 1;
          } else {
            cart.push({ ...item, quantity: 1 });
          }

          localStorage.setItem("cartItems", JSON.stringify(cart));
          alert(`${item.name} added to cart ✅`);
        }}
        className="px-10 py-2 flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-bold hover:bg-orange-600 transition"
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

export default Starters;
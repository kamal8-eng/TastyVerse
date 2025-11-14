import { useCartContext } from "./contexts/CartContext"

export default function NotAllowed(){
    // const{cart} = useCartContext();
    // console.log(cart);
    return <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-orange-400 to-amber-400">
      <div className="bg-white rounded-2xl p-8 shadow-2xl w-96 text-center">
        <h2 className="text-3xl font-bold mb-6">Access Denied</h2>
        <p className="text-gray-700 mb-4">You do not have permission to access this page.</p>
        <a href="/login" className="text-orange-600 font-semibold hover:underline">Go to Login</a>
      </div>
    </div>                  
}
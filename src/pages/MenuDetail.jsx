import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "../redux/features/OrderListSlice";
import { FiArrowLeft, FiClock, FiUsers, FiAward, FiCheckCircle } from "react-icons/fi";

const MenuDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orderList);
  console.log(orders);
  
  const recipe = location.state;

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">No Recipe Selected</h2>
        <p className="text-gray-600 mb-6">Please choose a delicious meal from our popular menu track.</p>
        <button
          onClick={() => navigate("/menu")}
          className="bg-[#0C6967] hover:bg-[#094f4e] text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2"
        >
          <FiArrowLeft /> Back to Menu
        </button>
      </div>
    );
  }

  const calculatedPrice = recipe.cookTimeMinutes * 10 + 50;
  
  const handleOrderNow = () => {
    dispatch(addToOrder(recipe));
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate("/menu")}
          className="flex items-center gap-2 text-gray-600 hover:text-[#0C6967] font-medium transition-colors group mb-6"
        >
          <FiArrowLeft className="transform transition-transform group-hover:-translate-x-1" />
          <span>Back to Menu</span>
        </button>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-xl aspect-[4/3] w-full">
            <img className="w-full h-full object-cover" src={recipe.image} alt={recipe.name} />
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-md flex items-center justify-between">
            <div>
              <span className="text-sm font-semibold text-[#6B788E] uppercase tracking-wider block">Price</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-bold text-gray-900">रु</span>
                <span className="text-[#D95103] text-4xl font-extrabold tracking-tight">{calculatedPrice}</span>
              </div>
            </div>
            <button 
              onClick={handleOrderNow}
              className="bg-[#0C6967] hover:bg-[#094f4e] rounded-full py-4 px-8 text-white font-semibold transition-all shadow-md active:scale-95"
            >
              Order Now
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-xl space-y-8">
          <div>
            <span className="inline-block bg-teal-50 text-[#0C6967] text-xs font-bold tracking-widest px-3 py-1.5 rounded-full uppercase mb-3">
              {recipe.cuisine} • {recipe.mealType?.[0] || "Main"}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">{recipe.name}</h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-2xl">
            <div className="flex flex-col items-center text-center p-2">
              <FiClock className="text-xl text-[#0C6967] mb-1" />
              <span className="text-xs text-gray-500 font-medium">Prep Time</span>
              <span className="text-sm font-bold text-gray-800">{recipe.prepTimeMinutes} mins</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 border-l border-gray-200/60 sm:border-l">
              <FiClock className="text-xl text-[#D95103] mb-1" />
              <span className="text-xs text-gray-500 font-medium">Cook Time</span>
              <span className="text-sm font-bold text-gray-800">{recipe.cookTimeMinutes} mins</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 border-l border-gray-200/60 max-sm:border-t sm:border-l">
              <FiUsers className="text-xl text-blue-600 mb-1" />
              <span className="text-xs text-gray-500 font-medium">Servings</span>
              <span className="text-sm font-bold text-gray-800">{recipe.servings} People</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 border-l border-gray-200/60 max-sm:border-t sm:border-l">
              <FiAward className="text-xl text-purple-600 mb-1" />
              <span className="text-xs text-gray-500 font-medium">Difficulty</span>
              <span className="text-sm font-bold text-gray-800">{recipe.difficulty}</span>
            </div>
          </div>

          <hr className="border-gray-100" />

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ingredients Needed</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recipe.ingredients?.map((ingredient, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 text-base">
                  <FiCheckCircle className="text-[#0C6967] mt-1 shrink-0" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-gray-100" />

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Preparation Steps</h3>
            <ol className="space-y-4">
              {recipe.instructions?.map((step, idx) => (
                <li key={idx} className="flex gap-4 p-3 hover:bg-gray-50/80 rounded-xl transition-colors">
                  <span className="flex items-center justify-center bg-orange-50 text-[#D95103] text-sm font-bold h-7 w-7 rounded-full shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-gray-700 text-base leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuDetail;
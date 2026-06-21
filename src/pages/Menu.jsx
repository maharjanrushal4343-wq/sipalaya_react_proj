import { useEffect, useState } from "react";
import { getAllRecipe } from "../actions/recipe-action";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiClock, FiStar } from "react-icons/fi";
import Loaders from "../components/Loader";

const Menu = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const res = await getAllRecipe();
      if (res && res.recipes) {
        setRecipes(res.recipes);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const categories = [
    "All",
    ...new Set(recipes.map((r) => r.cuisine).filter(Boolean)),
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || recipe.cuisine === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Explore Our <span className="text-[#D95103]">Delicious Menu</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Handcrafted recipes packed with fresh ingredients, authentic taste,
          and premium presentation.
        </p>

        <div className="mt-8 relative max-w-md mx-auto shadow-sm rounded-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <FiSearch className="text-lg" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your favorite food item..."
            className="w-full pl-11! pr-4 py-3.5 bg-white border border-gray-200 text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0C6967] focus:border-transparent transition-all placeholder-gray-400 font-medium"
          />
        </div>
      </div>

      {recipes.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.slice(0, 7).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap active:scale-95 ${
                selectedCategory === category
                  ? "bg-[#0C6967] text-white shadow-md shadow-teal-900/10"
                  : "bg-white text-gray-600 border border-gray-200/80 hover:border-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {loading ? (
        <div className="py-32 flex justify-center items-center w-full">
          <Loaders type="circular-loader" />
        </div>
      ) : filteredRecipes.length === 0 ? (
        <div className="text-center py-20 bg-white border border-gray-100 rounded-3xl p-8 max-w-md mx-auto shadow-sm">
          <p className="text-gray-500 text-lg font-medium">
            No yummy recipes match your criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="text-sm font-bold text-[#0C6967] mt-3 hover:underline"
          >
            Clear Filters & Try Again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredRecipes.map((o) => (
            <div
              key={o.id}
              onClick={() => navigate(`/menu-detail/${o.id}`, { state: o })}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-50 shrink-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  src={o.image}
                  alt={o.name}
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-black tracking-wider uppercase text-[#0C6967] shadow-sm">
                  {o.cuisine}
                </div>
                {o.rating && (
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md text-xs font-bold text-white flex items-center gap-1">
                    <FiStar className="text-amber-400 fill-amber-400 shrink-0" />
                    <span>{o.rating}</span>
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col grow text-left">
                <h3
                  className="font-extrabold text-lg text-gray-900 group-hover:text-[#0C6967] transition-colors truncate w-full"
                  title={o.name}
                >
                  {o.name}
                </h3>

                <div className="flex items-center gap-4 text-xs text-gray-400 mt-2 font-medium">
                  <div className="flex items-center gap-1">
                    <FiClock />
                    <span>{o.cookTimeMinutes} mins</span>
                  </div>
                  <span>•</span>
                  <span>{o.difficulty || "Easy"}</span>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-50 flex items-center justify-between w-full align-baseline">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-sm font-bold text-gray-900">रु</span>
                    <span className="text-2xl font-black text-[#D95103]">
                      {o.cookTimeMinutes * 10 + 50}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#0C6967] bg-teal-50 group-hover:bg-[#0C6967] group-hover:text-white px-3 py-1.5 rounded-full transition-all">
                    View Dish
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;

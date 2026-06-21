import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiArrowRightCircle,
  FiArrowLeftCircle,
} from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { FaClock, FaPhoneAlt, FaInstagramSquare } from "react-icons/fa";
import { getAllRecipe } from "../actions/recipe-action";
import { useNavigate } from "react-router-dom";
import Loaders from "../components/Loader";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const Home = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Pakistani");

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.cuisine?.toLowerCase() === activeCategory.toLowerCase(),
  );

  const visibleRecipes = filteredRecipes.slice(currentIndex, currentIndex + 3);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (currentIndex + 3 < filteredRecipes.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <section className="min-h-200 grid grid-cols-1 lg:grid-cols-2 justify-center">
        <div className="flex flex-col justify-center text-center lg:text-left ml-0 lg:ml-40 lg:-mt-20">
          <span className="text-sm tracking-[12%] font-light text-[#6B788E] block mb-2">
            RESTAURANT
          </span>

          <div className="flex items-center justify-center lg:justify-start flex-wrap gap-3 mb-2">
            <span className="font-bold text-[61px] leading-tight">The</span>
            <div className="relative rotate-[-2.5deg] inline-block">
              <img
                className="w-[190.5px] h-auto object-contain"
                src="one.png"
                alt="one"
              />
              <span className="font-bold text-white text-[61px] absolute inset-0 flex items-center justify-center -mt-1">
                #One
              </span>
            </div>
          </div>

          <div className="text-[61px] font-bold leading-tight mb-4">
            Momo <span className="text-[#D95103]">Restaurant</span>
          </div>

          <p className="text-[20px] font-semibold text-gray-700 leading-relaxed mb-8">
            More than{" "}
            <span className="text-[#D95103] font-bold text-lg sm:text-xl lg:text-[25px]">
              20+ Varieties
            </span>{" "}
            of momo available for you
          </p>

          <div className="mx-auto lg:mx-0">
            <button
              onClick={() => navigate("/menu")}
              className="cursor-pointer bg-[#0C6967] rounded-full py-3.5 px-8 sm:py-4 sm:px-10 text-white flex items-center gap-2 transition-transform active:scale-105 hover:bg-[#0a5755]"
            >
              Explore Food Menu
              <FiArrowRight />
            </button>
          </div>
        </div>
        <div className="relative lg:block hidden">
          <img
            className="h-220 absolute right-0 -top-20"
            src="circle.png"
            alt="circle"
          />
          <img
            className="absolute top-40 left-30 w-155.5 h-108.5 z-20"
            src="home_momo.png"
            alt="home-momo"
          />
          <img
            className="h-38 w-44 absolute top-33 left-22"
            src="black_dot.png"
            alt="black-dot"
          />
          <img
            className="h-38 w-44 right-14 bottom-46 absolute"
            src="white_dot.png"
            alt="white-dot"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-8 py-16">
        <div className="flex justify-center w-full">
          <div className="bg-[#0C6967] w-full max-w-md aspect-4/5 rounded-t-full relative flex items-end justify-center">
            <img
              className="w-100 h-auto absolute bottom-6 transform translate-y-6 object-contain"
              src="thumbs_up.png"
              alt="thumbs-up"
            />
          </div>
        </div>
        <div className="mt-8 lg:text-start text-center">
          <h2 className="font-bold text-[39px]">
            Why Customer <span className="text-[#D95103]">Love Us</span>
          </h2>

          <p className="text-[#6B788E] text-[20px] mt-8">
            Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
            fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
            dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
            cursus turpis.
          </p>

          <button className="bg-[#0C6967] hover:bg-[#094f4e] mx-auto lg:mx-0 rounded-full py-5 px-10 text-white flex items-center mt-10 gap-2 cursor-pointer">
            Explore Our Story
            <FiArrowRight />
          </button>
        </div>
      </section>

      <section className="p-8">
        <div className="text-center text-[39px] font-bold">
          Our <span className="text-[#D95103]">Most Popular</span> Recipes
          <div className="font-normal mt-3 text-[20px] text-[#6B788E]">
            Browse through a variety of recipes with fresh ingredients selected
            only from the best places
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mt-6 p-4 flex-wrap">
          {["Pakistani", "Italian", "Mexican", "Nepalese"].map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`border-2 font-semibold rounded-full py-4 px-12 transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-[#0C6967] border-[#0C6967] text-white shadow-md scale-105"
                  : "border-[#EBEDF0] hover:border-black text-black"
              }`}
            >
              {category}
            </div>
          ))}
        </div>

        {loading ? (
          <div className="py-40 flex justify-center items-center">
            <Loaders type="circular-loader" />
          </div>
        ) : filteredRecipes.length === 0 ? (
          <div className="text-center text-gray-500 py-46 text-xl">
            No recipes found for this category.
          </div>
        ) : (
          <div className="flex justify-center items-center gap-14 mt-12 overflow-x-auto py-4">
            <FiArrowLeftCircle
              onClick={handlePrev}
              className={`text-3xl mb-10 transition-all duration-200 ${
                currentIndex === 0
                  ? "opacity-20 cursor-not-allowed"
                  : "cursor-pointer hover:text-[#D95103]"
              }`}
            />

            {visibleRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="text-center group cursor-pointer shrink-0 transition-transform duration-500 ease-in-out"
              >
                <img
                  className="w-65 h-47.25 object-cover rounded-xl hover:scale-102 transition-all duration-300 transform"
                  src={recipe.image}
                  alt={recipe.name}
                />
                <div className="w-65 text-[25px] font-bold mt-10 truncate px-2 text-gray-900">
                  {recipe.name}
                </div>
                <div className="text-[20px]">
                  रु
                  <span className="text-[#D95103] text-[31px] font-bold ml-1">
                    {recipe.cookTimeMinutes * 10 + 50}
                  </span>
                </div>
              </div>
            ))}

            <FiArrowRightCircle
              onClick={handleNext}
              className={`text-3xl mb-10 transition-opacity ${
                currentIndex + 3 >= filteredRecipes.length
                  ? "opacity-20 cursor-not-allowed"
                  : "cursor-pointer hover:text-[#D95103]"
              }`}
            />
          </div>
        )}

        <div className="flex justify-center items-center p-2">
          <button className="bg-[#0C6967] hover:bg-[#094f4e] rounded-full py-5 px-10 text-white flex items-center mt-8 gap-2 cursor-pointer">
            Explore Our menu
            <FiArrowRight />
          </button>
        </div>
      </section>

      <section>
        <div className="md:p-10 m-5 text-[39px] font-bold text-center">
          <span className="text-[#D95103] me-2">We Offer People</span>
          <span>The Service They Want</span>
        </div>
        <div className="relative">
          <img
            className="h-190 w-full object-cover"
            src="video-bg.png"
            alt="video-bg"
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="flex justify-center items-center">
            <div className="absolute top-[32%]">
              <div className="text-center">
                <div className="text-white md:text-[49px] text-2xl font-bold">
                  Process behind the making
                </div>
                <div className="text-white md:text-[25px] text-xl ">
                  See how our chefs cook only the best momos
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-[#0C6967] hover:bg-[#094f4e] rounded-full py-5 px-10 text-white flex items-center mt-14 gap-2 cursor-pointer">
                  <img
                    className="w-8 h-8"
                    src="video-icon.png"
                    alt="video-icon"
                  />{" "}
                  Watch the Video
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:p-20 py-10 px-5">
          <div className="flex justify-center items-center gap-20 flex-wrap">
            <div className="flex flex-col items-center">
              <img
                className="h-18 w-18"
                src="quality_food.png"
                alt="quality-food"
              />
              <div className="text-[31px] font-bold mt-3">Quality Food</div>
              <span className="w-70 text-center text-[16px] mt-4">
                Only the best food with top quality products and ingredients
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="h-18 w-18"
                src="private_party.png"
                alt="private-party"
              />
              <div className="text-[31px] font-bold mt-3">Private Party</div>
              <span className="w-70 text-center text-[16px] mt-4">
                Get the best food for all your private parties and gatherings
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-18 w-18" src="catering.png" alt="catering" />
              <div className="text-[31px] font-bold mt-3">Catering</div>
              <span className="w-70 text-center text-[16px] mt-4">
                Get the best food for any occasions and gatherings
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-[#0C6967] hover:bg-[#094f4e] rounded-full py-5 px-10 text-white flex items-center mt-14 gap-2 cursor-pointer">
              Explore Our Services
              <FiArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section className="lg:py-15 lg:px-25 md:py-10 md:px-10 py-8 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-45 gap-20 justify-center items-center">
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-[39px] font-bold text-[#101828]">
              200+
              <span className="text-[#D95103]"> Happy Customers</span>
            </h3>
            <p className="text-[25px] text-[#0C6967] font-bold">
              What our customers say about us
            </p>
            <p className="italic text-[24px] mt-10 mb-5 text-center lg:text-left">
              “Only the best momo you can find in the market. Different
              Varieties of momo to choose from. Will be visiting again soon”
            </p>
            <span className="font-bold text-[31px]">Livia Dias</span>
            <div className="flex gap-5 items-center mt-14 text-4xl">
              <FiArrowLeftCircle className="cursor-pointer transition-all duration-200 hover:scale-108 hover:-translate-x-0.2" />
              <FiArrowRightCircle className="cursor-pointer transition-all duration-200 hover:scale-108 hover:translate-x-0.2" />
            </div>
          </div>
          <div className="flex md:justify-center">
            <img
              className="h-138 md:w-110 w-full"
              src="customer.png"
              alt="customer"
            />
          </div>
        </div>
      </section>

      <section className="md:py-10 md:px-25 py-8 px-5">
        <h3 className="text-[39px] font-bold text-center">
          Get <span className="text-[#D95103]">In Touch</span>
        </h3>
        <div className="text-[#0C6967] font-bold text-[25px] text-center">
          Our Friendly team would love to hear from you
        </div>
        <div className="rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex justify-center items-center m-auto p-5 mt-10 max-w-240">
          <div className="grid lg:grid-cols-2 grid-cols-1 w-full xl:gap-0 gap-8">
            <div className="bg-[#0C6967] rounded-2xl md:p-8 p-5 text-white xl:w-100">
              <div className="font-semibold flex items-center gap-2 mb-3">
                <MdLocationPin /> Our Address
              </div>
              <p className="italic">New Baneshwor, Kathmandu, Bagmati, Nepal</p>

              <div className="font-semibold flex items-center gap-2 mt-4 mb-3">
                <FaPhoneAlt className="text-[14px]" /> Our Contact
              </div>
              <div className="flex gap-12 mb-4">
                <div className="flex flex-col">
                  <div className="mb-1"> Mobile </div>
                  <span className="italic">980 5689789</span>
                  <span className="italic">9841 275897</span>
                </div>
                <div className="flex flex-col">
                  <div className="mb-1"> Landline </div>
                  <span className="italic">01-4783972</span>
                </div>
              </div>

              <div className="font-semibold flex items-center gap-2">
                <FaClock /> Our Service Time
              </div>
              <div className="flex gap-12">
                <div className="flex flex-col mt-3">
                  <span className="mb-1">MON - FRI </span>
                  <span className="italic">10 am - 8 pm</span>
                </div>
                <div className="flex flex-col mt-3">
                  <span className="mb-1">SAT - SUN </span>
                  <span className="italic">Closed</span>
                </div>
              </div>
              <div className="mt-30">
                <span className="italic">Get in touch in social networks</span>
                <div className="flex gap-4 items-center mt-4">
                  <FaFacebook className="h-7 w-7" />
                  <FaInstagramSquare className="h-7 w-7" />
                  <AiFillTikTok className="h-7 w-7" />
                </div>
              </div>
            </div>
            <form className="">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <div>
                  <label className="" htmlFor="fname">
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="fname"
                      name="fname"
                      className="rounded-lg h-10 border border-[#DFE2E6] w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="" htmlFor="lname">
                    last Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="lname"
                      name="lname"
                      className="rounded-lg h-10 border border-[#DFE2E6] w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email">Email</label>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="rounded-lg h-10 border border-[#DFE2E6] w-full"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="helper">What can we do for you</label>
                <div>
                  <select
                    id="helper"
                    name="helper"
                    className="rounded-lg h-10 border border-[#DFE2E6] w-full"
                  >
                    <option value={"1"}></option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone Number
                </label>
                <div className="flex items-center">
                  <select
                    id="phone"
                    name="phone"
                    className="rounded-l-lg h-10 border border-[#DFE2E6] border-r-0 bg-transparent px-2"
                  >
                    <option value="np">🇳🇵 +977</option>
                    <option value="in">🇮🇳 +91</option>
                  </select>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    className="rounded-r-lg flex-1 h-10 border border-[#DFE2E6] px-3  focus:outline-gray-300"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message">Email</label>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    rows={"6"}
                    className="rounded-lg border border-[#DFE2E6] w-full"
                  />
                </div>
              </div>
              <button className="bg-[#D95103] px-12 py-3 rounded-full text-white mt-8">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28265.76587739513!2d85.29151307431637!3d27.679571799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1924562f06c3%3A0xb81ea62db6935dd7!2sJOY%20MOMO%20-%20Sankhamul%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1782030800932!5m2!1sen!2snp"
          width="100%"
          height="640"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Home;

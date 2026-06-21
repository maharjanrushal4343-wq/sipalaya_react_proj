import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateQuantity,
  removeFromOrder,
} from "../redux/features/OrderListSlice";
import {
  FiTrash2,
  FiPlus,
  FiMinus,
  FiArrowLeft,
  FiShoppingBag,
} from "react-icons/fi";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderList = useSelector((state) => state.order.orderList);
  console.log(orderList);

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromOrder(item.id));
    }
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const calculateItemPrice = (cookTime) => cookTime * 10 + 50;

  const subtotal = orderList.reduce((acc, item) => {
    return acc + calculateItemPrice(item.cookTimeMinutes) * item.quantity;
  }, 0);

  const deliveryFee = orderList.length > 0 ? 150 : 0;
  const totalAmount = subtotal + deliveryFee;

  if (orderList.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="bg-teal-50 p-6 rounded-full mb-4 text-[#0C6967]">
          <FiShoppingBag className="text-6xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Your Cart is Empty
        </h2>
        <p className="text-gray-500 max-w-sm mb-6">
          Looks like you haven't added any of our delicious momos or recipes to
          your tray yet.
        </p>
        <button
          onClick={() => navigate("/menu")}
          className="bg-[#0C6967] hover:bg-[#094f4e] text-white font-semibold py-3 px-8 rounded-full transition-all shadow-md active:scale-95"
        >
          Browse Menu Items
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-2">
          Your <span className="text-[#D95103]">Food Tray</span>
          <span className="text-sm font-medium text-gray-400 bg-white border px-3 py-1 rounded-full ml-2">
            {orderList.length} {orderList.length === 1 ? "Item" : "Items"}
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            {orderList.map((item) => {
              const itemSinglePrice = calculateItemPrice(item.cookTimeMinutes);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
                >
                  <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-gray-50 aspect-square">
                    <img
                      className="w-full h-full object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div className="flex-grow text-center sm:text-left min-w-0 w-full">
                    <h3
                      className="font-bold text-lg text-gray-900 truncate"
                      title={item.name}
                    >
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase mt-0.5">
                      {item.cuisine}
                    </p>
                    <div className="text-[#D95103] font-bold text-base mt-2">
                      रु {itemSinglePrice}{" "}
                      <span className="text-xs text-gray-400 font-medium">
                        each
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 justify-between sm:justify-end w-full sm:w-auto border-t sm:border-none pt-3 sm:pt-0">
                    <div className="flex items-center border border-gray-200 bg-gray-50 rounded-full p-1 shadow-inner">
                      <button
                        onClick={() => handleDecreaseQuantity(item)}
                        className="p-2 text-gray-600 hover:bg-white rounded-full transition-colors active:scale-90"
                      >
                        <FiMinus className="text-xs" />
                      </button>
                      <span className="w-10 text-center font-bold text-gray-800 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncreaseQuantity(item)}
                        className="p-2 text-gray-600 hover:bg-white rounded-full transition-colors active:scale-90"
                      >
                        <FiPlus className="text-xs" />
                      </button>
                    </div>

                    <div className="text-right min-w-[70px] hidden sm:block">
                      <span className="text-xs text-gray-400 block font-medium">
                        Total
                      </span>
                      <span className="font-extrabold text-gray-900">
                        रु {itemSinglePrice * item.quantity}
                      </span>
                    </div>

                    <button
                      onClick={() => dispatch(removeFromOrder(item.id))}
                      className="text-gray-400 hover:text-red-500 p-2.5 rounded-xl hover:bg-red-50 transition-colors"
                      title="Remove item"
                    >
                      <FiTrash2 className="text-lg" />
                    </button>
                  </div>
                </div>
              );
            })}

            <button
              onClick={() => navigate("/menu")}
              className="text-sm font-bold text-[#0C6967] hover:text-[#094f4e] flex items-center gap-2 pt-2 group"
            >
              <FiArrowLeft className="transform transition-transform group-hover:-translate-x-1" />
              <span>Add more dishes</span>
            </button>
          </div>

          <div className="lg:col-span-4 bg-white rounded-3xl border border-gray-100 p-6 shadow-md space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-3">
              Bill Summary
            </h3>

            <div className="space-y-3 text-sm font-medium text-gray-600">
              <div className="flex justify-between">
                <span>Basket Subtotal</span>
                <span className="text-gray-900 font-bold">रु {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-gray-900 font-bold">
                  रु {deliveryFee}
                </span>
              </div>
              <hr className="border-gray-100 my-2" />
              <div className="flex justify-between text-base font-bold text-gray-900 pt-1">
                <span>Grand Total</span>
                <span className="text-[#D95103] text-xl font-black">
                  रु {totalAmount}
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate("/payment", { state: totalAmount })}
              className="w-full bg-[#0C6967] hover:bg-[#094f4e] text-white font-bold py-4 rounded-full transition-all shadow-md active:scale-95 text-center block mt-4"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

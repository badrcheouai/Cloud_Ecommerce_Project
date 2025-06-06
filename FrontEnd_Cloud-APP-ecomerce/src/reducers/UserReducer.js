import { toast } from "react-toastify";
const initialState = {
  isProductLoading: false,
  dataProduct: [],
  dataCart: [],
  alert: {
    show: false,
    message: "",
    variant: "light",
  },
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_PRODUCT_LOADING":
      return {
        ...state,
        isProductLoading: action.boolean,
      };

    case "USER_GET_DATA_PRODUCT":
      return {
        ...state,
        dataProduct: action.payload,
      };

    case "ADD_ITEM_TO_CART":
      const data = {
        ...action.payload,
        qtyBuy: 1,
      };
      const dataIsSame = state.dataCart.find((item) => {
        return item._id === data._id;
      });

      if (!dataIsSame) {
        toast.success("Item added to cart!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });

        return {
          ...state,
          dataCart: [...state.dataCart, data],
        };
      } else {
        toast.error("This item already in cart.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
        return state;
      }

    case "INCREASE_QTY_BUY":
      const dataCart = state.dataCart.map((item) => {
        if (action.payload === item._id) {
          item.qtyBuy++;
        }

        return item;
      });

      return {
        ...state,
        dataCart,
      };

    case "DECREASE_QTY_BUY":
      const dataCartDecrease = state.dataCart.map((item) => {
        if (action.payload === item._id && item.qtyBuy !== 1) {
          item.qtyBuy--;
        }

        return item;
      });

      return {
        ...state,
        dataCart: dataCartDecrease,
      };

    case "REMOVE_ITEM_FROM_CART":
      const dataCartRemove = state.dataCart.filter((item) => {
        return item._id !== action.payload;
      });
      return {
        ...state,
        dataCart: dataCartRemove,
      };

    default:
      return state;
  }
};

export default UserReducer;

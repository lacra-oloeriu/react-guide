import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          //action creators
          status: "panding",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      const sendRequest = async () => {
        const response = await fetch(
          "https://advanced-redux-e5858-default-rtdb.firebaseio.com/cart.json",
          { method: "PUT", body: JSON.stringify(cart) }
        );
  
        if (!response.ok) {
          throw new Error("Sending cart data failed.");
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(
          uiActions.showNotification({
            status: "succes",
            title: "Succes!...",
            message: "Sent  cart data successfully!",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!...",
            message: "Sent  cart data faild!",
          })
        );
      }
    };
  };
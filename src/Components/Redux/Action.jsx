import axios from "axios";

const actionProvider = () => {
  const headers = {
    'Authorization': 'whatever-you-want'
  };

  return (dispatch) => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers })
      .then((resp) => {
        dispatch({ type: "fetch_data_success", payload: resp.data });
      })
      .catch((error) => {
        console.error("Error ", error);
        dispatch({ type: "fetch_error", payload: error.message });
      });
  };
};

export default actionProvider;

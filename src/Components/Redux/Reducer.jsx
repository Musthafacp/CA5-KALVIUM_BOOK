const Reducer = (state, action) => {
    switch (action.type) {
      case "fetch_data_success":
        return {
          ...state,
          data: action.payload
        };
  
      case "fetch_error":
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default Reducer;
  
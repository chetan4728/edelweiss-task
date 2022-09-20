export default (state, action) => {
    switch (action.type) {
      case "ADD_DATA":
        console.log(action.payload)
        return {
          data: action.payload
        };
      default:
        return state;
    }
  };
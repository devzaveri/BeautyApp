
export const setItems = (items) => {
    return {
      type: 'SET_ITEMS',
      payload: items,
    };
  };
  export const removeItem = (items) => {
    return{
      type: "REMOVE_EVENT",
      payload: items
    }
  }
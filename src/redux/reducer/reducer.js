
const initialState = {
    items: [],
  };
  
  const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ITEMS':
        console.log("action.payload" , action.payload);
        return {
          ...state,
          items: [
            // Filter out items with the same name as the new item
            ...state.items.filter(item => item.name !== action.payload.name),
            action.payload
        ],
        };
        case "REMOVE_EVENT" : 
        
        
        return {... state.items, events : state.events.filter((event) => event.name !== action.payload)}
      default:
        return state;
    }
  };
  
  export default itemReducer;
  
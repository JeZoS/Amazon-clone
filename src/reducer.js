export const initialState = {
    basket: [],
    user:null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item)=>parseInt(item.price)+amount,0);


const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.payload]
        };
        case 'REMOVE_FROM_BASKET':
            let newbasket=[...state.basket];
            const index = state.basket.findIndex((item)=> item.id === action.id );
            if(index>=0){
                newbasket.splice(index,1);
            }
            return {...state,
            basket:newbasket
        };
        default:
            return state;
    }
}

export default reducer;
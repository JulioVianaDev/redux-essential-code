import { BUY_CAKE, BUY_CAKE_MANY_CAKES } from "./cakeTypes"
const initialState  ={
  numOfCakes: 10
}

const cakeReducer = (state = initialState,action)=>{
  switch (action.type){
    case BUY_CAKE: return{
      ...state,
      numOfCakes: state.numOfCakes -1
    }
    case BUY_CAKE_MANY_CAKES: return{
      ...state,
      numOfCakes: state.numOfCakes - action.payload
    }
    default: return state
  }
}

export default cakeReducer
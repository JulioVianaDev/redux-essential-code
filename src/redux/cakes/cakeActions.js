import { BUY_CAKE,BUY_CAKE_MANY_CAKES } from "./cakeTypes"
export const buyCake = ()=>{
  return{
    type: BUY_CAKE
  }
}
export const buyCakeManyCakes = number=>{
  return{
    type: BUY_CAKE_MANY_CAKES,
    payload: number
  }
}
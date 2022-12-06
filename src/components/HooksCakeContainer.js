import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {buyCake} from '../redux/cakes/cakeActions'
function HooksCakeContainer() {
  const  numOfCakes =useSelector(state=>state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      {numOfCakes}
      <br></br>
      <button onClick={()=> dispatch(buyCake())}>
        Buy Cake with hooks
      </button>
    </div>
  )
}

export default HooksCakeContainer
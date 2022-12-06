import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { buyIceCream } from '../redux' 
function HooksIceCreamContainer() {
  const  numOfIceCreams =useSelector(state=>state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
      {numOfIceCreams}
      <br></br>
      <button onClick={()=> dispatch(buyIceCream())}>
        Buy Cake with hooks
      </button>
    </div>
  )
}

export default HooksIceCreamContainer
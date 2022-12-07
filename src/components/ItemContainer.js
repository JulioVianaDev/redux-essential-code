import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import {buyCake, buyIceCream} from '../redux'
function ItemContainer(props) {
  const [text,setText] = useState("")
  useEffect(()=>{
    if (props.bolo ===true){
      setText("bolo")
    }else{
      setText("Sorvete")
    }
  },[props.bolo])
  
  return (
    <div>
      <h2>Item -  {props.item}</h2>
      {text}
      
      <button onClick={props.buyItem}>
        Comprar o item especifico
      </button>
      <hr></hr>
    </div>
  ) 
}

const mapStateToProps = (state,ownProps)=>{
  const itemState = ownProps.bolo? state.cake.numOfCakes : state.iceCream.numOfIceCreams

  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
  const dispatchFuncion = ownProps.bolo
  ? () =>dispatch(buyCake())
  : () =>dispatch(buyIceCream())
  return {
    buyItem:  dispatchFuncion
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
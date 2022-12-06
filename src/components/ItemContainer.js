import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
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

export default connect(mapStateToProps)(ItemContainer)
import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'
function IceCreamContainer(props) {
  return (<>
    <div> IceCreamContainer {props.numOfIceCreams}</div>
    <button onClick={props.buyIceCream}>
      buyIceCream
    </button>
  </>
  )
}

const mapStateToProps = state =>{
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    buyIceCream: ()=> dispatch(buyIceCream())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
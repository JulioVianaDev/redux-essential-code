import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
function CakeContainer(props) {
  return (<>
    <div>CakeContainer {props.numOfCakes}</div>
    <button onClick={props.buyCake}>
      buycake
    </button>
  </>
  )
}

const mapStateToProps = state =>{
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    buyCake: ()=> dispatch(buyCake())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
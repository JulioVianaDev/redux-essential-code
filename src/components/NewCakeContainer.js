import React,{useState} from 'react'
import { connect, useDispatch } from 'react-redux'
import { buyCakeManyCakes } from '../redux'
function NewCakeContainer(props) {
  const [number, setNumber] = useState(0)
  return (<>
    
    <div>NewCakeContainer {props.numOfCakes}</div>
    <input value={number} onChange={(e)=>setNumber(e.target.value)}/>
    <button onClick={()=> props.buyCakeManyCakes(number)}>
      buyCakeManyCakes {number}
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
    buyCakeManyCakes: number => dispatch(buyCakeManyCakes(number))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
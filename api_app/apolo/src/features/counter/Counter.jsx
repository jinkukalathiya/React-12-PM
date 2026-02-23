import { useDispatch , useSelector } from "react-redux";
import {increment , decrement} from './counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.value)

    const dispatch = useDispatch()

    
  return (
    <>
    <div>Counter</div>
    <span>{count}</span>
    <button onClick={() => dispatch(increment())}>increment</button>
    <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  )
}

export default Counter
import { increment, decrement } from "../store/numberSlice";
// calling the reducers that i've made in the numberslice
// increment for adding + 1 to the state
//decrement for removing - 1 from the state 
import { useDispatch, useSelector } from "react-redux";

//calling useDispatch and useSelector , useSelector is for calling the state
// and dispatch is for changing the state 

const ShowNumber = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.number);

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        count <= 0 ? alert('lower than 0') : dispatch(decrement())
    }


    return <>
        <h2>Your number is {count}</h2>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>

    </>



}

export default ShowNumber
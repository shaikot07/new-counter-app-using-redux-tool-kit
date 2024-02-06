import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import from counterslice 
import { decrement, increment, incrementWith5, reset } from './counterSlice';

const CounterView = () => {
      const count = useSelector((state)=> state.counter.count);
      // console.log(count);
      const dispatch = useDispatch();
      return (
            <div className='text-center'>
                  <h2 className='p-6 text-4xl text-white'>Count: {count}</h2>
                  <button onClick={()=>{dispatch(increment())}} className='bg-[#d35400] py-2 px-4 text-white rounded-tr-[30px] mr-5 '>Increment</button>
                 <button onClick={()=>{dispatch(decrement())}} className='bg-[#c0392b] py-2 px-4 text-white rounded-tr-[30px] mr-5'>Decrement</button>
                 <button onClick={()=>{dispatch(reset())}} className='bg-[#EC4899] py-2 px-4 text-white rounded-tr-[30px] mr-5'>Reset</button>
                 <button onClick={()=>{dispatch(incrementWith5())}} className='bg-[#8e44ad] py-2 px-4 text-white rounded-tr-[30px] '>increment With 5</button>
                  
            </div>
      );
};

export default CounterView;
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";


const store = configureStore({
      // akadhik reducer k akhane combind kora jabe
      reducer:{
            counter: counterReducer,
      },
});


export default store;
// steps hai 
/*
sabse phle configure store lana padega from @reduxjs
*/
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice' // todoSlice se reducer ko import karna padega
export const store = configureStore({
    reducer: todoReducer, // reducer ko yhn pass karna padega
    // agar multiple reducers hote to yhn object me likhte jese ki {todo: todoReducer, user: userReducer} 
    // or uske baad use karne ke liye useSelector se access karte 
    // or useDispatch se dispatch karte 
    // or useSelector se state ko access karte
})// store ko export karalo 
// most of the cheeze yhn object hi leti hai input
 


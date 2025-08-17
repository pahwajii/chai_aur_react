import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id :1,text:"hello world"}],
}

export const todoSlice = createSlice({
    name: "todo",// slice ka naam dena padega vo kuch bhi ho skta hai 
    initialState,//har slice ka ek initial state banta hai kuch log initial state ko upar alag se define krte hai or kuch log yhin define krte hai 
    reducers: {
        addTodo: (state,action)=>{
            const todo = {
                id: nanoid(), // nanoid se unique id generate hoti hai
                text: action.payload.text // payload se text milega jo humne add kiya hoga
            }
            state.todos.push(todo); // state.todos me todo ko push karna hai
        },
        // ye iska syntax hai jese use state vghera me hota hai iss bhi bas aese hi likha jayega reducers ko state action ke sath likha jata hai jiska access hume hamesha hota hai
        // state batata hai jese initial state me abhi kya kya hai uska access degi chahe aage jaaek vo change ho 
        // action me payload hota hai jese ki humne todo add krna hai to usme text or id dono hi honge , oid to lagegi to usse call krne ke liye value action.payload se milegi
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id); // filter se hum us todo ko nikaal denge jiska id action.payload.id ke barabar hoga
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text; // agar todo milega to uska text update kar denge
            }
// updateTodo: (state, action) => {
//     const index = state.todos.findIndex(todo => todo.id === action.payload.id);
//     if (index !== -1) {
//         state.todos[index].text = action.payload.text;
//     }
// }Using findIndex is often better when you want to avoid mutating references and instead directly target the array element’s index.                                              

        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions; // actions ko export karna padega jisse hum use kar sake
export default todoSlice.reducer; // reducer ko export karna padega jisse store me use kar sake

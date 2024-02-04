const { configureStore } = require("@reduxjs/toolkit");
import usersReducers from './slice'
import todoReducer from './todoSlice'

export const store = configureStore({
    reducer: {
        usersData: usersReducers,
        todosData: todoReducer
    }
})

// configureStore ek tarkika ka function hota hai jiske ander ham object ke ander ham hamre jistne bhi reducers hai unko pass karenge means jitne bhi hamare reduces banege alag alag slices ke ander usko ham is configureStore ke ander object ke ander pass karenge. Ham Reducers and action ko ham slice ke ander rakte hai.
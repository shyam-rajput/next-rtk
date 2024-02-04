const { createSlice, nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    userAPIData: [],
    users: []
}

export const fetchApiUsers = createAsyncThunk("test", async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
    return result.json();
})

const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: { // is reducers ke ander ab ham actions create karenge
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
        },
        removeUser: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id !== action.payload;
            })
            state.users = data;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
            state.isloading = false,
                state.userAPIData = action.payload
        })
    }
})

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;

// 'nanoid' ka use optional hai karna hai karo nahi to nahi karo, 'nanoid()' ka use karna beneficial hota hai jab bhi hame ek unique identity deni hoti hai apne array ke object ko.

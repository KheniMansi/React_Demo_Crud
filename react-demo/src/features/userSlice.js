import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            // return(
            // state.user = action.payload;
            // var user = '';
            fetch('https://reqres.in/api/login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(action.payload),
            }).then(res => res.json()).then(state.user = action.payload).catch(err => console.log(err))
        },
        userList: (state, action) => {
            console.log(state)
            console.log(action)
        },
        addUser: (state, action) => {
            fetch('https://reqres.in/api/users', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(action.payload),
            }).then(function(response){  console.log(response.json()); })
            .then(function(data) {
                const items = data;
                console.log(items);
            })
        },
        logout: (state) => {
            state.user = null;
        }
    },
});
export const { login, userList, logout, addUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
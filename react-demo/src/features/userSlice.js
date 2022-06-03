import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        userDatas: null,
    },
    reducers: {
        login: (state, action) => {
            fetch('https://reqres.in/api/login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(action.payload),
            }).then(res => res.json()).then(state.user = action.payload).catch(err => console.log(err))
        },
        addUser: (state, action) => {
            fetch('https://reqres.in/api/users', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(action.payload),
            }).then(function (response) { console.log(response.json()); })
                .then(function (data) {
                    const items = data;
                    console.log(items);
                })
            console.log(state);
        },
        userData: (state) => {
            fetch(
                "https://reqres.in/api/users")
                .then((res) => res.json())
                .then((json) => {
                    state = json.data;
                    state.user = state;
                    console.log(state.user)
                }).catch(err => console.log(err))
        },
        editUser: (state, action) => {
            console.log(state);
            console.log(action);
        },
        logout: (state) => {
            state.user = null;
        }
    },
});
export const { login, logout, addUser, editUser, userData } = userSlice.actions;

export const selectUser = (state) => state.user.user;
// export const selectUsers = (state) => state.user.userData;

export default userSlice.reducer;
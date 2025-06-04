import { createSlice, current } from '@reduxjs/toolkit'

export interface CounterState {
  LoggedIn: boolean;
  User: {} | undefined;
  Link: string;
  Loading: boolean;
}

const initialState: CounterState = {
  LoggedIn: false,
  User: {},
  Link: "",
  Loading: true
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedinSuccess(state, action) {
      state.LoggedIn = true;
      state.User = action.payload.User;
      state.Link = action.payload.Link;
      state.Loading = false;
      console.log(state.User);
      return state;
    },
    loggedoutSuccess(state) {
      state.LoggedIn = true;
      state.User = undefined;
      console.log(state.User);
      return state;
    },
    updateProfileImage(state, action) {
      console.log(state.Link);
      if (state.User) {
        state.Link = action.payload;
      }
    },
    updateUserField(state, action) {
      const { field, value } = action.payload;
      console.log(field,value)
      console.log("User",current(state.User))
      if (state.User) {
        state.User.User[field] = value;
      }
      console.log("User",current(state.User))
    }
  },
})

export const { loggedinSuccess, loggedoutSuccess, updateProfileImage,updateUserField } = AuthSlice.actions

export default AuthSlice.reducer
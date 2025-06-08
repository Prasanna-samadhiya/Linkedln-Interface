import { createSlice} from '@reduxjs/toolkit';

export interface Education {
  title: string;
  institution?: string;
  description?: string;
}

export interface Experience {
  company: string;
  joining: Date;
  leaving: Date;
  description: string;
}

export interface Certification {
  name: string;
  organisation: string;
}

// ✅ Extend the user to include 'frame'
export interface CounterState {
  LoggedIn: boolean;
  User: {
    _id: string;
    name: string;
    email: string;
    image?: string;
    backgroundimage?: string;
    password: string;
    education: Education[];
    experience: Experience[];
    lang?: string;
    certification: Certification[];
    skills: string[];
    connections: string[];
    isverified: boolean;
    token?: string;
    votp?: string;
    fotp?: string;
    description?: string;
    frame?: 'none' | 'open' | 'hiring'; // 👈 added
  } | undefined;
  Link: string;
  Loading: boolean;
}

const initialState: CounterState = {
  LoggedIn: false,
  User: undefined,
  Link: "",
  Loading: true,
};

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
      state.LoggedIn = false;
      state.User = undefined;
      console.log(state.User);
      return state;
    },
    updateProfileImage(state, action) {
      if (state.User) {
        state.Link = action.payload;
      }
    },
    updateProfileFrame(state, action) {
      if (state.User) {
        state.User.frame = action.payload; 
        console.log(state.User.frame);
      }
    },
    updateUserField(state, action) {
      const { field, value } = action.payload;
      if (state.User) {
        state.User[field] = value;
      }
    },
    checkifLoggedIn(state, action) {
      state.Loading = action.payload;
    },
  },
});

// ✅ Export the new reducer action
export const {
  loggedinSuccess,
  loggedoutSuccess,
  updateProfileImage,
  updateProfileFrame, // 👈 include this
  updateUserField,
  checkifLoggedIn
} = AuthSlice.actions;

export default AuthSlice.reducer;

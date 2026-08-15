import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthUser = { id: string; email: string; name: string };

type AuthState = {
  user: AuthUser | null;
  accessToken: string | null;
  status: "idle" | "loading" | "succeded" | "failed";
};

type SetCredentialsPayload = {
  user: AuthUser;
  accessToken: string;
};

const initialState: AuthState = {
  user: null,
  accessToken: null,
  status: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<SetCredentialsPayload>) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.status = "succeded";
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.status = "idle";
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

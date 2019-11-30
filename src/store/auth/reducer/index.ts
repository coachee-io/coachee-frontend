interface State {
  isLoggedIn: boolean,
  user: any
}

const initialState: State = {
  isLoggedIn: false,
  user: {},
}

const AuthReducer = (state = initialState, action: any) => {
  // Return the default state for now
  switch (action.type) {
    default:
      return state
  }
}

export default AuthReducer

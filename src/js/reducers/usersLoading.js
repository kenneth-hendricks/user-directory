const usersLoading = (state = true, action) => {
  switch (action.type) {
    case "USERS_LOADED":
      return false;
    default:
      return state;
  }
}

export default usersLoading;
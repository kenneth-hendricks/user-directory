const users = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_USERS":
      return action.users;
    default:
      return state;
  }
}

export default users;
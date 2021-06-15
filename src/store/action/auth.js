export const logoutAction = () => ({ type: "LOGOUT" });

export const updateUserAction = (user) => ({
    type: "UPDATE_USER",
    payload: user
});
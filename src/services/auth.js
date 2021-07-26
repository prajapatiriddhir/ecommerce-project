class AuthService {
    async login(email, password) {
        var testEmail = "test@gmail.com";
        var testPassword = "test@123";
        if (email !== testEmail || password !== testPassword) {
            throw new Error("Invalid password or email");
        }
        return {
            email,
            password
        };
    }
}

export default new AuthService();

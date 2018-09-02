export default class UserModel {

    static myInstance = null;

    userEmail = "";

    tokens = []

    /**
     * @returns {UserModel}
     */
    static getInstance() {
        if (UserModel.myInstance == null) {
            UserModel.myInstance = new UserModel();
        }

        return this.myInstance;
    }

    getUserID() {
        return this.userEmail;
    }

    setUserID(id) {
        this.userEmail = id;
    }

    setToken(token){
        this.tokens.concat(token)
    }

    getToken(){
        return this.tokens
    }
}
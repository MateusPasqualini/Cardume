export default class UserModel {

    static myInstance = null;

    userEmail = "";

    checkins = []

    moedas = 0

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
        this.checkins = []
    }

    setCheckins(checkins){
        this.checkins = checkins
    }

    getCheckins(){
        return this.checkins
    }

    setMoeda(moeda){
        this.moeda = moeda
    }

    getMoeda(){
        return this.moeda
    }
}
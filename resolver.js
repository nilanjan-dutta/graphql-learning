class Firned {
    constructor(id, { firstName, lastName, gender, language, email }){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.language = language;
    }
}

const friendDB = {};

const resolvers = {
    getFriend:({id}) => {
        return new Firned(id, friendDB[id])
    },
    createFriend: ({input})=> {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDB[id] = input;
        return new Firned(id, input);
    }
};

export default resolvers;
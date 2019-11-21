class Firned {
    constructor(id, { firstName, lastName, gender, language, email, age, contacts }){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.language = language;
        this.age = age;
        this.contacts = contacts;
    }
}

const friendDB = {};

// resolver map
export const resolvers = {
    Query : {
        getFriend:({id}) => {
            return new Firned(id, friendDB[id])
        }
    },
    Mutation: {
        createFriend: ({input})=> {
            let id = require('crypto').randomBytes(10).toString('hex');
            friendDB[id] = input;
            return new Firned(id, input);
        }
    }
};

export default resolvers;
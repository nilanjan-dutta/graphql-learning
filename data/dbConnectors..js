import mongoose, { Schema } from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/friends', { useUnifiedTopology: true, useNewUrlParser: true });
const firnedSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String
    },
    language: {
        type: String
    },
    contacts: {
        type: Array
    }
});

const Friends = mongoose.model('friends', firnedSchema);

export { Friends };
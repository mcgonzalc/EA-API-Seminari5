import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true,
        unique : true
    },
    teacher: {
        type: String,
        required : true
    },
    class: {
        type: String,
        required : true
    },
    alumni: {
        type : [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        required : false
    }
});

export interface ISubject {
    name : string;
    teacher : string;
    class : string;
    alumni : mongoose.Types.ObjectId[];

}

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;
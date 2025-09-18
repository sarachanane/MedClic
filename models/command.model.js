import mongoose, { Schema } from "mongoose";

const schama = new Schema(
    {
        // cId: mongoose.Schema.Types.ObjectId,
        idPharmacy: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
            // required: true,
        },
        idUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
            // required: true,
        },
        imageUrl: {
            type: String,
            // unique: true,
        },
        base64Placeholder:{
            type : String
        },
        description:{
            type: String,
        },
        type: {
            type: String,
            // required: true,
        },
        status: {
            type: String,
            // required: true,
        },
        
        data:{
            type: Object,
        },
        

    },
    {
        timestamps: true,
    }
);
// schama.index({ email: 1 }, { unique: true });
// schama.index({ phone: 1 }, { unique: true });
const Command = mongoose.models.Command || mongoose.model("Command", schama);

export default Command;
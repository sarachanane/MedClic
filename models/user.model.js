import mongoose, { Schema } from "mongoose";

const schama = new Schema(
    {
        // cId: mongoose.Schema.Types.ObjectId,
        fullname: {
            type: String,
            // required: true,
        },
        imageUrl: {
            type: String,
            // unique: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            // required: true,
        },
        type: {
            type: String,
            // required: true,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
        sex: {
            type: String,
        },
        wilaya: {
            type: String,
        },
        daira: {
            type: String,
        },
        service:{
            type: String,
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
schama.index({ "data.long_lat": "2dsphere" });
const User = mongoose.models.User || mongoose.model("User", schama);

export default User;
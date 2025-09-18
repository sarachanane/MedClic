import mongoose, { Schema } from "mongoose";

const schama = new Schema(
    {
        // cId: mongoose.Schema.Types.ObjectId,
        idPharmacy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
            // required: true,
        },
        idUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
            // required: true,
        },
        toOffer: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }],
        toGet: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }],
        description: {
            type: String,
            unique: true,
        },
        type: {
            type: String,
            // required: true,
        },
        status: {
            type: String,
            // required: true,
        },

        data: {
            type: Object,
        },


    },
    {
        timestamps: true,
    }
);
// schama.index({ email: 1 }, { unique: true });
// schama.index({ phone: 1 }, { unique: true });
const Exchange = mongoose.models.Exchange || mongoose.model("Exchange", schama);

export default Exchange;
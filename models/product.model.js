import mongoose, { Schema } from "mongoose";

const schama = new Schema(
    {
        // cId: mongoose.Schema.Types.ObjectId,
        idPharmacy: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
            // required: true,
        },
        name: {
            type: String,
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
            unique: true,
        },
        price: {
            type: Number,
            // required: true,
        },
        remise: {
            type: Number,
            // required: true,
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
const Product = mongoose.models.Product || mongoose.model("Product", schama);

export default Product;
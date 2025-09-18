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
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product", 
            }
        ],
        description: {
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

        data: {
            type: Object,
        },


    },
    {
        timestamps: true,
    }
);

const Panier = mongoose.models.Panier || mongoose.model("Panier", schama);

export default Panier;
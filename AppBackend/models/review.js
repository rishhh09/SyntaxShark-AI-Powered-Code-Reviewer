import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
   { 
        timestamps: true
   }
)

export default mongoose.model("Review", reviewSchema);
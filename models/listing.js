const mongoose=require("mongoose");
const Schema=mongoose.Schema;

// const listingSchema=new Schema({
//     title:{
//         type:String,
//         required:true,
//     },
//     description:String,
//     image:{
//         type: String,
//         default:"https://unsplash.com/photos/tokyo-skyline-and-rainbow-bridge-illuminated-at-dusk-jR_djoNFLw0",
//         set: (v) => v === "" ? "https://unsplash.com/photos/tokyo-skyline-and-rainbow-bridge-illuminated-at-dusk-jR_djoNFLw0" : v,
//     },
//     price:Number,
//     location:String,
//     country:String,
// });

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: String, // Allow an object with filename and url
        url: {
            type: String,
            default: "https://unsplash.com/photos/tokyo-skyline-and-rainbow-bridge-illuminated-at-dusk-jR_djoNFLw0"
        }
    },
    price: Number,
    location: String,
    country: String,
});


const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;
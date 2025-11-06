const mongoose = require("mongoose");
const Review = require("./review.js");

const listingSchema = new mongoose.Schema({
    title : 
    {
        type : String,
        required : true,
    },
    description :
    {
        type: String,
    },
    image :
    {
        url : String,
        filename : String,
     },
    price :
    {
        type : Number,
        min : 1,
    },
    location :
    {
        type: String,
    },
    country :
    {
        type : String
    },
    reviews : [{
        type : mongoose.Schema.Types.ObjectId ,
         ref : "Review",
    }],
    geometry : {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
        },
        coordinates: {
          type: [Number],
        }
      },
      category : {
        type : String ,
        enum : ["trending" , "rooms" , "iconicCities" , "mountain" , "castles" , "amazingPools" , "camping" , "farms" , "arctic"],
      },
      owner : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "User",
      }
});



//this is used for handling deletion i.e. when any of the listing is deleted then all the reviews that is 
//been posted on that listing should automatically get deleted . Here we have used post mongoose middlewae
//i.e. when ever findByIdAndDelete is used in code then this middleware i.e. findOneAndDelete got 
//triggers and it deletes all the reviews for that listing
listingSchema.post("findOneAndDelete" , async (listing)=>
{
    if(listing.reviews.length)
    {
        await Review.deleteMany({_id : {$in : listing.reviews}});
    }
});


const Listing = mongoose.model("Listing" , listingSchema);


module.exports = Listing;
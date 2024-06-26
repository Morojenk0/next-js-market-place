import mongoose, { Schema } from "mongoose"

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise
const itemSchema = new Schema({
  item: String,
  price: Number,
  sizes: [String],
  about: String,
  description: [{ content: String }],
  information: [{ content: String }],
  categories: [String],
  img: {
    src: String,
    width: Number,
    height: Number,
    alt: String,
  },
  itemSlider: [{ src: String, width: Number, height: Number, alt: String }],
  reviews: [{ name: String, email: String, body: String, rating: Number }],
})

const Item = mongoose.models.items || mongoose.model("items", itemSchema)
export default Item

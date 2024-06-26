import mongoose, { Schema } from "mongoose"

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise
const portfolioSchema = new Schema({
  name: String,
  categories: [String],
  img: {
    src: String,
    width: Number,
    height: Number,
    alt: String,
  },
})

const Portfolio =
  mongoose.models.portoflios || mongoose.model("portoflios", portfolioSchema)
export default Portfolio

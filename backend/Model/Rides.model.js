import mongoose, { Schema } from "mongoose";

export const RidesSchema = new mongoose.Schema(
  {
    passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'passengers' }],
    startLocation: { lat: Number, long: Number },
    endLocation: { lat: Number, long: Number },
    startTime: Date,
    totalCost: Number,
  },
  { timestamps: true }
);




export default mongoose.model.rides || mongoose.model("rides", RidesSchema);

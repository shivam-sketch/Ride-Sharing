import mongoose from "mongoose";

const passengerSchema = new mongoose.Schema(
  {
    name: String,
    startLocation: { lat: Number, long: Number },
    endLocation: { lat: Number, long: Number },
    requestedTime: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model.passengers || mongoose.model("passengers", passengerSchema);

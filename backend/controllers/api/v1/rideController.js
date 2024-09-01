import {
  HTTP_CONFLICT,
  HTTP_CREATED,
  HTTP_FORBIDDEN,
  HTTP_INTERNAL_SERVER_ERROR,
  HTTP_NOT_FOUND,
  HTTP_OK,
  HTTP_UNAUTHORIZED,
} from "../../../config/HttpCodes.js";
import HttpResponse from "../../../utils/apiResponses/HttpResponse.js";
import {
  AuthorizeError,
  BadRequestError,
  ForbiddenError,
  NotFoundError,
} from "../../../exceptions/app-exceptions.js";

import PassengersModel from "../../../Model/Passengers.model.js";
import RidesModel from "../../../Model/Rides.model.js";
import { matchPassengers } from "../../../utils/clustering.js";



// get rides

export async function getRides(req, res, next) {
  try {
    const passengers = await PassengersModel.find();
    const rides = matchPassengers(passengers);

    const savedRides = await RidesModel.insertMany(rides);
    return HttpResponse.sendAPIResponse(
      res,
      savedRides,
      HTTP_OK,
      "Rides Fetched Successfuly"
    );
  } catch (error) {
    console.log("err", error);
    next(error);
  }
}

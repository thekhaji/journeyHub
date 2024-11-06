import { Schema } from 'mongoose';
import { TourStatus, TourType } from '../libs/enums/tour.enum';

const tourSchema = new Schema(
	{
		tourType: {
			type: String,
			enum: TourType,
			required: true,
		},

		tourStatus: {
			type: String,
			enum: TourStatus,
			default: TourStatus.ACTIVE,
		},

		tourLocation: {
			type: String,
			required: true,
		},

		tourAvailability: {
			startDate: { type: Date },
			endDate: { type: Date }
		},

		tourTitle: {
			type: String,
			required: true,
		},

		tourPrice: {
			type: Number,
			required: true,
		},

		itinerary: [{
			day: Number,
			activities: [String],
			meals: [String], // e.g., Breakfast, Lunch, Dinner
			accommodation: { 
				hotelId: { type: String }, // Amadeus hotel ID
				name: { type: String },
				location: { type: String }
			},
			transport: { type: String } // Transport mode, e.g., "Bus"
		}],

		flights: [{
			flightId: { type: String }, // Amadeus flight ID
			flightNumber: { type: String },
			airline: { type: String },
			departureTime: { type: Date },
			arrivalTime: { type: Date },
			origin: { type: String },
			destination: { type: String }
		}],
		
		hotels: [{
			hotelId: { type: String }, // Amadeus hotel ID
			name: { type: String },
			location: { type: String },
			coordinates: { type: [Number] } // Optional: [latitude, longitude]
		}],

		tourLikes: {
			type: Number,
			default: 0,
		},

		tourComments: {
			type: Number,
			default: 0,
		},

		tourRank: {
			type: Number,
			default: 0,
		},

		tourImages: {
			type: [String],
			required: true,
		},

		tourDesc: {
			type: String,
		},

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		soldAt: {
			type: Date,
		},

		deletedAt: {
			type: Date,
		},

		constructedAt: {
			type: Date,
		},
	},
	{ timestamps: true, collection: 'tours' },
);

tourSchema.index({ propertyType: 1, propertyLocation: 1, propertyTitle: 1, propertyPrice: 1 }, { unique: true });

export default tourSchema;

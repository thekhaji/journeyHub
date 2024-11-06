import { registerEnumType } from '@nestjs/graphql';

export enum TourType {
	LOCAL = 'LOCAL',
	FOREIGN = 'FOREIGN',
}
registerEnumType(TourType, {
	name: 'TourType',
});

export enum TourStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(TourStatus, {
	name: 'TourStatus',
});



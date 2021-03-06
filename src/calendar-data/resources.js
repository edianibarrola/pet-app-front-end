import { pink, purple, teal, amber, deepOrange } from "@material-ui/core/colors";
import { Context } from "../js/store/appContext";

export const appointments = [
	{
		allDay: false,
		habitatId: 1,
		id: 0,
		notes: "more information field",
		pets: [2],
		startDate: new Date(2021, 0, 20, 9, 35),
		endDate: new Date(2021, 0, 20, 11, 35),
		title: "title in details field"
	},
	{
		allDay: false,
		habitatId: 2,
		id: 1,
		notes: "more information field",
		pets: [2, 3],
		startDate: new Date(2021, 0, 19, 9, 35),
		endDate: new Date(2021, 0, 19, 11, 35),
		title: "title in details field"
	}
];

export const resourcesData = [
	{
		text: "Indoor Enclosure",
		id: 1
	},
	{
		text: "Outdoor Enclosure",
		id: 2
	}
];

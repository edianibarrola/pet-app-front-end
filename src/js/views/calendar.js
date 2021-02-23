import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState, IntegratedEditing } from "@devexpress/dx-react-scheduler";
import {
	Scheduler,
	Resources,
	DayView,
	WeekView,
	MonthView,
	DragDropProvider,
	Appointments,
	AppointmentTooltip,
	AppointmentForm,
	//AllDayPanel,
	//EditRecurrenceMenu,
	Toolbar,
	ViewSwitcher,
	DateNavigator,
	TodayButton,
	ConfirmationDialog
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointments, resourcesData } from "../../calendar-data/resources";

import { owners } from "../../calendar-data/tasks";

// const getData = (setData, setLoading) => {
// 	const dataUrl = "https://3000-bb954a08-1134-4c45-bb4c-b81574018d42.ws-us03.gitpod.io/calendar";
// 	setLoading(true);

// 	return fetch(dataUrl)
// 		.then(response => response.json())
// 		.then(data => {
// 			setTimeout(() => {
// 				setData(data.items);
// 				setLoading(false);
// 			}, 600);
// 		});
// };

// var currentTime = new Date();
// var curMonth = currentTime.getMonth() + 1;
// var curDay = currentTime.getDate();
// var curYear = currentTime.getFullYear();
// var curTimeFormat = curYear + "-" + curMonth + "-" + curDay;

// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case "setLoading":
// 			return { ...state, loading: action.payload };
// 		case "setData":
// 			return { ...state, data: action.payload.map(mapAppointmentData) };
// 		case "setCurrentViewName":
// 			return { ...state, currentViewName: action.payload };
// 		case "setCurrentDate":
// 			return { ...state, currentDate: action.payload };
// 		default:
// 			return state;
// 	}
// };
const BooleanEditor = props => {
	return <AppointmentForm.BooleanEditor {...props} readOnly />;
};

export const Calendar = () => {
	const [view, setView] = useState("Month");
	const [dateView, setDateView] = useState(new Date());
	const { store, actions } = useContext(Context);

	const [state, setState] = useState({
		data: store.calendarList,
		currentDate: new Date(),

		addedAppointment: {},
		appointmentChanges: {},
		editingAppointment: undefined
	});

	useEffect(
		() => {
			// Update the document title using the browser API
			const test = async () => {
				setState({ ...state, data: store.calendarList });
			};
			test();
		},
		[store.calendarList]
	);

	const changeAddedAppointment = ({ addedAppointment }) => {
		setState({ ...state, addedAppointment });
	};

	const changeAppointmentChanges = appointmentChanges => {
		console.log(appointmentChanges);
		setState({ ...state, appointmentChanges });
	};

	const changeEditingAppointment = editingAppointment => {
		console.log(editingAppointment);
		setState({ ...state, editingAppointment });
	};

	const commitChanges = ({ added, changed, deleted }) => {
		setState(state => {
			let { data } = state;
			if (added) {
				actions.addCalendar(added);
				const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
				data = [...data, { id: startingAddedId, ...added }];
			}
			if (changed) {
				console.log(changed);
				data = data.map(
					appointment =>
						// changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
						changed[appointment.id] && actions.updateCalendar(changed, appointment.id)
					// console.log("DATA: ", appointment)
				);
				// actions.handleAppointment("changed", changed, changed.id);
			}
			if (deleted !== undefined) {
				actions.deleteCalendar(deleted);

				data = data.filter(appointment => appointment.id !== deleted);
			}
			return { ...state, data };
		});
	};
	const { currentDate, data, addedAppointment, appointmentChanges, editingAppointment, currentViewName } = state;
	return (
		<div className="mt-auto p-auto pcGradientDarkGreenReverse" style={{ height: "auto" }}>
			<Paper>
				<Scheduler data={data} adaptivityEnabled="true">
					<ViewState
						currentViewName={view}
						onCurrentViewNameChange={setView}
						currentDate={dateView}
						onCurrentDateChange={setDateView}
					/>
					<EditingState
						onCommitChanges={commitChanges}
						// addedAppointment={addedAppointment}
						// onAddedAppointmentChange={changeAddedAppointment}
						// appointmentChanges={appointmentChanges}
						// onAppointmentChangesChange={changeAppointmentChanges}
						// editingAppointment={editingAppointment}
						// onEditingAppointmentChange={changeEditingAppointment}
					/>
					<IntegratedEditing isRecurrence="false" />
					{/* <EditRecurrenceMenu /> */}
					<DayView startDayHour={9} endDayHour={19} />
					<WeekView startDayHour={9} endDayHour={19} />
					<MonthView />
					{/* <AllDayPanel /> */}
					<Toolbar />
					<TodayButton />
					<DateNavigator />
					<ViewSwitcher />

					<Appointments />
					<AppointmentTooltip showCloseButton showDeleteButton />
					<AppointmentForm />
					{/* <AppointmentForm booleanEditorComponent={BooleanEditor} isRecurrence="false" /> */}
					{/* <DragDropProvider /> */}
					<ConfirmationDialog />

					{/* <Resources data={state.resources} mainResourceName="pets" /> */}
				</Scheduler>
			</Paper>
		</div>
	);
};

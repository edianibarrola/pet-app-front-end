import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
	Scheduler,
	DayView,
	WeekView,
	MonthView,
	Appointments,
	AppointmentTooltip,
	AppointmentForm,
	Toolbar,
	ViewSwitcher,
	DateNavigator,
	TodayButton,
	ConfirmationDialog
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState, EditingState, IntegratedEditing } from "@devexpress/dx-react-scheduler";
import appointments from "../../calendar-data/today-appointments";

const currentDate = "2018-11-01";

export const Calendar = () => {
	const data = appointments;
	return (
		<Paper>
			<Scheduler data={data}>
				<ViewState defaultCurrentViewName="Week" />
				<DayView startDayHour={9} endDayHour={14} />
				<WeekView startDayHour={9} endDayHour={19} />
				<MonthView />
				<Toolbar />
				<ViewSwitcher />
				<Appointments />
				<AppointmentTooltip />
			</Scheduler>
		</Paper>
	);
};

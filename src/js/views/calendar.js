import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState, IntegratedEditing } from "@devexpress/dx-react-scheduler";
import {
	Scheduler,
	Resources,
	DayView,
	WeekView,
	MonthView,
	Appointments,
	AppointmentTooltip,
	AppointmentForm,
	AllDayPanel,
	Toolbar,
	ViewSwitcher,
	DateNavigator,
	TodayButton,
	ConfirmationDialog,
	DragDropProvider
} from "@devexpress/dx-react-scheduler-material-ui";
import appointments from "../../calendar-data/today-appointments";
// import { appointments, resourcesData } from "../../calendar-data/resources";
import { resourcesData } from "../../calendar-data/resources";

import { owners } from "../../calendar-data/tasks";

var currentTime = new Date();
var curMonth = currentTime.getMonth() + 1;
var curDay = currentTime.getDate();
var curYear = currentTime.getFullYear();
var curTimeFormat = curYear + "-" + curMonth + "-" + curDay;

export class Calendar extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data: appointments,
			currentDate: curTimeFormat,
			resources: [
				{
					fieldName: "habitatId",
					title: "Habitat",
					instances: resourcesData
				},
				{
					fieldName: "pets",
					title: "Pets",
					instances: owners,
					allowMultiple: true
				}
			]
		};

		this.commitChanges = this.commitChanges.bind(this);
	}

	commitChanges({ added, changed, deleted }) {
		this.setState(state => {
			let { data } = state;
			if (added) {
				const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
				data = [...data, { id: startingAddedId, ...added }];
			}
			if (changed) {
				data = data.map(
					appointment =>
						changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
				);
			}
			if (deleted !== undefined) {
				data = data.filter(appointment => appointment.id !== deleted);
			}
			return { data };
		});
	}

	render() {
		const { data, resources } = this.state;

		return (
			<Paper>
				<Scheduler data={data} maxHeight="400" maxWidth="550">
					<ViewState defaultCurrentViewName="Week" />
					<EditingState onCommitChanges={this.commitChanges} />

					<DayView startDayHour={9} endDayHour={19} />
					<WeekView startDayHour={9} endDayHour={19} />
					<MonthView />

					<Appointments />
					<Resources data={resources} mainResourceName="habitatId" />

					<IntegratedEditing />
					<AppointmentTooltip showCloseButton showOpenButton />
					<AppointmentForm />

					<ConfirmationDialog />
					<AllDayPanel />
					<Toolbar />
					<TodayButton />
					<DateNavigator />
					<ViewSwitcher />
					<DragDropProvider />
				</Scheduler>
			</Paper>
		);
	}
}

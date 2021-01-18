import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import {
	Scheduler,
	DayView,
	WeekView,
	MonthView,
	Appointments,
	Toolbar,
	ViewSwitcher,
	DateNavigator,
	TodayButton
} from "@devexpress/dx-react-scheduler-material-ui";
import appointments from "../../calendar-data/today-appointments";

const useStyles = makeStyles(theme => ({
	todayCell: {
		backgroundColor: fade(theme.palette.primary.main, 0.1),
		"&:hover": {
			backgroundColor: fade(theme.palette.primary.main, 0.14)
		},
		"&:focus": {
			backgroundColor: fade(theme.palette.primary.main, 0.16)
		}
	},
	weekendCell: {
		backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
		"&:hover": {
			backgroundColor: fade(theme.palette.action.disabledBackground, 0.04)
		},
		"&:focus": {
			backgroundColor: fade(theme.palette.action.disabledBackground, 0.04)
		}
	},
	today: {
		backgroundColor: fade(theme.palette.primary.main, 0.16)
	},
	weekend: {
		backgroundColor: fade(theme.palette.action.disabledBackground, 0.06)
	}
}));

const TimeTableCell = props => {
	const classes = useStyles();
	const { startDate } = props;
	const date = new Date(startDate);

	if (date.getDate() === new Date().getDate()) {
		return <WeekView.TimeTableCell {...props} className={classes.todayCell} />;
	}
	if (date.getDay() === 0 || date.getDay() === 6) {
		return <WeekView.TimeTableCell {...props} className={classes.weekendCell} />;
	}
	return <WeekView.TimeTableCell {...props} />;
};

const DayScaleCell = props => {
	const classes = useStyles();
	const { startDate, today } = props;

	if (today) {
		return <WeekView.DayScaleCell {...props} className={classes.today} />;
	}
	if (startDate.getDay() === 0 || startDate.getDay() === 6) {
		return <WeekView.DayScaleCell {...props} className={classes.weekend} />;
	}
	return <WeekView.DayScaleCell {...props} />;
};

const currentDate = "2018-11-01";
const schedulerData = [
	{ startDate: "2018-11-01T09:45", endDate: "2018-11-01T11:00", title: "Meeting" },
	{ startDate: "2018-11-01T12:00", endDate: "2018-11-01T13:30", title: "Go to a gym" }
];

export class Calendar extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data: appointments,
			currentDate: "2018-06-27"
		};
		this.currentDateChange = currentDate => {
			this.setState({ currentDate });
		};
	}

	render() {
		const { data, currentDate } = this.state;

		return (
			<Paper>
				<Scheduler data={appointments}>
					<ViewState currentDate={currentDate} onCurrentDateChange={this.currentDateChange} />
					<DayView startDayHour={9} endDayHour={14} />
					<WeekView
						startDayHour={9}
						endDayHour={14}
						timeTableCellComponent={TimeTableCell}
						dayScaleCellComponent={DayScaleCell}
					/>
					<MonthView startDayHour={9} endDayHour={14} />
					<Toolbar />
					<DateNavigator />
					<TodayButton />
					<ViewSwitcher />
					<Appointments />
				</Scheduler>
			</Paper>
		);
	}
}

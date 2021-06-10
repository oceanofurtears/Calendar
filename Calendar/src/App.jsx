import React from 'react';

import moment from 'moment';

import Grid from "./components/Calendar";
import LeftPannel from "./components/LeftPannel";
import Days from "./components/Days";

export default class App extends React.Component {
	

	

	render() {
		
		moment.updateLocale('en', {week: {dow: 1} })

		const startDay = moment().startOf('month').startOf('week');
		const endDay = moment().endOf('month').endOf('week');

		let calendar = [];

		let currentDay = startDay.clone();

		while (!currentDay.isAfter(endDay)) {

			calendar.push(currentDay.clone());

			currentDay.add(1, 'days');	
			
		}

		console.log("Начало месяца:   ", startDay.format("DD MMMM YYYY"));
		console.log("Конец месяца:   ", endDay.format("DD MMMM YYYY"));

		console.log("Дебаг:    ", endDay);

		console.log("Текущий месяц:   ", calendar);




		return (
			<div>
				
				
			</div>
		);
	}
}


// function App() {
// 	moment.updateLocale('en', {week: {dow: 1} })

// 	const startDay = moment().startOf('month').startOf('week');
// 	const endDay = moment().endOf('month').endOf('week');

// 	let calendar = [startDay.format("DD MMMM YYYY     "), ];

// 	const currentDay = startDay.format("DD MMMM YYYY     ");

// 	while (!currentDay.isSame(endDay)) {
// 		currentDay.add(1, "day");

// 		calendar.push(currentDay);
			
// 	}

// 	console.log("Начало месяца:   ", startDay.format("DD MMMM YYYY"));
// 	console.log("Конец месяца:   ", endDay.format("DD MMMM YYYY"));

// 	console.log("Текущая неделя:   ", calendar);
// }
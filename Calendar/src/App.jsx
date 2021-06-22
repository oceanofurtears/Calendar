import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import './index.css';


import { CalendarGrid } from './components/CalendarGrid';
import { Header } from './components/Header'
import { Event } from './components/Event';

// const url = 'http://localhost:3001';

function App() {
	
		
		moment.updateLocale('en', {week: {dow: 1} })

		const [today, setToday] = useState(moment());
		const [isCurrentWeek, setIsCurrentWeek] = useState(false);

		let startDay = today.clone().startOf('week');

		
		const prevHandler = () => {
			setToday(prev => prev.clone().subtract(1, 'week'));

			if (today === moment().startOf('month').startOf('week')) {
				setIsCurrentWeek(true);
			}
			else {
				setIsCurrentWeek(false);
			}
		}
		const todayHandler = () => {
			setToday(moment());
			setIsCurrentWeek(true);
		}
		const nextHandler = () => {
			setToday(prev => prev.clone().add(1, 'week'));

			if (today === moment().startOf('month').startOf('week')) {
				setIsCurrentWeek(true);
			}
			else {
				setIsCurrentWeek(false);
			}
		}

		const nextMonth = () => {
			setToday(prev => prev.clone().add(45, 'day').startOf('month').startOf('week'));

			if (today === moment().startOf('month').startOf('week')) {
				setIsCurrentWeek(true);
			}
			else {
				setIsCurrentWeek(false);
			}
		}

		const prevMonth = () => {
			setToday(prev => prev.clone().subtract(15, 'day').startOf('month').startOf('week'));

			if (today === moment().startOf('month').startOf('week')) {
				setIsCurrentWeek(true);
			}
			else {
				setIsCurrentWeek(false);
			}
		}


		//! working with json

		// const [events, setEvents] = useState( []);
		// const startDateQuery = startDay.clone().format('X');
		// const endDateQuery = startDay.clone().endOf('week').format('X');

		// useEffect( () => {
		// 	fetch(`${url}/events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`)
		// 		.then (res => res.json())
		// 		.then (res => {
		// 			console.log('response', res);
		// 			setEvents(res);
					
		// 		});
		// }, []);


		return (
			<div>
				<Header 
					today={today}

					prevHandler={prevHandler}
					todayHandler={todayHandler}
					nextHandler={nextHandler}

					nextMonth={nextMonth}
					prevMonth={prevMonth}
				/>
				<div className="maskWhite">placeholder</div>
				
				<CalendarGrid 
					startDay={startDay}
					
				/>

				<Event
					today={today}
					isCurrentWeek={isCurrentWeek}
				/>
			</div>
		);
	
}

export default App;
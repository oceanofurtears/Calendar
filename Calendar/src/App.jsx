import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import './index.css';


import { CalendarGrid } from './components/CalendarGrid';
import { Header } from './components/Header'
import { Event } from './components/Event';

const url = 'http://localhost:3001';

function App() {
	
		
		moment.updateLocale('en', {week: {dow: 1} })

		const [today, setToday] = useState(moment());
		let startDay = today.clone().startOf('week');

		//* console.log( ( (moment().format("h") * 60) + (moment().format("m"))*1 ) / 360);
		
		const prevHandler = () => {
			setToday(prev => prev.clone().subtract(1, 'week'));
		}
		const todayHandler = () => {
			setToday(moment());
		}
		const nextHandler = () => {
			setToday(prev => prev.clone().add(1, 'week'));
		}

		const nextMonth = () => {
			setToday(prev => prev.clone().add(45, 'day').startOf('month').startOf('week'));
		}

		const prevMonth = () => {
			setToday(prev => prev.clone().subtract(15, 'day').startOf('month').startOf('week'));
		}


		//! working with json

		const [events, setEvents] = useState( []);
		const startDateQuery = startDay.clone().format('X');
		const endDateQuery = startDay.clone().endOf('week').format('X');

		useEffect( () => {
			fetch(`${url}/events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`)
				.then (res => res.json())
				.then (res => {
					console.log('response', res);
					setEvents(res);
					
				});
		}, []);


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
				
				<CalendarGrid startDay={startDay} />

				<Event/>
			</div>
		);
	
}

export default App;
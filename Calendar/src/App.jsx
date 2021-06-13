import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import './index.css';


import { CalendarGrid } from './components/CalendarGrid';
import { Header } from './components/Header'


function App() {
	
		
		moment.updateLocale('en', {week: {dow: 1} })

		const [today, setToday] = useState(moment());
		let startDay = today.clone().startOf('week');
		
		const prevHandler = () => {
			setToday(prev => prev.clone().subtract(1, 'week'));
			console.log('PREVIOUS');
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
				
			</div>
		);
	
}

export default App;
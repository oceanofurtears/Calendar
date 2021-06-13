import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import './index.css';

const DivWrapper = styled ( 'div')`
    display: flex;
`;

const TextWrapper = styled ( 'span')`
    font-size: 18px;
`;

const todayHolder = moment().startOf('month');

const year = todayHolder.format('YYYY');
const month = todayHolder.format('MMMM').toLowerCase();

const Header = ({today, prevHandler, todayHandler, nextHandler, prevMonth, nextMonth}) => (
    
    <DivWrapper>
        <div>
            <button onClick={prevMonth}> &lt; </button>
            
            <TextWrapper className="textGap">{today.format('MMMM').toLowerCase()}</TextWrapper>
            <TextWrapper className="textGap">{today.format('YYYY')}</TextWrapper>
            
            <button onClick={nextMonth}> &gt; </button>
        </div>

        <div className="rightControlPanel">
            <button onClick={prevHandler}> &lt; </button>
            <button className="textGap" onClick={todayHandler}> this week </button>
            <button onClick={nextHandler}> &gt; </button>
        </div>

    </DivWrapper>
    
    
);

export { Header };
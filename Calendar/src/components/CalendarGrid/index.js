import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

import './index.css';

const GridWrapper = styled.div`
    display: grid;

    grid-template-columns: repeat(7, 1fr);
    

    background-color: black;
    grid-gap: 2px;
`;

const CellWrapper = styled.div`
    min-width: 150px;
    min-height: 900px;
    background-color: white;
    color: black;

    
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`;

const CellInRow = styled.div`
    display: flex;
`;

const DayWrapper = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
`;

const CurrentDay = styled('div')`
    display: flex;

    height: 100%;
    width: 100%;
    background-color: #C2FFAD;
    border-radius: 50%;

    border: 1px solid black;

    align-items: center;
    justify-content: center;
`;

const OtherDays = styled('div')`
    display: flex;

    height: 100%;
    width: 100%;
    background-color: #EBEBEB;
    border-radius: 50%;

    border: 1px solid black;

    align-items: center;
    justify-content: center;
`;

const Reboot = styled('div')`
    display: flex;

    height: 100%;
    width: 100%;

    margin-left: 15px;

    align-items: center;
    justify-content: center;
`;

const CurrentTime = styled('div') `
    position: relative;

    height: 3px;
    background-color: red;
    color: red;

    bottom: ${ ( (moment().format("h") * 60) + (moment().format("m"))*1 ) / 360}"px";
`


const CalendarGrid = ({startDay}) => {

    const totalDays = 7;
    const currentDay = startDay.clone().subtract(1, 'day');

    let daysList = [...Array(totalDays)].map(() => currentDay.add(1, 'day').clone());

    const isCurrentDay = (currentDay) => moment().isSame(currentDay, 'day');
    
    return (
        <div>

            <div> </div>
            <GridWrapper>
                {
                    daysList.map((dayItem) => (
                        <CellWrapper
                            key={dayItem.format('D')}
                        >
                            <CellInRow>
                                <DayWrapper>
                                    {!isCurrentDay(dayItem) && <OtherDays>{dayItem.format('D')}</OtherDays> } {/* Необходимо выводить день недели рядом*/}
                                    {isCurrentDay(dayItem) && <CurrentDay>{dayItem.format('D')}</CurrentDay> }
                                </DayWrapper>
                            </CellInRow>
                        </CellWrapper>
                    ))
                }
            </GridWrapper>

            <hr className="underline" />
            <hr className="dateUnderline" />

            <CurrentTime />

            {/* //! Horizontal lines */}
            <hr className="eightAM" />
            <hr className="nineAM" />
            <hr className="tenAM" />
            <hr className="elevenAM" />
            <hr className="twelveAM" />
            <hr className="onePM" />
            <hr className="twoPM" />
            <hr className="threePM" />
            <hr className="fourPM" />
            <hr className="fivePM" />

            {/* //! Timings */}
            <div className="eightAMTiming"> 8:00 AM </div>
            <div className="nineAMTiming"> 9:00 AM </div>
            <div className="tenAMTiming"> 10:00 AM </div>
            <div className="elevenAMTiming"> 11:00 AM </div>
            <div className="twelveAMTiming"> 12:00 AM </div>
            <div className="onePMTiming"> 1:00 PM </div>
            <div className="twoPMTiming"> 2:00 PM </div>
            <div className="threePMTiming"> 3:00 PM </div>
            <div className="fourPMTiming"> 4:00 PM </div>
            <div className="fivePMTiming"> 5:00 PM </div>
            
        </div>
    )
}

export { CalendarGrid }
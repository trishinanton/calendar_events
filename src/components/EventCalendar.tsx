import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";

interface EventCalendarProps {
    events: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = (props) => {

    function dateCellRender(value: Moment) {
        const formatedData = formatDate(value.toDate());
        const currentDayEvents = props.events.filter(ev => ev.date === formatedData)
        return (
            <div>
                {currentDayEvents.map((ev,index) =>
                    <div key={index}>{ev.description}</div>
                )}
            </div>
        )
    }

    return (
        <div>
            <Calendar
                dateCellRender={dateCellRender}
            />
        </div>
    );
};

export default EventCalendar;
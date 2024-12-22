import React, { useState, useRef } from 'react';
import { CalendarEvent } from './CalendarEvent';
import TimeGrid from './TimeGrid';
import { layoutCalendarEvents } from '../utils/Layout';
import type { CalendarEvent as CalendarEventType } from '../types/Calendar';

const sampleEvents: CalendarEventType[] = [
    { title: 'Sample Item', start: 10, end: 90 },
    { title: 'Sample Item', start: 20, end: 80 },
    { title: 'Sample Item', start: 70, end: 180 },
    { title: 'Sample Item', start: 90, end: 180 },
    { title: 'Sample Item', start: 200, end: 270 },
    { title: 'Sample Item', start: 230, end: 290 },
    { title: 'Sample Item', start: 300, end: 340 },
    { title: 'Sample Item', start: 350, end: 400 },
    { title: 'Sample Item', start: 370, end: 580 },
    { title: 'Sample Item', start: 410, end: 480 },
    { title: 'Sample Item', start: 450, end: 590 },
    { title: 'Sample Item', start: 500, end: 595 },
    { title: 'Sample Item', start: 530, end: 590 },
    { title: 'Sample Item', start: 600, end: 660 },
    { title: 'Sample Item', start: 650, end: 690 },
    { title: 'Sample Item', start: 670, end: 710 }
];

export default function Calendar() {
    const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
    const calendarRef = useRef<HTMLDivElement>(null);

    const positionedEvents = layoutCalendarEvents(sampleEvents);
    const handleEventClick = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setSelectedEventId(selectedEventId === index ? null : index);
    };
    const handleCalendarClick = () => {
        setSelectedEventId(null);
    }

    return (
        <div
            ref={calendarRef}
            className="w-[620px] h-[720px] border border-gray-200 rounded-lg overflow-visible"
            onClick={handleCalendarClick}
        >
            <div className="relative w-[600px] bg-gray-300 h-full mx-auto flex">
                <TimeGrid />
                <div className="flex-1 relative z-10">
                    <div className="absolute inset-0 grid grid-cols-1 grid-rows-24">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="border-t border-gray-200"></div>
                        ))}
                    </div>
                    {positionedEvents.map((event, index) => (
                        <CalendarEvent
                            key={index}
                            title={event.title}
                            top={event.start}
                            height={event.end - event.start}
                            left={`${event.left}%`}
                            width={`${event.width}%`}
                            onClick={(e) => handleEventClick(index, e)}
                            isSelected={selectedEventId === index}
                            event={event}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}


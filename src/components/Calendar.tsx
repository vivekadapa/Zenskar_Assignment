import React, { useState, useRef } from 'react';
import { CalendarEvent } from './CalendarEvent';
import { InfoBox } from './InfoBox';
import TimeGrid from './TimeGrid';
import { layoutCalendarEvents } from '../utils/Layout';
import type { CalendarEvent as CalendarEventType } from '../types/Calendar';

const sampleEvents: CalendarEventType[] = [
    { title: 'Sample Item', start: 120, end: 180 },
    { title: 'Sample Item', start: 150, end: 190 },
    { title: 'Sample Item', start: 0, end: 120 },
    { title: 'Sample Item', start: 0, end: 50 },
    { title: 'Sample Item', start: 660, end: 720 }
];

export default function Calendar() {
    const [selectedEvent, setSelectedEvent] = useState<CalendarEventType | null>(null);
    const [infoBoxPosition, setInfoBoxPosition] = useState({ top: 0, left: 0 });
    const calendarRef = useRef<HTMLDivElement>(null);

    const positionedEvents = layoutCalendarEvents(sampleEvents);
    const handleEventClick = (event: CalendarEventType, e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        const calendarRect = calendarRef.current?.getBoundingClientRect();
        if (calendarRect) {
            const topPosition = rect.top - calendarRect.top - 10;
            const leftPosition = rect.right - calendarRect.left + 10;

            setInfoBoxPosition({
                top: Math.max(0, Math.min(topPosition, calendarRect.height - 150)),
                left: leftPosition > calendarRect.width / 2 ? rect.left - calendarRect.left - 271 : leftPosition,
            });
        }

        setSelectedEvent(event);
    };


    const handleCalendarClick = () => {
        setSelectedEvent(null);
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
                            onClick={(e) => handleEventClick(event, e)}
                        />
                    ))}
                    {selectedEvent && (
                        <InfoBox
                            event={selectedEvent}
                            position={infoBoxPosition}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}


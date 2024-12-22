import React from 'react';
import type { CalendarEvent } from '../types/Calendar';
import { formatTime } from '../utils/FormatTime';

interface InfoBoxProps {
    event: CalendarEvent;
    position: { top: number; left: number };
}

export const InfoBox: React.FC<InfoBoxProps> = ({ event, position }) => {
    return (
        <div
            className="absolute bg-white border border-gray-200 rounded-md shadow-lg p-4 z-30"
            style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
                width: '200px',
            }}
        >
            <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Sample Location</p>
            <p className="text-sm text-gray-600">
                {`${formatTime(event.start)} - ${formatTime(event.end)}`}
            </p>
        </div>
    );
};
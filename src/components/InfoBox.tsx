import React from 'react';
import { CalendarEvent } from '../types/Calendar';
import { formatTime } from '../utils/FormatTime';

interface InfoBoxProps {
    event: CalendarEvent;
    onClose: (e: React.MouseEvent) => void;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ event, onClose }) => {
    return (
        <div
            className="absolute bg-white border border-gray-200 rounded-md shadow-lg p-4 z-50 w-[200px] left-full ml-2 top-0"
            onClick={(e) => e.stopPropagation()}
        >
            <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Sample Location</p>
            <p className="text-sm text-gray-600">
                {`${formatTime(event.start)} - ${formatTime(event.end)}`}
            </p>
            <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                onClick={onClose}
            >
                ✕
            </button>
        </div>
    );
};
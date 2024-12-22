import type { CalendarEvent } from '../types/Calendar';
import { InfoBox } from './InfoBox';

interface CalendarEventProps {
  title: string;
  top: number;
  height: number;
  left: string;
  width: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  isSelected: boolean;
  event: CalendarEvent;
}

export function CalendarEvent({ title, top, height, left, width, onClick, isSelected, event}: CalendarEventProps) {
  return (
    <div
      className="absolute cursor-pointer bg-white border border-l-black border-l-[0.3rem] border-l-primary rounded-sm px-2 py-1 overflow-visible shadow-sm"
      style={{
        top: `${top}px`,
        height: `${height}px`,
        left: left,
        width: width,
      }}
      onClick={onClick}
    >
      <h3 className="font-semibold text-sm truncate">{title}</h3>
      <p className="text-xs text-muted-foreground truncate">Sample Location</p>
      {isSelected && (
        <InfoBox 
        event={event}
        onClose={(e) => {
          e?.stopPropagation();
          onClick(e as React.MouseEvent<HTMLDivElement>);
        }} 
         />
      )}
    </div>
  );
}


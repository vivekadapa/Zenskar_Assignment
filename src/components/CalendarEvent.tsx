
interface CalendarEventProps {
  title: string;
  top: number;
  height: number;
  left: string;
  width: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function CalendarEvent({ title, top, height, left, width, onClick }: CalendarEventProps) {
  return (
    <div
      className="absolute cursor-pointer bg-white border border-l-black border-l-[0.3rem] border-l-primary rounded-sm px-2 py-1 overflow-hidden shadow-sm z-20"
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
    </div>
  );
}


export interface CalendarEvent {
    title: string
    start: number
    end: number
  }
  
  export interface PositionedEvent extends CalendarEvent {
    left: number
    width: number
    column: number
    totalColumns: number
  }
  
  
import type { CalendarEvent, PositionedEvent } from '../types/Calendar'

export function layoutCalendarEvents(events: CalendarEvent[]): PositionedEvent[] {

    const sortedEvents = events.sort((a, b) => a.start - b.start)
    const groups: CalendarEvent[][] = []
    let currentGroup: CalendarEvent[] = []

    sortedEvents.forEach((event) => {
        if (currentGroup.length === 0 ||
            event.start < currentGroup[currentGroup.length - 1].end) {
            currentGroup.push(event)
        } else {
            if (currentGroup.length > 0) {
                groups.push([...currentGroup])
            }
            currentGroup = [event]
        }
    })

    if (currentGroup.length > 0) {
        groups.push(currentGroup)
    }
    const positionedEvents: PositionedEvent[] = []

    groups.forEach((group) => {
        const columns: CalendarEvent[][] = [[]]

        group.forEach((event) => {
            let columnIndex = 0
            while (
                columns[columnIndex]?.some(
                    (existingEvent) =>
                        event.start < existingEvent.end && event.end > existingEvent.start
                )
            ) {
                columnIndex++
                if (!columns[columnIndex]) {
                    columns[columnIndex] = []
                }
            }

            columns[columnIndex].push(event)
        })

        group.forEach((event) => {
            const columnIndex = columns.findIndex((column) =>
                column.includes(event)
            )

            positionedEvents.push({
                ...event,
                column: columnIndex,
                totalColumns: columns.length,
                left: (columnIndex * 100) / columns.length,
                width: 100 / columns.length
            })
        })
    })
    return positionedEvents
}


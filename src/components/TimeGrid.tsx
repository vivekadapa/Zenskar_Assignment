
import { useMemo } from 'react'

const TimeGrid = () => {

    const timeLabels = useMemo(() => {
        const labels = []
        for (let i = 9; i <= 21; i++) {
            const hour = i > 12 ? i - 12 : i
            const meridiem = i >= 12 ? 'PM' : 'AM'
            labels.push(`${hour}:00 ${meridiem}`)
            if (i < 21) {
                labels.push(`${hour}:30 ${meridiem}`)
            }
        }
        return labels
    }, [])

    return (
        <div className="bg-white flex flex-col justify-between  pr-2 text-right text-gray-500">
            {timeLabels.map((label, index) => (
                <div key={index} className={`border-black ${index % 2 === 0 ? 'font-semibold text-[0.85rem]' : 'text-[0.75rem]'}`}>
                    {label}
                </div>
            ))}
        </div>
    )
}

export default TimeGrid
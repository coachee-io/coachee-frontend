import {Weekdays} from '../../../enums/Weekdays'

export function createDateHashMap(availability: any[]): {} | null{
  if (!availability || availability.length === 0) {
    return null
  }

  const timeToString = (start: number, end: number) => {
    if (Number.isInteger(end)) {
      return `${parseInt(start.toFixed(2), 10)}.30-${end.toFixed(2)}`
    }

    return `${start.toFixed(2)}-${start}.30`
  }

  const createTimeRanges = (start: number, end: number): any[] => {
    const timeRanges: any[] = []

    for (let i = start; i < end; i += 0.50) {
      const time: any = {}

      if (Number.isInteger(i)) {
        time.hours = i
        time.minutes = 0
        time.start = i
        time.end = i + 0.50
        time.hour = timeToString(time.start, time.end)
      } else {
        time.hours = parseInt(i.toFixed(2), 10)
        time.minutes = 30
        time.start = i
        time.end = i + 0.50
        time.hour = timeToString(time.start, time.end)
      }
      timeRanges.push(time)
    }

    return timeRanges
  }

  const hashmap: {
    [index:string]: any[]
  } = {}

  availability.forEach((day: any) => {
    const {weekDay, start, end} = day
    if (!hashmap[Weekdays[weekDay]]) {
      hashmap[Weekdays[weekDay]] = createTimeRanges(start, end)
    } else {
      const timeRanges = createTimeRanges(start, end)
      hashmap[Weekdays[weekDay]] = hashmap[Weekdays[weekDay]].concat(timeRanges)
    }
  })
  return hashmap
}

export function getFirstAvailableDay(weekDayMap: {} | null): any {
  if (!weekDayMap) {
    return 0
  }
  const key: any = Object.keys(weekDayMap)[0]
  return Weekdays[key]
}

export function getAllAvailableDays(weekDayMap: {} | null): any {
  if (!weekDayMap) {
    return []
  }
  return Object.keys(weekDayMap).map((key: any) => Weekdays[key])
}

export function getDayOfTheWeek(day: any): any {
  return Weekdays[day]
}

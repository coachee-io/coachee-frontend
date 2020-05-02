import moment, {Moment} from 'moment'
import {Weekdays} from '../../../enums/Weekdays'

export function createDateHashMap(availability: any[]): {} | null{
  if (!availability || availability.length === 0) {
    return null
  }

  const timeToString = (start: number, end: number) => {
    if (Number.isInteger(end)) {
      return `${parseInt(start.toFixed(2), 10)}:30-${end.toFixed(2)}`
    }

    return `${start.toFixed(2)}-${start}:30`
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

/**
* By default react-dates will block today
* If the first day of the week is in the past (today - 1)
* We need to get the next following today + 1
* */
export function getFirstAvailableDay(weekDayMap: {} | null): string | number | any {
  if (!weekDayMap) {
    return 0
  }

  const keys: any = Object.keys(weekDayMap)
  const key: any = keys.find((objKey: any) => moment().day().toString() === Weekdays[objKey])
  if (!key) {
    return Weekdays[keys[0]]
  }
  const day: any = Weekdays[key]
  const weekDay: any = Weekdays[day + 1]

  return Weekdays[weekDay]
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

export function createDateFromHoursAndMinutes(date: Moment | null, hour: number, minute: number): number | null{
  if (!date) {
    return null
  }

  return parseInt(date.set({
    hour,
    minute,
    second: 0,
  }).format('x'), 10)
}

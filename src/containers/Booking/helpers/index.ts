import moment, {Moment} from 'moment'
import {Weekdays} from '../../../enums/Weekdays'

const isMinutesPlural = (value: number): string => (value > 10 ? `${value}` : `${value}0`)

const timeToLabel = (start: string, end: string) => `${start}-${end}`

export const createTimeRanges = (start: number, end: number, firstCallDuration = 30) => {
  const timeRanges: any[] = []

  let currentTime = moment().set({hour: start, minute: 0})
  timeRanges.push(currentTime)

  while (currentTime.hour() < end) {
    currentTime = moment(currentTime).add(firstCallDuration, 'minutes')
    timeRanges.push(currentTime)
  }

  const timeSlots: any[] = []

  for (let i = 0; i < timeRanges.length - 1; i++) {
    const slot: any = {}
    slot.hour = timeRanges[i].hour()
    slot.minutes = timeRanges[i].minutes()
    slot.start = `${timeRanges[i].hour()}:${isMinutesPlural(timeRanges[i].minutes())}`
    slot.end = `${timeRanges[i + 1].hour()}:${isMinutesPlural(timeRanges[i + 1].minutes())}`
    slot.label = timeToLabel(slot.start, slot.end)
    timeSlots.push(slot)
  }

  return timeSlots
}

export function createDateHashMap(availability: any[], firstCallDuration = 30): {} | null{
  if (!availability || availability.length === 0) {
    return null
  }

  const hashmap: {
    [index:string]: any[]
  } = {}

  availability.forEach((day: any) => {
    const {
      weekDay, start, end,
    } = day
    if (!hashmap[Weekdays[weekDay]]) {
      hashmap[Weekdays[weekDay]] = createTimeRanges(start, end, firstCallDuration)
    } else {
      hashmap[Weekdays[weekDay]] = hashmap[Weekdays[weekDay]].concat(createTimeRanges(start, end, firstCallDuration))
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

export const isDayBlocked = (date: any, availableDays: number[] | null) => {
  if (!availableDays) {
    return false
  }

  const found = availableDays.some((availableDay: number) => moment(date).day() === availableDay)

  if (found) {
    return false
  }

  return true
}

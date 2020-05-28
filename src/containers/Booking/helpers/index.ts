import moment, {Moment} from 'moment'
import {Weekdays} from '../../../enums/Weekdays'

import {enumToArray} from '../../../utils/enumToArray'

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

/**
 * Find first available day
 * Conditions:
 * Can't be before or today
 * If
 */

export function getFirstAvailableDay(weekDayMap: {} | null): Moment | null {
  if (!weekDayMap) {
    return moment()
  }

  const availableDays = Object.keys(weekDayMap).map((key: any) => Weekdays[key])
  const today = moment()
  const week = moment().utc().startOf('week')

  let firstAvailableDay = null

  for (let i = 0; i < availableDays.length; i++) {
    const found = false
    for (let j = 0; j <= 13; j++) {
      const weekDayDate = week.clone().add(j, 'day')
      const isWeekDayDateGreaterThanToday = parseInt(today.format('X'), 10) < parseInt(weekDayDate.format('X'), 10)
      const isSameDay = weekDayDate.weekday() === parseInt(availableDays[i], 10)
      if (isWeekDayDateGreaterThanToday && isSameDay) {
        firstAvailableDay = weekDayDate
      }
    }

    if (found) {
      break
    }
  }

  return firstAvailableDay
}

export function getFirstAvailableWeekDay(weekDay: Moment): any {
  return weekDay.day()
}

export function getAllAvailableDays(weekDayMap: {} | null): any {
  if (!weekDayMap) {
    return []
  }

  return Object.keys(weekDayMap).map((key: any) => Weekdays[key])
}

export function getDayOfTheWeek(date: Moment | null): number {
  return date ? date.day() : 0
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

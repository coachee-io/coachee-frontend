import moment, {Moment} from 'moment'
import {
  GetCoachAvailabilityRequest,
} from '../../../services/public/coaches/types'
import {Weekdays} from '../../../enums/Weekdays'

const isMinutesPlural = (value: number): string => (value > 10 ? `${value}` : `${value}0`)

const timeToLabel = (start: string, end: string) => `${start}-${end}`

const getTomorrow = (): number => moment().add(1, 'day').day()

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

export function createDateHashMap(availability: GetCoachAvailabilityRequest[], firstCallDuration = 30): {} | null{
  if (!availability || availability.length === 0) {
    return null
  }

  const hashmap: {
    [index:string]: any[]
  } = {}

  availability.forEach((day: GetCoachAvailabilityRequest) => {
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
  const weekDates: Moment[] = []

  for (let j = 0; j <= 13; j++) {
    const weekDayDate = week.clone().add(j, 'day')
    const isWeekDayDateGreaterThanToday = parseInt(today.format('x'), 10) < parseInt(weekDayDate.format('x'), 10)
    const isSameDay = availableDays.some((day) => weekDayDate.weekday() === parseInt(day, 10))
    // const isTomorrow = availableDays.some((day) => parseInt(day, 10) === getTomorrow())
    if (isWeekDayDateGreaterThanToday && isSameDay) {
      weekDates.push(weekDayDate)
    }
  }

  // /**
  //  * Check if the first day of the week is tomorrow,
  //  * if it is, we want to get the very next week day date.
  //  * */
  // if (weekDates[0].day() === moment().add(1, 'd').day() && weekDates.length > 0) {
  //   return weekDates[1]
  // }
  console.log(weekDates.map((date) => moment(date).day()))
  return weekDates[0]
}

export function getFirstAvailableWeekDay(date: Moment | null): number | null {
  return date ? date.day() : null
}

export function getAllAvailableDays(weekDayMap: {} | null): any {
  if (!weekDayMap) {
    return []
  }

  return Object.keys(weekDayMap).map((key: any) => Weekdays[key])
}

export function getDayOfTheWeek(day: any): string {
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

export const isDayBlocked = (date: Moment, availableDays: number[] | null) => {
  if (!availableDays) {
    return false
  }

  // // Block tomorrow / next 24 hours
  // if (moment(date).day() === moment().add(1, 'd').day()) {
  //   return true
  // }

  // Otherwise, block any other unavailable day
  const found = availableDays.find((availableDay: number) => moment(date).day() === availableDay)

  if (found && found === getTomorrow()) {
    return true
  }

  if (found) {
    return false
  }

  return true
}

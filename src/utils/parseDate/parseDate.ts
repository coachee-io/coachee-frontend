import moment from 'moment'

export const parseDateToSeconds = (date: number): number | null => {
  if (!date) {
    return null
  }
  return parseInt(moment(date).format('X'), 10)
}

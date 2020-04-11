import moment from 'moment'

export const parseDateToSeconds = (date: number): number => parseInt(moment(date).format('X'), 10)

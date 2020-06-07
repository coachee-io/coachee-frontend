import {
  createTimeRanges,
  getFirstAvailableDay,
} from '../index'


describe('createTimeRanges', () => {
  it('should return time range between 17 and 18 with an interval of 15 mins', () => {
    expect(createTimeRanges(17, 18, 15)).toEqual([
      {
        hour: 17,
        minutes: 0,
        start: '17:00',
        end: '17:15',
        label: '17:00-17:15',
      },
      {
        hour: 17,
        minutes: 15,
        start: '17:15',
        end: '17:30',
        label: '17:15-17:30',
      },
      {
        hour: 17,
        minutes: 30,
        start: '17:30',
        end: '17:45',
        label: '17:30-17:45',
      },
      {
        hour: 17,
        minutes: 45,
        start: '17:45',
        end: '18:00',
        label: '17:45-18:00',
      },
    ])
  })

  it('should return time range between 17 and 18 with an interval of 30 mins', () => {
    expect(createTimeRanges(17, 18, 30)).toEqual([
      {
        hour: 17,
        minutes: 0,
        start: '17:00',
        end: '17:30',
        label: '17:00-17:30',
      },
      {
        hour: 17,
        minutes: 30,
        start: '17:30',
        end: '18:00',
        label: '17:30-18:00',
      },
    ])
  })

  it('should return time range between 17 and 18 with an interval of 45 mins', () => {
    expect(createTimeRanges(17, 18, 45)).toEqual([
      {
        hour: 17,
        minutes: 0,
        start: '17:00',
        end: '17:45',
        label: '17:00-17:45',
      },
      {
        hour: 17,
        minutes: 45,
        end: '18:30',
        start: '17:45',
        label: '17:45-18:30',
      },
    ])
  })

  it('should return time range between 1 and 2 with an interval of 15 mins', () => {
    expect(createTimeRanges(1, 2, 15)).toEqual([
      {
        hour: 1,
        minutes: 0,
        start: '1:00',
        end: '1:15',
        label: '1:00-1:15',
      },
      {
        hour: 1,
        minutes: 15,
        end: '1:30',
        start: '1:15',
        label: '1:15-1:30',
      },
      {
        hour: 1,
        minutes: 30,
        end: '1:45',
        start: '1:30',
        label: '1:30-1:45',
      },
      {
        hour: 1,
        minutes: 45,
        end: '2:00',
        start: '1:45',
        label: '1:45-2:00',
      },
    ])
  })

  it('should return time range between 1 and 2 with an interval of 30 mins', () => {
    expect(createTimeRanges(1, 2, 30)).toEqual([
      {
        hour: 1,
        minutes: 0,
        start: '1:00',
        end: '1:30',
        label: '1:00-1:30',
      },
      {
        hour: 1,
        minutes: 30,
        end: '2:00',
        start: '1:30',
        label: '1:30-2:00',
      },
    ])
  })

  it('should return time range between 1 and 2 with an interval of 45 mins', () => {
    expect(createTimeRanges(1, 2, 45)).toEqual([
      {
        hour: 1,
        minutes: 0,
        start: '1:00',
        end: '1:45',
        label: '1:00-1:45',
      },
      {
        hour: 1,
        minutes: 45,
        end: '2:30',
        start: '1:45',
        label: '1:45-2:30',
      },
    ])
  })
})

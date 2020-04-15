import * as moment from 'moment'

const format = 'DD/MM/YYYY hh:mm:ss'

export function dateFormat (date: Date) {
  return moment(date).format(format)
}

export function minutesAgo (date: Date) {
  return moment().diff(moment(date), 'minutes')
}

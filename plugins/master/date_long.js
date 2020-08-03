export default (context, inject) => {

  const date_long = (date, locale) => {
    var time = new Date(date)
    return time.toLocaleString(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })
  }

  inject('date_long', date_long)
  context.$date_long = date_long
}

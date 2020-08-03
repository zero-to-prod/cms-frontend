export default (context, inject) => {

  const ellipsis = (string, length, start = 0)  => {
    return string.substring(start, length) + ' ...'
  }

  inject('ellipsis', ellipsis)
  context.$ellipsis = ellipsis
}

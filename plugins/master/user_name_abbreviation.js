export default (context, inject) => {

  const user_name_abbreviation = string  => {
    return string.match(/\b\w/g).join('')
  }

  inject('user_name_abbreviation', user_name_abbreviation)
  context.$user_name_abbreviation = user_name_abbreviation
}

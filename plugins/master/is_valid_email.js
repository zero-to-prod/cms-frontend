export default (context, inject) => {

  const is_valid_email = email => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  inject('is_valid_email', is_valid_email)
  context.$is_valid_email = is_valid_email
}

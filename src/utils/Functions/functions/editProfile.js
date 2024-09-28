export const editProfile = (profileCard, user, isArray) => {
  const userEditing = JSON.parse(localStorage.getItem('user'))

  const fields = profileCard.querySelectorAll('.userProfile span')
  console.log(user)

  if (userEditing.role === 'admin' && isArray) {
    const fieldRole = profileCard.querySelector('.infoBoxUser div>p')
    if (fieldRole) {
      const inputRole = document.createElement('input')
      const fieldName = fieldRole.className
      inputRole.type = 'text'
      inputRole.value = fieldRole.textContent
      inputRole.className = fieldName
      fieldRole.replaceWith(inputRole)
    }
  } else {
    fields.forEach((field) => {
      const fieldName = field.className
      const input = document.createElement('input')
      input.type = 'text'
      input.value = field.textContent
      input.className = fieldName
      field.replaceWith(input)
    })

    const inputUpdateImg = document.createElement('input')
    inputUpdateImg.type = 'file'
    inputUpdateImg.className = 'profileImgInput'
    profileCard.querySelector('.infoBoxUser').prepend(inputUpdateImg)
  }
}

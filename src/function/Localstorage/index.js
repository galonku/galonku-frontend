const storeLocalstorage = (data) => {
  const dataString = JSON.stringify(data)
  localStorage.setItem('Account', dataString)
}

const getLocalstorage = () => {
  const dataString = localStorage.getItem('Account')
  const data = JSON.parse(dataString)
  return data
}

const removeLocalstorage = () => {
  localStorage.removeItem('Account')
}

export { storeLocalstorage, getLocalstorage, removeLocalstorage }
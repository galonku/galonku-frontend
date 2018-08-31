const storeLocalstorage = (name, data) => {
  const dataString = JSON.stringify(data)
  localStorage.setItem(name, dataString)
}

const getLocalstorage = (name) => {
  const dataString = localStorage.getItem(name)
  const data = JSON.parse(dataString)
  return data
}

const removeLocalstorage = (name) => {
  localStorage.removeItem(name)
}

export { storeLocalstorage, getLocalstorage, removeLocalstorage }
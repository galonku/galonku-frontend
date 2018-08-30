import request from '../../helpers/axios'

const getUsers = (param, token) => {
  return new Promise((resolve, reject) => {
    request
      .get(`/users${param}`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        const users = response.data.user.map((users) => {
          return users
        })
        resolve(users)

      })
      .catch(error => {
        console.log(error.response)
        reject(error)
      })
  })

}

export default getUsers
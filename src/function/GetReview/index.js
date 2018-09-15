import request from '../../helpers/axios'

const getReviews = (id, token) => {
  return new Promise((resolve, reject) => {
    request
      .get(`/merchants/reviews/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })

}

export default getReviews
import request from '../../helpers/axios'

const getReviews = (token) => {
  return new Promise((resolve, reject) => {
    request
      .get('/merchants/reviews', {
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
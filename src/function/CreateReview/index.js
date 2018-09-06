import request from '../../helpers/axios'

const createReview = (review, token) => {
  return new Promise((resolve, reject) => {
    request
      .post('/merchants/add-reviews', review, {
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

export default createReview 
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
        console.log(response.data.message)
        resolve(response)
      })
      .catch(error => {
        console.log(error.response)
        reject(error)
      })
  })
}

export default createReview 
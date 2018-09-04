import request from '../../helpers/axios'

const createFeedback = (feedback) => {
  return new Promise((resolve, reject) => {
    request
      .post('/feedback/send', feedback)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default createFeedback
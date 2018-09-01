import request from '../../helpers/axios'

const getMerchants = (params) => {
  return new Promise((resolve, reject) => {
    request
      .get(`/merchants${params}`)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        console.log('failed')
        reject(error)
      })
  })

}

export default getMerchants
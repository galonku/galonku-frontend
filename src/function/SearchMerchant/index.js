import request from '../../helpers/axios'

const searchMerchant = (params) => {
  return new Promise((resolve, reject) => {
    request
      .get(`/merchants${params}`)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })

}

export default searchMerchant
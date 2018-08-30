import request from '../../helpers/axios'

const searchMerchant = (params) => {
  return new Promise((resolve, reject) => {
    request
      .get(`/merchants${params}`)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        console.log(error.response.data.message)
        reject(error)
      })
  })

}

export default searchMerchant
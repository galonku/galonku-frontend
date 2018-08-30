import request from '../../helpers/axios'

const getMerchants = (params) => {
  return new Promise((resolve, reject) => {
    request
      .get(`/merchants${params}`)
      .then(response => {
        const merchantsName = response.data.map((merchant) => {
          return {
            key: merchant.id,
            value: merchant.store_name,
            text: merchant.store_name
          }
        })
        resolve(merchantsName)

      })
      .catch(error => {
        console.log('failed')
        reject(error)
      })
  })

}

export default getMerchants
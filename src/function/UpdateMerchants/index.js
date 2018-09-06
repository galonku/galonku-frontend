import request from '../../helpers/axios'

const updateMerchants = (param, data, token) => {
  return new Promise((resolve, reject) => {
    request
      .put(`/merchants/edit-profile${param}`, data, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        resolve()
      })
      .catch(error => {
        reject(error)
      })
  })

}

export default updateMerchants
// import React from 'react'
import request from '../../helpers/axios'

// import { Modal } from 'semantic-ui-react'

const Register = (URL, data) => {

  request
    .post(URL, data)
    .then(response => console.log(response.data.message))
    .catch(error => console.log(error.response.data.message))
}

export default Register
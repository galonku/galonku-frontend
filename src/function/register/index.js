// import React from 'react'
import request from '../../helpers/axios'

// import { Modal } from 'semantic-ui-react'

const Register = (URL, data) => {

  request
    .post(URL, data)
    .then(response => console.log(response.data.message))
    .catch(response => console.log(response.data.message)) //data.message in catch tends to fail, please make sure it works
}

export default Register
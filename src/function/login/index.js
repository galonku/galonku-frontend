import request from '../../helpers/axios'

const Login = (URL, data) => {

  request
    .post(URL, data)
    .then(response => console.log(response.data.message))
    .catch(response => console.log(response.data.message)) //data.message in catch tends to fail, please make sure it works
}

export default Login
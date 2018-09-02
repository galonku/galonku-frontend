import updateOrderStatus from '../../../../../function/UpdateOrderStatus'
import { getLocalstorage } from '../../../../../function/Localstorage'

const handleClickReject = async () => {
  const account = await getLocalstorage('Account')
  const order = await getLocalstorage('Order')

  const updatedStatus = {
    status: 'rejected'
  }

  updateOrderStatus(order.id, updatedStatus, account.token)

}

const handleClickAccept = async () => {
  const account = await getLocalstorage('Account')
  const order = await getLocalstorage('Order')

  const updatedStatus = {
    status: 'processing'
  }

  updateOrderStatus(order.id, updatedStatus, account.token)
}

const handleClickDeliver = async () => {
  const account = await getLocalstorage('Account')
  const order = await getLocalstorage('Order')

  const updatedStatus = {
    status: 'delivering'
  }

  updateOrderStatus(order.id, updatedStatus, account.token)
}

const handleClickDone = async () => {
  const account = await getLocalstorage('Account')
  const order = await getLocalstorage('Order')

  const updatedStatus = {
    status: 'done'
  }

  updateOrderStatus(order.id, updatedStatus, account.token)
}

const handleClickReview = async () => {

}

export { handleClickAccept, handleClickReject, handleClickDeliver, handleClickDone, handleClickReview }
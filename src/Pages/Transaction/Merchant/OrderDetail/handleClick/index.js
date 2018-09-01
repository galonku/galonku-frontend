import updateOrderStatus from '../../../../../function/UpdateOrderStatus'
import { getLocalstorage } from '../../../../../function/Localstorage'

const handleClickReject = async () => {
  const data = await getLocalstorage('Account')
  const storage = await getLocalstorage('Order')

  const updatedStatus = {
    status: 'rejected'
  }

  updateOrderStatus(storage.id, updatedStatus, data.token)

}

const handleClickAccept = async () => {
  const data = await getLocalstorage('Account')
  const storage = await getLocalstorage('Order')

  const updatedStatus = {
    status: 'progress'
  }

  updateOrderStatus(storage.id, updatedStatus, data.token)
}

const handleClickDeliver = async () => {
  const data = await getLocalstorage('Account')
  const storage = await getLocalstorage('Order')

  const updatedStatus = {
    status: 'delivering'
  }

  updateOrderStatus(storage.id, updatedStatus, data.token)
}

const handleClickDone = async () => {
  const data = await getLocalstorage('Account')
  const storage = await getLocalstorage('Order')

  const updatedStatus = {
    status: 'done'
  }

  updateOrderStatus(storage.id, updatedStatus, data.token)
}

const handleClickReview = async () => {

}

export { handleClickAccept, handleClickReject, handleClickDeliver, handleClickDone, handleClickReview }
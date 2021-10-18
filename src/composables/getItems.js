import { ref } from 'vue'
import http from '@/services'
import useUtils from './useUtils'

const captureError = (error) => {
  switch (error) {
    case 404:
      return `${error} - Página não encontrada`

    default:
      break
  }
}

const getItems = () => {
  const { delay } = useUtils()
  const items = ref([])
  const error = ref(null)
  const isPending = ref(false)

  const load = async (data) => {
    isPending.value = true
    await delay(500)
    try {
      const res = await http.get(data)
      items.value = res.data
      isPending.value = false
      error.value = null
    } catch (err) {
      error.value = captureError(err.response.status)
      isPending.value = false
      console.log(error.value)
    } finally {
      isPending.value = false
    }
  }

  return { items, error, isPending, load }
}

export default getItems

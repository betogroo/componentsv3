import { ref } from 'vue'
import { fbFirestore } from '@/plugins/firebase.js'

const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = fbFirestore.collection(collection).orderBy('createdAt')
  collectionRef.onSnapshot((snap) => {
    let results = []
    snap.docs.foreEach(
      (doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
      },
      (error) => {
        console.log(error.message)
        documents.value = null
        error.value = 'Não foi possivel concetar ao chat.'
      }
    )

    documents.value = results
    error.value = null
  })

  return { error, documents }
}

export default getCollection

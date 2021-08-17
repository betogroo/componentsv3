export default async (to, from, next) => {
  console.log('beforeEach')
  next()
}

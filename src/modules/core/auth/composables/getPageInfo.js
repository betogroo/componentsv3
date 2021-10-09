import { ref } from 'vue'
const getPageInfo = () => {
  const pageInfo = ref({
    title: '',
    subtitle: ''
  })

  const loadInfo = (prop) => {
    if (prop === 'login') {
      pageInfo.value.title = 'Acesse o Sistema'
      pageInfo.value.subtitle = 'Faça o login para ter acesso ao sistema'
    }
    if (prop === 'signup') {
      pageInfo.value.title = 'Cadastro'
      pageInfo.value.subtitle = 'Cadastre-se para ter acesso ao sistema'
    }
    if (prop === 'reset') {
      pageInfo.value.title = 'Redefina Senha'
      pageInfo.value.subtitle = 'Entre com seu email para redefinir a senha'
    }
  }

  return { pageInfo, loadInfo }
}

export default getPageInfo

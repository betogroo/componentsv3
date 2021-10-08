const searchError = (errorCode) => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'O e-mail é inválido.'
    case 'auth/user-not-found':
      return 'O usuário não correponde à nenhuma credencial.'
    case 'auth/wrong-password':
      return 'Senha incorreta.'
    case 'auth/email-already-in-use':
      return 'Este email já é utilizado por outro usuário.'
    default:
      return 'DEu um erro'
  }
}

const useAuthErrors = () => {
  return { searchError }
}

export default useAuthErrors

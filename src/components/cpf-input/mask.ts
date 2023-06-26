export const setMask = (val: string): string => {
  let cpf = val.replace(/\D/g, '')

  // Verifica o tamanho do CPF para aplicar a máscara gradualmente
  if (cpf.length <= 3) {
    cpf = cpf.replace(/(\d{3})/, '$1')
  } else if (cpf.length <= 6) {
    cpf = cpf.replace(/(\d{3})(\d{1,3})/, '$1.$2')
  } else if (cpf.length <= 9) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3')
  } else {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4')
  }
  return cpf
}

export const price = (price) =>
  (price / 100).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

const saveItemLocalStorage = (nameKey, item) => {
  localStorage.setItem(nameKey, JSON.stringify(item))
}

const getItemLocalStorage = (value) => {
  const item = localStorage.getItem(value)
  return item ? JSON.parse(item) : null
}

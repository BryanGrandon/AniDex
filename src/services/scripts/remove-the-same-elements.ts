import type { array_data } from '../api/interfaces/array-data'
const removeTheSameElements = (data: array_data[] = []) => {
  let array = []
  for (let i = 0; data.length >= i; i++) {
    if (array.length == 0) array.push(data[i])
    else {
      let equal = 0
      for (let j = 0; data.length >= j; j++) {
        if (array[j]?.mal_id == data[i]?.mal_id) equal++
      }
      if (equal === 0) array.push(data[i])
    }
  }
  return array
}

export { removeTheSameElements }

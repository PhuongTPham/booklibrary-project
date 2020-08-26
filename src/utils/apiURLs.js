import axios from "axios";

export const getAll = () => {
  axios.get("http://localhost:4000/books")
    .then(response => response.data)
}
export const getbyStatus = () => {
  axios.get('http://localhost:4000/books?status=Not%20borrowing')
    .then(response => response.data)
}
export const getAllComment = () => {
  axios.get('http://localhost:4000/comments').then(response => response.data)
}
export const getById = bookId => {
  axios.get(`http://localhost:4000/books/${bookId}`)
  .then(response => response.data[0])
}

export const searchBook = queryBook => {
  axios.post(`http://localhost:4000/books?q=${queryBook}`).then(response => response.data.row)
}

export const rentBook = data => {
  axios.post(`http://localhost:4000/itemrent`, data).then(response => response.data)
}

export const getAllBestSeller = listBest => {
    axios.get("http://localhost:4000/bestseller")
    .then(response => response.data)
}

export const addGivingBook = gift => {
    axios.post("http://localhost:4000/givingbook", gift).then(response => response.data)
}
export const getGivingBook = gift => {
  axios.get("http://localhost:4000/givingbook").then(response => response.data)
}
export const addComment = comment => {
  axios.post("http://localhost:4000/comments", comment).then(response => response.data)
}


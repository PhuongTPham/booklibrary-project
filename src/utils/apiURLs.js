import axios from "axios";

export const getAll = () => {
  axios.get("http://localhost:4000/books")
    .then(response => response.data)
}
export const getById = bookId => {
  axios.get(`http://localhost:4000/books/${bookId}`)
    .then(response => response.data[0])
}

export const searchBook = queryBook => {
  axios.post(`http://localhost:4000/books?q=${queryBook}`).then(response => response.data.row)
}

export async function rentBook (data) {
  const res = await  axios.post(`http://localhost:4000/itemrent`, data)
  return res.data
}
export async function getBookRent() {
  const res = await axios.get("http://localhost:4000/itemrent")
  return res.data
}
export async function addGivingBook(gift) {
   const res = await axios.post("http://localhost:4000/givingbook", gift)
   return res.data
}
export async function getGivingBook() {
  const res = await axios.get("http://localhost:4000/givingbook")
  return res.data
}
export async function addComment (comment) {
  const res = await axios.post("http://localhost:4000/comments", comment)
  return res.data;
}
export async function getAllComment() {
  const res = await axios.get("http://localhost:4000/comments")
  return res.data
}
export async function updateStatusBook(idBook, bookStatus) {
  const res = await axios.put(`http://localhost:4000/books/${idBook}`, bookStatus)
  return res.data.json
}


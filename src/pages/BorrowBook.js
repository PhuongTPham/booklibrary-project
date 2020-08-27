import React, { useState, useContext} from "react";

import { Form, Button } from "semantic-ui-react";
import * as BookAPI from "../utils/apiURLs"
import { BookContext } from "../context/context";
import swal from "sweetalert";
function BorrowBook() {
  const { books, carts, removeCart } = useContext(BookContext);
  const getSubtotal = (data, carts) => {
    let subtotal = 0;
    carts.forEach((cart) => {
      data.forEach((book) => {
        if (book.id === cart.idBook) {
          subtotal = subtotal + book.pricerent * cart.quantity;
        }
      });
    });

    return subtotal.toFixed(2);

  };
  let totalprice = getSubtotal(books, carts);
  const idBooks = carts.map(cart => cart.idBook)
  const getQuantity = (carts) => {
    let total = 0;
    carts.forEach((cart) => {
      if (cart.quantity !== null) {
        total += cart.quantity
      }
    })
    return total;
  }
  let quanityValue = getQuantity(carts)


  const checkBook = (carts, books) => {
    let statusBookById;
    carts.forEach((cart) => {
      books.forEach((book) => {
        if (book.id === cart.idBook) {
          statusBookById = book
        }
      });
    });
    return statusBookById
  }
  let bookByIdCart = checkBook(carts, books)
  const initRent = {
    idUser: Math.random().toString(36).substring(8),
    name: "",
    position: "",
    address: "",
    idBooks: idBooks,
    totalPrice: totalprice,
    quantity: quanityValue,
    startDate: "",
    dueDate: "",
  }
 
  const [rentbook, setRentBook] = useState(initRent);
  const handleChange = e => {
    const { name, value } = e.target
    setRentBook({ ...rentbook, [name]: value })
  }
  const minDate = new Date().toJSON().slice(0, 10)
  const handleSubmit = e => {
    e.preventDefault();
    if (rentbook.idBook !== null || rentbook.name !== null || rentbook.position !== null || rentbook.quantity !== null || rentbook.startDate !== null
      || rentbook.dueDate !== null) {
      BookAPI.rentBook(rentbook).then(res => {
        idBooks.forEach((id) => {
          removeCart(id)
        })
      })
    }
    swal({
      title: "You have borrowed successfully!",
      text: "Please, you come to the reception to get and pay it",
      icon: "success",
      button: "Thanks you",
    });
    BookAPI.updateStatusBook(idBooks[0], {
      id: bookByIdCart.id,
      title: bookByIdCart.title,
      coverImageSrc: bookByIdCart.coverImageSrc,
      rating: bookByIdCart.rating,
      genre: bookByIdCart.genre,
      price: bookByIdCart.price,
      pricerent: bookByIdCart.pricerent,
      authorName: bookByIdCart.authorName,
      description: bookByIdCart.description,
      authorId: bookByIdCart.authorId,
      numberOfPages: bookByIdCart.numberOfPages,
      status: "borrowing"
    }).then(res => res)
    BookAPI.updateStatusBook(idBooks[1], {
      id: bookByIdCart.id,
      title: bookByIdCart.title,
      coverImageSrc: bookByIdCart.coverImageSrc,
      rating: bookByIdCart.rating,
      genre: bookByIdCart.genre,
      price: bookByIdCart.price,
      pricerent: bookByIdCart.pricerent,
      authorName: bookByIdCart.authorName,
      description: bookByIdCart.description,
      authorId: bookByIdCart.authorId,
      numberOfPages: bookByIdCart.numberOfPages,
      status: "borrowing"
    }).then(res => res)
  }

  return (
    <div className="borrow-book">
      <Form size="large" onSubmit={handleSubmit}>
        <Form.Field required>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={rentbook.name}
            onChange={handleChange}
          />
        </Form.Field>

        <Form.Field required>
          <label>Position</label>
          <input
            type="text"
            name="position"
            value={rentbook.position}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={rentbook.address}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={rentbook.startDate}
            onChange={handleChange} />
        </Form.Field>

        <Form.Field required>
          <label>Due Date</label>
          <input
            type="date"
            mindate={minDate}
            name="dueDate"
            value={rentbook.dueDate}
            onChange={handleChange} />
        </Form.Field>
        <Button type="submit" size="large" color="blue">
          Submit
        </Button>
      </Form>
    </div>

  );
}
export default BorrowBook;

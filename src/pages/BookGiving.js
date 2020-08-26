import React, { useState } from "react";
import { Form, Rating, Button, Dropdown } from "semantic-ui-react";
import { GENRE } from "../constant/index";
import * as BookAPI from "../utils/apiURLs";

function BookGiving() {
  const initGift = {
    idUser: Math.random().toString(36).substring(8),
    name: "",
    email: "",
    title: "",
    coverImageSrc: "",
    genre: [],
    price: "",
    authorName: "",
    description: "",
    rating: "",
    status: "Processing",
  };
  const [gift, setGiftBook] = useState(initGift);
  const handleRate = (e, { rating }) => {
    setGiftBook({ ...gift, rating });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGiftBook({ ...gift, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    BookAPI.addGivingBook(gift);
  };
  return (
    <div
      className="mainContentContainer"
      style={{ backgroundColor: "#FFFF", paddingTop: "50px" }}
    >
      <div className="mainContent">
        <div className="mainContentFloat">
          <Form size="large">
            <Form.Field required>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={gift.name}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field required>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={gift.email}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field required>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={gift.title}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field required>
              <label>Image</label>
              <input
                type="text"
                name="coverImageSrc"
                value={gift.coverImageSrc}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field required>
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={gift.price}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field required>
              <label>Genre</label>
              <Dropdown
                placeholder="Genre"
                multiple
                search
                selection
                onChange={(e, { value }) => {
                  setGiftBook({ ...gift, genre: value });
                }}
                options={GENRE}
                value={gift.genre}
              />
            </Form.Field>

            <Form.Field required>
              <label>Author</label>
              <input
                type="text"
                name="authorName"
                value={gift.authorName}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field required>
              <label>Rating</label>
              <Rating
                maxRating={5}
                name="rating"
                value={gift.rating}
                icon="star"
                size="huge"
                onRate={handleRate}
              />
            </Form.Field>

            <Form.Field required>
              <label>Description</label>
              <textarea
                type="text"
                name="description"
                value={gift.description}
                onChange={handleChange}
              />
            </Form.Field>

            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default BookGiving;

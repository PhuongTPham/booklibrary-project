import React, { useState } from 'react'
import { Form } from "semantic-ui-react";
import * as BookAPI from "../utils/apiURLs"

const BookComment = ({book}) => {
    let idBook = book.id;
    const initComment = {
        idUser: Math.random().toString(36).substring(10),
        bookId: idBook,
        body: "",
        rating: "4.2",
        date: new Date().toISOString()
    }
    const [comment, setComment] = useState(initComment)
    const handleChange = e => {
         const { name, value } = e.target;
        setComment({ ...comment, [name]: value });
    }
    const handleSubmit = e => {
        e.preventDefault();
        BookAPI.addComment({
            body: comment.body,
            bookId: book.id,
            idUser: Math.random().toString(36).substring(10),
            rating: "4.2",
            date: new Date().toISOString()
        }).then(res => {
            setComment({body: " "})
        })
    }
    const handleCancel = () => {
        setComment({body: " "})
    }
    return (
        <div className="readerQAFormContainer js-readerQAForm">
            <div className="formSubmissionNotification js-notification">
                <div className="notificationMessage js-notificationMessage"></div>
                <span className="notificationDismissAction js-notificationDismissAction"></span>
            </div>

            <div className="askerUserIcon js-ReaderQAForm-formUserImage">
                <img className="userIcon" src="https://s.gr-assets.com/assets/nophoto/user/u_100x100-259587f1619f5253426a4fa6fb508831.png" alt="U 100x100" />
            </div>
            <Form className="readerQAForm gr-form" >
                <Form.Field
                >
                    <textarea type="text" placeholder="Ask anything about the book"
                        className="textInput"
                        name="body"
                        value={comment.body}
                        onChange={handleChange}
                        maxLength="421" id="qaTextArea" style={{ height: "55px"}}
                    />
                </Form.Field>
                <div className="readerQAFormActions hiddenContent gr-form__actions">
                    <div className="formAction gr-form__actions">
                        <button className="primaryAction submitAction gr-form__submitButton" type="submit" onClick={handleSubmit}>
                            Comment
                        </button>
                        <div className="secondaryAction cancelAction gr-form__secondaryAction" onClick={handleCancel}>
                            Cancel
                            </div>
                    </div>
                </div>
                <div className="readerQAFormActions hiddenContent">
                </div>
            </Form>
        </div>
    )
}

export default BookComment  

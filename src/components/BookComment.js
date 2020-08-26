import React from 'react'
import { Form } from "semantic-ui-react";

const BookComment = () => {
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
                        maxLength="421" id="qaTextArea" style={{minHeight: "55px", height: "55px"}}
                    />
                </Form.Field>
                <div className="readerQAFormActions hiddenContent gr-form__actions">
                    <div className="formAction gr-form__actions">
                        <button className="primaryAction submitAction gr-form__submitButton" type="submit">
                            Ask
                        </button>
                        <div className="secondaryAction cancelAction gr-form__secondaryAction">
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

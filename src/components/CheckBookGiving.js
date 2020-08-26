import React, { useEffect, useState } from "react";
import Axios from "axios";
import ItemBookGiving from "./ItemBookGiving";

const CheckBookGiving = () => {
    const [giftBook, setGift] = useState({});
    useEffect(() => {
        Axios.get("http://localhost:4000/givingbook").then((response) =>
            setGift(response.data)
        );
    }, []);
    return (
        <div className="rightContainer">
            <h3>Thanks you</h3>
            <h3>Cac cuon sach dang duoc kiem tra</h3>
            {giftBook.length === null ?
                giftBook.map((book) => {
                    return <ItemBookGiving key={book.id} book={book} />
                })
                : null
            }
        </div>
    );
};

export default CheckBookGiving;

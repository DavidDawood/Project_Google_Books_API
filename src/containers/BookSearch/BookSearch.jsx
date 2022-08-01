import React, { useState } from "react";
import styles from "./BookSearch.module.scss";
import BookListing from "../BookListing";

function BookSearch() {
    // have search update with a state with its event parameter
    // have search button use that search value
    // will trigger a event to fetch information which will await
    // use a useEffect to keep track of the updateObject, by its parameters in the [] brackets

    const [allBooksList, UpdateBookList] = useState([]);
    const [searchBook, UpdateSearch] = useState("");

    const UpdateSearchOnType = (event) => {
        UpdateSearch(event.target.value);
    };

    const SearchForBook = async () => {
        const jsonResult = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchBook}`,
        ).then((x) => x.json());
        const { items } = jsonResult;

        console.log(items);
        UpdateBookList(items);
    };

    return (
        <div className={styles.BookSearch}>
            <input
                type="search"
                onChange={UpdateSearchOnType}
                name=""
                id="searchBar"
                placeholder="Input Book Name"
            />
            <button onClick={SearchForBook}>Search</button>
            {allBooksList !== undefined && (
                <BookListing propObjectList={allBooksList} />
            )}
        </div>
    );
}
export default BookSearch;

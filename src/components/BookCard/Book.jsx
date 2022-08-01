import React, { useState } from "react";
import styles from "./Book.module.scss";

const LimitDescription = (letterMaxCount, Paragraph) => {
    if (Paragraph.toString().length > letterMaxCount)
        return Paragraph.slice(0, letterMaxCount) + "...";
    return Paragraph;
};

function Book({ Details }) {
    let [index, AdjustIndex] = useState(0);
    const AdjustIndexWrap = () => {
        let temp = ++index;
        if (temp > 2) temp = 0;
        AdjustIndex(temp);
    };

    const GetPageInformation = () => {
        if (index === 0) return <></>;
        if (index === 1)
            return (
                <ul>
                    <li>
                        {Details.volumeInfo.authors !== undefined && (
                            <>
                                <h4>Author/s:</h4>
                                {Details.volumeInfo.authors.toString()}
                            </>
                        )}
                    </li>
                    <li>
                        <p>
                            {Details.volumeInfo.description !== undefined &&
                                LimitDescription(
                                    200,
                                    Details.volumeInfo.description,
                                )}
                        </p>
                    </li>
                </ul>
            );
        if (index === 2) {
            return (
                <ul>
                    <li>
                        {Details.saleInfo.country !== undefined && (
                            <>
                                <h4>Country</h4>
                                {Details.saleInfo.country}
                            </>
                        )}
                    </li>
                    <li>
                        {Details.volumeInfo.language !== undefined && (
                            <>
                                <h4>Language</h4>
                                {Details.volumeInfo.language}
                            </>
                        )}
                    </li>
                    <li>
                        {Details.volumeInfo.pageCount !== undefined && (
                            <>
                                <h4>Pages</h4>
                                {Details.volumeInfo.pageCount}
                            </>
                        )}
                    </li>
                    <li>
                        <p>
                            {Details.volumeInfo.description !== undefined &&
                                Details.volumeInfo.description}
                        </p>
                    </li>
                </ul>
            );
        }
    };

    return (
        <div className={styles.Book} onClick={AdjustIndexWrap}>
            {Details.volumeInfo.imageLinks !== undefined && (
                <img src={Details.volumeInfo.imageLinks.thumbnail}></img>
            )}
            <h2>{Details.volumeInfo.title}</h2>
            {GetPageInformation(index, Details)}
        </div>
    );
}
export default Book;

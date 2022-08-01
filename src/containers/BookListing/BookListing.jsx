import styles from "./BookListing.module.scss";
import Book from "../../components/BookCard";

// map all the props here
function BookListing({ propObjectList }) {
    return (
        <div className={styles.Grid}>
            {propObjectList.map((x, i) => {
                return <Book key={i} Details={x}></Book>;
            })}
        </div>
    );
}

export default BookListing;

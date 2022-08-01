import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

// i dont know what i can possibly test for since Google Books API doesnt seem to be able to provide
// test case Books, all results can possibly change as new books are uploaded

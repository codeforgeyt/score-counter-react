import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import Navbar from "./Navbar";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("<Navbar />", () => {
    it("Should have text 'Score Counter'", () => {
        act(() => {
            render(<Navbar />, container);
        });
        expect(container.textContent).toBe("Score counter");
    });
});
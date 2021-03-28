import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import Score from './Score';

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

describe("<Score />", () => {
    it("Should have initial text '0:0'", () => {
        act(() => {
            render(<Score />, container);
        });
        expect(container.textContent).toBe("0:0");
    });
    it("Should have value '1:0' after clicking increment home", () => {
        act(() => {
            render(<Score />, container);
        });
        const incrementHomeButton =
            document.querySelector("[data-testid=incrementHome]");
        act(() => {
            incrementHomeButton.dispatchEvent( 
                new MouseEvent("click", {bubbles:true}));
        });
        expect(container.textContent).toBe("1:0");
    });
    it("Should have value '0:1' after clicking increment away", () => {
        act(() => {
            render(<Score />, container);
        });
        const incrementAwayButton =
            document.querySelector("[data-testid=incrementAway]");
        act(() => {
            incrementAwayButton.dispatchEvent( 
                new MouseEvent("click", {bubbles:true}));
        });
        expect(container.textContent).toBe("0:1");
    });
    it("Should have value '1:0' when clicking increment two times and decrement once", () => {
        act(() => {
            render(<Score />, container);
        });
        const incrementHomeButton =
            document.querySelector("[data-testid=incrementHome]");
        const decrementHomeButton =
            document.querySelector("[data-testid=decrementHome]");
        act(() => {
            incrementHomeButton.dispatchEvent( 
                new MouseEvent("click", {bubbles:true}));
        });
        expect(container.textContent).toBe("1:0");
        act(() => {
            incrementHomeButton.dispatchEvent( 
                new MouseEvent("click", {bubbles:true}));
        });
        expect(container.textContent).toBe("2:0");
        act(() => {
            decrementHomeButton.dispatchEvent( 
                new MouseEvent("click", {bubbles:true}));
        });
        expect(container.textContent).toBe("1:0");
    });
        it("Should have value '0:0' after resetting score", () => {
        act(() => {
            render(<Score />, container);
        });
        const incrementHomeButton =
            document.querySelector("[data-testid=incrementHome]");
        const incrementAwayButton =
            document.querySelector("[data-testid=incrementAway]");
        const resetButton = 
            document.querySelector("[data-testid=reset]");
        act(() => {
            incrementHomeButton.dispatchEvent( 
                new MouseEvent("click", {bubbles:true}));
        });
        expect(container.textContent).toBe("1:0");
        act(() => {
            incrementAwayButton.dispatchEvent( 
                new MouseEvent("click", {bubbles:true}));
        });
        expect(container.textContent).toBe("1:1");
        act(() => {
            resetButton.dispatchEvent( 
                new MouseEvent("click", {bubbles:true}));
        });
        expect(container.textContent).toBe("0:0");
    });
});
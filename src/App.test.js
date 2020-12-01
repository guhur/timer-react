import App from "./App";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  jest.useFakeTimers();
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;

  jest.clearAllTimers();
});

it("starts automatically a timer", () => {
  act(() => {
    render(<App />, container);
  });
  console.log(container.textContent);
  let contenu = container.textContent;
  expect(contenu).toMatch(/^0 sec.*/);

  jest.advanceTimersByTime(1000);
  contenu = container.textContent;
  expect(contenu).toMatch(/^1 sec.*/);
});

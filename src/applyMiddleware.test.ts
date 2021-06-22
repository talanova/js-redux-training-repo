import { applyMiddleware } from "./applyMiddleware";

describe("applyMiddleware", () => {
  it("is a function", () => {
    expect(applyMiddleware).toBeInstanceOf(Function);
    expect(applyMiddleware(jest.fn(), jest.fn(), jest.fn)).toBeInstanceOf(
      Function
    );
  });

  it("middleware run each time an action is dispatched", () => {
    const reducer = jest.fn((state) => state + 1);
    const spy = jest.fn();

    const middleware = (store) => (next) => (action) => {
      spy();
      const result = next(action);
      return result;
    };

    const store = applyMiddleware(middleware)(reducer, 1);
    store.dispatch({ type: "action" });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(store.getState()).toBe(2);
  });
});

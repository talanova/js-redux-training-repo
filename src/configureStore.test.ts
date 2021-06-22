import { configureStore } from "./configureStore";

describe("configureStore", () => {
  describe("public interface", () => {
    it("is a function", () => {
      expect(configureStore).toBeInstanceOf(Function);
    });

    it("generates store with reducer", () => {
      const state = 1;
      const store = configureStore(() => state);

      expect(store.getState).toBeInstanceOf(Function);
      expect(store.dispatch).toBeInstanceOf(Function);
      expect(store.subscribe).toBeInstanceOf(Function);
      expect(store.subscribe(jest.fn())).toBeInstanceOf(Function);
      expect(store.replaceReducer).toBeInstanceOf(Function);
    });
  });

  describe("functional interface", () => {
    it("returns state based on initial state", () => {
      const state = 1;
      expect(configureStore(() => null).getState()).toBe(undefined);
      expect(configureStore(() => null, state).getState()).toBe(state);
    });

    it("calculates new state with reducer call", () => {
      const action1 = { type: "first" };
      const action2 = { type: "second" };
      const reducer = jest.fn((state) => state + 1);
      const store = configureStore(reducer, 1);

      store.dispatch(action1);
      expect(reducer).toHaveBeenCalledWith(1, action1);
      expect(store.getState()).toBe(2);

      store.dispatch(action2);
      expect(reducer).toHaveBeenCalledWith(2, action2);
      expect(store.getState()).toBe(3);
    });

    it("notifies listeners about updates", () => {
      const action1 = { type: "first" };
      const action2 = { type: "second" };
      const reducer = jest.fn((state = 1) => state + 1);
      const store = configureStore(reducer);

      const spy = jest.fn();
      store.subscribe(spy);
      expect(spy).not.toHaveBeenCalled();
      store.dispatch(action1);
      expect(spy).toHaveBeenCalled();
      store.dispatch(action2);
      expect(spy).toHaveBeenCalledTimes(2);
    });

    it("allows to unsubscribe from the events", () => {
      const action1 = { type: "first" };
      const action2 = { type: "second" };
      const reducer = jest.fn((state = 1) => state + 1);
      const store = configureStore(reducer);

      const spy = jest.fn();
      const unsubscribe = store.subscribe(spy);
      expect(spy).not.toHaveBeenCalled();
      store.dispatch(action1);
      expect(spy).toHaveBeenCalled();
      unsubscribe();
      store.dispatch(action2);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("allows to change reducer", () => {
      const state = 1;
      const random = Math.random() * 10;

      const action = { type: "some-action" };
      const firstReducer = jest.fn(() => state * random);
      const secondReducer = jest.fn(() => state * random * 2);

      const store = configureStore(firstReducer);
      store.dispatch(action);
      store.replaceReducer(secondReducer);
      store.dispatch(action);

      expect(firstReducer).toHaveBeenCalledTimes(1);
      expect(secondReducer).toHaveBeenCalledTimes(1);
    });
  });

  describe("middlewares", () => {
    // put your tests here
  });
});

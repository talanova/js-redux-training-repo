import { combineReducers } from "./combineReducers";
import { Reducer } from "./types";

describe("combineReducers", () => {
  it("is a function", () => {
    expect(combineReducers).toBeInstanceOf(Function);
  });

  it("returns a function", () => {
    expect(combineReducers({})).toBeInstanceOf(Function);
  });

  it("returns a reducer based on the config (initial state)", () => {
    const reducer = combineReducers({
      a: (state = 1, _action) => state,
      b: (state = "one", _action) => state,
    });
    expect(reducer(undefined, { type: "action-type" })).toEqual({
      a: 1,
      b: "one",
    });
  });

  it("calls subreducers with proper values", () => {
    type State = { a: number; b: number };
    type Action = { type: string; payload: number };

    const reducerA = jest.fn(
      (state = 0, action: Action) => state + action.payload
    ) as Reducer<number, Action>;
    const reducerB = jest.fn(
      (state = 0, action: Action) => state - action.payload
    ) as Reducer<number, Action>;
    const config = {
      a: reducerA,
      b: reducerB,
    };

    const reducer = combineReducers<State, Action>(config);

    const initialState: State = { a: 55, b: 66 };

    const action1: Action = { type: "first-action", payload: 1 };
    const newState1 = reducer(initialState, action1);

    expect(config.a).toHaveBeenCalledWith(55, action1);
    expect(config.b).toHaveBeenCalledWith(66, action1);

    expect(newState1).toEqual({
      a: 56,
      b: 65,
    });

    const action2: Action = { type: "second-action", payload: 2 };
    const newState2 = reducer(newState1, action2);

    expect(config.a).toHaveBeenCalledWith(56, action2);
    expect(config.b).toHaveBeenCalledWith(65, action2);

    expect(newState2).toEqual({
      a: 58,
      b: 63,
    });
  });
});

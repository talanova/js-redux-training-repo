import { Reducer } from "./types";

export function combineReducers<State, Action>(
  reducers: Record<keyof State, Reducer<any, Action>>
) {
  return function (state: State | undefined, action: Action) {
    const combined: any = {};

    Object.keys(reducers).forEach((key) => {
      combined[key] = reducers[key](state && state[key], action);
    });

    return { ...combined };
  };
}

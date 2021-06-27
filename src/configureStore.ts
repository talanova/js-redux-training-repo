import { Store, Reducer, Middleware } from "./types";

export function configureStore<State, Action>(
  reducer: Reducer<State, Action>,
  preloadedState?: State | undefined,
  middlewares?: Middleware<State, Action>[]
): Store<State, Action> {
  let storeReducer: Reducer<State, Action> = reducer;
  let state: State | undefined = preloadedState;
  let subscribers: (() => void)[] = [];

  function getState(): State | undefined {
    return state;
  }

  function dispatch(action: Action) {
    state = storeReducer(state, action);
    subscribers.forEach((subscriber) => subscriber());
  }

  function subscribe(subscriber: () => void): () => void {
    subscribers.push(subscriber);
    return () => {
      subscribers = subscribers.filter((el) => el !== subscriber);
    };
  }

  function replaceReducer(newReducer: Reducer<State, Action>): void {
    storeReducer = newReducer;
  }

  return { getState, dispatch, subscribe, replaceReducer };
}

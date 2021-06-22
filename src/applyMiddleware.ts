import { Store, Reducer, Middleware } from "./types";
import { configureStore } from "./configureStore";

export function applyMiddleware<State, Action>(
  ...middlewares: Middleware<State, Action>[]
) {
  return (
    reducer: Reducer<State, Action>,
    preloadedState?: State | undefined
  ): Store<State, Action> => {
    const store: Store<State, Action> = configureStore(reducer, preloadedState);
    const chain = middlewares.map((middleware) => middleware(store));
    const dispatch = compose(...chain)(store.dispatch.bind(store));

    return {
      ...store,
      dispatch,
    };
  };
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  const last = funcs[funcs.length - 1];
  const rest = funcs.slice(0, -1);
  return (...args) =>
    rest.reduceRight((composed, f) => f(composed), last(...args));
}

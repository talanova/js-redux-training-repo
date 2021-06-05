export type Store<State = any, Action = { type: string }> = {
  getState(): State | undefined;
  dispatch(action: Action): any;
  subscribe(subscriber: () => void): () => void;
};

export type Reducer<State, Action> = (
  state: State | undefined,
  action: Action
) => State;

export type Middleware<State, Action> = (
  store: Store<State, Action>
) => (next: (action: Action) => any) => (action: Action) => any;

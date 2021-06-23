export function combineReducers<ReducersConfig, Action>(
  config: {
    [key in keyof ReducersConfig]: (
      state: ReducersConfig[key] | undefined,
      action: Action
    ) => ReducersConfig[key];
  }
) {
  return function (
    state: { [key in keyof ReducersConfig]: ReducersConfig[key] } | undefined,
    action: Action
  ) {
    const combined: any = [];

    Object.keys(config).forEach(
      // eslint-disable-next-line no-return-assign
      (key) => (combined[key] = config[key](state && state[key], action))
    );

    return { ...combined };
  };
}

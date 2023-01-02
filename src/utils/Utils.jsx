import _ from "lodash";

export const slice = (builder, thunk, identifier) => {
  builder
    .addCase(thunk.pending, (state) => ({
      ...state,
      isPending: true,
    }))
    .addCase(thunk.rejected, (state) => ({
      ...state,
      isPending: false,
      hasError: true,
    }))
    .addCase(thunk.fulfilled, (state, action) => {
      if (_.isArray(action.payload)) {
        return {
          ...state,
          hasError: false,
          isPending: false,
          data: { ..._.keyBy(action.payload, identifier) },
          // data: { ...action.payload },
          meta: action.meta,
        };
      }
      if (_.isObject(action.payload)) {
        return {
          ...state,
          hasError: false,
          isPending: false,
          data: { ...state.data, ..._.keyBy([action.payload], identifier) },
          meta: { ...state.meta, ...action.meta },
        };
      }
      // eslint-disable-next-line no-console
      console.error(
        "Invalid payload type, cannot reduce by identifier",
        action.payload
      );
      return state;
    });
};

export const sliceBy = (thunk, composer) => ({
  [thunk.pending]: (state) => ({
    ...state,
    isPending: true,
  }),
  [thunk.rejected]: (state) => ({
    ...state,
    isPending: false,
    hasError: true,
  }),
  [thunk.fulfilled]: composer,
});

export const initialiseSelector = (reducer) => {
  if (reducer) {
    const { data = {}, isPending, meta = {} } = reducer;
    const selectedData = {
      data,
      isPending,
      paginations: meta.paginations,
    };
    return selectedData;
  }
  return {
    data: {},
    isPending: true,
    hasError: false,
  };
};

export const flatten = (obj, parent = "") => {
  let result = {};
  _.each(obj, (value, name) => {
    if (_.isArray(value)) {
      _.each(value, (v, i) => {
        if (parent) {
          result = { ...result, ...flatten(v, `${parent}.${name}[${i}]`) };
        } else {
          result = { ...result, ...flatten(v, `${name}[${i}]`) };
        }
      });
    } else if (parent) {
      result[`${parent}.${name}`] = value;
    } else {
      result[name] = value;
    }
  });
  return result;
};

export const dateFormat = "YYYY/MM/DD";

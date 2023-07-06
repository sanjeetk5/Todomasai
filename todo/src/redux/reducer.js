import {
  ADD_TODOS,
  CLEAR_COMPLETED,
  DELETE_TODOS,
  EDIT_TODOS,
  TOOGLE_TODOS,
} from "./actiontype";

const initialState = {
  todo: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODOS:
      return { ...state, todo: [...state.todo, payload] };

    case DELETE_TODOS:
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== payload),
      };

    case TOOGLE_TODOS:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === payload ? { ...item, completed: !item.completed } : item
        ),
      };

    case CLEAR_COMPLETED:
      return {
        ...state,
        todo: state.todo.filter((item) => {
          return item.completed === false ? item : null;
        }),
      };

    default:
      return state;
  }
};

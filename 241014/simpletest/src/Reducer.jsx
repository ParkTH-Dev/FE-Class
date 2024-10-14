let initialState = {
  count: 0,
  id: "",
  pw: "",
};

const Reducer = (state = initialState, action) => {
  // if문 방식
  //   if (action.type === "INCREMENT") {
  //     return { ...state, count: state.count + 1 };
  //   }
  //   return { ...state };

  //switch문 방식
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "MINUSE":
      return { ...state, count: state.count - 1 };
    case "LOGIN":
      return { ...state, id: action.payload.id, pw: action.payload.pw };
    default:
      return { ...state };
  }
};

export default Reducer;

let initialStete = { contactList: [], keyword: "" };

const reducer = (state = initialStete, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phoneNum: payload.phoneNum,
      });
      break;
    //   return {
    //     ...state,
    //     contactList: [
    //       ...state.contactList,
    //       { name: payload.name, phoneNum: payload.phoneNum },
    //     ],
    case "SEARCH":
      state.keyword = payload.keyword;
      break;
    //   return {
    //     ...state,
    //     keyword: payload.keyword,
    //   };
    // default:
    //   return { ...state };
  }
  return { ...state };
};

export default reducer;

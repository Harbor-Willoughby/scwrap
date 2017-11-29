const DEFAULT_IMAGE_STATE = {
  key: "",
};

const DEFAULT_MEMO_STATE = {
  key: "",
};

const DEFAULT_TRIP_STATE = {
  key: "",
  images: {
    $image: DEFAULT_IMAGE_STATE
  },
  memos: {
    $memo: DEFAULT_MEMO_STATE
  }
};

const DEFAULT_STATE = {
  trips: {
    $trip: DEFAULT_TRIP_STATE
  }
};

const userReducer = (state = DEFAULT_STATE, action) => {
  if (action.type == "") {

  }
  return {
    ...state,
  }
}

export default userReducer;

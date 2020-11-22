import React, { useReducer, createContext } from "react";

import Mentors from "./mentor-list.json";

const initialState = {
  mentors: Mentors,
  preferences: {
    gender: {
      male: undefined,
      female: undefined,
      transgender: undefined,
      nonBinary: undefined,
      noPreferences: undefined,
    },
  },
};

const actions = {
  FILETR_GENDER: "FILETR_GENDER",
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const { type, payload } = action;

    switch (type) {
      case actions.FILETR_GENDER: {
        const {
          isMaleFilterActive,
          isFemaleFilterActive,
          isOtherFilterActive,
        } = payload;

        if (
          !isMaleFilterActive &&
          !isFemaleFilterActive &&
          !isOtherFilterActive
        ) {
          return {
            ...state,
            mentors: Mentors,
          };
        }

        const originalMentorList = initialState.mentors;
        const updatedMentorList = {};

        if (isMaleFilterActive) {
          for (const mentor in originalMentorList) {
            if (originalMentorList[mentor].gender === "Male") {
              updatedMentorList[mentor] = originalMentorList[mentor];
            }
          }
        }
        if (isFemaleFilterActive) {
          for (const mentor in originalMentorList) {
            if (originalMentorList[mentor].gender === "Female") {
              updatedMentorList[mentor] = originalMentorList[mentor];
            }
          }
        }
        if (isOtherFilterActive) {
          for (const mentor in originalMentorList) {
            if (originalMentorList[mentor].gender === "Other") {
              updatedMentorList[mentor] = originalMentorList[mentor];
            }
          }
        }

        return {
          ...state,
          mentors: updatedMentorList,
        };
      }
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider, actions };

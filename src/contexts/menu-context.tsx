import React, { createContext, useReducer } from "react";
import {
  MenuContextState,
  MenuDispatch,
  MenuAction,
  MenuActionType,
  MenuItem,
} from "../types/menu-types";

const initialState: MenuContextState = {
  items: [MenuItem.EXPERIENCE, MenuItem.PROJECTS, MenuItem.ABOUT],
  selectedItem: MenuItem.EXPERIENCE,
};

export const MenuContext = createContext<
  { state: MenuContextState; dispatch: MenuDispatch } | undefined
>(undefined);

function menuContextReducer(state: MenuContextState, action: MenuAction) {
  switch (action.type) {
    case MenuActionType.SET_SELECTED_ITEM: {
      return {
        ...state,
        selectedItem: action.value,
      };
    }
    default: {
      throw new Error(
        `Menu context unhandled action type. Got: ${action.type}`
      );
    }
  }
}

export function MenuContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(menuContextReducer, initialState);
  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
}

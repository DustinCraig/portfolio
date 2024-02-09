export enum MenuActionType {
  SET_SELECTED_ITEM = "SET_SELECTED_ITEM",
}

export enum MenuItem {
  EXPERIENCE = "Experience",
  ABOUT = "About",
  PROJECTS = "Projects",
}

export type MenuAction = {
  type: MenuActionType;
  value: any;
};

export type MenuDispatch = (action: MenuAction) => void;

export type MenuContextState = {
  items: MenuItem[];
  selectedItem: string;
};

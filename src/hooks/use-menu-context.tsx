import { useContext } from "react";
import { MenuContext } from "../contexts/menu-context";

export default function () {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
}

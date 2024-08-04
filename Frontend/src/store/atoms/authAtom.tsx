import { atom } from "recoil";

const globleUserAtom = atom({
  key: "globleUserAtom",
  default: localStorage.getItem("currentUser"),
});

const finalData = atom({
  key: "finalDataAtom",
  default: null,
});
export { globleUserAtom, finalData };

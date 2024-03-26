import { atom } from "recoil";

const authAtom = atom({
  key: "authAtom",
  default: null,
});

export { authAtom };

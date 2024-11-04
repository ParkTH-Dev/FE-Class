import { atom } from "recoil";

interface ToDoState {
  [key: string]: string[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    TODO: ["a", "b"],
    DOING: ["c", "d"],
    DONE: ["e", "f"],
  },
});

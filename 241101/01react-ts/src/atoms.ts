import { atom } from "recoil";

export interface ToDo {
  id: number;
  text: string;
}

interface ToDoState {
  [key: string]: ToDo[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    TODO: [
      { id: 1, text: "hi" },
      { id: 2, text: "Hello" },
    ],
    DOING: [],
    DONE: [],
  },
});

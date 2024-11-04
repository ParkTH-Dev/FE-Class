import { atom, selector } from "recoil";

export enum Categories {
  "TODO" = "할 일",
  "DOING" = "진행 중",
  "DONE" = "끝낸 일",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const categoey = get(categoryState);
    return toDos.filter((todo) => todo.category === categoey);
  },
});

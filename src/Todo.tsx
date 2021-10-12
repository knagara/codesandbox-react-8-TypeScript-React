import { VFC } from "react";
import { TodoType } from "./types/todo";

// type TodoType = {
//   userId: number;
//   title: string;
//   completed?: boolean; // ?をつけると必須じゃなくなる
// };

export const Todo: VFC<Omit<TodoType, "id">> = (props) =>
  // props: Pick<TodoType, "userId" | "title" | "completed">
  // props: Omit<TodoType, "id">
  {
    const { title, userId, completed = false } = props;
    const completeMark = completed ? "[完]" : "[未]";
    return <p>{`${completeMark} ${title}(ユーザ：${userId})`}</p>;
  };

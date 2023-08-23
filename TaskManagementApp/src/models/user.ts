import { Task } from "./task";

export class User {
    id?: number;
    name = "";
    tasks: Task[] = [];
  }
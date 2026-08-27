import type { Task } from "../types/task";

const tasks: Task[] = [];

export function getTask(): Task[] {
  return tasks;
}

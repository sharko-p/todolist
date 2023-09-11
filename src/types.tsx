export interface Task {
  id: string;
  title: string;
}

export interface State {
  tasks: Task[];
  value: string;
}

export interface LoginFormValues {
  userName: string;
  password: string;
  gender: string;
  age: number;
}


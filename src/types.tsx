export interface Task {
  id: string;
  title: string;
}

export interface State {
  tasks: Task[];
  value: string;
}

export interface FormValues {
  userName: string;
  password: string;
  gender: string;
  age: number;
  email?: string;
}

export interface LoginFormValues {
  login: string;
  password: string;
}

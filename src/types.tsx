export interface Task {
  id: string;
  title: string ;
  isCompleted?: boolean;
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
  email: string;
  password: string;
}

export interface TaskData {
  id: number;
  task: string;
}

export interface  UpdatedTask {
  isCompleted: boolean;
  id: string;
  title: string;
} 
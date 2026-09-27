import { counterReducer } from '../reducers/counter.reducer';
import { taskReducer } from '../reducers/task.reducer';

export const myStore = {
  countData: counterReducer,
  taskData: taskReducer,
};

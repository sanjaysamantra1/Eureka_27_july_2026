import { counterReducer } from '../reducers/counter.reducer';
import { employeesReducer } from '../reducers/employee.reducer';
import { taskReducer } from '../reducers/task.reducer';

export const myStore = {
  countData: counterReducer,
  taskData: taskReducer,
  employeeData: employeesReducer,
};

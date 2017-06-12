import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import { VisibilityFilters } from '../constants/constant';
import * as actions from '../actions/action';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const getVisibleToDos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return filter;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleToDos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: (id) => {
      dispatch(actions.toggleToDo(id));
    }
  };
};

const VisibleToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoList);
export default VisibleToDoList;

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToDoList from '../components/ToDoList';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../constants/constant';
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
  }
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export const GreeterContainer = connect(mapStateToProps)(ToDoList);

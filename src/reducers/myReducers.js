import {combineReducers} from 'redux'

const counter = (state=0,action) => {
  if(action.type === 'INCREMENT') {
    //This will increase the value of counter by the value
    return state + action.inc
  }
  //Return the current state of the counter
  return state
}

const myReducers = combineReducers({counter})
export default myReducers
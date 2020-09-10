import firebase from "./firebase";

export default (name = "testTable", obj = {}) => {
  const todoRef = firebase.database().ref(name);
  todoRef.push(obj);
};

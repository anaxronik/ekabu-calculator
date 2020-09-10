import firebase from "./firebase";

export default async (tableName = "testTable") => {
  let result = [];
  const todoRef = firebase.database().ref(tableName);
  todoRef.on("value", (snapshot) => {
    const todos = snapshot.val();
    const todoList = [];
    for (let id in todos) {
      todoList.push({ id, ...todos[id] });
    }
    result = todoList;
  });
  return result;
};

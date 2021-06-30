export function getList() {
  return fetch("http://localhost:9000/testAPI").then((data) => data.json());
}

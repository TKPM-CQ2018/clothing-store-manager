export function getList() {
  return fetch("http://localhost:9000/staffDataAPI").then((data) =>
    data.json()
  );
}

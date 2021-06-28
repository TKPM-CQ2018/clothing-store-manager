export function getList() {
  return fetch("http://localhost:9000/productDataAPI").then((data) =>
    data.json()
  );
}

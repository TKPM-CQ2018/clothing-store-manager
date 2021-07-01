export function getList() {
  return fetch(process.env.REACT_APP_API_PRODUCT).then((data) => data.json());
}

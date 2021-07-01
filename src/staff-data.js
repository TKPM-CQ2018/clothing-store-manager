export function getList() {
  return fetch(process.env.REACT_APP_API_STAFF).then((data) => data.json());
}

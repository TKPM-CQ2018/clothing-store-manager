export function getList() {
    return fetch("https://clothin-store-manager-api.herokuapp.com/staffDataAPI").then((data) =>
        data.json()
    );
}
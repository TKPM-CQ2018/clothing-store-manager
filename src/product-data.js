export function getList() {
    return fetch("https://clothin-store-manager-api.herokuapp.com/productDataAPI").then((data) =>
        data.json()
    );
}
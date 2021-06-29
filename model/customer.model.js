const { ModalDialog } = require("react-bootstrap");
const db = require("../utils/db");

table_KhachHang = "KhachHang"
module.exports = {
    //hien thi len man hinh xem danh sach khach hang
    getAllCustomer() {
        const sql = `select * from ${table_KhachHang}`;
        return db.load(sql);
    },

    //kiem tra thong tin dang nhap
    findCustomerByInfor(account, password) {
        const sql = `select * from ${table_KhachHang} where TenDangNhap = "${account}" and password = "${password}" `;
        console.log(sql);
        return db.load(sql);
    },

    //xem thong tin chi tiet
    findCustomerByID(ID) {
        const sql = `select * from ${table_KhachHang} where MaKhachHang = "${ID}" `;
        return db.load(sql);
    },

    //kiem tra ten dang nhap da ton tai chua
    isAvailable(account) {
        const sql = `select * from ${table_KhachHang} where account = "${account}"`;
        return db.load(sql);
    },

    // them khach hang
    addUser(user) {
        return db.add(user, table_KhachHang);
    },



}
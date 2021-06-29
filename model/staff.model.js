const { ModalDialog } = require("react-bootstrap");
const db = require("../utils/db");

tabel_nhanvien = "NhanVien"
module.exports = {
    //get all staff
    getAllStaff() {
        const sql = `select * from ${tabel_nhanvien}`;
        return db.load(sql);
    },

    //kiem tra thong tin dang nhap
    findStaffByInfor(account, password) {
        const sql = `select * from ${tabel_nhanvien} where TenDangNhap = "${email}" and password = "${password}" `;
        return db.load(sql);
    },

    // tim kiem nhan vien bang ma ten
    findStaffByName(name) {
        const sql = `select * from ${tabel_nhanvien} where TenNV = "${name}" `;
        return db.load(sql);
    },

    //tim kiem nhan vien bang ma nhan vien
    findStaffByID(ID) {
        const sql = `select * from ${tabel_nhanvien} where MaNhanVien = "${ID}" `;
        return db.load(sql);
    },

    //kiem tra ten dang nhap da ton tai chua
    isAvailable(account) {
        const sql = `select * from ${tabel_nhanvien} where account = "${account}"`;
        return db.load(sql);
    },

    // thêm nhân viên
    addStaff(staff) {
        return db.add(staff, tabel_nhanvien);
    },

    // cap nhat thong tin cua nhan vien
    updateStaff(entity, condition) {
        return db.patch(entity, condition, tabel_nhanvien);
    },

    //xoa nhan vien
    deleteStaff(condition) {
        return db.del(condition, tabel_nhanvien)
    }
}
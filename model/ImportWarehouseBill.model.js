const { ModalDialog, TabContainer } = require("react-bootstrap");
const db = require("../utils/db");

table_SanPham = "SanPham"
table_LoaiSanPham = "LoaiSanPham"
table_NhapKho = "PhieuNhapKho"
table_ChiTietNhapKho = "ChiTietNhapKho"
module.exports = {
    //lay toan bo danh sach phieu nhap kho
    getAllImportBill() {
        const sql = `select * from ${table_NhapKho}`;
        return db.load(sql);
    },

    // tim kiem phieu nhap kho bang ma phieu nhap kho
    findImportBill(ID) {
        const sql = `select * from ${table_NhapKho} where MaPhieuNhapKho = "${ID}" `;
        return db.load(sql);
    },

    // them phieu nhap kho
    addImportBill(ImportBill) {
        return db.add(ImportBill, table_NhapKho);
    },

    // cap nhat thong tin cua phieu nhap kho
    updateImportBill(entity, condition) {
        return db.patch(entity, condition, table_NhapKho);
    },

    //cap nhat tong thanh tien cua phieu dat hang
    updateTotalMoneyInImportBill(ImportBill_ID) {
        const sql = `
        select sum(ctnk.SoLuongSP * sp.GiaMua)
        from ${table_ChiTietNhapKho} ctnk join ${table_SanPham} sp on ctnk.MaSP = sp.MaSanPham
        group by MaPhieuNhapKho 
        having MaPhieuNhapKho = ${ImportBill_ID}`
        return db.load(sql);
    },

    //xoa phieu nhap kho
    deleteOrder(condition) {
        return db.del(condition, table_NhapKho)
    },

    //lay toan bo danh sach san pham trong phieu chi tiet nhap kho    
    getAllProductInImportBill(ImportBill_ID) {
        const sql = `select *
        from ${table_NhapKho} pnk join ${table_ChiTietNhapKho} ctnk on pnk.MaPhieuNhapKho = ctnk.MaPhieuNhapKho 
        where pnk.MaPhieuNhapKho  = ${ImportBill_ID}`;
        return db.load(sql);
    },

    // them chi tiet phieu nhap kho
    addDetailImportBill(ImportBill) {
        return db.add(ImportBill, table_ChiTietNhapKho);
    },

    // cap nhat thong tin cua chi tiet phieu nhap kho
    updateDetailImportBill(entity, condition) {
        return db.patch(entity, condition, table_ChiTietNhapKho);
    },

    //xoa phieu chi tiet nhap kho
    deleteDetailImportBill(condition) {
        return db.del(condition, table_ChiTietNhapKho)
    }
}
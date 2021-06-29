const { ModalDialog, TabContainer } = require("react-bootstrap");
const db = require("../utils/db");

table_SanPham = "SanPham"
table_LoaiSanPham = "LoaiSanPham"
table_XuatKho = "PhieuXuatKho"
table_ChiTietXuatKho = "ChiTietXuatKho"
module.exports = {
    //lay toan bo danh sach phieu xuat kho
    getAllExportBill() {
        const sql = `select * from ${table_XuatKho}`;
        return db.load(sql);
    },

    // tim kiem phieu nhap kho bang ma phieu xuat kho
    findExportBill(ID) {
        const sql = `select * from ${table_XuatKho} where MaPhieuNhapKho = "${ID}" `;
        return db.load(sql);
    },

    // them phieu xuat kho
    addExportBill(ExportBill) {
        return db.add(ExportBill, table_XuatKho);
    },

    // cap nhat thong tin cua phieu xuat kho
    updateExportBill(entity, condition) {
        return db.patch(entity, condition, table_XuatKho);
    },

    //Lay tong thanh tien cua phieu xuat kho
    getTotalMoneyInExportBill(ExportBill_ID) {
        const sql = `
        select sum(ctxk.SoLuongSP * sp.GiaMua)
        from ${table_ChiTietXuatKho} ctxk join ${table_SanPham} sp on ctxk.MaSP = sp.MaSanPham
        group by MaPhieuXuatKho 
        having MaPhieuXuatKho = ${ExportBill_ID}`
        return db.load(sql);
    },

    //xoa phieu xuat kho
    deleteOrder(condition) {
        return db.del(condition, table_XuatKho)
    },

    //lay toan bo danh sach san pham trong phieu chi tiet xuat kho    
    getAllProductInExportBill(ExportBill_ID) {
        const sql = `select *
        from ${table_NhapKho} pxk join ${table_ChiTietXuatKho} ctxk on pxk.MaPhieuXuatKho = ctxk.MaPhieuXuatKho 
        where pxk.MaPhieuXuatKho  = ${ExportBill_ID}`;
        return db.load(sql);
    },

    // them chi tiet phieu xuat kho
    addDetailExportBill(ExportBill) {
        return db.add(ExportBill, table_ChiTietXuatKho);
    },

    // cap nhat thong tin cua chi tiet phieu xuat kho
    updateDetailExportBill(entity, condition) {
        return db.patch(entity, condition, table_ChiTietXuatKho);
    },

    //xoa phieu chi tiet xuat kho
    deleteDetailExportBill(condition) {
        return db.del(condition, table_ChiTietXuatKho)
    }
}
const { ModalDialog, TabContainer } = require("react-bootstrap");
const db = require("../utils/db");

table_SanPham = "SanPham"
table_KhachHang = "KhachHang"
table_LoaiSanPham = "LoaiSanPham"
table_datHang = "PhieuDatHang"
table_ChiTietPhieuDatHang = "ChiTietDatHang"
module.exports = {
    //lay toan bo danh sach phieu dat hang
    getAllOrder() {
        const sql = `select * from ${table_datHang}`;
        return db.load(sql);
    },

    // tim kiem pheiu dat hang bang ma phieu dat hang
    findOrderByID(ID) {
        const sql = `select * from ${table_datHang} where MaDatHang = "${ID}" `;
        return db.load(sql);
    },

    // tim kiem pheiu dat hang bang ma khach hang
    findOrderByCustomerID(ID) {
        const sql = `select * from ${table_datHang} where MaKH = "${ID}" `;
        return db.load(sql);
    },

    //tim kiem phieu dat hang bang ten KH
    findOrderByName(name) {
        const sql = `elect * 
        from ${table_datHang} dh join ${table_KhachHang} kh on dh.MaKH  = kh.MaKhachHang
        where kh.TenKhachHang = ${name} `;
        return db.load(sql);
    },

    // them phieu dat hang
    addOrder(order) {
        return db.add(order, table_datHang);
    },

    // cap nhat thong tin cua phieu dat hang
    updateOrder(entity, condition) {
        return db.patch(entity, condition, table_datHang);
    },

    //cap nhat tong thanh tien cua phieu dat hang
    updateTotalMoneyInOrder(orderID) {
        const sql = `update  ${table_datHang}
        set TongTien =((
        select sum(ctdh.SoLuongSP * sp.GiaBan)
        from ${table_ChiTietPhieuDatHang} ctdh join ${table_SanPham} sp on ctdh.MaSP = sp.MaSanPham
        group by MaDatHang 
        having MaDatHang = ${orderID})+TienVanChuyen)
        where MaDatHang =${orderID};`;
        return db.load(sql);
    },

    //xoa phieu dat hang
    deleteOrder(condition) {
        return db.del(condition, table_datHang)
    },

    //lay toan bo danh sach san pham trong phieu dat hang    
    getAllProductInOrder(orderID) {
        const sql = `select *
        from ${table_datHang} pdh join ${table_ChiTietPhieuDatHang} ctdh on pdh.MaDathang = ctdh.MaDatHang
        where pdh.MaDatHang = ${orderID}`;
        return db.load(sql);
    },

    // them chi tiet phieu dat hang
    addDetailOrder(order) {
        return db.add(order, table_ChiTietPhieuDatHang);
    },

    // cap nhat thong tin cua chi tiet phieu dat hang
    updateDetailOrder(entity, condition) {
        return db.patch(entity, condition, table_ChiTietPhieuDatHang);
    },

    //xoa phieu chi tiet dat hang
    deleteDetailOrder(condition) {
        return db.del(condition, table_ChiTietPhieuDatHang)
    }
}
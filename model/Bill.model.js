const { ModalDialog, TabContainer } = require("react-bootstrap");
const db = require("../utils/db");

table_SanPham = "SanPham"
table_KhachHang = "KhachHang"
table_HoaDon = "HoaDon"
table_ChiTietHoaDon = "ChiTietHoaDon"
module.exports = {
    //lay toan bo danh sach phieu dat hang
    getAllBull() {
        const sql = `select * from ${table_HoaDon}`;
        return db.load(sql);
    },

    // tim kiem hoa don bang ma hoa don
    findBillByID(ID) {
        const sql = `select * from ${table_HoaDon} where MaHoaDon = "${ID}" `;
        return db.load(sql);
    },

    // tim kiem hoa don bang ma khach hang
    findBillByCustomerID(ID) {
        const sql = `select * from ${table_HoaDon} where MaKhachHang = "${ID}" `;
        return db.load(sql);
    },

    //tim kiem hoa don bang ten KH
    findBillByName(name) {
        const sql = `elect * 
        from ${table_HoaDon} hd join ${table_KhachHang} kh on hd.MaKhachHang  = kh.MaKhachHang
        where kh.TenKhachHang = ${name} `;
        return db.load(sql);
    },

    // tim kiem hoa don bang ma nhan vien tao hoa don
    findBillByStaffID(ID) {
        const sql = `select * from ${table_HoaDon} where NguoiTao = "${ID}" `;
        return db.load(sql);
    },

    // them hoa don
    addBill(bill) {
        return db.add(bill, table_HoaDon);
    },

    // cap nhat thong tin cua hoa don
    updateBill(entity, condition) {
        return db.patch(entity, condition, table_HoaDon);
    },

    //cap nhat tong thanh tien cua hoa don
    updateTotalMoneyInBill(billID) {
        const sql = `update  ${table_HoaDon}
        set TongTien =(
        select sum(ThanhTien)
        from ${table_ChiTietHoaDon}
        group by MaHD 
        having MaHD = ${billID})
        where MaHoaDon =${billID}`;
        return db.load(sql);
    },

    //xoa hoa don
    deleteBill(condition) {
        return db.del(condition, table_HoaDon)
    },

    //lay toan bo danh sach san pham trong hoa don
    getAllProductInBill(billID) {
        const sql = `select *
        from ${table_HoaDon} hd join ${table_ChiTietHoaDon} cthd on hd.MaHoaDon = cthd.MaHD
        where hd.MaHoaDon = ${billID}`;
        return db.load(sql);
    },

    // them chi tiet hoa don
    addDetailBill(detail_Bill) {
        return db.add(detail_Bill, table_ChiTietHoaDon);
    },

    // cap nhat thong tin cua chi tiet hoa don
    updateDetailBill(entity, condition) {
        return db.patch(entity, condition, table_ChiTietHoaDon);
    },

    //xoa phieu chi tiet hoa don
    deleteDetailBill(condition) {
        return db.del(condition, table_ChiTietHoaDon)
    }
}
const { ModalDialog } = require("react-bootstrap");
const db = require("../utils/db");

table_SanPham = "SanPham"
table_LoaiSanPham = "LoaiSanPham"
module.exports = {
    //lay toan bo danh sach san pham
    getAllProduct() {
        const sql = `select * from ${table_SanPham}`;
        return db.load(sql);
    },

    // tim kiem san pham bang ma san pham
    findProductByID(ID) {
        const sql = `select * from ${table_SanPham} where MaSanPham = "${ID}" `;
        return db.load(sql);
    },

    //tim kiem san pham bang ten
    findProductByName(name) {
        const sql = `select * from ${table_SanPham} where TenSP = "${name}" `;
        return db.load(sql);
    },

    //danh sach san pham theo loai san pham
    findProductByCatID(catID) {
        const sql = `select * 
        from ${table_SanPham} sp join ${table_LoaiSanPham} lsp on sp.MaLoaiSP = lsp.MaLoaiSP
        where lsp.MaLoaiSP = ${catID}`
        return db.load(sql);
    },

    // them san pham
    addProduct(product) {
        return db.add(product, table_SanPham);
    },

    // cap nhat thong tin cua san pham
    updateProduct(entity, condition) {
        return db.patch(entity, condition, table_SanPham);
    },

    //xoa san pham
    deleteProduct(condition) {
        return db.del(condition, table_SanPham)
    }
}
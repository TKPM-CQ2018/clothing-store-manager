drop database  if exists   ChatLuShop ;
create database   ChatLuShop  CHARACTER SET 'utf8' COLLATE 'utf8_general_ci';
use ChatLuShop;

create table NguoiDung(
	MaNguoiDung varchar(10) primary key ,
    NgayKhoiTao date,
    TenDangNhap varchar(50) unique,
    MatKhau varchar(50)
);
create table KhachHang(
	MaKhachHang varchar(10) primary key ,
    TenKhachHang nvarchar(50) not null,
    MaThanhToan VARCHAR(10) ,
    SDT varchar(10) unique,
    Email varchar(50) unique,
    DiaChi nvarchar(50) not null,
    GioiTinh int not null,
    TrangThai int,
    TenDangNhap varchar(50) unique,
    MatKhau varchar(50)
);

create table NhanVien(
	MaNhanVien varchar(10) primary key ,
    TenNV nvarchar(50) not null,
    MaLoaiNV VARCHAR(10),
    TienLuong int  ,
    PhuCap int ,
    NgayBatDauLam date,
    TrangThai int,
    GioiTinh int not null,
    TenDangNhap varchar(50) unique,
    MatKhau varchar(50)
);

create table LoaiNhanVien(
	MaLoaiNV varchar(10) primary key ,
    TenLoaiNV nvarchar(50) not null,
    MoTaLoaiNV nVARCHAR(500) not null 
);

create table BoPhan(
	MaBoPhan varchar(10) primary key ,
    TenBP nvarchar(50) not null,
    MoTaBP nVARCHAR(50) not null,
    NgayThanhLapBP date not null
);

create table TruongBoPhan(
	MaBoPhan varchar(10) primary key ,
    MaTruongBoPhan varchar(10),
    NgayNhanChuc date not null
);

create table HoaDon(
	MaHoaDon varchar(10) primary key ,
    MaKhachHang varchar(10),
    NgayTao date not null,
    TongTien int not null check(TongTien>0),
    MaKhuyenMai VARCHAR(10) ,
    TenKH NVARCHAR(50)  not null,
    GioiTinh int not null,
    SDT VARCHAR(10)  not null,
    NguoiTao VARCHAR(10) 
);

create table ChiTietHoaDon(
	MaHD varchar(10)  ,
    MaSP varchar(10) ,
    SoLuong int not null check (SoLuong >0),
    ThanhTien int not null check (ThanhTien >0),
    MaHTTT VARCHAR(10) ,
    MaKM VARCHAR(10),
    constraint primary key (MaHD,MaSP)
);

create table PhieuDatHang(
	MaDatHang varchar(10) primary key ,
    MaKH varchar(10),
    TienVanChuyen int not null check(TienVanChuyen>0),
    DonViVanChuyen nVARCHAR(50) not null ,
    TongTien int 
);

create table ChiTietDatHang(
	MaDatHang varchar(10) ,
    MaSP varchar(10),
    SoLuongSP int not null check(SoLuongSP>0),
    constraint primary key (MaDatHang, MaSP)
);

create table SanPham(
	MaSanPham varchar(10) primary key ,
    TenSP nvarchar(50) not null,
    GiaMua int not null check(GiaMua>0),
    GiaBan int not null check(GiaBan>0),
    MaNhanHieu VARCHAR(10) ,
    MaLoaiSP VARCHAR(10),
    NgayNhapHang DATE not null,
    VAT real not null check (VAT > 0)
);

create table NhanHieu(
	MaNhanHieu varchar(10) primary key ,
    TenNhanHieu nvarchar(50) not null
);

create table LoaiSanPham(
	MaLoaiSP varchar(10) primary key ,
    TenLoaiSP nvarchar(50) not null
);

create table KhuyenMai(
	MaKhuyenMai varchar(10) primary key ,
    GiaTri float not null check (GiaTri>0),
    MaLoaiKM VARCHAR(10) 
);

create table HinhThucThanhToan(
	MaHTTT varchar(10) primary key ,
    TenHTTT nvarchar(50) not null
);

create table LoaiKhuyenMai(
	MaLoaiKM varchar(10) primary key ,
    TenLoaiKM nvarchar(50) not null,
    MoTa nvarchar(500) not null
);

create table Kho(
	MaKho varchar(10) primary key ,
    TenKho nvarchar(50) not null,
    DiaChi nvarchar(50) not null,
    MaNVQuanLy varchar(10) 
);

create table PhieuXuatKho(
	MaPhieuXuatKho varchar(10) primary key ,
    MaKho varchar(10),
    NgayTao Date not null,
    MaKhoXuat varchar(10) 
);

create table ChiTietXuatKho(
	MaPhieuXuatKho varchar(10)  ,
    MaSP varchar(10),
    SoLuong int not null check (SoLuong>0),
    constraint  primary key (MaPhieuXuatKho, MaSP)
);

create table PhieuNhapKho(
	MaPhieuNhapKho varchar(10) primary key ,
    MaKho varchar(10),
    NgayTao Date not null,
    MaKhoNhap varchar(10),
    MaNhaCungCap varchar(10) 
);

create table ChiTietNhapKho(
	MaPhieuNhapKho varchar(10) ,
    MaSP varchar(10),
    SoLuong int not null check (SoLuong>0),
    constraint  primary key (MaPhieuNhapKho, MaSP)
);

create table NhaCungCap(
	MaNhaCungCap varchar(10) primary key ,
    TenNhaCungCap nvarchar(50) not null,
	DiaChi nvarchar(500) not null
);

create table ChiTietKho(
	MaKho varchar(10) ,
    MaSP  varchar(10),
	SoLuong int not null ,
    TrangThai int not null,
    constraint  primary key (MaKho, MaSP)
);

create table Luong(
	MaLuong varchar(10) primary key ,
    MaNV  varchar(10) ,
	NgayTongKet date  not null ,
    GiaTri float ,
    MaChiTietLuong VARCHAR(10) 
);

create table ChiTietLuong(
	MaChiTietLuong varchar(10) primary key ,
    SoLanDiTre  int not null ,
    SoLanNghiKhongPhep  int not null ,
    SoLanNghiCoPhep  int not null ,
    SoLanBonus  int not null ,
    LuongCoBan float not null
);
alter table NhanVien add foreign key (MaloaiNV) references LoaiNhanVien(MaLoaiNV);

alter table TruongBoPhan add foreign key (MaTruongBoPhan) references NhanVien(MaloaiNV);

alter table HoaDon add foreign key (MaKhachHang) references khachHang(MaKhachHang);
alter table HoaDon add foreign key (MaKhuyenMai) references KhuyenMai(MaKhuyenMai);
alter table HoaDon add foreign key (NguoiTao) references NhanVien(MaNhanVien);

alter table ChiTietHoaDon add foreign key (MaSP) references SanPham(MaSanPham);
alter table ChiTietHoaDon add foreign key (MaHTTT) references HinhThucThanhToan(MaHTTT);

alter table PhieuDatHang add foreign key (MaKH ) references KhachHang(MaKhachHang);

alter table ChiTietDatHang add foreign key (MaSP) references SanPham(MaSanPham);

alter table SanPham add foreign key (MaNhanHieu ) references NhanHieu(MaNhanHieu);
alter table SanPham add foreign key (MaLoaiSP) references LoaiSanPham(MaLoaiSP);

alter table KhuyenMai add foreign key (MaLoaiKM) references LoaiKhuyenMai(MaLoaiKM);

alter table Kho add foreign key (MaNVQuanLy) references NhanVien(MaNhanVien);

alter table PhieuXuatKho add foreign key (MaKho) references Kho(MaKho);
alter table PhieuXuatKho add foreign key (MaKhoXuat) references Kho(MaKho);

alter table ChiTietXuatKho add foreign key (MaSP) references SanPham(MaSanPham);

alter table PhieuNhapKho add foreign key (MaKhoNhap) references Kho(MaKho);
alter table PhieuNhapKho add foreign key (MaNhaCungCap) references NhaCungCap(MaNhaCungCap);

alter table ChiTietNhapKho add foreign key (MaSP) references SanPham(MaSanPham);

alter table ChiTietKho add foreign key (MaSP) references SanPham(MaSanPham);

alter table Luong add foreign key (MaNV) references NhanVien(MaNhanVien);


INSERT INTO HinhThucThanhToan
VALUES ('1','Tiền mặt');
INSERT INTO HinhThucThanhToan
VALUES ('2','Thẻ ngân hàng');
INSERT INTO HinhThucThanhToan
VALUES ('3','Ví điện tử');

INSERT INTO LoaiKhuyenMai
VALUES ('1','Chào năm học mới', 'Sử dụng cho học sinh, sinh viên');
INSERT INTO LoaiKhuyenMai
VALUES ('2','Chào mừng quốc tế phụ nữ', 'Sử dụng trong tháng 3');
INSERT INTO LoaiKhuyenMai
VALUES ('3','Chào mừng ngày phụ nữ Việt Nam', 'Sử dụng trong tháng 10');

INSERT INTO KhuyenMai
VALUES ('1',0.1, '1');
INSERT INTO KhuyenMai
VALUES ('2',0.1, '2');
INSERT INTO KhuyenMai
VALUES ('3',0.2, '3');

INSERT INTO LoaiSanPham
VALUES ('1','Áo khoác');
INSERT INTO LoaiSanPham
VALUES ('2','Đầm');
INSERT INTO LoaiSanPham
VALUES ('3','Quần tây');
INSERT INTO LoaiSanPham
VALUES ('4','Áo thun');
INSERT INTO LoaiSanPham
VALUES ('5','Áo sơ mi');

INSERT INTO NhanHieu
VALUES ('1','Yame');
INSERT INTO NhanHieu
VALUES ('2','Gucci');
INSERT INTO NhanHieu
VALUES ('3','Elle');
INSERT INTO NhanHieu
VALUES ('4','Dior');
INSERT INTO NhanHieu
VALUES ('5','Hermes');

#dung cho khach hang
INSERT INTO NguoiDung
VALUES ('1','2021-06-27', 'tendangnhap1', 'matkhau' );
INSERT INTO NguoiDung
VALUES ('2','2021-06-27', 'tendangnhap2', 'matkhau' );
INSERT INTO NguoiDung
VALUES ('3','2021-06-27', 'tendangnhap3', 'matkhau' );

#dung cho nhan vien
INSERT INTO NguoiDung
VALUES ('4','2021-06-27', 'tendangnhap4', 'matkhau' );
INSERT INTO NguoiDung
VALUES ('5','2021-06-27', 'tendangnhap5', 'matkhau' );
INSERT INTO NguoiDung
VALUES ('6','2021-06-27', 'tendangnhap6', 'matkhau' );
INSERT INTO NguoiDung
VALUES ('7','2021-06-27', 'tendangnhap7', 'matkhau' );
INSERT INTO NguoiDung
VALUES ('8','2021-06-27', 'tendangnhap8', 'matkhau' );
INSERT INTO NguoiDung
VALUES ('9','2021-06-27', 'tendangnhap9', 'matkhau' );


INSERT INTO KhachHang 
VALUES ('1','Trần Tân Phước',null, '0000000000',  'tendangnhap1@gmail.com', 'Tiền Giang', 1,1, 'khachhang1', 'password' );
INSERT INTO KhachHang 
VALUES ('2','Đặng Quốc Trường',null, '1111111111',  'tendangnhap2@gmail.com', 'Tiền Giang', 1,1, 'khachhang2', 'password' );
INSERT INTO KhachHang 
VALUES ('3','Đặng Ðình Tuấn',null, '2222222222',  'tendangnhap3@gmail.com', 'Tiền Giang', 1,1, '3', 'khachhangpassword' );


INSERT INTO LoaiNhanVien
VALUES ('1','Chủ cửa hàng', 'Là nguời có quyền cao nhất, quản lý các nhân viên khác nhau trong cửa hàng. ');
INSERT INTO LoaiNhanVien
VALUES ('2','Nhân viên kế toán ', 'Là người kiểm tra, giám sát các khoản thu, chi tài chính, nghĩa vụ thu, nộp, thanh toán nợ; kiểm tra việc quản lý, sử dụng tài sản và nguồn hình thành tài sản.  ');
INSERT INTO LoaiNhanVien
VALUES ('3','Nhân viên lễ tân ', 'Là người hỗ trợ khách hàng giải đáp thắc. ');
INSERT INTO LoaiNhanVien
VALUES ('4','Nhân viên bán hàng ', 'Là người tư vấn, hỗ trợ, thanh toán  ');
INSERT INTO LoaiNhanVien
VALUES ('5','Nhân viên quản lý cửa hàng ', 'Là người quản lý một chi nhánh trong chuỗi cửa hàng ');

INSERT INTO BoPhan 
VALUES ('1','Chủ cửa hàng', 'Chủ của cừa hàng',  '2021-06-27');
INSERT INTO BoPhan 
VALUES ('2','Quản lý', 'Bao gồm các quản lý',  '2021-06-27');
INSERT INTO BoPhan 
VALUES ('3','Kinh doanh', 'Bap gồm nhân viên lễ tân và bán hàng',  '2021-06-27');
INSERT INTO BoPhan 
VALUES ('4','Kế toán và Kho', 'Bao gồm nhân viên kế toán',  '2021-06-27');


INSERT INTO NhanVien 
VALUES ('1','Lý Quang Huy','1',null,null,  '2021-06-27', 1, 1, 'nhanvien1', 'password' );
INSERT INTO NhanVien 
VALUES ('2','Nguyễn Xuân Trung','2',null,null,  '2021-06-27', 1, 1,'nhanvien2', 'password'  );
INSERT INTO NhanVien 
VALUES ('3','Ngô Tuyết Nhung','3',null,null,  '2021-06-27', 1, 0 ,'nhanvien3', 'password' );
INSERT INTO NhanVien 
VALUES ('4','Đặng Phi Long','4',null,null,  '2021-06-27', 1, 0, 'nhanvien4', 'password'  );
INSERT INTO NhanVien 
VALUES ('5','Lê Tuấn Linh','5',null,null,  '2021-06-27', 1, 1 , 'nhanvien5', 'password' );
INSERT INTO NhanVien 
VALUES ('6','Nguyễn Huy Tú','5',null,null,  '2021-06-27', 1,1,'nhanvien6', 'password'  );


INSERT INTO SanPham 
VALUES ('1','Áo khoác nỉ có nón',300000, 350000,  '1', '1','2021-06-27', 0.1 );
INSERT INTO SanPham 
VALUES ('2','Áo khoác jean nữ',300000, 350000,  '2', '1','2021-06-27', 0.1 );
INSERT INTO SanPham 
VALUES ('3','Quần boggy ống rộng',300000, 350000,  '3', '3','2021-06-27', 0.1 );
INSERT INTO SanPham 
VALUES ('4','Áo thun sọc ngang',300000, 350000,  '4', '4','2021-06-27', 0.1 );
INSERT INTO SanPham 
VALUES ('5','Đầm công sở',300000, 350000,  '5', '3','2021-06-27', 0.1 );


INSERT INTO Kho 
VALUES ('1','Kho thứ nhất','Linh Trung, Thủ Đức','5' );
INSERT INTO Kho 
VALUES ('2','Kho thứ hai','Nguyễn Văn Cừ, Quận 5','6' );

INSERT INTO ChiTietKho 
VALUES ('1','1',20,1 );
INSERT INTO ChiTietKho 
VALUES ('1','2',15,1 );
INSERT INTO ChiTietKho 
VALUES ('1','3',30,1 );
INSERT INTO ChiTietKho 
VALUES ('1','4',1,2);
INSERT INTO ChiTietKho 
VALUES ('1','5',0,3 );
INSERT INTO ChiTietKho 
VALUES ('2','1',20,1 );
INSERT INTO ChiTietKho 
VALUES ('2','2',15,1 );
INSERT INTO ChiTietKho 
VALUES ('2','3',30,1 );
INSERT INTO ChiTietKho 
VALUES ('2','4',1,2);
INSERT INTO ChiTietKho 
VALUES ('2','5',0,3 );


INSERT INTO PhieuDatHang
VALUES ('1','1',30000, 'đơn vị vận chuyển', 730000 );
INSERT INTO PhieuDatHang
VALUES ('2','2',30000, 'đơn vị vận chuyển', 380000 );


INSERT INTO ChiTietDatHang
VALUES ('1','1',1 );
INSERT INTO ChiTietDatHang
VALUES ('1','2',1 );
INSERT INTO ChiTietDatHang
VALUES ('2','3',1 );


INSERT INTO HoaDon
VALUES ('1',null,'2021-06-27', 730000, null, 'Hà Minh Cường', 1, '5555555555', '3' );
INSERT INTO HoaDon
VALUES ('2','1','2021-06-27', 730000, null, 'Trần Tân Phước', 1, '1111111111', '3' );


INSERT INTO ChiTietHoaDon
VALUES ('1','1',1, 350000, '1', null );
INSERT INTO ChiTietHoaDon
VALUES ('1','2',1, 350000, '1', null );
INSERT INTO ChiTietHoaDon
VALUES ('2','1',1, 350000, '1', null );
INSERT INTO ChiTietHoaDon
VALUES ('2','2',1, 350000, '1', null );


INSERT INTO NhaCungCap
VALUES ('1','Nhà Cung Cấp 1','Thủ Đức' );
INSERT INTO NhaCungCap
VALUES ('2','Nhà Cung Cấp 2','Quận 5' );

INSERT INTO Luong
VALUES ('1', '2', '2021-06-28', null, null);
INSERT INTO Luong
VALUES ('2', '3', '2021-06-28', null, null);
INSERT INTO Luong
VALUES ('3', '4', '2021-06-28', null, null);
INSERT INTO Luong
VALUES ('4', '5', '2021-06-28', null, null);
INSERT INTO Luong
VALUES ('5', '6', '2021-06-28', null, null);


INSERT INTO ChiTietLuong
VALUES ('1', 0,0,0,0,8000000);
INSERT INTO ChiTietLuong
VALUES ('2', 0,0,0,0, 8000000);
INSERT INTO ChiTietLuong
VALUES ('3', 0,0,0,0,9000000);
INSERT INTO ChiTietLuong
VALUES ('4', 0,0,0,0,10000000);
INSERT INTO ChiTietLuong
VALUES ('5', 0,0,0,0,10000000);


INSERT INTO PhieuNhapKho
values ('1', '1', '2021-06-27', null, '1');

INSERT INTO ChiTietNhapKho 
VALUES ('1','1',20 );
INSERT INTO ChiTietNhapKho 
VALUES ('1','2',15);


INSERT INTO PhieuXuatKho
values ('1', '1', '2021-06-27', '2');

INSERT INTO ChiTietXuatKho 
VALUES ('1','1',2 );
INSERT INTO ChiTietXuatKho 
VALUES ('1','2',1);


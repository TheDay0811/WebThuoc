
(function (global) {
    'use strict';

    const DB_NAME = 'QuanLyNhaThuoc';

    // Default Seed Data
    const SEED_DATA = {
        KHACH_HANG: [
            { ma_khach_hang: 1, ho_ten: "Nguyễn Văn A", email: "customer@test.com", mat_khau: "123456", so_dien_thoai: "0901234567", dia_chi: "123 Nguyễn Huệ, Quận 1, TP.HCM", google_id: null, facebook_id: null, ngay_tao: "2026-06-01T08:00:00Z", trang_thai: "active" }
        ],
        QUAN_LY: [
            { ma_quan_ly: 1, ho_ten: "Trần Thị Admin", email: "admin@test.com", mat_khau: "admin123", so_dien_thoai: "0912345678", ngay_tao: "2026-05-01T00:00:00Z", lan_dang_nhap_cuoi: null, trang_thai: "active" }
        ],
        NHAN_VIEN: [
            { ma_nhan_vien: 1, ho_ten: "Lê Thị Dược Sĩ", email: "duocsi@test.com", mat_khau: "duocsi123", so_dien_thoai: "0923456789", chuc_vu: "duoc_si", luong_co_ban: 12000000, hinh_thuc_nhan_luong: "ngan_hang", so_tai_khoan: "VCP123456", ngay_vao_lam: "2026-05-15", ngay_nghi_viec: null, ma_quan_ly: 1, trang_thai: "active" },
            { ma_nhan_vien: 2, ho_ten: "Phạm Văn Kho", email: "kho@test.com", mat_khau: "kho123", so_dien_thoai: "0934567890", chuc_vu: "nhan_vien_kho", luong_co_ban: 8000000, hinh_thuc_nhan_luong: "tien_mat", so_tai_khoan: null, ngay_vao_lam: "2026-05-20", ngay_nghi_viec: null, ma_quan_ly: 1, trang_thai: "active" }
        ],
        OTP: [],
        DANH_MUC: [
            { ma_danh_muc: 1, ten_danh_muc: "Kê đơn theo toa thuốc", mo_ta: "Các loại thuốc cần có chỉ định của bác sĩ", ma_danh_muc_cha: null, trang_thai: "active" },
            { ma_danh_muc: 2, ten_danh_muc: "Vitamin & Thực phẩm chức năng", mo_ta: "Bổ sung sức khỏe và vi chất", ma_danh_muc_cha: null, trang_thai: "active" },
            { ma_danh_muc: 3, ten_danh_muc: "Bảo vệ cá nhân", mo_ta: "Khẩu trang, nước rửa tay, sát khuẩn...", ma_danh_muc_cha: null, trang_thai: "active" },
            { ma_danh_muc: 4, ten_danh_muc: "Thiết bị y tế", mo_ta: "Máy đo huyết áp, nhiệt kế...", ma_danh_muc_cha: null, trang_thai: "active" },
            { ma_danh_muc: 5, ten_danh_muc: "Dược mỹ phẩm", mo_ta: "Kem dưỡng da, sữa rửa mặt trị mụn...", ma_danh_muc_cha: null, trang_thai: "active" }
        ],
        THUOC: [
            // Category 1: Ke don theo toa / Giam dau ha sot
            { ma_thuoc: 1, ten_thuoc: "Panadol Extra (Viên sủi)", thanh_phan: "Paracetamol 500mg, Caffeine 65mg", cong_dung: "Giảm đau hạ sốt nhanh chóng", lieu_dung: "Sủi 1 viên trong nước mỗi 4-6 giờ", chong_chi_dinh: "Mẫn cảm với thành phần thuốc, suy gan nặng", trieu_chung: "Đau đầu, sốt, đau răng", gia: 45000, so_luong_ton: 150, han_su_dung: "2028-12-31", ma_danh_muc: 1, hinh_anh: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 7, ten_thuoc: "Efferalgan 500mg", thanh_phan: "Paracetamol 500mg", cong_dung: "Hạ sốt, giảm đau vừa và nhẹ", lieu_dung: "Hòa tan 1 viên vào nước, ngày uống tối đa 4 lần", chong_chi_dinh: "Bệnh gan nặng", trieu_chung: "Sốt cao, đau mỏi cơ", gia: 42000, so_luong_ton: 200, han_su_dung: "2028-10-15", ma_danh_muc: 1, hinh_anh: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },

            // Category 2: Vitamin & Thực phẩm chức năng
            { ma_thuoc: 2, ten_thuoc: "Vitamin C 500mg Plus", thanh_phan: "Vitamin C 500mg, Zinc", cong_dung: "Tăng cường đề kháng, chống oxy hóa", lieu_dung: "Uống 1 viên sau ăn sáng", chong_chi_dinh: "Sỏi thận", trieu_chung: "Mệt mỏi, đề kháng kém", gia: 120000, so_luong_ton: 80, han_su_dung: "2027-06-30", ma_danh_muc: 2, hinh_anh: "https://images.unsplash.com/photo-1550572017-edb1e94119cd?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 3, ten_thuoc: "Fish Oil Omega-3 1000mg", thanh_phan: "Dầu cá tự nhiên 1000mg (EPA/DHA)", cong_dung: "Tốt cho tim mạch, mắt và não bộ", lieu_dung: "Uống 1-2 viên mỗi ngày cùng bữa ăn", chong_chi_dinh: "Rối loạn đông máu", trieu_chung: "Khô mắt, mỏi mắt, tim mạch yếu", gia: 285000, so_luong_ton: 60, han_su_dung: "2027-09-20", ma_danh_muc: 2, hinh_anh: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 8, ten_thuoc: "Calcium D3 Nycomed", thanh_phan: "Calcium carbonate 1250mg, Vitamin D3 200 IU", cong_dung: "Bổ sung Canxi cho xương chắc khỏe", lieu_dung: "Nhai 1 viên sáng, 1 viên tối", chong_chi_dinh: "Tăng canxi huyết, sỏi thận nặng", trieu_chung: "Loãng xương, thiếu canxi", gia: 195000, so_luong_ton: 90, han_su_dung: "2028-05-18", ma_danh_muc: 2, hinh_anh: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },

            // Category 5: Dược mỹ phẩm
            { ma_thuoc: 4, ten_thuoc: "Kem dưỡng ẩm Cerave", thanh_phan: "Ceramides, Hyaluronic Acid", cong_dung: "Dưỡng ẩm, phục hồi hàng rào bảo vệ da", lieu_dung: "Thoa lên da sạch vào buổi sáng và tối", chong_chi_dinh: "Mẫn cảm với thành phần kem", trieu_chung: "Da khô, nứt nẻ, kích ứng", gia: 350000, so_luong_ton: 45, han_su_dung: "2028-01-01", ma_danh_muc: 5, hinh_anh: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 5, ten_thuoc: "Thuốc nhỏ mắt V.Rohto", thanh_phan: "Tetrahydrozoline HCl, Vitamin B6, Panthenol", cong_dung: "Giảm mỏi mắt, đỏ mắt, ngứa mắt", lieu_dung: "Nhỏ 2-3 giọt mỗi mắt, ngày 5-6 lần", chong_chi_dinh: "Glaucoma góc đóng", trieu_chung: "Mỏi mắt, mờ mắt do bụi bẩn", gia: 65000, so_luong_ton: 300, han_su_dung: "2027-11-30", ma_danh_muc: 5, hinh_anh: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" }
        ],
        GIO_HANG: [],
        CHI_TIET_GIO_HANG: [],
        KHUYEN_MAI: [
            { ma_khuyen_mai: 1, ma_code: "MEDICARE10", phan_tram_giam: 10, so_tien_giam: null, giam_toi_da: 50000, ngay_bat_dau: "2026-01-01", ngay_ket_thuc: "2026-12-31", so_lan_su_dung: 12, gioi_han_su_dung: 100, trang_thai: "active" },
            { ma_khuyen_mai: 2, ma_code: "HEAL50K", phan_tram_giam: null, so_tien_giam: 50000, giam_toi_da: 50000, ngay_bat_dau: "2026-06-01", ngay_ket_thuc: "2026-12-31", so_lan_su_dung: 5, gioi_han_su_dung: 50, trang_thai: "active" }
        ],
        DON_HANG: [],
        CHI_TIET_DON_HANG: [],
        THANH_TOAN: [],
        HOA_DON: [],
        DANH_GIA: [
            { ma_danh_gia: 1, ma_khach_hang: 1, ma_thuoc: 1, so_sao: 5, noi_dung: "Thuốc sủi nhanh, dễ uống, hạ sốt rất tốt!", ngay_danh_gia: "2026-06-15T14:30:00Z", trang_thai: "hien" }
        ],
        DANH_GIA_NHAN_VIEN: [],
        TIN_NHAN: [],
        PHAN_CONG: [],
        CHAM_CONG: [],
        BANG_LUONG: []
    };

    class PharmacyDB {
        constructor() {
            this.init();
        }

        // Initialize database if not exists
        init() {
            let data = localStorage.getItem(DB_NAME);
            if (!data) {
                // Pre-populate with seed data
                localStorage.setItem(DB_NAME, JSON.stringify(SEED_DATA));
                // Add users to older key 'medicare_users' if not exist to be backwards compatible with login script
                let existingUsers = localStorage.getItem('medicare_users');
                if (!existingUsers) {
                    const mappedUsers = SEED_DATA.KHACH_HANG.map(kh => ({
                        fullname: kh.ho_ten,
                        email: kh.email,
                        password: kh.mat_khau,
                        provider: 'email',
                        avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(kh.ho_ten)}`
                    }));
                    localStorage.setItem('medicare_users', JSON.stringify(mappedUsers));
                }
            }
        }

        // Read all tables
        _read() {
            this.init();
            return JSON.parse(localStorage.getItem(DB_NAME));
        }

        // Write all tables
        _write(data) {
            localStorage.setItem(DB_NAME, JSON.stringify(data));
        }

        // --- GENERIC CRUD APIS ---

        // Get all rows of a table with optional filter query
        get(tableName, query = null) {
            const db = this._read();
            const table = db[tableName] || [];
            if (!query) return table;

            return table.filter(row => {
                return Object.keys(query).every(key => row[key] === query[key]);
            });
        }

        // Find single row
        findOne(tableName, query) {
            const results = this.get(tableName, query);
            return results.length > 0 ? results[0] : null;
        }

        // Insert new row (Auto Increment ID)
        insert(tableName, rowData) {
            const db = this._read();
            if (!db[tableName]) db[tableName] = [];

            // Primary Key Field generation (usually ma_...)
            const pkField = this._getPrimaryKeyField(tableName);
            let newId = 1;
            if (db[tableName].length > 0) {
                const ids = db[tableName].map(r => r[pkField]).filter(id => typeof id === 'number');
                if (ids.length > 0) {
                    newId = Math.max(...ids) + 1;
                }
            }

            const newRow = {
                [pkField]: newId,
                ...rowData,
                ngay_tao: rowData.ngay_tao || new Date().toISOString()
            };

            db[tableName].push(newRow);
            this._write(db);

            // Keep 'medicare_users' synchronized for KHACH_HANG
            if (tableName === 'KHACH_HANG') {
                this._syncKhachHangToUsers(db.KHACH_HANG);
            }

            return newRow;
        }

        // Update rows
        update(tableName, query, updatedData) {
            const db = this._read();
            const table = db[tableName] || [];
            let updatedCount = 0;

            const updatedTable = table.map(row => {
                const match = Object.keys(query).every(key => row[key] === query[key]);
                if (match) {
                    updatedCount++;
                    return { ...row, ...updatedData };
                }
                return row;
            });

            db[tableName] = updatedTable;
            this._write(db);

            if (tableName === 'KHACH_HANG' && updatedCount > 0) {
                this._syncKhachHangToUsers(db.KHACH_HANG);
            }

            return updatedCount;
        }

        // Delete rows
        delete(tableName, query) {
            const db = this._read();
            const table = db[tableName] || [];
            const initialLength = table.length;

            const filteredTable = table.filter(row => {
                return !Object.keys(query).every(key => row[key] === query[key]);
            });

            db[tableName] = filteredTable;
            this._write(db);

            if (tableName === 'KHACH_HANG') {
                this._syncKhachHangToUsers(db.KHACH_HANG);
            }

            return initialLength - filteredTable.length;
        }

        // --- SPECIFIC BUSINESS LOGIC & DATA EXTRACTION ---

        // Get medicines by Category ID
        getMedicinesByCategory(categoryId) {
            return this.get('THUOC', { ma_danh_muc: parseInt(categoryId), trang_thai: 'active' });
        }

        // Search medicines by name, ingredient, or symptom
        searchMedicines(keyword) {
            const medicines = this.get('THUOC', { trang_thai: 'active' });
            if (!keyword) return medicines;

            const lowerKey = keyword.toLowerCase();
            return medicines.filter(m =>
                m.ten_thuoc.toLowerCase().includes(lowerKey) ||
                (m.thanh_phan && m.thanh_phan.toLowerCase().includes(lowerKey)) ||
                (m.cong_dung && m.cong_dung.toLowerCase().includes(lowerKey)) ||
                (m.trieu_chung && m.trieu_chung.toLowerCase().includes(lowerKey))
            );
        }

        // Cart Actions
        getCart(customerId) {
            let cart = this.findOne('GIO_HANG', { ma_khach_hang: parseInt(customerId) });
            if (!cart) {
                cart = this.insert('GIO_HANG', { ma_khach_hang: parseInt(customerId) });
            }
            const details = this.get('CHI_TIET_GIO_HANG', { ma_gio_hang: cart.ma_gio_hang });

            // Join with medicine details
            return details.map(item => {
                const medicine = this.findOne('THUOC', { ma_thuoc: item.ma_thuoc });
                return {
                    ...item,
                    thuoc: medicine
                };
            });
        }

        addToCart(customerId, medicineId, quantity) {
            let cart = this.findOne('GIO_HANG', { ma_khach_hang: parseInt(customerId) });
            if (!cart) {
                cart = this.insert('GIO_HANG', { ma_khach_hang: parseInt(customerId) });
            }

            const medicine = this.findOne('THUOC', { ma_thuoc: parseInt(medicineId) });
            if (!medicine) throw new Error('Không tìm thấy thuốc!');
            if (medicine.so_luong_ton < quantity) throw new Error('Số lượng tồn kho không đủ!');

            const existingItem = this.findOne('CHI_TIET_GIO_HANG', {
                ma_gio_hang: cart.ma_gio_hang,
                ma_thuoc: parseInt(medicineId)
            });

            if (existingItem) {
                const newQty = existingItem.so_luong + quantity;
                if (medicine.so_luong_ton < newQty) throw new Error('Vượt quá số lượng tồn kho!');
                this.update('CHI_TIET_GIO_HANG', { ma_chi_tiet: existingItem.ma_chi_tiet }, {
                    so_luong: newQty
                });
            } else {
                this.insert('CHI_TIET_GIO_HANG', {
                    ma_gio_hang: cart.ma_gio_hang,
                    ma_thuoc: parseInt(medicineId),
                    so_luong: quantity,
                    don_gia: medicine.gia
                });
            }
            return this.getCart(customerId);
        }

        updateCartQuantity(customerId, medicineId, quantity) {
            const cart = this.findOne('GIO_HANG', { ma_khach_hang: parseInt(customerId) });
            if (!cart) throw new Error('Không có giỏ hàng!');

            if (quantity <= 0) {
                this.delete('CHI_TIET_GIO_HANG', { ma_gio_hang: cart.ma_gio_hang, ma_thuoc: parseInt(medicineId) });
            } else {
                const medicine = this.findOne('THUOC', { ma_thuoc: parseInt(medicineId) });
                if (medicine.so_luong_ton < quantity) throw new Error('Số lượng tồn kho không đủ!');

                this.update('CHI_TIET_GIO_HANG', {
                    ma_gio_hang: cart.ma_gio_hang,
                    ma_thuoc: parseInt(medicineId)
                }, { so_luong: quantity });
            }
            return this.getCart(customerId);
        }

        // Checkout & Order creation
        createOrder(customerId, orderData) {
            // orderData contains: dia_chi_giao, phuong_thuc_thanh_toan, doi_tac_van_chuyen, ma_code_khuyen_mai
            const cartItems = this.getCart(customerId);
            if (cartItems.length === 0) throw new Error('Giỏ hàng trống!');

            let tong_tien_hang = 0;
            cartItems.forEach(item => {
                tong_tien_hang += item.so_luong * item.don_gia;
            });

            let phi_van_chuyen = orderData.phi_van_chuyen || 30000;
            let so_tien_giam = 0;
            let ma_khuyen_mai_id = null;

            if (orderData.ma_code_khuyen_mai) {
                const promo = this.findOne('KHUYEN_MAI', { ma_code: orderData.ma_code_khuyen_mai, trang_thai: 'active' });
                if (promo) {
                    ma_khuyen_mai_id = promo.ma_khuyen_mai;
                    if (promo.phan_tram_giam) {
                        so_tien_giam = (tong_tien_hang * promo.phan_tram_giam) / 100;
                        if (promo.giam_toi_da && so_tien_giam > promo.giam_toi_da) {
                            so_tien_giam = promo.giam_toi_da;
                        }
                    } else if (promo.so_tien_giam) {
                        so_tien_giam = promo.so_tien_giam;
                    }
                    // Increase promo count
                    this.update('KHUYEN_MAI', { ma_khuyen_mai: promo.ma_khuyen_mai }, {
                        so_lan_su_dung: promo.so_lan_su_dung + 1
                    });
                }
            }

            const tong_tien_thanh_toan = tong_tien_hang + phi_van_chuyen - so_tien_giam;

            // Create Order Row
            const newOrder = this.insert('DON_HANG', {
                ma_khach_hang: parseInt(customerId),
                ngay_dat: new Date().toISOString(),
                tong_tien_hang: tong_tien_hang,
                phi_van_chuyen: phi_van_chuyen,
                doi_tac_van_chuyen: orderData.doi_tac_van_chuyen || 'noi_bo',
                so_tien_giam: so_tien_giam,
                tong_tien_thanh_toan: tong_tien_thanh_toan,
                phuong_thuc_thanh_toan: orderData.phuong_thuc_thanh_toan,
                trang_thai_thanh_toan: orderData.phuong_thuc_thanh_toan === 'cod' ? 'chua_thanh_toan' : 'da_thanh_toan',
                trang_thai_don: 'cho_xac_nhan',
                dia_chi_giao: orderData.dia_chi_giao,
                ma_don_giao_hang: 'SHIP' + Math.floor(100000 + Math.random() * 900000),
                ma_khuyen_mai: ma_khuyen_mai_id,
                ma_nhan_vien_xu_ly: null
            });

            // Move items from cart to order details, and decrease stock
            cartItems.forEach(item => {
                this.insert('CHI_TIET_DON_HANG', {
                    ma_don_hang: newOrder.ma_don_hang,
                    ma_thuoc: item.ma_thuoc,
                    so_luong: item.so_luong,
                    don_gia: item.don_gia,
                    toa_thuoc: null
                });

                // Decrease stock
                const updatedStock = item.thuoc.so_luong_ton - item.so_luong;
                this.update('THUOC', { ma_thuoc: item.ma_thuoc }, { so_luong_ton: updatedStock });
            });

            // Create Payment Log
            this.insert('THANH_TOAN', {
                ma_don_hang: newOrder.ma_don_hang,
                phuong_thuc: orderData.phuong_thuc_thanh_toan,
                so_tien: tong_tien_thanh_toan,
                ma_giao_dich: orderData.phuong_thuc_thanh_toan === 'cod' ? null : 'TXN' + Math.floor(1000000 + Math.random() * 9000000),
                thoi_gian: new Date().toISOString(),
                trang_thai: orderData.phuong_thuc_thanh_toan === 'cod' ? 'cho_xu_ly' : 'thanh_cong'
            });

            // Create Invoice (HOA_DON)
            const vatThue = 0.1; // 10%
            const tongTienTruocVat = tong_tien_thanh_toan / (1 + vatThue);
            const tongTienVat = tong_tien_thanh_toan - tongTienTruocVat;

            this.insert('HOA_DON', {
                ma_don_hang: newOrder.ma_don_hang,
                ngay_xuat: new Date().toISOString(),
                tong_tien_truoc_vat: parseFloat(tongTienTruocVat.toFixed(2)),
                thue_vat: vatThue,
                tong_tien_vat: parseFloat(tongTienVat.toFixed(2)),
                ma_so_thue: orderData.ma_so_thue || null,
                trang_thai: 'da_xuat'
            });

            // Clear Cart
            const cart = this.findOne('GIO_HANG', { ma_khach_hang: parseInt(customerId) });
            if (cart) {
                this.delete('CHI_TIET_GIO_HANG', { ma_gio_hang: cart.ma_gio_hang });
            }

            return newOrder;
        }

        // Get Orders of a customer with items detail joined
        getCustomerOrders(customerId) {
            const orders = this.get('DON_HANG', { ma_khach_hang: parseInt(customerId) });
            return orders.map(ord => {
                const details = this.get('CHI_TIET_DON_HANG', { ma_don_hang: ord.ma_don_hang });
                const invoice = this.findOne('HOA_DON', { ma_don_hang: ord.ma_don_hang });
                const payment = this.findOne('THANH_TOAN', { ma_don_hang: ord.ma_don_hang });

                const itemsJoined = details.map(item => {
                    const medicine = this.findOne('THUOC', { ma_thuoc: item.ma_thuoc });
                    return {
                        ...item,
                        thuoc: medicine
                    };
                });

                return {
                    ...ord,
                    chi_tiet: itemsJoined,
                    hoa_don: invoice,
                    thanh_toan: payment
                };
            });
        }

        // Add Product Review
        addReview(customerId, medicineId, stars, content) {
            return this.insert('DANH_GIA', {
                ma_khach_hang: parseInt(customerId),
                ma_thuoc: parseInt(medicineId),
                so_sao: parseInt(stars),
                noi_dung: content,
                ngay_danh_gia: new Date().toISOString(),
                trang_thai: 'hien'
            });
        }

        // Get Reviews for a specific Medicine
        getMedicineReviews(medicineId) {
            const reviews = this.get('DANH_GIA', { ma_thuoc: parseInt(medicineId), trang_thai: 'hien' });
            return reviews.map(rev => {
                const cust = this.findOne('KHACH_HANG', { ma_khach_hang: rev.ma_khach_hang });
                return {
                    ...rev,
                    khach_hang: cust ? { ho_ten: cust.ho_ten, email: cust.email } : null
                };
            });
        }

        // Messaging functions
        sendMessage(customerId, employeeId, content, senderType) {
            return this.insert('TIN_NHAN', {
                ma_khach_hang: parseInt(customerId),
                ma_nhan_vien: employeeId ? parseInt(employeeId) : null,
                noi_dung: content,
                nguoi_gui: senderType, // 'khach' or 'nhan_vien'
                thoi_gian: new Date().toISOString(),
                da_doc: false
            });
        }

        getChatHistory(customerId) {
            return this.get('TIN_NHAN', { ma_khach_hang: parseInt(customerId) })
                .sort((a, b) => new Date(a.thoi_gian) - new Date(b.thoi_gian));
        }

        // --- INTERNAL UTILITIES ---

        // Map Table names to Primary Key names
        _getPrimaryKeyField(tableName) {
            const mapping = {
                KHACH_HANG: 'ma_khach_hang',
                QUAN_LY: 'ma_quan_ly',
                NHAN_VIEN: 'ma_nhan_vien',
                OTP: 'ma_otp',
                DANH_MUC: 'ma_danh_muc',
                THUOC: 'ma_thuoc',
                GIO_HANG: 'ma_gio_hang',
                CHI_TIET_GIO_HANG: 'ma_chi_tiet',
                KHUYEN_MAI: 'ma_khuyen_mai',
                DON_HANG: 'ma_don_hang',
                CHI_TIET_DON_HANG: 'ma_chi_tiet',
                THANH_TOAN: 'ma_thanh_toan',
                HOA_DON: 'ma_hoa_don',
                DANH_GIA: 'ma_danh_gia',
                DANH_GIA_NHAN_VIEN: 'ma_danh_gia_nv',
                TIN_NHAN: 'ma_tin_nhan',
                PHAN_CONG: 'ma_phan_cong',
                CHAM_CONG: 'ma_cham_cong',
                BANG_LUONG: 'ma_bang_luong'
            };
            return mapping[tableName] || 'id';
        }

        // Sync helper to keep backward compatibility with existing localStorage login system
        _syncKhachHangToUsers(khachHangs) {
            const mappedUsers = khachHangs.map(kh => ({
                fullname: kh.ho_ten,
                email: kh.email,
                password: kh.mat_khau,
                provider: kh.google_id ? 'google' : kh.facebook_id ? 'facebook' : 'email',
                avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(kh.ho_ten)}`
            }));
            localStorage.setItem('medicare_users', JSON.stringify(mappedUsers));
        }
    }

    // Export module
    global.PharmacyDB = new PharmacyDB();

})(typeof window !== 'undefined' ? window : this);

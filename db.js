(function (global) {
    'use strict';

    const DB_NAME = 'QuanLyNhaThuoc';

    // ============================================================
    // SEED DATA - DỮ LIỆU MẪU CHO TOÀN BỘ HỆ THỐNG
    // ============================================================
    const SEED_DATA = {
        // ===== KHÁCH HÀNG =====
        KHACH_HANG: [
            { ma_khach_hang: 1, ho_ten: "Nguyễn Văn A", email: "customer@test.com", mat_khau: "123456", so_dien_thoai: "0901234567", dia_chi: "123 Nguyễn Huệ, Quận 1, TP.HCM", google_id: null, facebook_id: null, ngay_tao: "2026-06-01T08:00:00Z", trang_thai: "active" },
            { ma_khach_hang: 2, ho_ten: "Trần Thị B", email: "tranb@email.com", mat_khau: "123456", so_dien_thoai: "0912345678", dia_chi: "456 Lê Lợi, Quận 1, TP.HCM", google_id: null, facebook_id: null, ngay_tao: "2026-06-05T09:00:00Z", trang_thai: "active" },
            { ma_khach_hang: 3, ho_ten: "Phạm Văn C", email: "phamc@email.com", mat_khau: "123456", so_dien_thoai: "0923456789", dia_chi: "789 Nguyễn Trãi, Quận 5, TP.HCM", google_id: null, facebook_id: null, ngay_tao: "2026-06-10T10:00:00Z", trang_thai: "active" },
            { ma_khach_hang: 4, ho_ten: "Lê Thị D", email: "led@email.com", mat_khau: "123456", so_dien_thoai: "0934567890", dia_chi: "321 Trần Hưng Đạo, Quận 1, TP.HCM", google_id: null, facebook_id: null, ngay_tao: "2026-06-15T11:00:00Z", trang_thai: "active" },
            { ma_khach_hang: 5, ho_ten: "Hoàng Văn E", email: "hoange@email.com", mat_khau: "123456", so_dien_thoai: "0945678901", dia_chi: "654 Phạm Ngũ Lão, Quận 3, TP.HCM", google_id: null, facebook_id: null, ngay_tao: "2026-06-20T12:00:00Z", trang_thai: "banned" }
        ],

        // ===== QUẢN LÝ =====
        QUAN_LY: [
            { ma_quan_ly: 1, ho_ten: "Trần Thị Admin", email: "admin@medicare.vn", mat_khau: "admin123", so_dien_thoai: "0912345678", ngay_tao: "2026-05-01T00:00:00Z", lan_dang_nhap_cuoi: null, trang_thai: "active" }
        ],

        // ===== NHÂN VIÊN =====
        NHAN_VIEN: [
            { ma_nhan_vien: 1, ho_ten: "Lê Thị Dược Sĩ", email: "duocsi@medicare.vn", mat_khau: "duocsi123", so_dien_thoai: "0923456789", chuc_vu: "duoc_si", luong_co_ban: 12000000, hinh_thuc_nhan_luong: "ngan_hang", so_tai_khoan: "VCP123456", ngay_vao_lam: "2026-05-15", ngay_nghi_viec: null, ma_quan_ly: 1, trang_thai: "active" },
            { ma_nhan_vien: 2, ho_ten: "Phạm Văn Kho", email: "kho@medicare.vn", mat_khau: "kho123", so_dien_thoai: "0934567890", chuc_vu: "nhan_vien_kho", luong_co_ban: 8000000, hinh_thuc_nhan_luong: "tien_mat", so_tai_khoan: null, ngay_vao_lam: "2026-05-20", ngay_nghi_viec: null, ma_quan_ly: 1, trang_thai: "active" }
        ],

        // ===== OTP =====
        OTP: [],

        // ===== DANH MỤC =====
        DANH_MUC: [
            { ma_danh_muc: 1, ten_danh_muc: "Kê đơn theo toa thuốc", mo_ta: "Các loại thuốc cần có chỉ định của bác sĩ", ma_danh_muc_cha: null, trang_thai: "active" },
            { ma_danh_muc: 2, ten_danh_muc: "Vitamin & Thực phẩm chức năng", mo_ta: "Bổ sung sức khỏe và vi chất", ma_danh_muc_cha: null, trang_thai: "active" },
            { ma_danh_muc: 3, ten_danh_muc: "Bảo vệ cá nhân", mo_ta: "Khẩu trang, nước rửa tay, sát khuẩn...", ma_danh_muc_cha: null, trang_thai: "active" },
            { ma_danh_muc: 4, ten_danh_muc: "Thiết bị y tế", mo_ta: "Máy đo huyết áp, nhiệt kế...", ma_danh_muc_cha: null, trang_thai: "active" },
            { ma_danh_muc: 5, ten_danh_muc: "Dược mỹ phẩm", mo_ta: "Kem dưỡng da, sữa rửa mặt trị mụn...", ma_danh_muc_cha: null, trang_thai: "active" }
        ],

        // ===== THUỐC =====
        THUOC: [
            // Kê đơn theo toa thuốc (ma_danh_muc: 1)
            { ma_thuoc: 1, ten_thuoc: "Panadol Extra (Viên sủi)", thanh_phan: "Paracetamol 500mg, Caffeine 65mg", cong_dung: "Giảm đau hạ sốt nhanh chóng", lieu_dung: "Sủi 1 viên trong nước mỗi 4-6 giờ", chong_chi_dinh: "Mẫn cảm với thành phần thuốc, suy gan nặng", trieu_chung: "Đau đầu, sốt, đau răng", gia: 45000, so_luong_ton: 150, han_su_dung: "2028-12-31", ma_danh_muc: 1, hinh_anh: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 2, ten_thuoc: "Efferalgan 500mg", thanh_phan: "Paracetamol 500mg", cong_dung: "Hạ sốt, giảm đau vừa và nhẹ", lieu_dung: "Hòa tan 1 viên vào nước, ngày uống tối đa 4 lần", chong_chi_dinh: "Bệnh gan nặng", trieu_chung: "Sốt cao, đau mỏi cơ", gia: 42000, so_luong_ton: 200, han_su_dung: "2028-10-15", ma_danh_muc: 1, hinh_anh: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 3, ten_thuoc: "Amoxicillin 500mg", thanh_phan: "Amoxicillin 500mg", cong_dung: "Kháng sinh điều trị nhiễm khuẩn đường hô hấp, tiêu hóa", lieu_dung: "Uống 1 viên mỗi 8 giờ", chong_chi_dinh: "Dị ứng Penicillin", trieu_chung: "Nhiễm khuẩn, viêm họng, viêm phế quản", gia: 65000, so_luong_ton: 100, han_su_dung: "2028-08-30", ma_danh_muc: 1, hinh_anh: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop", can_toa_thuoc: true, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 4, ten_thuoc: "Omeprazole 20mg", thanh_phan: "Omeprazole 20mg", cong_dung: "Điều trị trào ngược dạ dày, loét dạ dày tá tràng", lieu_dung: "Uống 1 viên mỗi ngày trước bữa ăn", chong_chi_dinh: "Mẫn cảm với thành phần thuốc", trieu_chung: "Ợ nóng, đau dạ dày, trào ngược", gia: 55000, so_luong_ton: 120, han_su_dung: "2028-07-15", ma_danh_muc: 1, hinh_anh: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },

            // Vitamin & Thực phẩm chức năng (ma_danh_muc: 2)
            { ma_thuoc: 5, ten_thuoc: "Vitamin C 500mg Plus", thanh_phan: "Vitamin C 500mg, Zinc", cong_dung: "Tăng cường đề kháng, chống oxy hóa", lieu_dung: "Uống 1 viên sau ăn sáng", chong_chi_dinh: "Sỏi thận", trieu_chung: "Mệt mỏi, đề kháng kém", gia: 120000, so_luong_ton: 80, han_su_dung: "2027-06-30", ma_danh_muc: 2, hinh_anh: "https://images.unsplash.com/photo-1550572017-edb1e94119cd?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 6, ten_thuoc: "Fish Oil Omega-3 1000mg", thanh_phan: "Dầu cá tự nhiên 1000mg (EPA/DHA)", cong_dung: "Tốt cho tim mạch, mắt và não bộ", lieu_dung: "Uống 1-2 viên mỗi ngày cùng bữa ăn", chong_chi_dinh: "Rối loạn đông máu", trieu_chung: "Khô mắt, mỏi mắt, tim mạch yếu", gia: 285000, so_luong_ton: 60, han_su_dung: "2027-09-20", ma_danh_muc: 2, hinh_anh: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 7, ten_thuoc: "Calcium D3 Nycomed", thanh_phan: "Calcium carbonate 1250mg, Vitamin D3 200 IU", cong_dung: "Bổ sung Canxi cho xương chắc khỏe", lieu_dung: "Nhai 1 viên sáng, 1 viên tối", chong_chi_dinh: "Tăng canxi huyết, sỏi thận nặng", trieu_chung: "Loãng xương, thiếu canxi", gia: 195000, so_luong_ton: 90, han_su_dung: "2028-05-18", ma_danh_muc: 2, hinh_anh: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 8, ten_thuoc: "Multivitamin Centrum Adults", thanh_phan: "23 loại vitamin và khoáng chất", cong_dung: "Bổ sung toàn diện vitamin và khoáng chất cho cơ thể", lieu_dung: "Uống 1 viên mỗi ngày sau ăn", chong_chi_dinh: "Dị ứng với bất kỳ thành phần nào", trieu_chung: "Thiếu hụt vitamin, mệt mỏi, suy nhược", gia: 320000, so_luong_ton: 50, han_su_dung: "2028-03-01", ma_danh_muc: 2, hinh_anh: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 9, ten_thuoc: "Collagen Peptide 5000mg", thanh_phan: "Collagen thủy phân 5000mg, Vitamin C", cong_dung: "Hỗ trợ làm đẹp da, tóc và móng", lieu_dung: "Pha 1 gói với nước mỗi ngày", chong_chi_dinh: "Dị ứng với collagen", trieu_chung: "Da khô, nếp nhăn, tóc yếu", gia: 450000, so_luong_ton: 30, han_su_dung: "2027-12-15", ma_danh_muc: 2, hinh_anh: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },

            // Bảo vệ cá nhân (ma_danh_muc: 3)
            { ma_thuoc: 10, ten_thuoc: "Khẩu trang y tế 3M N95", thanh_phan: "Sợi polypropylene không dệt", cong_dung: "Bảo vệ khỏi bụi mịn, vi khuẩn và virus", lieu_dung: "Đeo 1 cái mỗi ngày, thay khi bẩn", chong_chi_dinh: "Khó thở nghiêm trọng", trieu_chung: "Bảo vệ sức khỏe hô hấp", gia: 120000, so_luong_ton: 200, han_su_dung: "2028-12-31", ma_danh_muc: 3, hinh_anh: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 11, ten_thuoc: "Nước rửa tay Lifebuoy 500ml", thanh_phan: "Alcohol 70%, Glycerin, Vitamin E", cong_dung: "Sát khuẩn tay nhanh chóng, diệt 99.9% vi khuẩn", lieu_dung: "Xoa đều lên tay và để khô tự nhiên", chong_chi_dinh: "Da tay bị tổn thương hở", trieu_chung: "Vệ sinh tay hàng ngày", gia: 55000, so_luong_ton: 150, han_su_dung: "2027-11-30", ma_danh_muc: 3, hinh_anh: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 12, ten_thuoc: "Găng tay y tế Latex không bột", thanh_phan: "Cao su tự nhiên", cong_dung: "Bảo vệ tay khi tiếp xúc với hóa chất, dịch bệnh", lieu_dung: "Đeo vừa vặn, thay sau mỗi lần sử dụng", chong_chi_dinh: "Dị ứng Latex", trieu_chung: "Bảo hộ lao động", gia: 85000, so_luong_ton: 100, han_su_dung: "2029-01-15", ma_danh_muc: 3, hinh_anh: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },

            // Thiết bị y tế (ma_danh_muc: 4)
            { ma_thuoc: 13, ten_thuoc: "Nhiệt kế điện tử Omron MC-246", thanh_phan: "Điện tử, pin", cong_dung: "Đo nhiệt độ cơ thể nhanh chóng và chính xác", lieu_dung: "Đặt vào miệng hoặc hậu môn trong 30-60 giây", chong_chi_dinh: "Trẻ sơ sinh dưới 3 tháng", trieu_chung: "Sốt, theo dõi thân nhiệt", gia: 250000, so_luong_ton: 40, han_su_dung: "2030-12-31", ma_danh_muc: 4, hinh_anh: "https://images.unsplash.com/photo-1631549916768-4f3e3e0e9c37?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 14, ten_thuoc: "Máy đo huyết áp cổ tay Omron", thanh_phan: "Điện tử, màn hình LCD", cong_dung: "Đo huyết áp và nhịp tim tại nhà", lieu_dung: "Quấn vào cổ tay, giữ ngang tim", chong_chi_dinh: "Rối loạn nhịp tim nặng", trieu_chung: "Theo dõi huyết áp hàng ngày", gia: 890000, so_luong_ton: 25, han_su_dung: "2030-12-31", ma_danh_muc: 4, hinh_anh: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },

            // Dược mỹ phẩm (ma_danh_muc: 5)
            { ma_thuoc: 15, ten_thuoc: "Kem dưỡng ẩm Cerave", thanh_phan: "Ceramides, Hyaluronic Acid", cong_dung: "Dưỡng ẩm, phục hồi hàng rào bảo vệ da", lieu_dung: "Thoa lên da sạch vào buổi sáng và tối", chong_chi_dinh: "Mẫn cảm với thành phần kem", trieu_chung: "Da khô, nứt nẻ, kích ứng", gia: 350000, so_luong_ton: 45, han_su_dung: "2028-01-01", ma_danh_muc: 5, hinh_anh: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 16, ten_thuoc: "Thuốc nhỏ mắt V.Rohto", thanh_phan: "Tetrahydrozoline HCl, Vitamin B6, Panthenol", cong_dung: "Giảm mỏi mắt, đỏ mắt, ngứa mắt", lieu_dung: "Nhỏ 2-3 giọt mỗi mắt, ngày 5-6 lần", chong_chi_dinh: "Glaucoma góc đóng", trieu_chung: "Mỏi mắt, mờ mắt do bụi bẩn", gia: 65000, so_luong_ton: 300, han_su_dung: "2027-11-30", ma_danh_muc: 5, hinh_anh: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 17, ten_thuoc: "La Roche-Posay Effaclar Duo+", thanh_phan: "Niacinamide, Procerad, Piroctone Olamine", cong_dung: "Điều trị mụn trứng cá, giảm thâm và tái phát", lieu_dung: "Thoa lên vùng da bị mụn mỗi ngày", chong_chi_dinh: "Da bị tổn thương nặng", trieu_chung: "Mụn trứng cá, da dầu", gia: 420000, so_luong_ton: 30, han_su_dung: "2027-10-20", ma_danh_muc: 5, hinh_anh: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 18, ten_thuoc: "Bioderma Sensibio H2O", thanh_phan: "Micellar water, Glycerin, Cucumber extract", cong_dung: "Làm sạch da mặt và tẩy trang dịu nhẹ", lieu_dung: "Thấm vào bông tẩy trang và lau sạch da", chong_chi_dinh: "Không dùng cho mắt nếu có vết thương", trieu_chung: "Da nhạy cảm, tẩy trang hàng ngày", gia: 350000, so_luong_ton: 40, han_su_dung: "2027-09-15", ma_danh_muc: 5, hinh_anh: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 19, ten_thuoc: "Vichy Mineral 89 Booster", thanh_phan: "Nước khoáng Vichy 89%, Hyaluronic Acid", cong_dung: "Cấp ẩm sâu, tăng cường hàng rào bảo vệ da", lieu_dung: "Thoa lên da sạch trước kem dưỡng", chong_chi_dinh: "Không có", trieu_chung: "Da khô, mất nước", gia: 680000, so_luong_ton: 20, han_su_dung: "2027-08-01", ma_danh_muc: 5, hinh_anh: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" },
            { ma_thuoc: 20, ten_thuoc: "Eucerin pH5 Skin Protection", thanh_phan: "pH5, Ceramides, Glycerin", cong_dung: "Dưỡng ẩm và bảo vệ da khô nhạy cảm", lieu_dung: "Thoa lên da sau khi tắm", chong_chi_dinh: "Dị ứng với thành phần kem", trieu_chung: "Da khô, ngứa, bong tróc", gia: 290000, so_luong_ton: 35, han_su_dung: "2028-02-15", ma_danh_muc: 5, hinh_anh: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop", can_toa_thuoc: false, nguoi_tao: 1, trang_thai: "active" }
        ],

        // ===== GIỎ HÀNG =====
        GIO_HANG: [],
        CHI_TIET_GIO_HANG: [],

        // ===== KHUYẾN MÃI =====
        KHUYEN_MAI: [
            { ma_khuyen_mai: 1, ma_code: "MEDICARE10", phan_tram_giam: 10, so_tien_giam: null, giam_toi_da: 50000, ngay_bat_dau: "2026-01-01", ngay_ket_thuc: "2026-12-31", so_lan_su_dung: 12, gioi_han_su_dung: 100, trang_thai: "active" },
            { ma_khuyen_mai: 2, ma_code: "HEAL50K", phan_tram_giam: null, so_tien_giam: 50000, giam_toi_da: 50000, ngay_bat_dau: "2026-06-01", ngay_ket_thuc: "2026-12-31", so_lan_su_dung: 5, gioi_han_su_dung: 50, trang_thai: "active" },
            { ma_khuyen_mai: 3, ma_code: "SUMMER20", phan_tram_giam: 20, so_tien_giam: null, giam_toi_da: 100000, ngay_bat_dau: "2026-07-01", ngay_ket_thuc: "2026-08-31", so_lan_su_dung: 0, gioi_han_su_dung: 200, trang_thai: "active" },
            { ma_khuyen_mai: 4, ma_code: "FREESHIP", phan_tram_giam: 10, so_tien_giam: null, giam_toi_da: 30000, ngay_bat_dau: "2026-06-15", ngay_ket_thuc: "2026-07-15", so_lan_su_dung: 0, gioi_han_su_dung: 50, trang_thai: "active" }
        ],

        // ===== ĐƠN HÀNG =====
        DON_HANG: [
            { ma_don_hang: 1, ma_khach_hang: 1, ngay_dat: "2026-06-01T08:30:00Z", tong_tien_hang: 45000, phi_van_chuyen: 25000, doi_tac_van_chuyen: "FedEx Pharma", so_tien_giam: 0, tong_tien_thanh_toan: 70000, phuong_thuc_thanh_toan: "cod", trang_thai_thanh_toan: "chua_thanh_toan", trang_thai_don: "da_giao", dia_chi_giao: "123 Nguyễn Huệ, Quận 1, TP.HCM", ma_don_giao_hang: "SHIP100001", ma_khuyen_mai: null, ma_nhan_vien_xu_ly: null },
            { ma_don_hang: 2, ma_khach_hang: 2, ngay_dat: "2026-06-03T09:00:00Z", tong_tien_hang: 120000, phi_van_chuyen: 25000, doi_tac_van_chuyen: "DHL Medical", so_tien_giam: 0, tong_tien_thanh_toan: 145000, phuong_thuc_thanh_toan: "cod", trang_thai_thanh_toan: "chua_thanh_toan", trang_thai_don: "dang_giao", dia_chi_giao: "456 Lê Lợi, Quận 1, TP.HCM", ma_don_giao_hang: "SHIP100002", ma_khuyen_mai: null, ma_nhan_vien_xu_ly: null },
            { ma_don_hang: 3, ma_khach_hang: 1, ngay_dat: "2026-06-05T10:00:00Z", tong_tien_hang: 285000, phi_van_chuyen: 0, doi_tac_van_chuyen: "FedEx Pharma", so_tien_giam: 28500, tong_tien_thanh_toan: 256500, phuong_thuc_thanh_toan: "cod", trang_thai_thanh_toan: "chua_thanh_toan", trang_thai_don: "cho_xac_nhan", dia_chi_giao: "123 Nguyễn Huệ, Quận 1, TP.HCM", ma_don_giao_hang: "SHIP100003", ma_khuyen_mai: 1, ma_nhan_vien_xu_ly: null },
            { ma_don_hang: 4, ma_khach_hang: 3, ngay_dat: "2026-06-06T11:00:00Z", tong_tien_hang: 350000, phi_van_chuyen: 25000, doi_tac_van_chuyen: "VNPost Medical", so_tien_giam: 0, tong_tien_thanh_toan: 375000, phuong_thuc_thanh_toan: "cod", trang_thai_thanh_toan: "da_thanh_toan", trang_thai_don: "da_giao", dia_chi_giao: "789 Nguyễn Trãi, Quận 5, TP.HCM", ma_don_giao_hang: "SHIP100004", ma_khuyen_mai: null, ma_nhan_vien_xu_ly: 1 },
            { ma_don_hang: 5, ma_khach_hang: 4, ngay_dat: "2026-06-08T12:00:00Z", tong_tien_hang: 680000, phi_van_chuyen: 0, doi_tac_van_chuyen: "DHL Medical", so_tien_giam: 50000, tong_tien_thanh_toan: 630000, phuong_thuc_thanh_toan: "cod", trang_thai_thanh_toan: "chua_thanh_toan", trang_thai_don: "da_huy", dia_chi_giao: "321 Trần Hưng Đạo, Quận 1, TP.HCM", ma_don_giao_hang: "SHIP100005", ma_khuyen_mai: 2, ma_nhan_vien_xu_ly: null },
            { ma_don_hang: 6, ma_khach_hang: 2, ngay_dat: "2026-06-10T14:00:00Z", tong_tien_hang: 450000, phi_van_chuyen: 25000, doi_tac_van_chuyen: "FedEx Pharma", so_tien_giam: 0, tong_tien_thanh_toan: 475000, phuong_thuc_thanh_toan: "cod", trang_thai_thanh_toan: "chua_thanh_toan", trang_thai_don: "cho_xac_nhan", dia_chi_giao: "456 Lê Lợi, Quận 1, TP.HCM", ma_don_giao_hang: "SHIP100006", ma_khuyen_mai: null, ma_nhan_vien_xu_ly: null },
            { ma_don_hang: 7, ma_khach_hang: 1, ngay_dat: "2026-06-12T15:00:00Z", tong_tien_hang: 890000, phi_van_chuyen: 0, doi_tac_van_chuyen: "VNPost Medical", so_tien_giam: 89000, tong_tien_thanh_toan: 801000, phuong_thuc_thanh_toan: "cod", trang_thai_thanh_toan: "da_thanh_toan", trang_thai_don: "da_giao", dia_chi_giao: "123 Nguyễn Huệ, Quận 1, TP.HCM", ma_don_giao_hang: "SHIP100007", ma_khuyen_mai: 3, ma_nhan_vien_xu_ly: 1 }
        ],

        // ===== CHI TIẾT ĐƠN HÀNG =====
        CHI_TIET_DON_HANG: [
            { ma_chi_tiet: 1, ma_don_hang: 1, ma_thuoc: 1, so_luong: 1, don_gia: 45000, toa_thuoc: null },
            { ma_chi_tiet: 2, ma_don_hang: 2, ma_thuoc: 5, so_luong: 1, don_gia: 120000, toa_thuoc: null },
            { ma_chi_tiet: 3, ma_don_hang: 3, ma_thuoc: 6, so_luong: 1, don_gia: 285000, toa_thuoc: null },
            { ma_chi_tiet: 4, ma_don_hang: 4, ma_thuoc: 15, so_luong: 1, don_gia: 350000, toa_thuoc: null },
            { ma_chi_tiet: 5, ma_don_hang: 5, ma_thuoc: 16, so_luong: 2, don_gia: 65000, toa_thuoc: null },
            { ma_chi_tiet: 6, ma_don_hang: 5, ma_thuoc: 17, so_luong: 1, don_gia: 420000, toa_thuoc: null },
            { ma_chi_tiet: 7, ma_don_hang: 5, ma_thuoc: 18, so_luong: 1, don_gia: 350000, toa_thuoc: null },
            { ma_chi_tiet: 8, ma_don_hang: 6, ma_thuoc: 10, so_luong: 2, don_gia: 120000, toa_thuoc: null },
            { ma_chi_tiet: 9, ma_don_hang: 6, ma_thuoc: 11, so_luong: 1, don_gia: 55000, toa_thuoc: null },
            { ma_chi_tiet: 10, ma_don_hang: 6, ma_thuoc: 13, so_luong: 1, don_gia: 250000, toa_thuoc: null },
            { ma_chi_tiet: 11, ma_don_hang: 7, ma_thuoc: 14, so_luong: 1, don_gia: 890000, toa_thuoc: null }
        ],

        // ===== THANH TOÁN =====
        THANH_TOAN: [
            { ma_thanh_toan: 1, ma_don_hang: 1, phuong_thuc: "cod", so_tien: 70000, ma_giao_dich: null, thoi_gian: "2026-06-01T08:35:00Z", trang_thai: "cho_xu_ly" },
            { ma_thanh_toan: 2, ma_don_hang: 2, phuong_thuc: "cod", so_tien: 145000, ma_giao_dich: null, thoi_gian: "2026-06-03T09:05:00Z", trang_thai: "cho_xu_ly" },
            { ma_thanh_toan: 3, ma_don_hang: 3, phuong_thuc: "cod", so_tien: 256500, ma_giao_dich: null, thoi_gian: "2026-06-05T10:05:00Z", trang_thai: "cho_xu_ly" },
            { ma_thanh_toan: 4, ma_don_hang: 4, phuong_thuc: "cod", so_tien: 375000, ma_giao_dich: null, thoi_gian: "2026-06-06T11:05:00Z", trang_thai: "thanh_cong" },
            { ma_thanh_toan: 5, ma_don_hang: 5, phuong_thuc: "cod", so_tien: 630000, ma_giao_dich: null, thoi_gian: "2026-06-08T12:05:00Z", trang_thai: "da_huy" },
            { ma_thanh_toan: 6, ma_don_hang: 6, phuong_thuc: "cod", so_tien: 475000, ma_giao_dich: null, thoi_gian: "2026-06-10T14:05:00Z", trang_thai: "cho_xu_ly" },
            { ma_thanh_toan: 7, ma_don_hang: 7, phuong_thuc: "cod", so_tien: 801000, ma_giao_dich: null, thoi_gian: "2026-06-12T15:05:00Z", trang_thai: "thanh_cong" }
        ],

        // ===== HÓA ĐƠN =====
        HOA_DON: [
            { ma_hoa_don: 1, ma_don_hang: 1, ngay_xuat: "2026-06-01T08:40:00Z", tong_tien_truoc_vat: 63636, thue_vat: 0.1, tong_tien_vat: 6364, ma_so_thue: null, trang_thai: "da_xuat" },
            { ma_hoa_don: 2, ma_don_hang: 2, ngay_xuat: "2026-06-03T09:10:00Z", tong_tien_truoc_vat: 131818, thue_vat: 0.1, tong_tien_vat: 13182, ma_so_thue: null, trang_thai: "da_xuat" },
            { ma_hoa_don: 3, ma_don_hang: 3, ngay_xuat: "2026-06-05T10:10:00Z", tong_tien_truoc_vat: 233182, thue_vat: 0.1, tong_tien_vat: 23318, ma_so_thue: null, trang_thai: "da_xuat" },
            { ma_hoa_don: 4, ma_don_hang: 4, ngay_xuat: "2026-06-06T11:10:00Z", tong_tien_truoc_vat: 340909, thue_vat: 0.1, tong_tien_vat: 34091, ma_so_thue: null, trang_thai: "da_xuat" }
        ],

        // ===== ĐÁNH GIÁ =====
        DANH_GIA: [
            { ma_danh_gia: 1, ma_khach_hang: 1, ma_thuoc: 1, so_sao: 5, noi_dung: "Thuốc sủi nhanh, dễ uống, hạ sốt rất tốt!", ngay_danh_gia: "2026-06-15T14:30:00Z", trang_thai: "hien" },
            { ma_danh_gia: 2, ma_khach_hang: 2, ma_thuoc: 5, so_sao: 4, noi_dung: "Vitamin C chất lượng tốt, giá hợp lý", ngay_danh_gia: "2026-06-16T10:00:00Z", trang_thai: "hien" },
            { ma_danh_gia: 3, ma_khach_hang: 3, ma_thuoc: 15, so_sao: 5, noi_dung: "Kem dưỡng ẩm Cerave rất tốt, da hết khô ngay sau vài ngày", ngay_danh_gia: "2026-06-17T08:30:00Z", trang_thai: "hien" },
            { ma_danh_gia: 4, ma_khach_hang: 4, ma_thuoc: 6, so_sao: 3, noi_dung: "Fish Oil hiệu quả nhưng mùi hơi tanh", ngay_danh_gia: "2026-06-18T09:00:00Z", trang_thai: "hien" }
        ],

        // ===== ĐÁNH GIÁ NHÂN VIÊN =====
        DANH_GIA_NHAN_VIEN: [],

        // ===== TIN NHẮN =====
        TIN_NHAN: [
            { ma_tin_nhan: 1, ma_khach_hang: 1, ma_nhan_vien: null, noi_dung: "Tôi muốn hỏi về thuốc Panadol Extra", nguoi_gui: "khach", thoi_gian: "2026-06-01T08:00:00Z", da_doc: false },
            { ma_tin_nhan: 2, ma_khach_hang: 1, ma_nhan_vien: 1, noi_dung: "Chào bạn! Panadol Extra là thuốc giảm đau hạ sốt, bạn có thể dùng khi bị đau đầu hoặc sốt.", nguoi_gui: "nhan_vien", thoi_gian: "2026-06-01T08:05:00Z", da_doc: true },
            { ma_tin_nhan: 3, ma_khach_hang: 2, ma_nhan_vien: null, noi_dung: "Cho tôi hỏi giá của Vitamin C 500mg Plus", nguoi_gui: "khach", thoi_gian: "2026-06-03T09:00:00Z", da_doc: false }
        ],

        // ===== PHÂN CÔNG =====
        PHAN_CONG: [],

        // ===== CHẤM CÔNG =====
        CHAM_CONG: [],

        // ===== BẢNG LƯƠNG =====
        BANG_LUONG: []
    };

    // ============================================================
    // CLASS PHARMACY DB
    // ============================================================
    class PharmacyDB {
        constructor() {
            this._cache = null;
            this._saveTimeout = null;
            this.init();

            if (typeof window !== 'undefined') {
                window.addEventListener('beforeunload', () => {
                    if (this._cache) {
                        localStorage.setItem(DB_NAME, JSON.stringify(this._cache));
                    }
                });
            }
        }

        // ----- INIT -----
        init() {
            let data = localStorage.getItem(DB_NAME);
            if (!data) {
                this._cache = SEED_DATA;
                localStorage.setItem(DB_NAME, JSON.stringify(this._cache));

                // Sync users for login
                let existingUsers = localStorage.getItem('medicare_users');
                if (!existingUsers) {
                    const mappedUsers = SEED_DATA.KHACH_HANG.map(kh => ({
                        fullname: kh.ho_ten,
                        email: kh.email,
                        password: kh.mat_khau,
                        provider: kh.google_id ? 'google' : kh.facebook_id ? 'facebook' : 'email',
                        avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(kh.ho_ten)}`
                    }));
                    localStorage.setItem('medicare_users', JSON.stringify(mappedUsers));
                }
            } else {
                this._cache = JSON.parse(data);
            }
        }

        // ----- READ / WRITE -----
        _read() {
            if (!this._cache) this.init();
            return this._cache;
        }

        _write(data) {
            this._cache = data;
            if (this._saveTimeout) {
                clearTimeout(this._saveTimeout);
            }
            this._saveTimeout = setTimeout(() => {
                localStorage.setItem(DB_NAME, JSON.stringify(this._cache));
            }, 100);
        }

        // ============================================================
        // GENERIC CRUD
        // ============================================================

        get(tableName, query = null) {
            const db = this._read();
            const table = db[tableName] || [];
            if (!query) return table;
            return table.filter(row => {
                return Object.keys(query).every(key => row[key] === query[key]);
            });
        }

        findOne(tableName, query) {
            const results = this.get(tableName, query);
            return results.length > 0 ? results[0] : null;
        }

        insert(tableName, rowData) {
            const db = this._read();
            if (!db[tableName]) db[tableName] = [];

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

            if (tableName === 'KHACH_HANG') {
                this._syncKhachHangToUsers(db.KHACH_HANG);
            }

            return newRow;
        }

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

        // ============================================================
        // BUSINESS LOGIC
        // ============================================================

        getMedicinesByCategory(categoryId) {
            return this.get('THUOC', { ma_danh_muc: parseInt(categoryId), trang_thai: 'active' });
        }

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

        // ----- CART -----
        getCart(customerId) {
            let cart = this.findOne('GIO_HANG', { ma_khach_hang: parseInt(customerId) });
            if (!cart) {
                cart = this.insert('GIO_HANG', { ma_khach_hang: parseInt(customerId) });
            }
            const details = this.get('CHI_TIET_GIO_HANG', { ma_gio_hang: cart.ma_gio_hang });

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

        // ----- ORDER -----
        createOrder(customerId, orderData) {
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
                    this.update('KHUYEN_MAI', { ma_khuyen_mai: promo.ma_khuyen_mai }, {
                        so_lan_su_dung: promo.so_lan_su_dung + 1
                    });
                }
            }

            const tong_tien_thanh_toan = tong_tien_hang + phi_van_chuyen - so_tien_giam;

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

            cartItems.forEach(item => {
                this.insert('CHI_TIET_DON_HANG', {
                    ma_don_hang: newOrder.ma_don_hang,
                    ma_thuoc: item.ma_thuoc,
                    so_luong: item.so_luong,
                    don_gia: item.don_gia,
                    toa_thuoc: null
                });

                const updatedStock = item.thuoc.so_luong_ton - item.so_luong;
                this.update('THUOC', { ma_thuoc: item.ma_thuoc }, { so_luong_ton: updatedStock });
            });

            this.insert('THANH_TOAN', {
                ma_don_hang: newOrder.ma_don_hang,
                phuong_thuc: orderData.phuong_thuc_thanh_toan,
                so_tien: tong_tien_thanh_toan,
                ma_giao_dich: orderData.phuong_thuc_thanh_toan === 'cod' ? null : 'TXN' + Math.floor(1000000 + Math.random() * 9000000),
                thoi_gian: new Date().toISOString(),
                trang_thai: orderData.phuong_thuc_thanh_toan === 'cod' ? 'cho_xu_ly' : 'thanh_cong'
            });

            const vatThue = 0.1;
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

            const cart = this.findOne('GIO_HANG', { ma_khach_hang: parseInt(customerId) });
            if (cart) {
                this.delete('CHI_TIET_GIO_HANG', { ma_gio_hang: cart.ma_gio_hang });
            }

            return newOrder;
        }

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

        // ----- REVIEW -----
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

        // ----- MESSAGING -----
        sendMessage(customerId, employeeId, content, senderType) {
            return this.insert('TIN_NHAN', {
                ma_khach_hang: parseInt(customerId),
                ma_nhan_vien: employeeId ? parseInt(employeeId) : null,
                noi_dung: content,
                nguoi_gui: senderType,
                thoi_gian: new Date().toISOString(),
                da_doc: false
            });
        }

        getChatHistory(customerId) {
            return this.get('TIN_NHAN', { ma_khach_hang: parseInt(customerId) })
                .sort((a, b) => new Date(a.thoi_gian) - new Date(b.thoi_gian));
        }

        // ============================================================
        // UTILITIES
        // ============================================================

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

        // ============================================================
        // RESET DATABASE
        // ============================================================
        reset() {
            localStorage.removeItem(DB_NAME);
            this._cache = null;
            this.init();
            console.log('✅ Database has been reset to seed data!');
            return true;
        }

        // ============================================================
        // GET ALL DATA (for export/backup)
        // ============================================================
        exportAll() {
            return this._read();
        }

        // ============================================================
        // IMPORT DATA (for restore)
        // ============================================================
        importAll(data) {
            if (typeof data === 'string') {
                try {
                    data = JSON.parse(data);
                } catch (e) {
                    throw new Error('Invalid JSON data');
                }
            }
            this._write(data);
            return true;
        }
    }

    global.PharmacyDB = new PharmacyDB();

})(typeof window !== 'undefined' ? window : this);
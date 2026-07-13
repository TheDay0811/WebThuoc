// ==========================================
// ADMIN.JS - Kết nối với db.js
// ==========================================

(function () {
    'use strict';

    const db = window.PharmacyDB;
    if (!db) {
        console.error('❌ PharmacyDB not loaded!');
        return;
    }

    // ===== BIẾN TRẠNG THÁI =====
    let currentTab = "ALL";
    let searchKeyword = "";

    // ===== LẤY DỮ LIỆU TỪ DB =====
    function getOrders() {
        const orders = db.get('DON_HANG') || [];
        const customers = db.get('KHACH_HANG') || [];
        const details = db.get('CHI_TIET_DON_HANG') || [];

        return orders.map(order => {
            const customer = customers.find(c => c.ma_khach_hang === order.ma_khach_hang);
            const orderDetails = details.filter(d => d.ma_don_hang === order.ma_don_hang);

            const totalAmount = order.tong_tien_thanh_toan ||
                orderDetails.reduce((sum, d) => sum + (d.don_gia * d.so_luong), 0);

            let paymentStatus = 'UNPAID';
            if (order.trang_thai_thanh_toan === 'da_thanh_toan') paymentStatus = 'PAID';
            else if (order.trang_thai_thanh_toan === 'chua_thanh_toan') paymentStatus = 'UNPAID';
            else if (order.phuong_thuc_thanh_toan === 'cod') paymentStatus = 'PENDING';

            const statusMap = {
                'cho_xac_nhan': 'PENDING',
                'da_xac_nhan': 'PROCESSING',
                'dang_giao': 'SHIPPING',
                'da_giao': 'COMPLETED',
                'da_huy': 'CANCELLED'
            };
            const orderStatus = statusMap[order.trang_thai_don] || 'PENDING';

            const customerName = customer ? customer.ho_ten : 'Guest Customer';
            const initial = customerName.split(' ').pop()?.[0] || '?';
            const email = customer ? customer.email : 'guest@medicare.vn';

            return {
                id: `#ORD-${order.ma_don_hang || '0000'}`,
                customer: {
                    name: customerName,
                    email: email,
                    initial: initial,
                    avatarBg: ''
                },
                amount: totalAmount,
                paymentStatus: paymentStatus,
                orderStatus: orderStatus,
                partner: order.doi_tac_van_chuyen || 'N/A',
                date: order.ngay_dat ? new Date(order.ngay_dat).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                }) : 'N/A',
                _ma_don_hang: order.ma_don_hang
            };
        });
    }

    function addOrderToDB(orderData) {
        const newOrder = db.insert('DON_HANG', {
            ma_khach_hang: 1,
            ngay_dat: new Date().toISOString(),
            tong_tien_hang: orderData.amount,
            phi_van_chuyen: 0,
            doi_tac_van_chuyen: orderData.partner || 'noi_bo',
            so_tien_giam: 0,
            tong_tien_thanh_toan: orderData.amount,
            phuong_thuc_thanh_toan: 'cod',
            trang_thai_thanh_toan: 'chua_thanh_toan',
            trang_thai_don: 'cho_xac_nhan',
            dia_chi_giao: 'Default Address',
            ma_don_giao_hang: 'SHIP' + Math.floor(100000 + Math.random() * 900000),
            ma_khuyen_mai: null,
            ma_nhan_vien_xu_ly: null
        });

        db.insert('CHI_TIET_DON_HANG', {
            ma_don_hang: newOrder.ma_don_hang,
            ma_thuoc: 1,
            so_luong: 1,
            don_gia: orderData.amount,
            toa_thuoc: null
        });

        return newOrder;
    }

    function deleteOrderFromDB(orderId) {
        db.update('DON_HANG', { ma_don_hang: parseInt(orderId) }, {
            trang_thai_don: 'da_huy',
            trang_thai_thanh_toan: 'da_huy'
        });
    }

    function getStatusClass(status) {
        switch (status) {
            case 'PAID':
            case 'COMPLETED': return 'bg-green';
            case 'UNPAID':
            case 'CANCELLED': return 'bg-red';
            case 'SHIPPING': return 'bg-blue';
            case 'PENDING':
            case 'PROCESSING': return 'bg-orange';
            default: return '';
        }
    }

    function formatCurrency(amount) {
        return '$' + (amount || 0).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    function renderTable() {
        const tableBody = document.getElementById("order-list");
        if (!tableBody) return;

        tableBody.innerHTML = "";
        let orders = getOrders();

        if (currentTab !== "ALL") {
            orders = orders.filter(order => order.orderStatus === currentTab);
        }

        if (searchKeyword.trim()) {
            const keyword = searchKeyword.toLowerCase().trim();
            orders = orders.filter(order => {
                const textToSearch = `${order.id} ${order.customer.name} ${order.customer.email} ${order.partner}`.toLowerCase();
                return textToSearch.includes(keyword);
            });
        }

        if (orders.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="8" style="text-align: center; padding: 40px; color: #888;">
                        <i class="fas fa-inbox" style="font-size: 24px; display: block; margin-bottom: 8px;"></i>
                        No orders found
                    </td>
                </tr>
            `;
            return;
        }

        orders.forEach(order => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td class="order-id">${order.id}</td>
                <td>
                    <div class="customer-info">
                        <span class="avatar-sm ${order.customer.avatarBg}">${order.customer.initial}</span>
                        <div>
                            <strong>${order.customer.name}</strong>
                            <span>${order.customer.email}</span>
                        </div>
                    </div>
                </td>
                <td>${formatCurrency(order.amount)}</td>
                <td><span class="status-badge ${getStatusClass(order.paymentStatus)}">● ${order.paymentStatus}</span></td>
                <td><span class="status-badge ${getStatusClass(order.orderStatus)}">${order.orderStatus}</span></td>
                <td>${order.partner}</td>
                <td>${order.date}</td>
                <td>
                    <i class="far fa-eye" style="cursor:pointer; margin-right:8px; color: #0d6efd;"></i>
                    <i class="fas fa-trash-alt delete-btn" data-id="${order._ma_don_hang}" style="cursor:pointer; color:#e74c3c;"></i>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    function updateStatistics() {
        const orders = getOrders();

        document.getElementById("badge-all").innerText = orders.length;
        document.getElementById("badge-pending").innerText = orders.filter(o => o.orderStatus === 'PENDING').length;
        document.getElementById("badge-shipping").innerText = orders.filter(o => o.orderStatus === 'SHIPPING').length;
        document.getElementById("badge-completed").innerText = orders.filter(o => o.orderStatus === 'COMPLETED').length;
        document.getElementById("badge-cancelled").innerText = orders.filter(o => o.orderStatus === 'CANCELLED').length;

        const dailyRevenue = orders
            .filter(o => o.orderStatus === 'COMPLETED' || o.orderStatus === 'SHIPPING')
            .reduce((sum, o) => sum + o.amount, 0);
        document.getElementById("stat-revenue").innerText = formatCurrency(dailyRevenue);

        const activeShipments = orders.filter(o => o.orderStatus === 'SHIPPING').length;
        document.getElementById("stat-shipments").innerText = `${activeShipments} Packages`;

        const pendingApproval = orders.filter(o => o.orderStatus === 'PENDING').length;
        document.getElementById("stat-approval").innerText = `${pendingApproval} Prescriptions`;
    }

    function refreshUI() {
        renderTable();
        updateStatistics();
    }

    // ==========================================
    // ===== XỬ LÝ SỰ KIỆN =====
    // ==========================================
    document.addEventListener("DOMContentLoaded", () => {
        refreshUI();

        const tabs = document.querySelectorAll(".tabs .tab");
        tabs.forEach(tab => {
            tab.addEventListener("click", function () {
                document.querySelector(".tabs .tab.active").classList.remove("active");
                this.classList.add("active");
                currentTab = this.getAttribute("data-status");
                renderTable();
            });
        });

        const searchInput = document.getElementById("main-search");
        if (searchInput) {
            searchInput.addEventListener("input", function (e) {
                searchKeyword = e.target.value;
                renderTable();
            });
        }

        const btnManualOrder = document.getElementById("btn-manual-order");
        if (btnManualOrder) {
            btnManualOrder.addEventListener("click", function () {
                const randomId = Math.floor(1000 + Math.random() * 9000);
                const statuses = ['PENDING', 'SHIPPING', 'COMPLETED', 'CANCELLED'];
                const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

                const newOrder = {
                    id: `#ORD-${randomId}`,
                    customer: {
                        name: "Guest Customer",
                        email: "guest@medicare.vn",
                        initial: "GC",
                        avatarBg: "bg-orange"
                    },
                    amount: Math.floor(Math.random() * 800) + 50,
                    paymentStatus: randomStatus === 'COMPLETED' || randomStatus === 'SHIPPING' ? "PAID" : "UNPAID",
                    orderStatus: randomStatus,
                    partner: randomStatus !== 'CANCELLED' ? "VNPost Medical" : "None",
                    date: "Just Now"
                };

                addOrderToDB(newOrder);
                refreshUI();
            });
        }

        const tableBody = document.getElementById("order-list");
        if (tableBody) {
            tableBody.addEventListener("click", function (e) {
                if (e.target.classList.contains("delete-btn") || e.target.closest(".delete-btn")) {
                    const btn = e.target.classList.contains("delete-btn") ? e.target : e.target.closest(".delete-btn");
                    const idToDelete = btn.getAttribute("data-id");
                    if (confirm(`Are you sure you want to delete order #${idToDelete}?`)) {
                        deleteOrderFromDB(idToDelete);
                        refreshUI();
                    }
                }
            });
        }
    });

})();
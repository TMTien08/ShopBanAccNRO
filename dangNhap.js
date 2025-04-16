function taiKhoan(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log(id);
    // Nếu có id, kiểm tra tài khoản và thay đổi nút
    if (id) {
        $.get("http://localhost:3000/taikhoan/" + id, function(data, status){
            if (data) {
                $('#btn_dang_nhap').replaceWith('<div id="so_du" class="nav-link tacvu border border-secondary rounded">SỐ DƯ: ' + data.so_du + ' VNĐ</div>');
                $('#btn_dang_ky').replaceWith('<button id="btn_dang_xuat" class="nav-link tacvu border border-secondary rounded" onclick="dangXuat()">ĐĂNG XUẤT</button>');
                $('#btn_trang_chu').replaceWith('<a id="btn_trang_chu" class="nav-link tacvu" href="index.html?id='+ id +'">TRANG CHỦ</a>');
                $('#btn_nap_tien').replaceWith('<a id="btn_nap_tien" class="nav-link tacvu" href="napThe.html?id='+ id +'">NẠP TIỀN</a>');
                $('#btn_dich_vu').replaceWith('<a id="btn_dich_vu" class="nav-link tacvu" href="DichVu.html?id='+ id +'">DỊCH VỤ</a>');
                $('#btn_shop_acc').replaceWith('<a id="btn_shop_acc" class="nav-link tacvu" href="shopAccNRO.html?id='+ id +'">NIK GAME</a>');
                $('.xem_them').replaceWith(function() {
                    return '<a class="xem_them btn btn-success col-12" href="chiTietTaiKhoan.html?id=' + $(this).attr('href').split('=')[1] + '&id2='+id+'">XEM THÊM</a>';
                });
                console.log($('.xem_them'));
                $('#btn_shop_acc2').replaceWith('<a id="btn_shop_acc2" href="shopAccNRO.html?id='+ id +'" class="col-4 col-md-2 m-4 px-0 anhmenu"><img class="w-100 h-100" src="anhbanacc.png" alt="Bán acc"></a>');
                $('#btn_dich_vu2').replaceWith('<a id="btn_dich_vu2" href="index.html?id='+ id +'" class="col-4 col-md-2 m-4 px-0 anhmenu"><img class="w-100 h-100" src="anhdichvu.png" alt="Dịch vụ"></a>');
                $('#btn_tai_khoan').replaceWith('<a id="btn_tai_khoan" href="taiKhoan.html?id='+ id +'" class="col-4 col-md-2 m-4 px-0 anhmenu"><img class="w-100 h-100" src="anhtaikhoan.png" alt="Tài khoản"></a>');
                $('#btn_vong_quay').replaceWith('<a id="btn_vong_quay" href="index.html?id='+ id +'" class="col-4 col-md-2 m-4 px-0 anhmenu"><img class="w-100 h-100" src="anhvongquay.png" alt="Vòng quay"></a>');
                $('#tai_khoan').replaceWith('<a id="tai_khoan" class="on" href="taiKhoan.html?id=' + id + '">Thông tin tài khoản</a>');
                $('#nap_the').replaceWith('<a id="nap_the" href="napThe.html?id=' + id + '">Nạp tiền thẻ cào</a>');
                $('#nap_momo').replaceWith('<a id="nap_momo" href="napMomo.html?id=' + id + '">Nạp tiền Momo</a>');
                $('#nap_ATM').replaceWith('<a id="nap_ATM" href="napATM.html?id=' + id + '">Nạp tiền ATM</a>');
                $('#lich_su_GD').replaceWith('<a id="lich_su_GD" href="lichSuGiaoDich.html?id=' + id + '">Lịch sử giao dịch</a>');
                $('#lich_su_VM').replaceWith('<a id="lich_su_VM" href="lichSuVanMay.html?id=' + id + '">Lịch sử vận may</a>');
                $('#tai_khoan_da_mua').replaceWith('<a id="tai_khoan_da_mua" href="taiKhoanDaMua.html?id=' + id + '">Tài khoản đã mua</a>');
                $('#tai_khoan_tra_gop').replaceWith('<a id="tai_khoan_tra_gop" href="TaiKhoanTraGop.html?id=' + id + '">Tài khoản trả góp</a>');
                $('#dich_vu_da_thue').replaceWith('<a id="dich_vu_da_thue" href="dichVuDaThue.html?id=' + id + '">Dịch vụ đã thuê</a>');
                $('#mua1').replaceWith('<a id="mua1" onclick="openModal()" style="width: 150px" class="btn btn-success col-form-label text-center">MUA</a>');
            }
        });
    }
}
function dangXuat() {
    var xac_nhan = confirm('bạn có muốn đăng xuất không');
    if (xac_nhan) {
    
        // Xóa ID khỏi URL
        window.history.pushState({}, document.title, window.location.pathname);
        alert('Đăng xuất thành công');
        window.location.href = 'trangchubanacc.html';
    }
    else {
        alert('Đã hủy đăng xuất')
    }
}
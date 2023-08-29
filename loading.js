document.addEventListener("DOMContentLoaded", function() {
    // Thêm sự kiện click cho tất cả các liên kết
    const links = document.querySelectorAll("a");

    // Thêm sự kiện click cho từng liên kết
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            // Ngăn chặn hành vi mặc định của liên kết (chuyển trang)
            event.preventDefault();

            // Hiển thị trang loading
            showLoading();

            // Chờ một thời gian giả định trước khi chuyển trang (thay đổi thời gian tùy ý)
            setTimeout(() => {
                // Lấy địa chỉ href của liên kết và chuyển trang
                const url = this.getAttribute("href");
                window.location.href = url;
            }, 2000); // Giả định thời gian loading là 2 giây (2000 ms)
        });
    });

    // Hàm để hiển thị trang loading
    function showLoading() {
        const loadingElement = document.createElement("iframe");
        loadingElement.src = "loading.html";
        loadingElement.style.position = "fixed";
        loadingElement.style.top = "0";
        loadingElement.style.left = "0";
        loadingElement.style.width = "100%";
        loadingElement.style.height = "100%";
        loadingElement.style.border = "none";
        loadingElement.style.backgroundColor = "#fff"; // Màu nền của trang loading (tùy chỉnh nếu cần)
        loadingElement.style.zIndex = "9999";
        document.body.appendChild(loadingElement);
    }
});
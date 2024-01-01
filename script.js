const drugs = [
    
    {
        name: "Panadol Extra",
        category: "Không kê đơn",
        effect: "Giảm đau",
        indication: "Đau đầu, Sốt, Đau cơ",
        contraindication: "Dị ứng với Paracetamol",
        dosage: "Uống 2 viên mỗi 4-6 giờ khi cần, không vượt quá 8 viên trong 24 giờ",
        detailLink: "https://example.com/panadol-extra-chitiet"
    },
    {
        name: "Oresol ",
        category: "Không kê đơn",
        effect: "Điều trị bệnh mất nước do tiêu chảy / điện giải ",
        indication: "Tiêu chảy cấp, sốt cao, nôn mửa, sốt xuất huyết cấp độ 1,2,3",
        contraindication: "Tình trạng sức khỏe không nên sử dụng thuốc nếu bạn đang mắc các vấn đề như suy thận cấp, xơ gan, rối loạn dung nạp glucose, tắc ruột, thủng ruột, liệt ruột, vô niệu hoặc giảm niệu, mất nước nặng kèm theo triệu chứng sốc, hoặc có quá mẫn với bất kỳ thành phần nào của thuốc.",
        dosage: "Trẻ nhũ nhi chỉ định liều dùng 50ml/ lần, uống 2 - 3 lần/ ngày. Trẻ 2 - 6 tuổi uống liều 100ml/ lần và chỉ định uống 2 - 3 lần/ ngày. Trẻ 6 – 12 tuổi dùng 150ml/lần, ngày uống 2 – 3 lần.",
        detailLink: "https://example.com/panadol-extra-chitiet"
    },
    {
        name: "Motilum M",
        category: "Không kê đơn",
        effect: "Điều trị đầy hơi, buồn nôn",
        indication: "Nôn, buồn nôn",
        contraindication: "Không nên sử dụng Domperidon hoặc bất kỳ tá dược nào của thuốc nếu người dùng đã có quá mẫn với chúng. Đồng thời, cần hạn chế việc sử dụng trong trường hợp u tuyến yên tiết prolactin (prolactinoma) hoặc khi việc kích thích vận động dạ dày có thể gây ra những tình trạng nguy hiểm như xuất huyết tiêu hóa, tắc ruột cơ học, hoặc thủng tiêu hóa. Người bệnh suy gan trung bình hoặc nặng cũng cần cảnh báo, và việc sử dụng cần được điều chỉnh dựa trên đặc tính dược động học. Đối với những người có thời gian dẫn truyền xung động tim kéo dài, đặc biệt là khoảng QT, bệnh nhân có rối loạn điện giải rõ rệt, hoặc bệnh nhân đang mắc bệnh tim mạch như suy tim sung huyết, cần thận trọng khi sử dụng. Việc sử dụng đồng thời với các thuốc kéo dài khoảng QT cũng nên được tránh, và đối với những người sử dụng các thuốc ức chế CYP3A4 mạnh, cần kiểm tra và điều chỉnh liều lượng một cách cẩn thận để tránh tác động tương tác không mong muốn. Tất cả những điều này đều là những cảnh báo và thận trọng quan trọng cần được xem xét trước khi sử dụng Domperidon hoặc bất kỳ loại thuốc nào liên quan.",
        dosage: "Dùng liều thấp trước ăn. Người lớn và trẻ vị thành niên (từ 12 tuổi trở lên và cân nặng từ 35 kg trở lên) - 10mg lên đến 3 lần 1 ngày với liều tối đa là 30mg mỗi ngày.",
        detailLink: "https://example.com/panadol-extra-chitiet"
    },
];

function renderDrugList(drugsToRender) {
    const drugList = document.getElementById("drugList");
    drugList.innerHTML = "";

    drugsToRender.forEach(drug => {
        const drugItem = document.createElement("li");
        drugItem.classList.add("drugItem");

        drugItem.innerHTML = `
            <strong>Tên:</strong> <b style="color:green">${drug.name} </b><br>
            <strong>Kê đơn:</strong> ${drug.category}<br>
            <strong>Chức năng:</strong> ${drug.effect}<br>
            <strong>Chỉ định:</strong> ${drug.indication}<br>
            <strong>Chống chỉ định:</strong> ${drug.contraindication}<br>
            <strong>Liều dùng:</strong> ${drug.dosage}<br>
            <a href="${drug.detailLink}" class="drugLink" target="_blank">Xem chi tiết</a>
        `;

        drugList.appendChild(drugItem);
    });
}
function welcome() {

    drugList.innerHTML = '<br><br><br><br><strong>Vui lòng nhập tên thuốc / triệu chứng...</strong>';


    
}

function filterByCategory() {
    const categoryFilter = document.getElementById("categoryFilter").value;
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    const filteredDrugs = drugs.filter(drug => {
        const isCategoryMatch = categoryFilter === "all" || drug.category.toLowerCase() === categoryFilter;
        const isSearchMatch = searchInput && drug.name.toLowerCase().includes(searchInput);
        return isCategoryMatch && isSearchMatch;
    });

    renderDrugList(filteredDrugs);
}

function searchDrugs() {
    const categoryFilter = document.getElementById("categoryFilter").value;
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    const filteredDrugs = drugs.filter(drug => {
        const isCategoryMatch = categoryFilter === "all" || drug.category.toLowerCase() === categoryFilter;
        const isSearchMatch = searchInput && drug.name.toLowerCase().includes(searchInput);
        return isCategoryMatch && isSearchMatch;
    });

    renderDrugList(filteredDrugs);
}

function searchDrugsByEffect() {
    const categoryFilter = document.getElementById("categoryFilter").value;
  
    const searchEffectInput = document.getElementById("searchEffectInput").value.toLowerCase();

    const filteredDrugs = drugs.filter(drug => {
        const isCategoryMatch = categoryFilter === "all" || drug.category.toLowerCase() === categoryFilter;
     
        const isEffectMatch = searchEffectInput && drug.indication.toLowerCase().includes(searchEffectInput);
        return isEffectMatch;
    });

    renderDrugList(filteredDrugs);
}
// Initial render on page load
welcome()

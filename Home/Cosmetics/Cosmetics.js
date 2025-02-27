const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
//fblink
const facebookLink = document.querySelector('a[href="https://www.facebook.com/AlYT.XD"]');

facebookLink.addEventListener('click', (event) => {
  event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>

  window.open('https://www.facebook.com/AlYT.XD', '_blank');
});
/* Model */
const modelViewer = document.querySelector('model-viewer');


// Json data
fetch('cosmetics.json')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.querySelector('.product-container');

    data.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p><strong>Thương hiệu:</strong> ${product.brand}</p>
        <p><strong>Danh mục:</strong> ${product.category}</p>
        <p>${product.description}</p>
        <button>Xem chi tiết</button>
        <div class="details">
          <p><strong>Giá:</strong> ${product.price} VNĐ</p>
        </div>
      `;

      const button = productDiv.querySelector('button');

      button.addEventListener('click', () => {
        const modal = document.getElementById('product-modal'); // Lấy modal ở ĐÂY
        const modalProductDetails = document.getElementById('modal-product-details');
        const closeButton = modal.querySelector('.close-button'); // Lấy closeButton ở ĐÂY

        modal.style.display = 'block';

        modalProductDetails.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p><strong>Thương hiệu:</strong> ${product.brand}</p>
          <p><strong>Danh mục:</strong> ${product.category}</p>
          <p>${product.description}</p>
          <p><strong>Giá:</strong> ${product.price} VNĐ</p>
        `;

        if (product.weight) {
          modalProductDetails.innerHTML += `<p><strong>Khối lượng:</strong> ${product.weight} ${product.unit || 'g'}</p>`;
        }
        if (product.volume) {
          modalProductDetails.innerHTML += `<p><strong>Dung tích:</strong> ${product.volume} ${product.unit || 'ml'}</p>`;
        }
        if (product.size) {
          modalProductDetails.innerHTML += `<p><strong>Kích cỡ:</strong> ${product.size}</p>`;
        }

        closeButton.addEventListener('click', () => { // Xử lý sự kiện click cho closeButton ở ĐÂY
          modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => { // Xử lý sự kiện click cho window cũng ở ĐÂY
          if (event.target == modal) {
            modal.style.display = 'none';
          }
        });
      });

      productContainer.appendChild(productDiv);
    });
  });

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
//model
const modelViewer = document.querySelector('model-viewer');
  // searchProducts;
  const searchInput = document.querySelector('.search-container input');
const searchButton = document.querySelector('.search-container button');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchTerm) ||
           product.description.toLowerCase().includes(searchTerm);
  });
  displayProducts(filteredProducts);
});
//
fetch('Search.json')
  .then(response => response.json())
  .then(products => {
    displayProducts(products);

    const searchInput = document.querySelector('.search-container input');
    const searchButton = document.querySelector('.search-container button');

    searchButton.addEventListener('click', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm);
      });
      displayProducts(filteredProducts);
    });
  })
  .catch(error => console.error('Lỗi khi tải dữ liệu:', error)); // Xử lý lỗi

function displayProducts(products) {
  const productContainer = document.querySelector('.product-container');
  productContainer.innerHTML = ''; // Xóa sản phẩm cũ

  if (!products || products.length === 0) { // Kiểm tra nếu không có sản phẩm
    productContainer.innerHTML = '<p>Không có sản phẩm nào.</p>';
    return;
  }

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Giá: ${product.price} VNĐ</p>
      <button>Xem chi tiết</button>
    `;

    const button = productDiv.querySelector('button');

    button.addEventListener('click', () => {
      const modal = document.getElementById('product-modal');
      const modalProductDetails = document.getElementById('modal-product-details');
      const closeButton = modal.querySelector('.close-button');

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

      closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      window.addEventListener('click', (event) => {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      });
    });

    productContainer.appendChild(productDiv);
  });
}
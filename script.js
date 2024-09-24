function showSection(sectionId) {
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    section.classList.remove('active');
  });

  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.remove('hidden');
  selectedSection.classList.add('active');
  selectedSection.style.animation = 'fadeIn 0.5s ease-in-out';
}

function showProductDetails(productId) {
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    section.classList.remove('active');
  });

  const productSection = document.getElementById(`${productId}-details`);
  productSection.classList.remove('hidden');
  productSection.classList.add('active');
  productSection.style.animation = 'slideIn 0.5s ease-in-out';
}

document.querySelectorAll('.buy-now').forEach(button => {
  button.addEventListener('click', () => {
    alert('Proceed to checkout!');
  });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});


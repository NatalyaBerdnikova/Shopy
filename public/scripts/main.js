let priceRange = document.getElementById('price-range');

if (priceRange) {
  let priceRangeData = {
    min: Number(priceRange.getAttribute('min')),
    max: Number(priceRange.getAttribute('max'))
  };

  noUiSlider.create(priceRange, {
    start: [priceRangeData.min, priceRangeData.max],
    step: 1,
    connect: true,
    tooltips: [true, true],
    format: {
      to: function (value) {
          return Math.trunc(value) + '$';
      },
      from: function (value) {
          return Number(value);
      }
    },
    range: {
      'min': [priceRangeData.min],
      'max': [priceRangeData.max]
    }
  });

  let priceFrom = document.getElementById('price-from');
  let priceTo = document.getElementById('price-to');

  priceRange.noUiSlider.on('update', function (values, handle) {
    let priceInput = handle ? priceTo : priceFrom;
    priceInput.value = Math.trunc(values[handle].replace('$', ''));
  });
}

let changeProductBackgroundElements = document.querySelectorAll('.js-changeProductBackground')

if (changeProductBackgroundElements) {
  let productImage = document.querySelector('.product__image');
  for (let i = 0; i < changeProductBackgroundElements.length; i++) {
    changeProductBackgroundElements[i].addEventListener('click', function() {
      let imageActive = document.querySelector('.product__images-preview--active');
      imageActive.classList.remove('product__images-preview--active');
      changeProductBackgroundElements[i].classList.add('product__images-preview--active');

      let backgroundPreview = changeProductBackgroundElements[i].querySelector('.product__images-preview-background');
      productImage.setAttribute('style', backgroundPreview.getAttribute('style'));
    });
  }
}

let productCounter = document.querySelector('.js-productCounter')

if (productCounter) {
  let productCounterCount = productCounter.querySelector('.js-productCounterCount')
  let productCounterDec = productCounter.querySelector('.js-productCounterDec')
  productCounterDec.addEventListener('click', function() {
    let number = Number(productCounterCount.textContent);
    if (number > Number(productCounter.dataset.minCount)) {
      productCounterCount.textContent = --number;
    }
  })
  let productCounterInc = productCounter.querySelector('.js-productCounterInc')
  productCounterInc.addEventListener('click', function() {
    let number = Number(productCounterCount.textContent);
    if (number < Number(productCounter.dataset.maxCount)) {
      productCounterCount.textContent = ++number;
    }
  })
}

let addToCartElements = document.querySelectorAll('.js-addToCart')
let cartCounter = document.querySelector('.js-cartCounter')

if ((addToCartElements.length > 0) && cartCounter) {
  for (let i = 0; i < addToCartElements.length; i++) {
    addToCartElements[i].addEventListener('click', function() {
      let number = Number(cartCounter.textContent);
      cartCounter.textContent = ++number;
      localStorage.setItem('cart-count', number)
    });
  }

  if (localStorage.getItem('cart-count')) {
    cartCounter.textContent = localStorage.getItem('cart-count');
  }
}

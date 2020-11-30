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

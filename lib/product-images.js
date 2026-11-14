export const CATEGORY_PRODUCT_IMAGES = {
  diabetes: {
    src: '/images/products/tulsyan-glucose-meter.jpg',
    alt: 'Blood glucose meter, lancing device, and testing supplies',
  },
  testStrips: {
    src: '/images/products/tulsyan-glucose-test-strips.jpg',
    alt: 'Accu-Chek Active test strips, representative catalogue image',
  },
  monitors: {
    src: '/images/products/tulsyan-bp-monitor.jpg',
    alt: 'Digital blood pressure monitor with arm cuff',
  },
  thermometer: {
    src: '/images/products/tulsyan-thermometer.jpg',
    alt: 'Digital thermometer, representative catalogue image',
  },
  respiratory: {
    src: '/images/products/tulsyan-nebulizer.jpg',
    alt: 'Nebulizer machine, tubing, and inhalation mask',
  },
  consumables: {
    src: '/images/products/tulsyan-examination-gloves.jpg',
    alt: 'Blue disposable medical gloves',
  },
};

export function getCategoryProductImage(category, productName = '') {
  if (category === 'diabetes' && /\bstrip\b|active (?:50|100)\b/i.test(productName)) {
    return CATEGORY_PRODUCT_IMAGES.testStrips;
  }

  if (category === 'monitors' && /thermometer/i.test(productName)) {
    return CATEGORY_PRODUCT_IMAGES.thermometer;
  }

  return CATEGORY_PRODUCT_IMAGES[category];
}

export function getProductImage(product) {
  if (product.image?.url) {
    return { src: product.image.url, alt: product.name };
  }

  if (product.name === 'T-Care Examination Gloves 100') {
    return CATEGORY_PRODUCT_IMAGES.consumables;
  }

  return undefined;
}

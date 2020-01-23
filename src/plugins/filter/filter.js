export default function productFilter(products, brand='', category=''){

  if (category ==='' && brand !==''){return products.filter(item => item.brand ===brand)}
  if (category !=='' && brand ==''){return products.filter(item => item.category ===category)}
  if (category !=='' && brand !==''){return products.filter(item => item.brand === brand && item.category === category)}
  if (category ==='' && brand ===''){return products}

}
// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export const api = 'https://apiastrapay-demo.kotadigivice.com';

// const endpoint = {
//   // Page setting
//   pageSetting: `${api}/page-settings`,

//   // Homepage
//   homepage: `${api}/homepage`,

//   // Product
//   product: `${api}/products`,
//   categoryProduct: `${api}/category-products`,

//   // Karir
//   karir: `${api}/karir-page`,

//   // Promo
//   promo: `${api}/promos`,
//   categoryPromo: `${api}/category-promos`,

//   // Job
//   job: `${api}/job-vacancies`,
//   detailJob: `${api}/job-vacancies/`,
//   applyJob: `${api}/job-applications`,
//   departement: `${api}/departments`,
//   education: `${api}/last-educations`,
//   workType: `${api}/work-types`,

//   //Partner
//   partner: `${api}/partners`,

//   //Faq
//   faq: `${api}/faqs`,
//   categoryFaq: `${api}/category-faqs`,
  
//   // Blog
//   blog: `${api}/blogs`,
//   categoryBlog: `${api}/category-blogs`,
//   articlePopular: `${api}/blogs?_sort=view_count:desc&_limit=4`,

//   // Helpcenter
//   ticket: `${api}/tickets`,

//   // TnC
//   tnc: `${api}/ketentuan-penggunaan`,

//   // Privacy Policy
//   privacy: `${api}/kebijakan-privasi`,
// };


// function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// async function getProduct(params, callback) {
//   const url = endpoint.product;
//   try {
//     const res = await fetch(url, { params })
//     const data = await res.json();
//     callback(data, null);
//   } catch (error) {
//     callback(null, error);
//   }
// }

// export default {handler, getProduct, endpoint}
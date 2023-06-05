// const db = require('../config/database');

// exports.getSearchResults = async (city, district, neighborhood) => {
//   try {
//     const query = `SELECT storeName, address_city, address_district, address_dong FROM seller_info 
//       WHERE address_city LIKE '%${city}%' AND address_district LIKE '%${district}%' AND address_dong LIKE '%${neighborhood}%'`;

//     const [results] = await db.query(query);
//     const seller_info = results.map(result => ({
//       storeName: result.storeName,
//       address_city: result.address_city,
//       address_district: result.address_district,
//       address_dong: result.address_dong
//     }));

  

//     return seller_info;
//   } catch (err) {
//     console.error('쿼리 실행 오류:', err);
//     throw err;
//   }
// };

const db = require('../config/database');

exports.getSearchResults = async (city, district, neighborhood) => {

  // const city = req.query.city;
  // const district = req.query.district;
  // const neighborhood = req.query.neighborhood;

  console.log(city+"데베2");

  try {
    const connection = await db.getConnection();
    const query = `
      SELECT storeName, address_city, address_district, address_dong
      FROM seller_info
      WHERE address_city = ? AND address_district = ? AND address_dong = ?
    `;
    const results = await db.query(query, [city, district, neighborhood]);
    //connection.release();
    console.log("모델 " + results);

   return results;




  } catch (err) {
    console.error('검색 결과 조회 오류:', err);
   // res.status(500).send('검색 결과를 가져오는 도중에 오류가 발생했습니다.');
  }
};

//읽어올때 seller_id 도 같이 가져와서 , 그거랑 session 에 저장해서 넘겨주라... 
// 연결경로는 /store/:sellerId <- 세션에서 읽어와서 저장하기 
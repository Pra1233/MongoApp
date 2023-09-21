const getDb=require('../util/database').getDb;

class Product{
  constructor(title,price,description,imageUrl){
    this.title=title;
    this.price=price;
    this.description=description;
    this.imageUrl=imageUrl;
  }

  save(){
 const db=getDb();
 return db.collection('product').insertOne(this)  //return
 .then(result=>console.log(result))
 .catch(err=>console.log(err));
  }
}
module.exports = Product;

// const Product = sequelize.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// module.exports = Product;
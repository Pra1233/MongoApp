const mongodb=require('mongodb');
const getDb=require('../util/database').getDb;
const ObjectId=mongodb.ObjectId;

class User{
  constructor(username,email){
  this.name=username;
  this.email=email;
  }

  save(){
 const db=getDb();
return db.collection('users').insertOne(this);
// .then(result=>console.log(result,"result USER"))
//  .catch(err=>console.log(err));
  } 

static findById(userId){
const db=getDb();
// return db.collection('users').findOne({_id : new mongodb.ObjectId(userId)})
return db.collection('users').findOne({_id: new ObjectId(userId)})
.then(user=>{
  console.log(user,"USER111111111111111");
  return user;
})
.catch(e=>console.log(e));
}


 }


module.exports = User;

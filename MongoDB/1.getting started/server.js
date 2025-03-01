const express = require("express")
const app = express();
const {MongoClient, ServerApiVersion} = require ("mongodb");
const PORT = 5000;


// MongoDB Username: gunjalaishwarya625
// MongoDB Password: Ci2XcJspMUe4ZEGd
// MongoDB URL: mongodb+srv://gunjalaishwarya625:Ci2XcJspMUe4ZEGd@cluster0.vuyfr.mongodb.net/students-database
//create the client
const client = new MongoClient("mongodb+srv://gunjalaishwarya625:Ci2XcJspMUe4ZEGd@cluster0.vuyfr.mongodb.net/students-database", {
  serverApi:{
    version: ServerApiVersion.v1,
    strict:true,
    deprecationErrors:true
  }
})

//function to connect
const connectDB = async()=>{
  try{
    await client.connect();
    console.log("MongoDB connected Successfully");

    //1. Database Name (School Database)
    const database = client.db('masyncTech')

    //2.Collections (Students)
    const studentsCollection  = database.collection('students')

    //3.Creation of documents (insert student info)
    const result = await studentsCollection.insertOne({
      name:"Aishwarya",
      age: 19,
      subjects:["Maths", "Science"],
    })
    console.log(result)
  }catch(error){
    console.log(error);
  }
}

connectDB();

app.listen(PORT, ()=>{
  console.log("app running on port")
})
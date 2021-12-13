import { MongoClient } from 'mongodb';


export default async function handler(req, res) {
  console.log('handler')
 if(req.method === 'POST') {
   const data = req.body;

   const client = await MongoClient.connect('mongodb+srv://newuser:minionki@cluster0.valtu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
   const db = client.db();

   const productsCollection = db.collection('products');

  
   const result = await productsCollection.insertOne({ email: data });

   client.close();

   res.status(201).json({message: 'Meetup inserted!'})
 }
}

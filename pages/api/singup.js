import {MongoClient,ServerApiVersion} from 'mongodb'


async function handler(req,res) {
    //*************************** connexion */
    const uri = "mongodb+srv://Oumar:QNVKvrVibr0T8BxH@cluster0.hrdk8gg.mongodb.net/test?retryWrites=true&w=majority";
     const client = await  MongoClient.connect(uri);
     const db=client.db();
     await db.collection('email').insertOne({email: req.body.email})

        res.status(201).json({msg:'success'})



}
export default handler
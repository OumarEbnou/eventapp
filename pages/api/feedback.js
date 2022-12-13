import path from 'path';
import fs from 'fs';
export function getDataFile(){
    return path.join(process.cwd(),'data','feedback.json');
}
export function extractFile(filePath){
    const fileData=fs.readFileSync(filePath);
    const data=JSON.parse(fileData);
    return data;
}
function handler(req,res) {

    if (req.method === 'POST') {
        const email = req.body.email;
        const text = req.body.text;

        const feedbackreq ={
            id: new Date().toISOString(),
            email: email,
            text: text
        }
        const filePath=getDataFile();
        const data=extractFile(filePath);
        data.push(feedbackreq);
        fs.writeFileSync(filePath,JSON.stringify(data))

        res.status(201).json({msg:'success', feedback : feedbackreq})
    }else{
        const filePath=getDataFile();
        const data=extractFile(filePath);
         res.status(200).json({msg: 'work',feedback:data})
    }


}
export default handler
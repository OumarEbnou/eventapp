import { extractFile, getDataFile } from "./singup";

function handeler(req,res) {
    const id = req.query.idf

    const filePath=getDataFile();
    const data =extractFile(filePath);

    const item = data.find(itm => itm.id ===id)

    res.status(201).json({msg:'success', feedback : item})


}
export default handeler
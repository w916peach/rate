// 验证表中的某个字段是否重复
const query = require('./mysql');
module.exports = async function isTableRepeat(propName,tableName,propValue){
    let sql = `select ${propName} from ${tableName} where ${propName}=?`;
    let usernameInfo = await query(sql,[propValue]);
    if(usernameInfo.length === 0){
        return false;
    }else{
        return true;
    }
}
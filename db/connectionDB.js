import mysql from 'mysql2'
import { Sequelize }  from 'sequelize';


export const sequelize = new Sequelize("mysql://utkrd781afgnfkjh:HPSR8dNaxX35xrZDmgy2@bsyy0aafk0whfezvqg5l-mysql.services.clever-cloud.com:3306/bsyy0aafk0whfezvqg5l");


  const connectionDB=async ()=>{
return await sequelize.sync({alter:true}).then(()=>{ console.log({msg:"connection success"})

}).catch((err)=>{
console.log({msg:"connection fail",err});

})

  }

  export default connectionDB;
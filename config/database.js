import { Sequelize } from "sequelize";

const db = new Sequelize('kors2841_apirest', 'kors2841_bambang', '5Q_?}sKTo_R@',{
    host: 'https://api.korslet.me',
    dialect: 'mysql'
})

export default db;

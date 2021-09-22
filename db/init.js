class Database{
    static dbUrl = `mongodb://localhost:27017/${this.dbName}`; //local
    static dbName = 'SampleDB';


    static userTable = "user";



}

module.exports = { Database};
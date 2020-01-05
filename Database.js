const OracleDB = require('oracledb');
OracleDB.outFormat = OracleDB.OUT_FORMAT_OBJECT;
OracleDB.autoCommit = true;

module.exports = class Database {

    constructor() {
        this.hostname = "SERVER";
        this.servicename = "orclpdb.localdomain";
    }

    async runSQL(username, password, SQLString, params = []) {
        let connection;
        try {
            connection = await OracleDB.getConnection({
                user: username,
                password: password,
                connectString: `${this.hostname}:1521/${this.servicename}`
            });
            const result = await connection.execute(SQLString, params);
            return result;
        } catch (err) {
            console.log(err);
            return undefined
        } finally {
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }

    async checkConnection(username, password) {
        let connection;
        try {
            connection = await OracleDB.getConnection({
                user: username,
                password: password,
                connectString: `${this.hostname}:1521/${this.servicename}`
            });
            if (connection) {
                return true;
            }
            else {
                return false;
            }
        } catch (err) {
            console.log(err);
            return undefined;
        } finally {
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }

    async commit(username, password) {
        let connection;
        try {
            connection = await OracleDB.getConnection({
                user: username,
                password: password,
                connectString: `${this.hostname}:1521/${this.servicename}`
            });
            const result = await connection.execute('COMMIT');
            return result;
        } catch (err) {
            console.log(err);
        } finally {
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }

    async getUserRole(username, password) {
        let connection;
        try {
            connection = await OracleDB.getConnection({
                user: username,
                password: password,
                connectString: `${this.hostname}:1521/${this.servicename}`
            });
            const result = await connection.execute('SELECT GRANTED_ROLE FROM USER_ROLE_PRIVS');
            return result;
        } catch (err) {
            console.log(err);
            return undefined;
        } finally {
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
}
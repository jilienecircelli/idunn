import mysql from 'mysql2/promise';


async function connectToLogger() {
    const { LOGGER_DB_DB_HOST, LOGGER_DB_DB_USER, LOGGER_DB_DB_PASSWORD, LOGGER_DB_DB_DATABASE } = process.env;
    return mysql.createConnection({
        host: LOGGER_DB_DB_HOST,
        user: LOGGER_DB_DB_USER,
        database: LOGGER_DB_DB_DATABASE,
        password: LOGGER_DB_DB_PASSWORD,
    });
}



export async function GET(req){
    let data = await req.json()

    const { username } = data

    if (!username) {
        return Response.json({ message: 'Player does not exist' }, { status: 400 });
    }
    try {
        const db = await connectToLogger();
        // const query = 'SELECT FROM player_join (player_name) VALUES (?)';
        const query = 'SELECT * FROM player_join WHERE player_name = ?';
        const values = [username];

        await db.execute(query, values);

        return Response.json({ message: 'User retrieved successfully' });
    } catch (error) {
        console.error('Database operation failed:', error);
        res.status(500).json({ message: 'Failed to retrieve user', error: error.message });
    }
}
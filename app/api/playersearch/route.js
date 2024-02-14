import mysql from 'mysql2/promise';


async function connectToLogger() {
    const { LOGGER_DB_HOST, LOGGER_DB_USER, LOGGER_DB_PASSWORD, LOGGER_DB_DATABASE } = process.env;
    return mysql.createConnection({
        host: LOGGER_DB_HOST,
        user: LOGGER_DB_USER,
        database: LOGGER_DB_DATABASE,
        password: LOGGER_DB_PASSWORD,
    });
}

export async function GET(req){

    const username = req.nextUrl.searchParams.get('username')
    console.log(username, typeof username)


    if (!username) {
        return Response.json({ message: 'Player does not exist' }, { status: 400 });
    }
    try {
        const db = await connectToLogger();
        const query = 'SELECT * FROM player_join WHERE player_name = ?';
        const values = [username];

        let result = await db.execute(query, values);


        return Response.json(result[0]);
    } catch (error) {
        console.error('Database operation failed:', error);
        return Response.json({ message: 'Failed to retrieve user'}, { status: 500 });
    }
}
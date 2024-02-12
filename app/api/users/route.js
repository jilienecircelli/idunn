import mysql from 'mysql2/promise';


async function connectToDatabase() {
    const { PLAYERINFO_DB_HOST, PLAYERINFO_DB_USER, PLAYERINFO_DB_PASSWORD, PLAYERINFO_DB_DATABASE } = process.env;
    return mysql.createConnection({
        host: PLAYERINFO_DB_HOST,
        user: PLAYERINFO_DB_USER,
        database: PLAYERINFO_DB_DATABASE,
        password: PLAYERINFO_DB_PASSWORD,
    });
}



export async function GET() {
    let data = await req.json()

    const { username, email, about_me } = data;
    
    if (!username) {
        return Response.json({ message: 'Player does not exist' }, { status: 400 });
    }
    try {
        const db = await connectToDatabase();
        const query = 'SELECT FROM users (username, email, about_me) VALUES (?, ?, ?)';
        const values = [username, email, about_me || ''];

        await db.execute(query, values);

        return Response.json({ message: 'User retrieved successfully' });
    } catch (error) {
        console.error('Database operation failed:', error);
        res.status(500).json({ message: 'Failed to retrieve user', error: error.message });
    }

    return Response.json({ data })
}


export async function POST(req) {

    let data = await req.json()

    const { username, email, about_me } = data;

    if (!username || !email) {
        return Response.json({ message: 'Username and email are required' }, { status: 400 });
    }

    try {
        const db = await connectToDatabase();
        const query = 'INSERT INTO users (username, email, about_me) VALUES (?, ?, ?)';
        const values = [username, email, about_me || ''];

        await db.execute(query, values);

        return Response.json({ message: 'User saved successfully' });
    } catch (error) {
        console.error('Database operation failed:', error);
        res.status(500).json({ message: 'Failed to save user', error: error.message });
    }

    return Response.json({ data })

}
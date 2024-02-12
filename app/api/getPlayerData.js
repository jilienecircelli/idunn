import mysql from 'mysql2/promise';

// Database connection function
async function connectToDatabase() {
    const { PLAYERINFO_DB_HOST, PLAYERINFO_DB_USER, PLAYERINFO_DB_PASSWORD, PLAYERINFO_DB_DATABASE } = process.env;
    return mysql.createConnection({
        host: PLAYERINFO_DB_HOST,
        user: PLAYERINFO_DB_USER,
        database: PLAYERINFO_DB_DATABASE,
        password: PLAYERINFO_DB_PASSWORD,
    });
}

export default async function getPlayerData(req, res) {
    if (req.method !== 'GET') {
        // Only accept GET requests
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { username } = req.query;

    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }

    try {
        const db = await connectToDatabase();
        const query = 'SELECT username, email, about_me FROM users WHERE username = ?';
        const [rows] = await db.execute(query, [username]);

        if (rows.length > 0) {
            res.status(200).json(rows[0]); 
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Database operation failed:', error);
        res.status(500).json({ message: 'Failed to fetch user data', error: error.message });
    }
}
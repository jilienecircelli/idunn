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



export async function GET(req) {

    const username = req.nextUrl.searchParams.get('username')
    const email = req.nextUrl.searchParams.get('email')

    if (!username && !email) {
        return Response.json({ message: 'Player does not exist' }, { status: 400 });
    }
    try {
        const db = await connectToDatabase();
        const query = 'SELECT username, about_me FROM users WHERE username= ? OR email= ?';
        const values = [username, email];

        let result = await db.execute(query, values);

        return Response.json(result[0]);

    } catch (error) {
        console.error('Database operation failed:', error);
        return Response.json({ message: 'Failed to retrieve user'}, { status: 500 });
    }
}


export async function POST(req) {

    let data = await req.json()

    const { username, email, about_me } = data;
    console.log(username, email)

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

export async function PUT(req) {
    // do a put request that searches based on email/username that will only update the about me section
    let data = await req.json()
    const {username, email, about_me} = data
    console.log(username, email)

    if (!username || !email) {
        return Response.json({ message: 'Username and email are required' }, { status: 400 })
    }
    try {
        const db = await connectToDatabase();
        const query = 'UPDATE users SET about_me = ? WHERE username = ? AND email = ?';
        const values = [about_me || '', username, email];

        await db.execute(query, values);

        return Response.json({ message: 'User updated successfully' });

    } catch (error){
        console.error('Database operation failed', error);
        return Response.json({message: 'Failed to update user', error: error.message}, {status: 500})
    }
    
}

export async function DELETE(req){
    const username = req.nextUrl.searchParams.get('username')

    if (!username) {
        return Response.json({ message: 'Player does not exist' }, { status: 400 });
    }
    try {
        const db = await connectToDatabase();
        const query = 'DELETE FROM users WHERE username= ? ';
        const values = [username];

        let result = await db.execute(query, values);

        return Response.json({message: 'User has been deleted'});

    } catch (error) {
        console.error('Database operation failed:', error);
        return Response.json({ message: 'Failed to retrieve user'}, { status: 500 });
    }
}
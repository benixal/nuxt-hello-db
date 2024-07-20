export default defineEventHandler( async(event)=>{

    const db = useDatabase("myDB");

    const users = await db.sql`SELECT * FROM users`;

    return users.rows;

})
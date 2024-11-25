const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

// Middleware untuk parsing JSON
app.use(cors());
app.use(express.json());

// Konfigurasi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'amarine'
});

// Cek koneksi database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database!');
});

// Di index.js backend
app.post('/akun', (req, res) => {
    // Ambil data dari request body
    const { email, password, role, nama } = req.body;

    // Validasi input
    if (!email || !password || !nama) {  // role tidak perlu divalidasi karena default
        return res.status(400).json({ error: 'Email, password, dan nama harus diisi!' });
    }

    // Query untuk memasukkan email, password, dan role='Nelayan' ke tabel akun
    const insertAkunQuery = 'INSERT INTO akun (email, password, role) VALUES (?, ?, "Nelayan")';
    db.query(insertAkunQuery, [email, password], (err, akunResult) => {
        if (err) {
            console.error('Error inserting data into akun:', err.stack);
            return res.status(500).json({ error: 'Failed to insert data into akun' });
        }

        const akunId = akunResult.insertId;

        // Query untuk memasukkan id_akun dan nama ke tabel nelayan
        const insertNelayanQuery = 'INSERT INTO nelayan (id_akun, nama) VALUES (?, ?)';
        db.query(insertNelayanQuery, [akunId, nama], (err, nelayanResult) => {
            if (err) {
                console.error('Error inserting data into nelayan:', err.stack);
                // Rollback jika gagal
                db.query('DELETE FROM akun WHERE id = ?', [akunId]);
                return res.status(500).json({ error: 'Failed to insert data into nelayan' });
            }

            res.status(200).json({
                message: 'Registrasi berhasil',
                data: {
                    email: email,
                    nama: nama
                }
            });
        });
    });
});

// Jalankan server
const port = 3000;
//app.listen(port, () => {
//    console.log(`Server berjalan di http://localhost:${port}`);
//});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
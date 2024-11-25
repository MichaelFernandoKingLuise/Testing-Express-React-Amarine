const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());

app.use(express.json());

// Konfigurasi koneksi database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "amarine",
});

// Cek koneksi database
db.connect((err) => {
  if (err) {
    console.error("Koneksi gagal:", err.message);
  } else {
    console.log("Berhasil terhubung ke database MySQL");
  }
});

// Endpoint untuk daftar
app.post("/akun", async (req, res) => {
    const { email, password, nama, noTelepon } = req.body; // Ambil semua data yang diperlukan
    console.log("Input dari pengguna:", { email, nama, noTelepon });
    try {
        // Hash password menggunakan bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = "INSERT INTO akun (email, password, role) VALUES (?, ?, 'nelayan')";
        db.query(query, [email, hashedPassword], (err, results) => {
            if (err) {
                console.error("Database query error:", err);
                return res.status(500).json({ error: "Terjadi kesalahan pada server" });
            }

            const akunId = results.insertId; // Ambil ID akun yang baru dibuat

            // Data untuk tabel nelayan
            const nelayanQuery = "INSERT INTO nelayan (id_akun, nama, no_hp) VALUES (?, ?, ?)";
            db.query(nelayanQuery, [akunId, nama, noTelepon], (err) => {
                if (err) {
                    console.error("Error inserting into nelayan:", err);
                    return res.status(500).json({ error: "Terjadi kesalahan saat membuat nelayan" });
                }

                res.status(201).json({ message: "Akun dan nelayan berhasil dibuat", insertId: akunId });
            });
        });
    } catch (error) {
        console.error("Error hashing password:", error);
        return res.status(500).json({ error: "Terjadi kesalahan saat membuat akun" });
    }
});

// Endpoint untuk menambahkan nelayan
app.post("/nelayan", (req, res) => {
    const { id_akun, nama, no_hp } = req.body; // Ambil data dari request body
    const query = "INSERT INTO nelayan (id_akun, nama, no_hp) VALUES (?, ?, ?)";

    db.query(query, [id_akun, nama, no_hp], (err, results) => {
        if (err) {
            console.error("Error inserting into nelayan:", err);
            return res.status(500).json({ error: "Terjadi kesalahan saat membuat nelayan" });
        }

        res.status(201).json({ message: "Nelayan berhasil dibuat", insertId: results.insertId });
    });
});

// Endpoint untuk login
app.post("/api/login", (req, res) => {
    console.log("Login request received:", req.body);
    const { email, password } = req.body;
  
    const query = "SELECT * FROM akun WHERE email = ?";
    db.query(query, [email], (err, results) => {
      if (err) {
        console.error("Database query error:", err);
        return res.status(500).json({ error: "Terjadi kesalahan pada server" });
      }
  
      if (results.length === 0) {
        return res.status(401).json({ error: "Email atau password salah" });
      }
  
      const user = results[0];
  
      // Bandingkan password menggunakan bcrypt
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.error("Error comparing password:", err);
          return res.status(500).json({ error: "Terjadi kesalahan pada server" });
        }
  
        if (!isMatch) {
          return res.status(401).json({ error: "Email atau password salah" });
        }
  
        // Jika password cocok, kirim data pengguna
        res.status(200).json(user);
      });
    });
  });

// Endpoint untuk mendapatkan data dari tabel akun
app.get("/api/akun", (req, res) => {
  const query = "SELECT * FROM akun";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
      return;
    }
    res.json(results);
  });
});

// Endpoint untuk mendapatkan data dari tabel detail_stok
app.get("/api/detail_stok", (req, res) => {
  const query = "SELECT * FROM detail_stok";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
      return;
    }
    res.json(results);
  });
});

// Endpoint untuk mendapatkan data dari tabel nelayan
app.get("/api/nelayan", (req, res) => {
  const query = `
      SELECT n.*, a.email, a.gambar
      FROM nelayan n
      JOIN akun a ON n.id_akun = a.id
    `;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
      return;
    }
    console.log("Results from database:", results); // Log hasil query
    res.json(results);
  });
});

// Endpoint untuk mendapatkan data dari tabel pencatatan
app.get("/api/pencatatan", (req, res) => {
  const query = "SELECT * FROM pencatatan";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
      return;
    }
    console.log("Results from database:", results); // Log hasil query
    res.json(results);
  });
});

// Endpoint untuk mendapatkan data dari tabel pengepul
app.get("/api/pengepul", (req, res) => {
  const query = "SELECT * FROM pengepul";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
      return;
    }
    console.log("Results from database:", results); // Log hasil query
    res.json(results);
  });
});

// Jalankan server
app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});

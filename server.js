const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;
const DB_PATH = path.join(__dirname, 'database', 'movies.db');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Initialize database
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to SQLite database');
        initializeDatabase();
    }
});

function initializeDatabase() {
    db.run(`
        CREATE TABLE IF NOT EXISTS movies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            director TEXT,
            year INTEGER,
            genre TEXT,
            country TEXT,
            rank INTEGER DEFAULT 0
        )
    `);
}

// API Endpoints
app.get('/api/movies', (req, res) => {
    db.all('SELECT * FROM movies ORDER BY rank', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.post('/api/movies', (req, res) => {
    const { title, director, year, genre, country } = req.body;
    db.run(
        'INSERT INTO movies (title, director, year, genre, country) VALUES (?, ?, ?, ?, ?)',
        [title, director, year, genre, country],
        function (err) {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({ id: this.lastID });
        }
    );
});

app.put('/api/movies/rank', (req, res) => {
    const { updates } = req.body; // Array of {id, rank}

    db.serialize(() => {
        db.run('BEGIN TRANSACTION');

        updates.forEach(({ id, rank }) => {
            db.run(
                'UPDATE movies SET rank = ? WHERE id = ?',
                [rank, id]
            );
        });

        db.run('COMMIT', (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ success: true });
        });
    });
});

app.delete('/api/movies/:id', (req, res) => {
    db.run(
        'DELETE FROM movies WHERE id = ?',
        [req.params.id],
        function (err) {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({ success: true });
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

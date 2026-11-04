CREATE TABLE admin (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE informasi (
    id SERIAL PRIMARY KEY,
    tipe VARCHAR(20) NOT NULL,
    judul VARCHAR(100),
    isi TEXT
);

-- Insert admin default
-- Password harus di-hash dengan bcrypt sebelum insert
-- Contoh hash untuk 'robin123': $2a$10$wQwQwQwQwQwQwQwQwQwQwOeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw
INSERT INTO admin (username, password)
VALUES ('robinsyaifuddin', '$2a$10$wQwQwQwQwQwQwQwQwQwQwOeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw');

// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
    // ส่ง Header กลับไปว่าเป็นข้อความธรรมดา (text/plain)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // ส่งข้อความ Hello World! กลับไปที่หน้าจอ
    res.end('Hello World!\n');
});

// ตั้งค่าให้ Server รอรับการเชื่อมต่อที่ Port 3000 และ IP 127.0.0.1
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});

// วิธีรันคือพิมพ์: node server.mjs ใน Terminal
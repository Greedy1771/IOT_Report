const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thông Tin Thành Viên</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                text-align: center;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 80%;
                margin: 50px auto;
                background: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
                color: #333;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            th, td {
                padding: 10px;
                border: 1px solid #ddd;
                text-align: left;
            }
            th {
                background-color: #007BFF;
                color: white;
            }
            tr:nth-child(even) {
                background-color: #f9f9f9;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Danh Sách Thành Viên</h2>
            <table>
                <thead>
                    <tr>
                        <th>Họ và Tên</th>
                        <th>Vai Trò</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Le Vu Hoang Lan</td>
                        <td>Thanh vien 1</td>
                        <td>email@example.com</td>
                    </tr>
                    <tr>
                        <td>Trần Thu Hien</td>
                        <td>Thanh vien 2</td>
                        <td>email@example.com</td>
                    </tr>
                    <tr>
                        <td>Nguyen Diep Gia Bao</td>
                        <td>Thanh vien 3</td>
                        <td>email@example.com</td>
                    </tr>
                    <tr>
                        <td>Nguyen Van Vu</td>
                        <td>Thanh vien 4</td>
                        <td>email@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    </html>
    `);
});

server.listen(port, () => {
    console.log(`Server running at port ` + port);
});

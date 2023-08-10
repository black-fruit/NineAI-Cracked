const http = require('http');
const { format } = require('date-fns');

const server = http.createServer((req, res) => {

  // 获取当前时间
  const now = new Date();
  const timestamp = format(now, 'M/d/yyyy');  

  const data = {
    code: 200,
    message: '授权成功', 
    success: 'true',
    data: '感谢使用NineAI、服务已启动.......', 
    timestamp  
  };
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
});

server.listen(100);
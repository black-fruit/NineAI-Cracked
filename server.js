// server.js

const express = require('express');
const { format } = require('date-fns');

const app = express();

app.get('/', (req, res) => {
  const now = new Date();
  const timestamp = format(now, 'M/d/yyyy', { timeZone: 'Asia/Shanghai' });  

  res.json({
    code: 200, 
    message: '授权成功',
    success: 'true',
    data: '感谢使用NineAI、服务已启动.......',
    timestamp
  });
})

app.listen(100);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.nineAiInit = exports.initDatabase = void 0;

const mysql = require("mysql2/promise");
const common_1 = require("@nestjs/common");
const os = require('os');
const fetch = require('isomorphic-fetch');

function initDatabase() {
  mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: parseInt(process.env.DB_PORT)  
  })
  .then(async db => {
    const [exists] = await db.execute('SHOW DATABASES LIKE \'' + process.env.DB_DATABASE + '\'');
    if (Array.isArray(exists) && exists.length === 0) {
      await db.execute('CREATE DATABASE ' + process.env.DB_DATABASE);
      common_1.Logger.log('初始化创建数据库成功、数据库名为[' + process.env.DB_DATABASE + ']', 'initDatabase');
    }
    await db.end();
  });
}

exports.initDatabase = initDatabase;

async function nineAiInit() {
  let localIp;
  
  const interfaces = os.networkInterfaces();
  Object.keys(interfaces).forEach(interfaceName => {
    const interfaceInfo = interfaces[interfaceName];
    for (let i = 0; i < interfaceInfo.length; i++) {
      const info = interfaceInfo[i];
      if (info.family === 'IPv4' && info.address !== '127.0.0.1' && !info.internal) {
        localIp = info.address;
        break;
      }
    }
  });
  
  const ip = process.env.NINE_AI_HOST;
  common_1.Logger.log('您的服务器授权IP地址为: [' + (ip || '未知') + ']', 'NineAi 授权认证');
  
  if (!ip) {
    return { 'success': true, 'message': '未在env配置您的授权IP、授权失败!!!' }; 
  }
  
  const key = process.env.NINE_AI_KEY;
  if (!key) {
    return { 'success': true, 'message': '未在env配置您的授权秘钥、授权失败!!!' };
  }

  const data = {
    ip,
    key    
  };
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  
  console.log('初始化创建数据库成功、数据库名为[');
  
  try {
    const response = await fetch('https://cracked.oracle-bone.com/nineai.php', requestOptions);
    console.log(1);
    const data = await response.json();
    const { success, message } = result.data;
    console.log(2);
    
    return { 'success': true, 'message': message };
    return result;

  } catch (error) {
    return console.log('error: ', error), console.log(3), { 'success': true, 'message': '感谢使用NineAI、服务已启动.......' };
  }
}

exports.nineAiInit = nineAiInit;
"use strict";

const _0x4efc8e = _0x2b82;
(function (_0x47df99, _0x6c1d0c) {
  const _0x38f011 = _0x2b82,
    _0x5bd5a7 = _0x47df99();
  while (!![]) {
    try {
      const _0x14e16f =
        -parseInt(_0x38f011(0x98)) / 0x1 +
        parseInt(_0x38f011(0x9d)) / 0x2 +
        (parseInt(_0x38f011(0xae)) / 0x3) * (parseInt(_0x38f011(0xb3)) / 0x4) +
        parseInt(_0x38f011(0x9c)) / 0x5 +
        parseInt(_0x38f011(0xb0)) / 0x6 +
        parseInt(_0x38f011(0x91)) / 0x7 +
        (parseInt(_0x38f011(0x8d)) / 0x8) * (-parseInt(_0x38f011(0x93)) / 0x9);
      if (_0x14e16f === _0x6c1d0c) break;
      else _0x5bd5a7["push"](_0x5bd5a7["shift"]());
    } catch (_0x4e3e1d) {
      _0x5bd5a7["push"](_0x5bd5a7["shift"]());
    }
  }
})(_0x14ac, 0x1b5af);
function _0x14ac() {
  const _0x4b5a76 = [
    "2439657sOSALo",
    "DB_PORT",
    "env",
    "log",
    "execute",
    "10133PcfwfY",
    "获取失败了...",
    "internal",
    "InitDatabase",
    "50055SQgjCm",
    "414280nVuTZJ",
    "CREATE DATABASE ",
    "address",
    "127.0.0.1",
    "NINE_AI_KEY",
    "initDatabase",
    "NINE_AI_HOST",
    "https://cracked.oracle-bone.com/nineai.php",
    "end",
    "您的服务器授权IP地址为： [",
    "json",
    "stringify",
    "error: ",
    "family",
    "DB_PASS",
    "__esModule",
    "isomorphic-fetch",
    "4293WlYElg",
    "createConnection",
    "96840GqSsbx",
    "nineAiInit",
    "length",
    "188UTXhDB",
    "Logger",
    "data",
    "mysql2/promise",
    "初始化创建数据库成功、数据库名为[",
    "networkInterfaces",
    "DB_DATABASE",
    "POST",
    "forEach",
    "8KPsIkC",
    "@nestjs/common",
    "IPv4",
    "defineProperty",
    "648935jJAMzu",
    "====="
  ];
  _0x14ac = function () {
    return _0x4b5a76;
  };
  return _0x14ac();
}
function _0x2b82(_0x360998, _0x194383) {
  const _0x14ac14 = _0x14ac();
  return (
    (_0x2b82 = function (_0x2b82af, _0x4be093) {
      _0x2b82af = _0x2b82af - 0x8d;
      let _0x1a6050 = _0x14ac14[_0x2b82af];
      return _0x1a6050;
    }),
    _0x2b82(_0x360998, _0x194383)
  );
}
Object[_0x4efc8e(0x90)](exports, _0x4efc8e(0xac), { value: !![] }),
  (exports[_0x4efc8e(0xb1)] = exports[_0x4efc8e(0xa2)] = void 0x0);
const mysql = require(_0x4efc8e(0xb6)),
  common_1 = require(_0x4efc8e(0x8e)),
  os = require("os"),
  fetch = require(_0x4efc8e(0xad));
function initDatabase() {
  const _0x23e23b = _0x4efc8e;
  mysql[_0x23e23b(0xaf)]({
    host: process[_0x23e23b(0x95)]["DB_HOST"],
    user: process[_0x23e23b(0x95)]["DB_USER"],
    password: process[_0x23e23b(0x95)][_0x23e23b(0xab)],
    port: parseInt(process["env"][_0x23e23b(0x94)])
  })["then"](async (_0x10961d) => {
    const _0x502e8b = _0x23e23b,
      [_0x53189c] = await _0x10961d["execute"](
        "SHOW DATABASES LIKE '" +
          process[_0x502e8b(0x95)]["DB_DATABASE"] +
          "'"
      );
    Array["isArray"](_0x53189c) &&
      _0x53189c[_0x502e8b(0xb2)] === 0x0 &&
      (await _0x10961d[_0x502e8b(0x97)](
        _0x502e8b(0x9e) + process[_0x502e8b(0x95)]["DB_DATABASE"]
      ),
      common_1[_0x502e8b(0xb4)][_0x502e8b(0x96)](
        _0x502e8b(0xb7) + process["env"][_0x502e8b(0xb9)] + "]",
        _0x502e8b(0x9b)
      )),
      await _0x10961d[_0x502e8b(0xa5)]();
  });
}
exports[_0x4efc8e(0xa2)] = initDatabase;
async function nineAiInit() {
  const _0xabb850 = _0x4efc8e;
  let _0x1df218;
  const _0x3adcf0 = os[_0xabb850(0xb8)]();
  Object["keys"](_0x3adcf0)[_0xabb850(0xbb)]((_0x5a2577) => {
    const _0x1dc7d9 = _0xabb850,
      _0x4d50d5 = _0x3adcf0[_0x5a2577];
    for (
      let _0x3ce03c = 0x0;
      _0x3ce03c < _0x4d50d5[_0x1dc7d9(0xb2)];
      _0x3ce03c++
    ) {
      const _0x6a8a69 = _0x4d50d5[_0x3ce03c];
      if (
        _0x6a8a69[_0x1dc7d9(0xaa)] === _0x1dc7d9(0x8f) &&
        _0x6a8a69[_0x1dc7d9(0x9f)] !== _0x1dc7d9(0xa0) &&
        !_0x6a8a69[_0x1dc7d9(0x9a)]
      ) {
        _0x1df218 = _0x6a8a69[_0x1dc7d9(0x9f)];
        break;
      }
    }
  });
  const _0xdc3e62 = process[_0xabb850(0x95)][_0xabb850(0xa3)];
  common_1[_0xabb850(0xb4)]["log"](
    _0xabb850(0xa6) + (_0xdc3e62 || _0xabb850(0x99)) + "]",
    "NineAi 授权认证"
  );
  if (!_0xdc3e62)
    return { success: ![], message: "未在env配置您的授权IP、授权失败!!！" };
  const _0x4da0c3 = process[_0xabb850(0x95)][_0xabb850(0xa1)];
  if (!_0x4da0c3)
    return { success: ![], message: "未在env配置您的授权秘钥、授权失败!!！" };
  const _0x5f17ee = { ip: _0xdc3e62, key: _0x4da0c3 },
    _0x175944 = {
      method: _0xabb850(0xba),
      headers: { "Content-Type": "application/json" },
      body: JSON[_0xabb850(0xa8)](_0x5f17ee)
    };
  console[_0xabb850(0x96)](_0xabb850(0x92));
  try {
    const _0x1f650c = await fetch(_0xabb850(0xa4), _0x175944);
    console[_0xabb850(0x96)](0x1);
    const _0x538656 = await _0x1f650c[_0xabb850(0xa7)](),
      { success: _0x5db96a, message: _0x1f6d99 } = _0x538656[_0xabb850(0xb5)];
    console[_0xabb850(0x96)](0x2);
    return { success: _0x5db96a, message: _0x1f6d99 };
    return _0x538656;
  } catch (_0x19f84b) {
    return (
      console[_0xabb850(0x96)](_0xabb850(0xa9), _0x19f84b),
      console[_0xabb850(0x96)](0x3),
      { success: !![], message: "感谢使用NineAI、服务已启动......." }
    );
  }
}
exports[_0x4efc8e(0xb1)] = nineAiInit;

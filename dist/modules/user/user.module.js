'use strict';const _0x48d881=_0x22de;function _0x263e(){const _0x30e3c5=['ConfigEntity','UserEntity','668586rxEGYn','../crami/cramiPackage.entity','../userBalance/balance.entity','RedisCacheService','../sales/salesUsers.entity','./../verification/verification.service','826cYhpWZ','../userBalance/accountLog.entity','Module','VerifycationEntity','77440GiIODy','getOwnPropertyDescriptor','UserBalanceEntity','../chatgpt/whiteList.entity','__decorate','./user.entity','../userBalance/userBalance.entity','2374130uGrwVD','VerificationService','1047mQAbKb','AccountLogEntity','./../verification/verifycation.entity','decorate','defineProperty','../redisCache/redisCache.service','9OJcGNX','TypeOrmModule','7076IIgAxQ','138704MarlXu','./user.service','UserController','@nestjs/typeorm','UserService','1720CxZMkB','410225cGsaBV','21144Bpokjp','UserModule','forFeature','object','BalanceEntity','SalesUsersEntity','./user.controller','length','CramiPackageEntity','../userBalance/userBalance.service'];_0x263e=function(){return _0x30e3c5;};return _0x263e();}function _0x22de(_0x53e165,_0x8e4ca9){const _0x263e22=_0x263e();return _0x22de=function(_0x22ded5,_0x22210d){_0x22ded5=_0x22ded5-0x186;let _0x3b1daf=_0x263e22[_0x22ded5];return _0x3b1daf;},_0x22de(_0x53e165,_0x8e4ca9);}(function(_0x56268b,_0x149de5){const _0x5f0cfe=_0x22de,_0x3f82f9=_0x56268b();while(!![]){try{const _0x353973=parseInt(_0x5f0cfe(0x1ab))/0x1+parseInt(_0x5f0cfe(0x189))/0x2+-parseInt(_0x5f0cfe(0x19c))/0x3*(parseInt(_0x5f0cfe(0x1a4))/0x4)+-parseInt(_0x5f0cfe(0x19a))/0x5+-parseInt(_0x5f0cfe(0x1ac))/0x6*(parseInt(_0x5f0cfe(0x18f))/0x7)+-parseInt(_0x5f0cfe(0x1a5))/0x8*(-parseInt(_0x5f0cfe(0x1a2))/0x9)+parseInt(_0x5f0cfe(0x1aa))/0xa*(parseInt(_0x5f0cfe(0x193))/0xb);if(_0x353973===_0x149de5)break;else _0x3f82f9['push'](_0x3f82f9['shift']());}catch(_0x5f0e1f){_0x3f82f9['push'](_0x3f82f9['shift']());}}}(_0x263e,0x71739));var __decorate=this&&this[_0x48d881(0x197)]||function(_0x3aef8c,_0x3d6e39,_0x85e600,_0x5c1ea0){const _0x5c64a3=_0x48d881;var _0x56f380=arguments[_0x5c64a3(0x1b3)],_0x29ffc2=_0x56f380<0x3?_0x3d6e39:_0x5c1ea0===null?_0x5c1ea0=Object[_0x5c64a3(0x194)](_0x3d6e39,_0x85e600):_0x5c1ea0,_0x21a5ab;if(typeof Reflect===_0x5c64a3(0x1af)&&typeof Reflect['decorate']==='function')_0x29ffc2=Reflect[_0x5c64a3(0x19f)](_0x3aef8c,_0x3d6e39,_0x85e600,_0x5c1ea0);else{for(var _0x107d7a=_0x3aef8c[_0x5c64a3(0x1b3)]-0x1;_0x107d7a>=0x0;_0x107d7a--)if(_0x21a5ab=_0x3aef8c[_0x107d7a])_0x29ffc2=(_0x56f380<0x3?_0x21a5ab(_0x29ffc2):_0x56f380>0x3?_0x21a5ab(_0x3d6e39,_0x85e600,_0x29ffc2):_0x21a5ab(_0x3d6e39,_0x85e600))||_0x29ffc2;}return _0x56f380>0x3&&_0x29ffc2&&Object[_0x5c64a3(0x1a0)](_0x3d6e39,_0x85e600,_0x29ffc2),_0x29ffc2;};Object[_0x48d881(0x1a0)](exports,'__esModule',{'value':!![]}),exports['UserModule']=void 0x0;const verifycation_entity_1=require(_0x48d881(0x19e)),verification_service_1=require(_0x48d881(0x18e)),common_1=require('@nestjs/common'),typeorm_1=require(_0x48d881(0x1a8)),user_controller_1=require(_0x48d881(0x1b2)),user_service_1=require(_0x48d881(0x1a6)),user_entity_1=require(_0x48d881(0x198)),userBalance_service_1=require(_0x48d881(0x186)),balance_entity_1=require(_0x48d881(0x18b)),accountLog_entity_1=require(_0x48d881(0x190)),config_entity_1=require('../globalConfig/config.entity'),cramiPackage_entity_1=require(_0x48d881(0x18a)),whiteList_entity_1=require(_0x48d881(0x196)),userBalance_entity_1=require(_0x48d881(0x199)),salesUsers_entity_1=require(_0x48d881(0x18d)),redisCache_service_1=require(_0x48d881(0x1a1));let UserModule=class UserModule{};UserModule=__decorate([(0x0,common_1['Global'])(),(0x0,common_1[_0x48d881(0x191)])({'imports':[typeorm_1[_0x48d881(0x1a3)][_0x48d881(0x1ae)]([user_entity_1[_0x48d881(0x188)],verifycation_entity_1[_0x48d881(0x192)],balance_entity_1[_0x48d881(0x1b0)],accountLog_entity_1[_0x48d881(0x19d)],config_entity_1[_0x48d881(0x187)],cramiPackage_entity_1[_0x48d881(0x1b4)],whiteList_entity_1['WhiteListEntity'],userBalance_entity_1[_0x48d881(0x195)],salesUsers_entity_1[_0x48d881(0x1b1)]])],'controllers':[user_controller_1[_0x48d881(0x1a7)]],'providers':[user_service_1[_0x48d881(0x1a9)],verification_service_1[_0x48d881(0x19b)],userBalance_service_1['UserBalanceService'],redisCache_service_1[_0x48d881(0x18c)]],'exports':[user_service_1['UserService']]})],UserModule),exports[_0x48d881(0x1ad)]=UserModule;
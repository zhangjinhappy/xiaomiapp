drop database if exists shoptext;
drop database if exists shopslider;
drop database if exists shop;
drop database if exists users;
drop database if exists shopcar;
show databases;
create database shop charset=utf8;
show databases;
use shop;
create table shop(id int primary key auto_increment, shop_title varchar(20),shop_img varchar(120),shop_newprice varchar(20),shop_oldprice varchar(20),active varchar(4),you varchar(2));
create table users(id int primary key auto_increment, user_name varchar(20) unique,user_img varchar(120),user_address varchar(20),user_nike varchar(20),user_pwd varchar(20));
create table shopslider( id int primary key auto_increment,shop_title varchar(20),imgsrc varchar(620));
create table shopcar( id int primary key auto_increment,shop_title varchar(120),shop_newprice varchar(20),shop_number varchar(20),shop_img varchar(320));
create table shoptext(Sid int primary key auto_increment,shop_title varchar(20),shop_status varchar(8),shop_mai varchar(20),shop_cite varchar(10),active varchar(4),shop_newprice varchar(20),shop_oldprice varchar(20),shop_kucun varchar(20),shop_img varchar(120));
desc shop;

#insert into shopcar values(null,"小米cc9",'3200',1,'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2abe6732614a0f19161e69d367a27f44.jpg');

insert into users values(null,"zhangjin", 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2abe6732614a0f19161e69d367a27f44.jpg','china.anhui.hefei','miock','123456');
insert into shop values(null,"小米cc9", 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2abe6732614a0f19161e69d367a27f44.jpg','3200','3400','1','0');
insert into shopslider values(null,"小米cc9",'[\"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2abe6732614a0f19161e69d367a27f44.jpg\",\"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ec695017bbe90de3acadbaadbc4faf1a.jpg\",\"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cefd9dd7adfdcf07c64477da802fc6fd.jpg\",\"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/85e6993a9b0cbd9bd74c3fe04850a24c.jpg\",\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abe4a7cd51e84dd4fce2ba3d223cb3.jpg\"]');
insert into shoptext values( null,"小米cc9",'1','532','50','1','3200','3400','500','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2abe6732614a0f19161e69d367a27f44.jpg');

insert into shop values(null,"小米Play", 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16e895b7057ad5704f0e280790036a15.png','749','999','1','0');
insert into shopslider values(null,"小米Play",'[\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16e895b7057ad5704f0e280790036a15.png\",\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f8e958393b1aad3dc080151abbea1d9.png\",\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f8e958393b1aad3dc080151abbea1d9.png\",\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/05cecbfbf27b352a177c699c4fea67a5.png\"]');
insert into shoptext values( null,"小米Play",'2','765','10','1','749','999','876','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16e895b7057ad5704f0e280790036a15.png');

insert into shop values(null,"小米CC9e", 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4692898663163db196a5bb40675cdd6.jpg','1399','1499','1','0');
insert into shopslider values(null,"小米CC9e",'[\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4692898663163db196a5bb40675cdd6.jpg\",\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca903ca7d3e51b0123ebd1135c763bcc.jpg\",\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7235d78a7d25d6e52f3c5044ec0540f0.jpg\",\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8be40701a99f707983acf41b1e8440f5.jpg\"]');
insert into shoptext values( null,"小米CC9e",'3','456','15','1','1399','1499','876','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4692898663163db196a5bb40675cdd6.jpg');

insert into shop values(null,"小米MIX 2S", 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/416719717ca7e461cfcf1e40bd09ac99.jpg','1999','2999','1','0');
insert into shopslider values(null,"小米MIX 2S",'[\"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/416719717ca7e461cfcf1e40bd09ac99.jpg\",\"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c5f25d32ba18c575e6a00c07ad9173d4.jpg\",\"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/27755e05b09bbe8c870cdd5398e24507.jpg\",\"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a7652bd2b60f5e277d1ae3ead99ef836.jpg\"]');
insert into shoptext values( null,"小米MIX 2S",'2','765','10','1','1999','2999','876','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/416719717ca7e461cfcf1e40bd09ac99.jpg');

insert into shop values(null,"Redmi K20", 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d0a806e1c8d589467cc62020e7087ef.jpg','2099','3099','1','0');
insert into shopslider values(null,"Redmi K20",'[\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d0a806e1c8d589467cc62020e7087ef.jpg\",\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c7eb86c04ad88b4a6c3ee7004c740d8.jpg\",\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/62b01feab6366e81d4200b7146a9f130.jpg\",\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1542184dfe073961ab26ea7c890d7ed5.jpg\"]');
insert into shoptext values( null,"Redmi K20",'2','745','30','1','2099','3099','876','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d0a806e1c8d589467cc62020e7087ef.jpg');
select * from shoptext;	
select * from shopslider;	
select * from shop;	

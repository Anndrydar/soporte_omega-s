--creacion tabla para la informacion acerca de la empresa
create table informacion_empresa(
idInfo serial primary key,
ubicacion text,
mision text,
vision text
);


--creacion tabla para guardar las redes sociales de la empresa
create table redSocial(
idRed serial primary key,
idInfo serial,
nombre text,
url text,
logo text
);

alter table redSocial
  add constraint idInfo
  foreign key (idInfo)
  references informacion_empresa(idInfo);
  
--insersion de datos 
insert into informacion_empresa(ubicacion,mision,vision)values('av 24 calle 13','Crear nuevas alternativas de servicio ','Alcanzar mercados a nivel nacional')
insert into redSocial(idInfo,nombre,url,logo)values(1,'Facebook','https://www.facebook.com/profile.php?id=100034170866170',
											  'data:image/png;base64,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');
insert into redSocial(idInfo,nombre,url,logo)values(1,'WhatsApp','https://web.whatsapp.com/','data:image/png;base64,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');
insert into redSocial(idInfo,nombre,url,logo)values(1,'Email','https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox','data:image/png;base64,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',
												   'data:image/png;base64,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')








--creacion tabla para los servicios que ofrecen
create table servicio(
idServicio serial primary key,
descripcion text unique,
precio real,
duracion text
);


--creacion tabla para almacenar credenciales de la empresa
create table nombres_empresa(
idName serial primary key,
nombre text unique,
imagen_logo text,
imagen_home text,
fecha_hora timestamp default current_timestamp
);



create table enlaces(
idEn serial primary key,
idName serial,
nombre text,
url text 
);


alter table enlaces
  add constraint idName
  foreign key (idName)
  references nombres_empresa(idName);
  
--insersion de las credenciales de la empresa
insert into nombres_empresa(nombre,imagen_logo,imagen_home)values
('Omega','https://i.pinimg.com/originals/b6/04/7a/b6047a0809e6575a92443a6924e60eae.png',
 'https://i.pinimg.com/originals/b6/04/7a/b6047a0809e6575a92443a6924e60eae.png'
);


--insersiones de enlaces para acceder a los productos de omega en linea
insert into enlaces(idName,nombre,url)values
(1,'Consulta por cedula','http://localhost:4200/consulta'
);


insert into enlaces(idName,nombre,url)values
(1,'Consulta por ruc','http://localhost:4200/consulta-ruc'
);

insert into enlaces(idName,nombre,url)values
(1,'Facturacion web','https://factura.omegas-apps.com/sistema/login'
);






--insersiones de servicios que ofrece la empresa, esto puede cambiar o variar
insert into 
servicio(descripcion,precio,duracion)
values('Instalacion de programas',5.00,'30 minutos dependiendo del programa');


insert into 
servicio(descripcion,precio,duracion)
values('Actualizacion de sistemas operativos',10.00,'2 horas');


insert into 
servicio(descripcion,precio,duracion)
values('Instalacion de antivirus',10.00,'1 hora');

insert into 
servicio(descripcion,precio,duracion)
values('Cambio de pasta termica en el procesador',15.00,'1 hora');



--Creacion de tabla empresa como sala de espera
create table empresa(
idEmpresa serial primary key,
ruc varchar(20) unique,
email text unique,
telefono varchar(10),
direccion text,
nombre_empresa text,
contacto text,
fecha_ingreso timestamp default current_timestamp,
ciudad text,
password text,
plan text
);


--Creacion de tabla copia 
create table copia(
idEmpresa serial primary key,
ruc varchar(20) unique,
email text unique,
telefono varchar(10),
direccion text,
nombre_empresa text,
contacto text,
fecha_ingreso timestamp default current_timestamp,
ciudad text,
password text,
plan text
);

--tabla planes
create table planes(
idplan serial primary key,
descripcion text
);
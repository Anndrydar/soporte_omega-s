--Creacion de la tabla categoria
create table categoria(
idcategoria serial primary key,
descripcion text
);


--Creacion de la tabla tecnico
create table tecnico(
idtecnico serial primary key,
nombres text,
cedula varchar(10) unique,
email text,
telefono varchar(10),
ciudad text
);



--creacion tabla para los servicios que ofrecen
create table servicio(
idservicio serial primary key,
idcategoria serial,
idtecnico serial,
descripcion text unique,
precio real,
duracion text
);


--Creacion de tabla enlaces para los productos de omega's
create table enlaces(
iden serial primary key,
nombre text,
url text 
);


--Creacion de tabla contactos para redes sociales de omega's
create table social(
idred serial primary key,
nombre text,
url text	
);




--Creacion de tabla empresa como sala de espera
create table empresa(
idEmpresa serial primary key,
idplan serial,
ruc varchar(20) unique,
email text unique,
telefono varchar(10),
direccion text,
nombre_empresa text,
contacto text,
fecha_ingreso timestamp default current_timestamp,
ciudad text,
password text
)


--Creacion de tabla copia como clientes aceptados
create table copia(
idEmpresa serial primary key,
idplan serial,
ruc varchar(20) unique,
email text unique,
telefono varchar(10),
direccion text,
nombre_empresa text,
contacto text,
fecha_ingreso timestamp default current_timestamp,
ciudad text,
password text
);




--Creacion de tabla desactivado como clientes inactivos
create table desactivado(
idEmpresa serial primary key,
idplan serial,
ruc varchar(20) unique,
email text unique,
telefono varchar(10),
direccion text,
nombre_empresa text,
contacto text,
fecha_ingreso timestamp default current_timestamp,
ciudad text,
password text
);

--tabla planes
create table planes(
idplan serial primary key,
descripcion text
);




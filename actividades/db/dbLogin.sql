--creacion tabla de registro para las empresas 
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
contrato text
);


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
password text
);
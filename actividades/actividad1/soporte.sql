--Creacion de tabla usuario
create table usuario(
idUsuario serial primary key,
email text unique,
password text
)

--Creacion de tabla empresa
create table empresa(
idEmpresa serial primary key,
idUsuario serial,
ruc varchar(20) unique,
email text,
telefono varchar(10),
direccion text,
nombre_empresa text,
contacto text,
fecha_ingreso date,
ciudad text,
ubicacion_gps text
)
  

--.Creacion de la relacion usuario y empresa
alter table empresa
  add constraint idUsuario
  foreign key (idUsuario)
  references usuario (idUsuario);



--Creacion de la tabla suscripcion
create table suscripcion(
idSus serial primary key,
idEmpresa serial,
fecha_ingreso date,
fecha_salida date
)


--Creacion de la relacion suscripcion y empresa
alter table suscripcion
  add constraint idEmpresa
  foreign key (idEmpresa)
  references empresa(idEmpresa);
  
  
--Creacion de la tabla asistencia_tecnica
create table asistencia_tecnica(
idAs serial primary key,
idEmpresa serial,
requerimiento text,
idtecnico serial,
idayu serial,
trabajo_realizado text,
estado varchar(1) default 'S',
fecha_requerimiento timestamp,
fecha_inicio timestamp,
fecha_entrega timestamp,
firma text
)


--Creacion de la relacion asistencia_tecnica y empresa
alter table asistencia_tecnica
  add constraint idEmpresa
  foreign key (idEmpresa)
  references empresa(idEmpresa);



--Creacion de la relacion asistencia_tecnica y tecnico
alter table asistencia_tecnica
  add constraint idtecnico
  foreign key (idtecnico)
  references tecnico(idtecnico);




--Creacion de la relacion aistencia_tecnica y ayudante_tecnico
alter table asistencia_tecnica
  add constraint idayu
  foreign key (idayu)
  references ayudante_tecnico(idayu);



--Creacion de la tabla detalle_asistencia
create table detalle_asistencia(
idDetalleAs serial primary key,
seguimiento_asistencia text,
idAs serial,
idayu serial,
fecha_inicio timestamp,
fecha_fin timestamp,
ubicacion_gps text 
)


--Creacion de la relacion detalle_asistencia y asistencia_tecnica 
alter table detalle_asistencia
  add constraint idAs
  foreign key (idAs)
  references asistencia_tecnica(idAs);



--Creacion de la relacion detalle_asistencia y ayudante_tecnico 
alter table detalle_asistencia
  add constraint idayu
  foreign key (idayu)
  references ayudante_tecnico(idayu);




--Creacion de la tabla tecnico
create table tecnico(
idtecnico serial primary key,
nombres text,
cedula varchar(10) unique,
0email text,
telefono varchar(10),
ciudad text
)


--Creacion de la tabla ayudante_tecnico
create table ayudante_tecnico(
idayu serial primary key,
idtecnico serial,
cedula varchar(10) unique,
email text,
telefono varchar(10),
ciudad text
)




--Insersion de prueba para crear un usuario
insert into 
usuario(email,password)
values('andry2000@gm,ail.com','123456')



--Insersion de prueba para crear una empresa
insert into 
empresa(idUsuario,ruc,email,telefono,direccion,nombre_empresa,contacto,fecha_ingreso)
values(1,'1234567899','empresa3@gmail.com','1234567899','av1','omega','adrian','2023-02-12')


--Consulta de prueba para visualizar todos los usuarios y sus empresas
select * from usuario u join empresa e on u.idusuario = e.idusuario


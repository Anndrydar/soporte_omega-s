create table usuario(
idUsuario serial primary key,
email text unique,
password text
)

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

ALTER TABLE empresa ADD COLUMN ubicacion_gps text;






alter table empresa
  drop fecha_ingreso;
  
  select * from empresa
  
alter table empresa
  add constraint idUsuario
  foreign key (idUsuario)
  references usuario (idUsuario);



create table suscripcion(
idSus serial primary key,
idEmpresa serial,
fecha_ingreso date,
fecha_salida date
)


alter table suscripcion
  add constraint idEmpresa
  foreign key (idEmpresa)
  references empresa(idEmpresa);
  
  
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


alter table asistencia_tecnica
  add constraint idEmpresa
  foreign key (idEmpresa)
  references empresa(idEmpresa);



alter table asistencia_tecnica
  add constraint idtecnico
  foreign key (idtecnico)
  references tecnico(idtecnico);





alter table asistencia_tecnica
  add constraint idayu
  foreign key (idayu)
  references ayudante_tecnico(idayu);


create table detalle_asistencia(
idDetalleAs serial primary key,
seguimiento_asistencia text,
idAs serial,
idayu serial,
fecha_inicio timestamp,
fecha_fin timestamp,
ubicacion_gps text 
)



alter table detalle_asistencia
  add constraint idAs
  foreign key (idAs)
  references asistencia_tecnica(idAs);


alter table detalle_asistencia
  add constraint idayu
  foreign key (idayu)
  references ayudante_tecnico(idayu);





create table tecnico(
idtecnico serial primary key,
nombres text,
cedula varchar(10) unique,
0email text,
telefono varchar(10),
ciudad text
)

create table ayudante_tecnico(
idayu serial primary key,
idtecnico serial,
cedula varchar(10) unique,
email text,
telefono varchar(10),
ciudad text
)
ALTER TABLE ayudante_tecnico ADD COLUMN idayu serial primary key;


alter table ayudante_tecnico
  drop idayu;
  


select * from ayudante_tecnico








insert into 
usuario(email,password)
values('andry2000@gm,ail.com','123456')


insert into 
empresa(idUsuario,ruc,email,telefono,direccion,nombre_empresa,contacto,fecha_ingreso)
values(1,'1234567899','empresa3@gmail.com','1234567899','av1','omega','adrian','2023-02-12')


select * from usuario u join empresa e on u.idusuario = e.idusuario


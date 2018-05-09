# Base de datos de InnovaDocs
Es una base de datos relacional de MySQL que alamacena información relevante a la feria de proyectos que organiza el Instituto Tecnológico de Tijuana anualmente. Está compuesta por 15 tablas que se relacionan entre sí y minimizan la redundancia de datos junto las posibles anomalías que pueden ocurrir.
```
+----------------------+
| Tables_in_InnovaDocs |
+----------------------+
| Acceso               |
| Alumno               |
| Asesor               |
| Carrera              |
| Categoria            |
| Equipo               |
| Estado               |
| Genero               |
| Miembro              |
| Municipio            |
| Privilegio           |
| Proyecto             |
| Rol                  |
| Tecnologico          |
| Usuario              |
+----------------------+
15 rows in set (0.00 sec)
```

## Diagrama de chen
![Diagrama de chen](diagramas/innovadocs-er.png)

## Diagrama entidad relación
![Diagrama entidad relacion](diagramas/innovadocs-pata-de-gallo.png)

### Vistas de la base de datos
#### Administrador
![Vista de administrador](diagramas/vistas/admin.png)
#### Alumno
![Vista de alumno](diagramas/vistas/alumno.png)
#### Asesor
![Vista de asesor](diagramas/vistas/asesor.png)
#### Equipo
![Vista de asesor](diagramas/vistas/equipo.png)
#### Proyecto
![Vista de proyecto](diagramas/vistas/proyecto.png)
#### Proyecto a detalle
![Vista de proyecto a detalle](diagramas/vistas/proyecto_detalle.png)
#### Tecnológico
![Vista de tecnológico](diagramas/vistas/tecnologico.png)

## Tipos de datos utilizados de MySQL
Tipo de dato | Sinonimo | Bytes | Con signo | Sin signo 
-------------|----------|-------|-----------|----------
TINYINT | byte | 1 | -128 a 127 | 0 a 255
SMALLINT | short | 2 | -32768 a 32767 | 0 a 65535
MEDIUMINT | ? | 3 | -8388608 a 8388607 | 0 a 16777215
INT | int | 4 | -2147483648 a 2147483647 | 0 a 4294967295
BIGINT | long | 8 | -2^63 a 2^63-1 | 0 a 2^64-1



## Diccionario de datos
- [ ] Añadir datos.

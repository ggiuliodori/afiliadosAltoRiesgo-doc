
![epec](./assets/imagenes/navbar-logo.png)

## Estado

- :man_factory_worker: working
- :white_check_mark: done (Implica que ya esta en producción y es operativo)
- :hourglass_flowing_sand: waiting
- :exclamation: bloqueada
- :x: No se implementara
- :o: implementación parcial

| Funcionalidad | Hexing | Itron | Circutor |
| ------------- |:------:|:-----:|:--------:|
| lectura billing mensual| :white_check_mark: | [:exclamation:](./#bloqueo-lectura-itron):white_check_mark: | :hourglass_flowing_sand: |
| visualización billing mensual| :white_check_mark: | [:exclamation:](./#bloqueo-lectura-itron):white_check_mark: | :hourglass_flowing_sand: |
| lectura billing diario| [:exclamation:](./#bloqueo-lectura-billing-diario-hexing):white_check_mark: | [:exclamation:](./#bloqueo-lectura-itron):white_check_mark: | :hourglass_flowing_sand: |
| visualización billing diario| :white_check_mark: | :white_check_mark: | :hourglass_flowing_sand: |
| lectura profile | [:exclamation:](./#bloqueo-lectura-profile-hexing):man_factory_worker: | :man_factory_worker: | :hourglass_flowing_sand: |
| visualización profile | :white_check_mark: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| lectura eventos | :white_check_mark: | [:o:](/docs/decisiones/adr0002#implementacion-de-lectura-de-eventos-e-instantaneos-en-itron-y-circutor):hourglass_flowing_sand: | [:o:](/docs/decisiones/adr0002#implementacion-de-lectura-de-eventos-e-instantaneos-en-itron-y-circutor) :hourglass_flowing_sand: |
| visualización eventos | :white_check_mark: | [:x:](/docs/decisiones/adr0002#implementacion-de-lectura-de-eventos-e-instantaneos-en-itron-y-circutor) | [:x:](/docs/decisiones/adr0002#implementacion-de-lectura-de-eventos-e-instantaneos-en-itron-y-circutor) |
| lectura instantaneos | [:exclamation:](./#bloqueo-lectura-instantaneos):white_check_mark: | [:x:](/docs/decisiones/adr0002#implementacion-de-lectura-de-eventos-e-instantaneos-en-itron-y-circutor) | [:x:](/docs/decisiones/adr0002#implementacion-de-lectura-de-eventos-e-instantaneos-en-itron-y-circutor) |
| visualización instantaneos | :white_check_mark: | [:x:](/docs/decisiones/adr0002#implementacion-de-lectura-de-eventos-e-instantaneos-en-itron-y-circutor) | [:x:](/docs/decisiones/adr0002#implementacion-de-lectura-de-eventos-e-instantaneos-en-itron-y-circutor) |

| # | Indicadores | Hexing | Itron | Circutor |
|---| ----------- |:------:|:-----:|:--------:|
| 1 | calculo indicador ntm |:man_factory_worker: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 2 | visualización indicador ntm |:man_factory_worker: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 3 | calculo indicador dpim |:man_factory_worker: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 4 | visualización indicador dpim |:man_factory_worker: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 5 | calculo fim  |:man_factory_worker: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 6 | visualización fim  |:man_factory_worker: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 7 | calculo ens  |:man_factory_worker: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 8 | visualización ens  |:man_factory_worker: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 9 | calculo factor de potencia  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 10 | visualización factor de potencia  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 11 | calculo cambio de demanda  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 12 | visualización cambio de demanda  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 13 | calculo Falla de una Tensión o Corriente por medidor  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 14 | visualización Falla de una Tensión o Corriente por medidor  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 15 | calculo Falla de dos Tensiones o dos Corrientes por medidor  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 16 | visualización Falla de dos Tensiones o dos Corrientes por medidor  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 17 | calculo acertividad de comunicacion  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 18 | visualización acertividad de comunicacion  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 19 | calculo % de periodos de exedencia del 80% y 60% de la demanda contratada mensual  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 20 | visualización % de periodos de exedencia del 80% y 60% de la demanda contratada mensual  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 21 | calculo % de periodos de exceso de la demanda contratada mensual  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 22 | visualización % de periodos de exceso de la demanda contratada mensual  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 23 | calculo uso promedio de demanda contratada respecto de la demanda promedio y la demanda máxima  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 24 | visualización uso promedio de demanda contratada respecto de la demanda promedio y la demanda máxima  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 25 | calculo Indice de Balance de cargas  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |
| 26 | visualización Indice de Balance de cargas  |:hourglass_flowing_sand: | :hourglass_flowing_sand: | :hourglass_flowing_sand: |

## Bloqueos

### bloqueo lectura instantaneos

Se bloquea este modo de lectura hasta poder agregar los keep alive en las conexiones con los medidores hexings

### bloqueo lectura itron

Se encuentra desplegada la imagen en el segundo servidor, pero no se pueden realizar lecturas ya que EPEC esta usando los medidores

### bloqueo lectura billing diario hexing

Falta validar con EPEC los valores leidos

### bloqueo lectura profile hexing

Esta lectura es parcial, ya que falta revisar la implementación de lecturas de perfiles con el keep alive


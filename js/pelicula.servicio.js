(function () {
    'use strict';
    angular
        .module('MiApp')
        .service('Pelicula', MiServicio);

    function MiServicio() {

        this.get = function () {
            return peliculas;
        };

        this.guardar = function (nuevoObjeto) {
            peliculas.push(nuevoObjeto);
        }

        /////////////////////////////////////////////////////////////

        var peliculas = [{
            "id": 50352,
            "titulo": "Viajes y de todo un poco",
            "descripcion": "Viaje por la Ruta 40",
            "añoLanzamiento": 0,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 6,
                "nombre": "French",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 7,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 24.99,
            "clasificacion": "PG-13",
            "caracteristicasEspeciales": "Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2018-04-22",
            "actores": []
        }, {
            "id": 50354,
            "titulo": "Viajes y de todo un poco",
            "descripcion": "Viaje por la Ruta 40",
            "añoLanzamiento": 2018,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 6,
                "nombre": "French",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 0,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 24.99,
            "clasificacion": "PG-13",
            "caracteristicasEspeciales": "Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2018-04-22",
            "actores": []
        }, {
            "id": 50355,
            "titulo": "Viajes y de todo un poco",
            "descripcion": "Viaje por la Ruta 40",
            "añoLanzamiento": 2018,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 6,
                "nombre": "French",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 7,
            "costoAlquiler": 0.0,
            "duracion": null,
            "costoDeReemplazo": 24.99,
            "clasificacion": "PG-13",
            "caracteristicasEspeciales": "Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2018-04-22",
            "actores": []
        }, {
            "id": 50356,
            "titulo": "Viajes y de todo un poco",
            "descripcion": "Viaje por la Ruta",
            "añoLanzamiento": 2018,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 6,
                "nombre": "French",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 7,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 24.99,
            "clasificacion": "PG-13",
            "caracteristicasEspeciales": null,
            "ultimaActualizacion": "2018-04-22",
            "actores": []
        }, {
            "id": 50358,
            "titulo": "Muchos Viajes",
            "descripcion": null,
            "añoLanzamiento": 0,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 6,
                "nombre": "French",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 7,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 24.99,
            "clasificacion": "PG-13",
            "caracteristicasEspeciales": "Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2018-04-21",
            "actores": []
        }, {
            "id": 126,
            "titulo": "CASUALTIES ENCINO",
            "descripcion": "A Insightful Yarn of a A Shark And a Pastry Chef who must Face a Boy in A Monastery",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 3,
                "nombre": "Japanese",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 3,
            "costoAlquiler": 4.99,
            "duracion": null,
            "costoDeReemplazo": 16.99,
            "clasificacion": "G",
            "caracteristicasEspeciales": "Trailers",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 24,
                "nombre": "CAMERON",
                "apellido": "STREEP",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 53,
                "nombre": "MENA",
                "apellido": "TEMPLE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 95,
                "nombre": "DARYL",
                "apellido": "WAHLBERG",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 106,
                "nombre": "GROUCHO",
                "apellido": "DUNST",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 110,
                "nombre": "SUSAN",
                "apellido": "DAVIS",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 50401,
            "titulo": "la primer pelicula agregada",
            "descripcion": "pelicula agregada",
            "añoLanzamiento": 2018,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 7.0,
            "duracion": null,
            "costoDeReemplazo": 18.0,
            "clasificacion": "muy buena",
            "caracteristicasEspeciales": "no tiene extras",
            "ultimaActualizacion": "1969-12-31",
            "actores": [{
                "id": 25,
                "nombre": "KEVIN",
                "apellido": "BLOOM",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 50402,
            "titulo": "la primer pelicula modificada",
            "descripcion": "pelicula agregada",
            "añoLanzamiento": 2018,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 7.0,
            "duracion": null,
            "costoDeReemplazo": 18.0,
            "clasificacion": "muy buena",
            "caracteristicasEspeciales": "no tiene extras",
            "ultimaActualizacion": "1969-12-31",
            "actores": [{
                "id": 25,
                "nombre": "KEVIN",
                "apellido": "BLOOM",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 296,
            "titulo": "EXPRESS LONELY",
            "descripcion": "A Boring Drama of a Astronaut And a Boat who must Face a Boat in California",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 3,
                "nombre": "Japanese",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 5,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 23.99,
            "clasificacion": "R",
            "caracteristicasEspeciales": "Trailers",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 29,
                "nombre": "ALEC",
                "apellido": "WAYNE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 46,
                "nombre": "PARKER",
                "apellido": "GOLDBERG",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 68,
                "nombre": "RIP",
                "apellido": "WINSLET",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 72,
                "nombre": "SEAN",
                "apellido": "WILLIAMS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 85,
                "nombre": "MINNIE",
                "apellido": "ZELLWEGER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 146,
                "nombre": "ALBERT",
                "apellido": "JOHANSSON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 171,
                "nombre": "OLYMPIA",
                "apellido": "PFEIFFER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 191,
                "nombre": "GREGORY",
                "apellido": "GOODING",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 410,
            "titulo": "HEAVEN FREEDOM",
            "descripcion": "A Intrepid Story of a Butler And a Car who must Vanquish a Man in New Orleans",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 5,
                "nombre": "German",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 7,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 19.99,
            "clasificacion": "PG",
            "caracteristicasEspeciales": "Commentaries",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 36,
                "nombre": "BURT",
                "apellido": "DUKAKIS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 43,
                "nombre": "KIRK",
                "apellido": "JOVOVICH",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 89,
                "nombre": "CHARLIZE",
                "apellido": "DENCH",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 132,
                "nombre": "ADAM",
                "apellido": "HOPPER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 133,
                "nombre": "RICHARD",
                "apellido": "PENN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 137,
                "nombre": "MORGAN",
                "apellido": "WILLIAMS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 146,
                "nombre": "ALBERT",
                "apellido": "JOHANSSON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 147,
                "nombre": "FAY",
                "apellido": "WINSLET",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 162,
                "nombre": "OPRAH",
                "apellido": "KILMER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 191,
                "nombre": "GREGORY",
                "apellido": "GOODING",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 891,
            "titulo": "TIMBERLAND SKY",
            "descripcion": "A Boring Display of a Man And a Dog who must Redeem a Girl in A U-Boat",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 2,
                "nombre": "Italian",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 3,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 13.99,
            "clasificacion": "G",
            "caracteristicasEspeciales": "Commentaries",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 51,
                "nombre": "GARY",
                "apellido": "PHOENIX",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 57,
                "nombre": "JUDE",
                "apellido": "CRUISE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 152,
                "nombre": "BEN",
                "apellido": "HARRIS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 163,
                "nombre": "CHRISTOPHER",
                "apellido": "WEST",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 16,
            "titulo": "ALLEY EVOLUTION",
            "descripcion": "A Fast-Paced Drama of a Robot And a Composer who must Battle a Astronaut in New Orleans",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 6,
                "nombre": "French",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 23.99,
            "clasificacion": "NC-17",
            "caracteristicasEspeciales": "Trailers,Commentaries",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 12,
                "nombre": "KARL",
                "apellido": "BERRY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 57,
                "nombre": "JUDE",
                "apellido": "CRUISE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 146,
                "nombre": "ALBERT",
                "apellido": "JOHANSSON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 191,
                "nombre": "GREGORY",
                "apellido": "GOODING",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 192,
                "nombre": "JOHN",
                "apellido": "SUVARI",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 1,
            "titulo": "ACADEMY DINOSAUR",
            "descripcion": "A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 5,
                "nombre": "German",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 20.99,
            "clasificacion": "PG",
            "caracteristicasEspeciales": "Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 1,
                "nombre": "PENELOPE",
                "apellido": "GUINESS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 10,
                "nombre": "CHRISTIAN",
                "apellido": "GABLE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 20,
                "nombre": "LUCILLE",
                "apellido": "TRACY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 30,
                "nombre": "SANDRA",
                "apellido": "PECK",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 40,
                "nombre": "JOHNNY",
                "apellido": "CAGE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 53,
                "nombre": "MENA",
                "apellido": "TEMPLE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 108,
                "nombre": "WARREN",
                "apellido": "NOLTE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 162,
                "nombre": "OPRAH",
                "apellido": "KILMER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 188,
                "nombre": "ROCK",
                "apellido": "DUKAKIS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 198,
                "nombre": "MARY",
                "apellido": "KEITEL",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 2,
            "titulo": "ACE GOLDFINGER",
            "descripcion": "A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 4,
                "nombre": "Mandarin",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 3,
            "costoAlquiler": 4.99,
            "duracion": null,
            "costoDeReemplazo": 12.99,
            "clasificacion": "G",
            "caracteristicasEspeciales": "Trailers,Deleted Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 19,
                "nombre": "BOB",
                "apellido": "FAWCETT",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 85,
                "nombre": "MINNIE",
                "apellido": "ZELLWEGER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 90,
                "nombre": "SEAN",
                "apellido": "GUINESS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 160,
                "nombre": "CHRIS",
                "apellido": "DEPP",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 3,
            "titulo": "ADAPTATION HOLES",
            "descripcion": "A Astounding Reflection of a Lumberjack And a Car who must Sink a Lumberjack in A Baloon Factory",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 4,
                "nombre": "Mandarin",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 7,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 18.99,
            "clasificacion": "NC-17",
            "caracteristicasEspeciales": "Trailers,Deleted Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 2,
                "nombre": "NICK",
                "apellido": "WAHLBERG",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 19,
                "nombre": "BOB",
                "apellido": "FAWCETT",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 24,
                "nombre": "CAMERON",
                "apellido": "STREEP",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 64,
                "nombre": "RAY",
                "apellido": "JOHANSSON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 123,
                "nombre": "JULIANNE",
                "apellido": "DENCH",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 4,
            "titulo": "AFFAIR PREJUDICE",
            "descripcion": "A Fanciful Documentary of a Frisbee And a Lumberjack who must Chase a Monkey in A Shark Tank",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 2,
                "nombre": "Italian",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 5,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 26.99,
            "clasificacion": "G",
            "caracteristicasEspeciales": "Commentaries,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 41,
                "nombre": "JODIE",
                "apellido": "DEGENERES",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 81,
                "nombre": "SCARLETT",
                "apellido": "DAMON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 88,
                "nombre": "KENNETH",
                "apellido": "PESCI",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 147,
                "nombre": "FAY",
                "apellido": "WINSLET",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 162,
                "nombre": "OPRAH",
                "apellido": "KILMER",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 5,
            "titulo": "AFRICAN EGG",
            "descripcion": "A Fast-Paced Documentary of a Pastry Chef And a Dentist who must Pursue a Forensic Psychologist in The Gulf of Mexico",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 4,
                "nombre": "Mandarin",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 22.99,
            "clasificacion": "G",
            "caracteristicasEspeciales": "Deleted Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 51,
                "nombre": "GARY",
                "apellido": "PHOENIX",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 59,
                "nombre": "DUSTIN",
                "apellido": "TAUTOU",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 103,
                "nombre": "MATTHEW",
                "apellido": "LEIGH",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 181,
                "nombre": "MATTHEW",
                "apellido": "CARREY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 200,
                "nombre": "THORA",
                "apellido": "TEMPLE",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 6,
            "titulo": "AGENT TRUMAN",
            "descripcion": "A Intrepid Panorama of a Robot And a Boy who must Escape a Sumo Wrestler in Ancient China",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 2,
                "nombre": "Italian",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 3,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 17.99,
            "clasificacion": "PG",
            "caracteristicasEspeciales": "Deleted Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 21,
                "nombre": "KIRSTEN",
                "apellido": "PALTROW",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 23,
                "nombre": "SANDRA",
                "apellido": "KILMER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 62,
                "nombre": "JAYNE",
                "apellido": "NEESON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 108,
                "nombre": "WARREN",
                "apellido": "NOLTE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 137,
                "nombre": "MORGAN",
                "apellido": "WILLIAMS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 169,
                "nombre": "KENNETH",
                "apellido": "HOFFMAN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 197,
                "nombre": "REESE",
                "apellido": "WEST",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 7,
            "titulo": "AIRPLANE SIERRA",
            "descripcion": "A Touching Saga of a Hunter And a Butler who must Discover a Butler in A Jet Boat",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 5,
                "nombre": "German",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 4.99,
            "duracion": null,
            "costoDeReemplazo": 28.99,
            "clasificacion": "PG-13",
            "caracteristicasEspeciales": "Trailers,Deleted Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 99,
                "nombre": "JIM",
                "apellido": "MOSTEL",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 133,
                "nombre": "RICHARD",
                "apellido": "PENN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 162,
                "nombre": "OPRAH",
                "apellido": "KILMER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 170,
                "nombre": "MENA",
                "apellido": "HOPPER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 185,
                "nombre": "MICHAEL",
                "apellido": "BOLGER",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 9,
            "titulo": "ALABAMA DEVIL",
            "descripcion": "A Thoughtful Panorama of a Database Administrator And a Mad Scientist who must Outgun a Mad Scientist in A Jet Boat",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 5,
                "nombre": "German",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 3,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 21.99,
            "clasificacion": "PG-13",
            "caracteristicasEspeciales": "Trailers,Deleted Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 10,
                "nombre": "CHRISTIAN",
                "apellido": "GABLE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 22,
                "nombre": "ELVIS",
                "apellido": "MARX",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 26,
                "nombre": "RIP",
                "apellido": "CRAWFORD",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 53,
                "nombre": "MENA",
                "apellido": "TEMPLE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 68,
                "nombre": "RIP",
                "apellido": "WINSLET",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 108,
                "nombre": "WARREN",
                "apellido": "NOLTE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 130,
                "nombre": "GRETA",
                "apellido": "KEITEL",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 175,
                "nombre": "WILLIAM",
                "apellido": "HACKMAN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 194,
                "nombre": "MERYL",
                "apellido": "ALLEN",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 10,
            "titulo": "ALADDIN CALENDAR",
            "descripcion": "A Action-Packed Tale of a Man And a Lumberjack who must Reach a Feminist in Ancient China",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 5,
                "nombre": "German",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 4.99,
            "duracion": null,
            "costoDeReemplazo": 24.99,
            "clasificacion": "NC-17",
            "caracteristicasEspeciales": "Trailers,Deleted Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 29,
                "nombre": "ALEC",
                "apellido": "WAYNE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 35,
                "nombre": "JUDY",
                "apellido": "DEAN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 37,
                "nombre": "VAL",
                "apellido": "BOLGER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 64,
                "nombre": "RAY",
                "apellido": "JOHANSSON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 117,
                "nombre": "RENEE",
                "apellido": "TRACY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 142,
                "nombre": "JADA",
                "apellido": "RYDER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 157,
                "nombre": "GRETA",
                "apellido": "MALDEN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 188,
                "nombre": "ROCK",
                "apellido": "DUKAKIS",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 11,
            "titulo": "ALAMO VIDEOTAPE",
            "descripcion": "A Boring Epistle of a Butler And a Cat who must Fight a Pastry Chef in A MySQL Convention",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 16.99,
            "clasificacion": "G",
            "caracteristicasEspeciales": "Commentaries,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 40,
                "nombre": "JOHNNY",
                "apellido": "CAGE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 81,
                "nombre": "SCARLETT",
                "apellido": "DAMON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 90,
                "nombre": "SEAN",
                "apellido": "GUINESS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 174,
                "nombre": "MICHAEL",
                "apellido": "BENING",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 12,
            "titulo": "ALASKA PHANTOM",
            "descripcion": "A Fanciful Saga of a Hunter And a Pastry Chef who must Vanquish a Boy in Australia",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 5,
                "nombre": "German",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 22.99,
            "clasificacion": "PG",
            "caracteristicasEspeciales": "Commentaries,Deleted Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 37,
                "nombre": "VAL",
                "apellido": "BOLGER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 75,
                "nombre": "BURT",
                "apellido": "POSEY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 105,
                "nombre": "SIDNEY",
                "apellido": "CROWE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 109,
                "nombre": "SYLVESTER",
                "apellido": "DERN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 146,
                "nombre": "ALBERT",
                "apellido": "JOHANSSON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 177,
                "nombre": "GENE",
                "apellido": "MCKELLEN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 180,
                "nombre": "JEFF",
                "apellido": "SILVERSTONE",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 13,
            "titulo": "ALI FOREVER",
            "descripcion": "A Action-Packed Drama of a Dentist And a Crocodile who must Battle a Feminist in The Canadian Rockies",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 5,
                "nombre": "German",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 4,
            "costoAlquiler": 4.99,
            "duracion": null,
            "costoDeReemplazo": 21.99,
            "clasificacion": "PG",
            "caracteristicasEspeciales": "Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 77,
                "nombre": "CARY",
                "apellido": "MCCONAUGHEY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 91,
                "nombre": "CHRISTOPHER",
                "apellido": "BERRY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 94,
                "nombre": "KENNETH",
                "apellido": "TORN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 114,
                "nombre": "MORGAN",
                "apellido": "MCDORMAND",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 176,
                "nombre": "JON",
                "apellido": "CHASE",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 14,
            "titulo": "ALICE FANTASIA",
            "descripcion": "A Emotional Drama of a A Shark And a Database Administrator who must Vanquish a Pioneer in Soviet Georgia",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 4,
                "nombre": "Mandarin",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 23.99,
            "clasificacion": "NC-17",
            "caracteristicasEspeciales": "Trailers,Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 28,
                "nombre": "WOODY",
                "apellido": "HOFFMAN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 85,
                "nombre": "MINNIE",
                "apellido": "ZELLWEGER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 137,
                "nombre": "MORGAN",
                "apellido": "WILLIAMS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 188,
                "nombre": "ROCK",
                "apellido": "DUKAKIS",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 15,
            "titulo": "ALIEN CENTER",
            "descripcion": "A Brilliant Drama of a Cat And a Mad Scientist who must Battle a Feminist in A MySQL Convention",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 5,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 10.99,
            "clasificacion": "NC-17",
            "caracteristicasEspeciales": "Trailers,Commentaries,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 36,
                "nombre": "BURT",
                "apellido": "DUKAKIS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 69,
                "nombre": "KENNETH",
                "apellido": "PALTROW",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 105,
                "nombre": "SIDNEY",
                "apellido": "CROWE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 117,
                "nombre": "RENEE",
                "apellido": "TRACY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 164,
                "nombre": "HUMPHREY",
                "apellido": "WILLIS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 170,
                "nombre": "MENA",
                "apellido": "HOPPER",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 17,
            "titulo": "ALONE TRIP",
            "descripcion": "A Fast-Paced Character Study of a Composer And a Dog who must Outgun a Boat in An Abandoned Fun House",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 3,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 14.99,
            "clasificacion": "R",
            "caracteristicasEspeciales": "Trailers,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 3,
                "nombre": "ED",
                "apellido": "CHASE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 12,
                "nombre": "KARL",
                "apellido": "BERRY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 13,
                "nombre": "UMA",
                "apellido": "WOOD",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 82,
                "nombre": "WOODY",
                "apellido": "JOLIE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 100,
                "nombre": "SPENCER",
                "apellido": "DEPP",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 160,
                "nombre": "CHRIS",
                "apellido": "DEPP",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 167,
                "nombre": "LAURENCE",
                "apellido": "BULLOCK",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 187,
                "nombre": "RENEE",
                "apellido": "BALL",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 18,
            "titulo": "ALTER VICTORY",
            "descripcion": "A Thoughtful Drama of a Composer And a Feminist who must Meet a Secret Agent in The Canadian Rockies",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 2,
                "nombre": "Italian",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 27.99,
            "clasificacion": "PG-13",
            "caracteristicasEspeciales": "Trailers,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 45,
                "nombre": "REESE",
                "apellido": "KILMER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 142,
                "nombre": "JADA",
                "apellido": "RYDER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 144,
                "nombre": "ANGELA",
                "apellido": "WITHERSPOON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 162,
                "nombre": "OPRAH",
                "apellido": "KILMER",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 19,
            "titulo": "AMADEUS HOLY",
            "descripcion": "A Emotional Display of a Pioneer And a Technical Writer who must Battle a Man in A Baloon",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 2,
                "nombre": "Italian",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 20.99,
            "clasificacion": "PG",
            "caracteristicasEspeciales": "Commentaries,Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 5,
                "nombre": "JOHNNY",
                "apellido": "LOLLOBRIGIDA",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 27,
                "nombre": "JULIA",
                "apellido": "MCQUEEN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 37,
                "nombre": "VAL",
                "apellido": "BOLGER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 43,
                "nombre": "KIRK",
                "apellido": "JOVOVICH",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 84,
                "nombre": "JAMES",
                "apellido": "PITT",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 104,
                "nombre": "PENELOPE",
                "apellido": "CRONYN",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 20,
            "titulo": "AMELIE HELLFIGHTERS",
            "descripcion": "A Boring Drama of a Woman And a Squirrel who must Conquer a Student in A Baloon",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 4,
            "costoAlquiler": 4.99,
            "duracion": null,
            "costoDeReemplazo": 23.99,
            "clasificacion": "R",
            "caracteristicasEspeciales": "Commentaries,Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 52,
                "nombre": "CARMEN",
                "apellido": "HUNT",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 102,
                "nombre": "WALTER",
                "apellido": "TORN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 136,
                "nombre": "ED",
                "apellido": "MANSFIELD",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 139,
                "nombre": "EWAN",
                "apellido": "GOODING",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 155,
                "nombre": "IAN",
                "apellido": "TANDY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 159,
                "nombre": "LAURA",
                "apellido": "BRODY",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 21,
            "titulo": "AMERICAN CIRCUS",
            "descripcion": "A Insightful Drama of a Girl And a Astronaut who must Face a Database Administrator in A Shark Tank",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 3,
            "costoAlquiler": 4.99,
            "duracion": null,
            "costoDeReemplazo": 17.99,
            "clasificacion": "R",
            "caracteristicasEspeciales": "Commentaries,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 25,
                "nombre": "KEVIN",
                "apellido": "BLOOM",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 26,
                "nombre": "RIP",
                "apellido": "CRAWFORD",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 105,
                "nombre": "SIDNEY",
                "apellido": "CROWE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 119,
                "nombre": "WARREN",
                "apellido": "JACKMAN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 126,
                "nombre": "FRANCES",
                "apellido": "TOMEI",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 22,
            "titulo": "AMISTAD MIDSUMMER",
            "descripcion": "A Emotional Character Study of a Dentist And a Crocodile who must Meet a Sumo Wrestler in California",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 2,
                "nombre": "Italian",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 10.99,
            "clasificacion": "G",
            "caracteristicasEspeciales": "Commentaries,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 77,
                "nombre": "CARY",
                "apellido": "MCCONAUGHEY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 95,
                "nombre": "DARYL",
                "apellido": "WAHLBERG",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 122,
                "nombre": "SALMA",
                "apellido": "NOLTE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 124,
                "nombre": "SCARLETT",
                "apellido": "BENING",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 23,
            "titulo": "ANACONDA CONFESSIONS",
            "descripcion": "A Lacklusture Display of a Dentist And a Dentist who must Fight a Girl in Australia",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 4,
                "nombre": "Mandarin",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 3,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 9.99,
            "clasificacion": "R",
            "caracteristicasEspeciales": "Trailers,Deleted Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 1,
                "nombre": "PENELOPE",
                "apellido": "GUINESS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 4,
                "nombre": "JENNIFER",
                "apellido": "DAVIS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 22,
                "nombre": "ELVIS",
                "apellido": "MARX",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 150,
                "nombre": "JAYNE",
                "apellido": "NOLTE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 164,
                "nombre": "HUMPHREY",
                "apellido": "WILLIS",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 24,
            "titulo": "ANALYZE HOOSIERS",
            "descripcion": "A Thoughtful Display of a Explorer And a Pastry Chef who must Overcome a Feminist in The Sahara Desert",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 4,
                "nombre": "Mandarin",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 19.99,
            "clasificacion": "R",
            "caracteristicasEspeciales": "Trailers,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 38,
                "nombre": "TOM",
                "apellido": "MCKELLEN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 42,
                "nombre": "TOM",
                "apellido": "MIRANDA",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 67,
                "nombre": "JESSICA",
                "apellido": "BAILEY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 157,
                "nombre": "GRETA",
                "apellido": "MALDEN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 179,
                "nombre": "ED",
                "apellido": "GUINESS",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 25,
            "titulo": "ANGELS LIFE",
            "descripcion": "A Thoughtful Display of a Woman And a Astronaut who must Battle a Robot in Berlin",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 2,
                "nombre": "Italian",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 3,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 15.99,
            "clasificacion": "G",
            "caracteristicasEspeciales": "Trailers",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 1,
                "nombre": "PENELOPE",
                "apellido": "GUINESS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 4,
                "nombre": "JENNIFER",
                "apellido": "DAVIS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 7,
                "nombre": "GRACE",
                "apellido": "MOSTEL",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 47,
                "nombre": "JULIA",
                "apellido": "BARRYMORE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 91,
                "nombre": "CHRISTOPHER",
                "apellido": "BERRY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 136,
                "nombre": "ED",
                "apellido": "MANSFIELD",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 166,
                "nombre": "NICK",
                "apellido": "DEGENERES",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 167,
                "nombre": "LAURENCE",
                "apellido": "BULLOCK",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 187,
                "nombre": "RENEE",
                "apellido": "BALL",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 26,
            "titulo": "ANNIE IDENTITY",
            "descripcion": "A Amazing Panorama of a Pastry Chef And a Boat who must Escape a Woman in An Abandoned Amusement Park",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 4,
                "nombre": "Mandarin",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 3,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 15.99,
            "clasificacion": "G",
            "caracteristicasEspeciales": "Commentaries,Deleted Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 71,
                "nombre": "ADAM",
                "apellido": "GRANT",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 128,
                "nombre": "CATE",
                "apellido": "MCQUEEN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 130,
                "nombre": "GRETA",
                "apellido": "KEITEL",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 27,
            "titulo": "ANONYMOUS HUMAN",
            "descripcion": "A Amazing Reflection of a Database Administrator And a Astronaut who must Outrace a Database Administrator in A Shark Tank",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 5,
                "nombre": "German",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 7,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 12.99,
            "clasificacion": "NC-17",
            "caracteristicasEspeciales": "Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 7,
                "nombre": "GRACE",
                "apellido": "MOSTEL",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 55,
                "nombre": "FAY",
                "apellido": "KILMER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 99,
                "nombre": "JIM",
                "apellido": "MOSTEL",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 110,
                "nombre": "SUSAN",
                "apellido": "DAVIS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 140,
                "nombre": "WHOOPI",
                "apellido": "HURT",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 148,
                "nombre": "EMILY",
                "apellido": "DEE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 154,
                "nombre": "MERYL",
                "apellido": "GIBSON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 170,
                "nombre": "MENA",
                "apellido": "HOPPER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 179,
                "nombre": "ED",
                "apellido": "GUINESS",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 28,
            "titulo": "ANTHEM LUKE",
            "descripcion": "A Touching Panorama of a Waitress And a Woman who must Outrace a Dog in An Abandoned Amusement Park",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 5,
                "nombre": "German",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 5,
            "costoAlquiler": 4.99,
            "duracion": null,
            "costoDeReemplazo": 16.99,
            "clasificacion": "PG-13",
            "caracteristicasEspeciales": "Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 74,
                "nombre": "MILLA",
                "apellido": "KEITEL",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 162,
                "nombre": "OPRAH",
                "apellido": "KILMER",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 29,
            "titulo": "ANTITRUST TOMATOES",
            "descripcion": "A Fateful Yarn of a Womanizer And a Feminist who must Succumb a Database Administrator in Ancient India",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 5,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 11.99,
            "clasificacion": "NC-17",
            "caracteristicasEspeciales": "Trailers,Commentaries,Deleted Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 6,
                "nombre": "BETTE",
                "apellido": "NICHOLSON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 13,
                "nombre": "UMA",
                "apellido": "WOOD",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 105,
                "nombre": "SIDNEY",
                "apellido": "CROWE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 122,
                "nombre": "SALMA",
                "apellido": "NOLTE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 175,
                "nombre": "WILLIAM",
                "apellido": "HACKMAN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 187,
                "nombre": "RENEE",
                "apellido": "BALL",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 197,
                "nombre": "REESE",
                "apellido": "WEST",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 30,
            "titulo": "ANYTHING SAVANNAH",
            "descripcion": "A Epic Story of a Pastry Chef And a Woman who must Chase a Feminist in An Abandoned Fun House",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 5,
                "nombre": "German",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 4,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 27.99,
            "clasificacion": "R",
            "caracteristicasEspeciales": "Trailers,Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 9,
                "nombre": "JOE",
                "apellido": "SWANK",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 163,
                "nombre": "CHRISTOPHER",
                "apellido": "WEST",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 178,
                "nombre": "LISA",
                "apellido": "MONROE",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 31,
            "titulo": "APACHE DIVINE",
            "descripcion": "A Awe-Inspiring Reflection of a Pastry Chef And a Teacher who must Overcome a Sumo Wrestler in A U-Boat",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 4,
                "nombre": "Mandarin",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 5,
            "costoAlquiler": 4.99,
            "duracion": null,
            "costoDeReemplazo": 16.99,
            "clasificacion": "NC-17",
            "caracteristicasEspeciales": "Commentaries,Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 2,
                "nombre": "NICK",
                "apellido": "WAHLBERG",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 15,
                "nombre": "CUBA",
                "apellido": "OLIVIER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 49,
                "nombre": "ANNE",
                "apellido": "CRONYN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 60,
                "nombre": "HENRY",
                "apellido": "BERRY",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 32,
            "titulo": "APOCALYPSE FLAMINGOS",
            "descripcion": "A Astounding Story of a Dog And a Squirrel who must Defeat a Woman in An Abandoned Amusement Park",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 3,
                "nombre": "Japanese",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 4.99,
            "duracion": null,
            "costoDeReemplazo": 11.99,
            "clasificacion": "R",
            "caracteristicasEspeciales": "Trailers,Commentaries",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 79,
                "nombre": "MAE",
                "apellido": "HOFFMAN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 158,
                "nombre": "VIVIEN",
                "apellido": "BASINGER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 162,
                "nombre": "OPRAH",
                "apellido": "KILMER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 168,
                "nombre": "WILL",
                "apellido": "WILSON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 183,
                "nombre": "RUSSELL",
                "apellido": "CLOSE",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 33,
            "titulo": "APOLLO TEEN",
            "descripcion": "A Action-Packed Reflection of a Crocodile And a Explorer who must Find a Sumo Wrestler in An Abandoned Mine Shaft",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 4,
                "nombre": "Mandarin",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 5,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 15.99,
            "clasificacion": "PG-13",
            "caracteristicasEspeciales": "Trailers,Commentaries,Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 79,
                "nombre": "MAE",
                "apellido": "HOFFMAN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 82,
                "nombre": "WOODY",
                "apellido": "JOLIE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 136,
                "nombre": "ED",
                "apellido": "MANSFIELD",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 146,
                "nombre": "ALBERT",
                "apellido": "JOHANSSON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 162,
                "nombre": "OPRAH",
                "apellido": "KILMER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 170,
                "nombre": "MENA",
                "apellido": "HOPPER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 180,
                "nombre": "JEFF",
                "apellido": "SILVERSTONE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 182,
                "nombre": "DEBBIE",
                "apellido": "AKROYD",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 34,
            "titulo": "ARABIA DOGMA",
            "descripcion": "A Touching Epistle of a Madman And a Mad Cow who must Defeat a Student in Nigeria",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 5,
                "nombre": "German",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 29.99,
            "clasificacion": "NC-17",
            "caracteristicasEspeciales": "Commentaries,Deleted Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 12,
                "nombre": "KARL",
                "apellido": "BERRY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 26,
                "nombre": "RIP",
                "apellido": "CRAWFORD",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 27,
                "nombre": "JULIA",
                "apellido": "MCQUEEN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 40,
                "nombre": "JOHNNY",
                "apellido": "CAGE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 57,
                "nombre": "JUDE",
                "apellido": "CRUISE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 72,
                "nombre": "SEAN",
                "apellido": "WILLIAMS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 75,
                "nombre": "BURT",
                "apellido": "POSEY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 102,
                "nombre": "WALTER",
                "apellido": "TORN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 112,
                "nombre": "RUSSELL",
                "apellido": "BACALL",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 126,
                "nombre": "FRANCES",
                "apellido": "TOMEI",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 157,
                "nombre": "GRETA",
                "apellido": "MALDEN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 178,
                "nombre": "LISA",
                "apellido": "MONROE",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 35,
            "titulo": "ARACHNOPHOBIA ROLLERCOASTER",
            "descripcion": "A Action-Packed Reflection of a Pastry Chef And a Composer who must Discover a Mad Scientist in The First Manned Space Station",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 4,
                "nombre": "Mandarin",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 4,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 24.99,
            "clasificacion": "PG-13",
            "caracteristicasEspeciales": "Trailers,Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 7,
                "nombre": "GRACE",
                "apellido": "MOSTEL",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 35,
                "nombre": "JUDY",
                "apellido": "DEAN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 95,
                "nombre": "DARYL",
                "apellido": "WAHLBERG",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 113,
                "nombre": "MORGAN",
                "apellido": "HOPKINS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 118,
                "nombre": "CUBA",
                "apellido": "ALLEN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 135,
                "nombre": "RITA",
                "apellido": "REYNOLDS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 139,
                "nombre": "EWAN",
                "apellido": "GOODING",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 184,
                "nombre": "HUMPHREY",
                "apellido": "GARLAND",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 8,
            "titulo": "AIRPORT POLLOCK",
            "descripcion": "A Epic Tale of a Moose And a Girl who must Confront a Monkey in Ancient India",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 6,
                "nombre": "French",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 4.99,
            "duracion": null,
            "costoDeReemplazo": 15.99,
            "clasificacion": "R",
            "caracteristicasEspeciales": "Trailers",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 55,
                "nombre": "FAY",
                "apellido": "KILMER",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 96,
                "nombre": "GENE",
                "apellido": "WILLIS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 110,
                "nombre": "SUSAN",
                "apellido": "DAVIS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 138,
                "nombre": "LUCILLE",
                "apellido": "DEE",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 36,
            "titulo": "ARGONAUTS TOWN",
            "descripcion": "A Emotional Epistle of a Forensic Psychologist And a Butler who must Challenge a Waitress in An Abandoned Mine Shaft",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 5,
                "nombre": "German",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 7,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 12.99,
            "clasificacion": "PG-13",
            "caracteristicasEspeciales": "Trailers,Commentaries",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 47,
                "nombre": "JULIA",
                "apellido": "BARRYMORE",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 73,
                "nombre": "GARY",
                "apellido": "PENN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 96,
                "nombre": "GENE",
                "apellido": "WILLIS",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 116,
                "nombre": "DAN",
                "apellido": "STREEP",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 127,
                "nombre": "KEVIN",
                "apellido": "GARLAND",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 37,
            "titulo": "ARIZONA BANG",
            "descripcion": "A Brilliant Panorama of a Mad Scientist And a Mad Cow who must Meet a Pioneer in A Monastery",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 4,
                "nombre": "Mandarin",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 3,
            "costoAlquiler": 2.99,
            "duracion": null,
            "costoDeReemplazo": 28.99,
            "clasificacion": "PG",
            "caracteristicasEspeciales": "Trailers,Deleted Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 12,
                "nombre": "KARL",
                "apellido": "BERRY",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 64,
                "nombre": "RAY",
                "apellido": "JOHANSSON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 112,
                "nombre": "RUSSELL",
                "apellido": "BACALL",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 130,
                "nombre": "GRETA",
                "apellido": "KEITEL",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 38,
            "titulo": "ARK RIDGEMONT",
            "descripcion": "A Beautiful Yarn of a Pioneer And a Monkey who must Pursue a Explorer in The Sahara Desert",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 5,
                "nombre": "German",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 6,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 25.99,
            "clasificacion": "NC-17",
            "caracteristicasEspeciales": "Trailers,Commentaries,Deleted Scenes,Behind the Scenes",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 46,
                "nombre": "PARKER",
                "apellido": "GOLDBERG",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 166,
                "nombre": "NICK",
                "apellido": "DEGENERES",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 190,
                "nombre": "AUDREY",
                "apellido": "BAILEY",
                "ultimaActualizacion": "2006-02-15"
            }]
        }, {
            "id": 39,
            "titulo": "ARMAGEDDON LOST",
            "descripcion": "A Fast-Paced Tale of a Boat And a Teacher who must Succumb a Composer in An Abandoned Mine Shaft",
            "añoLanzamiento": 2006,
            "lenguaje": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "lenguajeOriginal": {
                "id": 1,
                "nombre": "English",
                "ultimaActualizacion": "2006-02-15"
            },
            "duracionAlquiler": 5,
            "costoAlquiler": 0.99,
            "duracion": null,
            "costoDeReemplazo": 10.99,
            "clasificacion": "G",
            "caracteristicasEspeciales": "Trailers",
            "ultimaActualizacion": "2006-02-15",
            "actores": [{
                "id": 65,
                "nombre": "ANGELA",
                "apellido": "HUDSON",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 84,
                "nombre": "JAMES",
                "apellido": "PITT",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 104,
                "nombre": "PENELOPE",
                "apellido": "CRONYN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 118,
                "nombre": "CUBA",
                "apellido": "ALLEN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 145,
                "nombre": "KIM",
                "apellido": "ALLEN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 177,
                "nombre": "GENE",
                "apellido": "MCKELLEN",
                "ultimaActualizacion": "2006-02-15"
            }, {
                "id": 191,
                "nombre": "GREGORY",
                "apellido": "GOODING",
                "ultimaActualizacion": "2006-02-15"
            }]
        }];

    }
})();
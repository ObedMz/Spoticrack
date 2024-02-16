# Spoticrack

Este es un proyecto personal que consume la librería de yt-dl para extrapolar datos de YT-Music usando Nodejs y Typescript para ser utilizada como una REST API.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Docs](#uso)
- [Licencia](#licencia)

## Instalación

1. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/ObedMz/Spoticrack.git
    ```

2. **Instalar dependencias:**

    ```bash
    npm install
    ```

## Uso

1. **Iniciar el servidor:**

    ```bash
    npm start
    ```

    El servidor estará disponible en [http://localhost:4444](http://localhost:4444) por defecto.


## Docs

### Endpoints

#### Música

- **GET /api/music/audio/:id**
  - Obtiene la url en formato mp3 del audio de una canción específica.
  
- **GET /api/music/:id**
  - Obtiene información sobre una canción específica.
  
- **GET /api/music/search/:id**
  - Busca canciones por término de búsqueda.

- **GET /api/music/lyrics/:id**
  - Obtiene las letras de una canción específica.

#### Álbumes

- **GET /api/album/search/:id**
  - Busca álbumes por término de búsqueda.

- **GET /api/album/:id**
  - Obtiene información sobre un álbum específico.

#### Artistas

- **GET /api/artist/songs/:id**
  - Obtiene las canciones de un artista específico.

- **GET /api/artist/albums/:id**
  - Obtiene los álbumes de un artista específico.

- **GET /api/artist/:id**
  - Obtiene información sobre un artista específico.

- **GET /api/artist/search/:id**
  - Busca artistas por término de búsqueda.

#### Listas de Reproducción

- **GET /api/playlist/search/:id**
  - Busca listas de reproducción por término de búsqueda.
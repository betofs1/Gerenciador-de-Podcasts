# Nome do Aplicativo

Podcast Menager

### Descrição

Um app ao estilo netflix, onde eu possa centralizar diferentes episódios podcasts separados por categorias

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os episódios podcasts em sessões de categorias
 - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como 

### Features
Listar os episódios podcasts em sessões de categorias

### Como vou implementar:

GET: Vou retornar em um api rest (json) o
nome do podcast, nome do episódio, imagem de capa, link

```js

{
    podcastName:"flow"
    episode:"CBUM - Flow #319"
    videoId:"pQSuQmUfS30"
    cover:"https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg"
    link:"https://www.youtube.com/watch?v=pQSuQmUfS30"
    categories: ["saúde", "bodybuilder"]   
    }, 
        podcastName:"flow"
    episode:"TECNOLOGIA E IA [+ FABIO AKITA]"
     videoId:"--slRywdonM",
    cover:"https://i.ytimg.com/vi/--slRywdonM/maxresdefault.jpg"
    link:"https://www.youtube.com/watch?v=--slRywdonM"
    categories: ["tecnologia", "IA"]   

```





# Proyecto web escuela técnica n°1
# React + Vite + Tailwind

Lógica de la página:
-Los componentes están separados en la carpeta /main-components/ de ahí se exportan hacia los demás archivos. 
-La estructura de los componentes es:
    main.jsx -> se encarga de cargar el router y sus rutas
        /routes/AppMain.jsx -> se encarga de mostrar la raiz
        /routes/main-prog.jsx -> se encarga de mostrar la app principal de prog
        /routes/main-quim.jsx -> se encarga de mostrar la app principal de quim
        /routes/main-elect.jsx -> se encarga de mostrar la app principal de elect

-Todos los datos son obtenidos de tres distintas fuentes editables:
    *Materias: Las muestras de las materias de cada curso se encuentran en /main-components/datos-materias.json separados cada uno por su orientación. Los años se encuentran divididos en las llaves. La primera llave pertenece a 4to, segunda a 5to, etc.
    *Noticias: La misma lógica aplica a las noticias. Se encuentran en /main-components/datos-noticias.json donde están separados por secciones: primera, segunda, tecera y cuarta correspondientes a cada una de las entradas de blog. Por otro lado, los elementos del objeto pertenecen: urlImg es la imagen, mainText es el título y secondaryText es el texto de la noticia.
    *Proyectos: Los proyectos llevan la misma lógica que las noticias donde cada uno de los proyectos queda dentro de la sección de electro, quimica y programacion.
    
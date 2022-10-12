/*********** MENU ************/

/*Variable d VARIABLE ANÓNIMA AUTOEJECUTABLE. Puedo reutilizarla en otro proyecto.

Para la interacción del menú solo hacen falta dos variables del DOM y por eso las mandamos a llamar
con el símbolo del dólar. btnMenu = botón del menu le va a decir d.querySelector de DOM, y lo 
seleccionamos mediante su clase .menu-btn.
Y para el menu como tal, hacemos algo parecido. 
Luego de mandar a llamar las variables del botón y el menú, debemos programar un evento "click".
Dentro de esto, dentro del botón del menú que está en la variable del btn-menu, quiero que al primer
elemento hijo, entre a su lista de clases (mediante el .classList) y le intercambie 
(mediante el método .toggle) la clase la clase .none. 
y lo mismo haremos con el lastElementchild o último elemento hijo.
Tambien, le tenemos que decir al elemento del menu en su lista de clases, le vas a intercambiar
la clase is-active, la cual va a permitir mostrar u ocultar la opacidad del menú.*/
((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", (e) => {
        if(!e.target.matches(".menu a")) return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    });
})(document);


/*Técnica de delegación de eventos, lo que hace es asignar el click a un elemento superior
en este caso al documento o d y lo único que voy a hacer es (e) evaluar cuál será el elemento 
que va a detonar este click.
e.target es una propiedad que origina el evento y un elemento llamado matches al cual se le pasa 
un selector. Entonces si el selector que activa este elemento no es un enlace que está dentro
del menú es falso, retorna falso. Pero si el selector que activa el elemento sí es un enlace
que está dentro del menú, es verdadero.*/

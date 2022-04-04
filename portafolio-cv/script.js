/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e)=>{
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e)=> {
    if(!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  })
})(document);

/* ********** ContactForm ********** */
((d)=> {
  const $form = d.querySelector(".contact-form"),
  $loader = d.querySelector(".contact-form-loader"),
  $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", e=> {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/gerson.gaete28@gmail.com", {
      method:"POST",
      body: new FormData(e.target)
    }).then(res => res.ok ? res.json(): Promise.reject(res))
    .then(json => {
      console.log(json);
      location.hash = "#gracias";
      $form.reset();
    })
    .catch(err=> {
      console.log(err);
      let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
      $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
      $loader.classList.add("none");
    })
    .finally(() => {
      $loader.classList.add("none");
      setTimeout(() => {
        location.hash = "#close";
      }, 3000);
    });
  });
})(document);

/*((d)=> {
  const $form = d.querySelector(".contact-form"),
  $inputs = d.querySelectorAll(".contact-form [required]");

  //console.log($inputs);

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", none);
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Enviando Formulario");
    const $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    fetch("https://formsubmit.co/ajax/gerson.gaete28@gmail.com", {
      method: "POST",
      body: new FormData(e.target)
    })
    .then(res=>res.ok ? res.json():Promise.reject(res))
    .then(json => {
      console.log(json);
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();
    })
    .catch(err=> {
      console.log(err);
    });

    setTimeout(() => {
      

      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  });
}),(document);*/


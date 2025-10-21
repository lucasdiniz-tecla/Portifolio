document.addEventListener("scroll", () =>{
  const progressContainer = document.querySelector(".progress-container");
  const progressbarJava = document.querySelector(".progress-bar-java");
  const progressbarPython = document.querySelector(".progress-bar-python");
  const progressbarKotlin = document.querySelector(".progress-bar-kotlin");
  const progressbarSQL = document.querySelector(".progress-bar-SQL");
  const progressbarClojure = document.querySelector(".progress-bar-Clojure");
  const progressbarHtml = document.querySelector(".progress-bar-html");
  const progressbarGodot = document.querySelector(".progress-bar-godot");
  const progressbarPOO = document.querySelector(".progress-bar-POO");
  const progressbarIA = document.querySelector(".progress-bar-IA");
  const progressbarUX = document.querySelector(".progress-bar-UX");
  const progressbarPor = document.querySelector(".progress-bar-por");
  const progressbarIngles = document.querySelector(".progress-bar-ingles");
  const progressbarEstrutura = document.querySelector(".progress-bar-Estrutura");
  const containerPosition = progressContainer.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if(containerPosition < screenHeight){
    progressbarJava.style.width = "80%";
    progressbarPython.style.width = "70%";
    progressbarKotlin.style.width = "50%";
    progressbarSQL.style.width = "90%";
    progressbarClojure.style.width = "70%";
    progressbarHtml.style.width = "60%";
    progressbarGodot.style.width = "60%";
    progressbarPOO.style.width = "80%";
    progressbarIA.style.width = "60%";
    progressbarUX.style.width = "50%";
    progressbarPor.style.width = "90%";
    progressbarIngles.style.width = "70%";
    progressbarEstrutura.style.width = "70%";


  }



});

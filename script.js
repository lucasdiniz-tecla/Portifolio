document.addEventListener("scroll", () =>{
  const progressContainer = document.querySelector(".progress-container");
  const containerPosition = progressContainer.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if(containerPosition < screenHeight){
    const progressData = {
      "java": "80%",
      "python": "70%",
      "kotlin": "50%",
      "SQL": "90%",
      "Clojure": "70%",
      "html": "60%",
      "godot": "60%",
      "POO": "80%",
      "IA": "60%",
      "UX": "50%",
      "por": "90%",
      "ingles": "70%",
      "Estrutura": "70%",

    };

    for (const [key, value] of Object.entries(progressData)) {
      const bar = document.querySelector(`.progress-bar-${key}`);

      if (bar) {
        bar.style.width = value;
      }

    }
  }

});

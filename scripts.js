  // Desabilita o menu de contexto
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  
  // Desabilita a seleção de texto
  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });
  
  
      document.addEventListener("DOMContentLoaded", function () {
    // Suavizar a rolagem para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const headerOffset = document.querySelector(".header")?.offsetHeight || 80; // Ajuste se houver cabeçalho fixo
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;
  
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth"
          });
  
          // Se o alvo estiver dentro de um <details>, abre automaticamente
          const parentDetails = targetElement.closest("details");
          if (parentDetails) {
            parentDetails.setAttribute("open", "");
          }
        };
      });
    });
  
    // Prevenir cliques no sumário fechando detalhes sem abrir outros
    document.querySelectorAll(".nav-item details summary").forEach(summary => {
      summary.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    });
  });
  // Obtém o botão pelo ID
  let btnTopo = document.getElementById("btnTopo");
  
  // Mostra o botão quando o usuário rola para baixo 20px
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  }
  
  // Quando o usuário clica no botão, volta para o topo da página
  btnTopo.addEventListener("click", function(){
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
  });
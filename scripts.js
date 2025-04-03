
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
        const headerOffset = document.querySelector(".header")?.offsetHeight || 50; // Ajuste se houver cabeçalho fixo
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
      }
    });
  });

  // Prevenir cliques no sumário fechando detalhes sem abrir outros
  document.querySelectorAll(".nav-item details summary").forEach(summary => {
    summary.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
});


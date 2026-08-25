// Menú móvil (idéntico al de Home) + filtros del catálogo
document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.getElementById('mobile-menu-btn');
  var menu = document.getElementById('mobile-menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('hidden') === false;
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Filtro de categoría: al elegir una opción, hace scroll a la sección correspondiente
  var categoriaSelect = document.getElementById('filtro-categoria');
  if (categoriaSelect) {
    categoriaSelect.addEventListener('change', function () {
      var value = categoriaSelect.value;
      if (value !== 'todas') {
        var target = document.getElementById(value);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});

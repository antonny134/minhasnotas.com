const sidebar = document.querySelector('.usu');
const toggleBtn = document.querySelector('.toggle-btn');

if (toggleBtn && sidebar) {
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    document.body.classList.toggle('sidebar-collapsed');

    const icon = toggleBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('bi-list');
      icon.classList.toggle('bi-list');
    }
  });
}

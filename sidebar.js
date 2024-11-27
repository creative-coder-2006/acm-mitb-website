function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

// Close sidebar on screen resize
window.addEventListener('resize', () => {
  const sidebar = document.getElementById('sidebar');
  if (window.innerWidth > 1024) {
    sidebar.classList.remove('active');
  }
});



// execute script after page load
window.onload = function digital_fn() {
  // toggle button
  let toggle = document.querySelector('#nav .toggle-btn');
  // collapse list
  let collapse = document.querySelector('#nav .collapse');

  toggle.addEventListener('click', function(event) {
    // 'active' specified in CSS
    collapse.classList.toggle('active');
  });

  // Masonry js
  let grid = document.querySelector('#site-main .recent-work-area .images-flex');
  let msnry = new Masonry(grid, {
    itemSelector:'.flex-item',
    gutter: 100,
    fitWidth: true
  });

}
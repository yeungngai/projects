jsPracticeFunc();

// Minimize sidebar
// function minimizeSidebar() {
// };

// Search
function search() {
  const input = document.querySelector('.search_bar');
  const searchBtn = document.querySelector('.search_btn');
  const searchForm = document.querySelector('.search_form');

  // Press enter to search
  function enterToSearch() {
    if (input.value !== '') {
      let url = 'https://www.youtube.com/search?q=' + input.value;
      window.open(url);
    };          
  };
  searchForm.addEventListener('submit', enterToSearch);
  
  
  // Press search button to search
  searchBtn.onclick = function() {
    let url = 'https://www.youtube.com/search?q=' + input.value;
    window.open(url);
    input.value = '';
  };        
}

function minimizeSidebar() {
  let minSidebarBtn = document.querySelector('.hamberger_youtube_btn');
  // Add click event listener to the minimize sidebar button
  minSidebarBtn.addEventListener('click', function(event) {
    const body = document.body;
    const paddingL = getComputedStyle(body).paddingLeft;

    const sidebar = document.querySelector('.sidebar');

    const sidebarHome = document.querySelector('.sidebar_link_home');
    const sidebarHomeDiv = document.querySelector('.sidebar_link_home div');

    // returns an array of all elements that have the same class name
    const sidebarLink = document.getElementsByClassName('sidebar_link');
    const sidebarLinkDiv = document.querySelectorAll('.sidebar_link div');

    // const test = getComputedStyle(sidebar).width;
    // console.log(sidebar);

    // If sidebar is already expended
    if (paddingL === '320px') {
      body.style = 'padding-left: 120px';
      sidebar.style.width = '85px';

      sidebarHome.style = 'flex-direction: column; justify-content: center;padding-left: 2px; height: 55px; background-color: white; ';
      sidebarHomeDiv.style = 'font-size: 11px; padding-left: 2px;';

      sidebarHome.addEventListener('mouseenter', function(){
        if (getComputedStyle(sidebar).width === '85px') {
          sidebarHome.style = 'flex-direction: column; justify-content: center;padding-left: 2px; height: 55px; background-color: rgb(242, 242, 242);';
        } 
      });

      sidebarHome.addEventListener('mouseleave', function() {
        if (getComputedStyle(sidebar).width === '85px') {
          sidebarHome.style = 'flex-direction: column; justify-content: center;padding-left: 2px; height: 55px; background-color: white;';
        }           
      });

      for (i = 0, max = sidebarLink.length; i < max; i++) {
        sidebarLink[i].style = 'flex-direction: column; justify-content: center; padding-left: 2px; height: 55px';
        sidebarLinkDiv[i].style = 'font-size: 11px; padding-left: 0px; ';
      }
    
      // If sidebar is already retracted
    } else {
      body.style = 'padding-left: 320px';
      sidebar.style.width = '290px';
      sidebarHome.style = 'flex-direction: row; padding-left: 25px; height: 50px; background-color: rgb(225, 225, 225); ';
      sidebarHomeDiv.style = 'font-size: 16px; padding-left: 28px;';
      // sidebarHome:hover is psudo class which CANNOT be targeted with JS.

      for (i = 0, max = sidebarLink.length; i < max; i++) {
        sidebarLink[i].style = 'flex-direction: row; padding-left: 25px; height: 50px';
        sidebarLinkDiv[i].style = 'font-size: 15px; padding-left: 28px; ';
      };
    };
  });
}

function jsPracticeFunc() {
  minimizeSidebar();
  search();
}


const navbar = `
<nav class="navbar navbar-dark navbar-expand-lg  bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><strong>Code Reactors</strong></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Code Reactors</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link nav_m active" aria-current="page" href="#" onclick="onNavigate('/'); return false;"><strong>Home</strong> </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link nav_m" href="#" onclick="onNavigate('/services'); return false;" ><strong>Services</strong> </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link nav_m" aria-current="page" href="#" onclick="onNavigate('/products'); return false;"><strong>Products</strong> </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link nav_m" aria-current="page" href="#" onclick="onNavigate('/about'); return false;"><strong>About Us</strong> </a>
                  </li>
                    </ul>
                  </li>
                  
                </ul>   
                <button class="btn_color">Get Start</button>
              </div>
          </div>
        </div>
      </nav>
      `

document.getElementById('nav').innerHTML = navbar;
const elem = document.querySelectorAll('.nav-link');
    
if (elem.length) {
  elem.forEach((link) => {
    link.addEventListener('click', (e) => {
      elem.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}





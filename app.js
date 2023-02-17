const BG_COLOR = "#000000";
const d = document;

d.body.style.background = BG_COLOR;

const routes = {
  '/' : main,
  '/index.html' : main,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = routes[pathname]
}
  
const BG_COLOR = "#000000";
const d = document;

d.body.style.background = BG_COLOR;

const routes = {
  '#home': main,
  '/': main,
  '/index.html': main,
  '/#services': main,
  '#services': main,
  '/#products': main,
  '#products': main,
  '/#about': main,
  '#about': main,
  '#info': info,
  '/#info': info,
  '#learning': info,
  '/#learning': info,
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

window.addEventListener('load', () => {
  if (window.location.href.includes("info")) {
    onNavigate('#info')
    rootDiv.innerHTML = routes['#info'];
  } else if (window.location.href.includes("learning")) {
    onNavigate('#learning')
    rootDiv.innerHTML = routes['#learning'];
  }
});

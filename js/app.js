"use strict";
const BG_COLOR = "#000000";
const rootDiv = document.getElementById('root');
//set background color using js
document.body.style.background = BG_COLOR;

// main component
const main = `
<div>${navbar}</div>
<div>${home}</div>
<div>${services}</div>
<div>${products}</div>
<div>${about}</div>
`

// implement route functionality using useHistory web API
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

rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = routes[pathname]
}

// event linstener to handle routes
window.addEventListener('load', () => {
  if (window.location.href.includes("info")) {
    onNavigate('#info')
    rootDiv.innerHTML = routes['#info'];
  } else if (window.location.href.includes("learning")) {
    onNavigate('#learning')
    rootDiv.innerHTML = routes['#learning'];
  }
});

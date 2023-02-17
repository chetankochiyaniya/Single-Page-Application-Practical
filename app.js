const BG_COLOR = "#000000";
const d = document;

d.body.style.background = BG_COLOR;

const routes = {
  '#home' : main,
  '/' : main,
  '/index.html' : main,
  '#info':info,
  '/#info':info
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

//   window.addEventListener('hashchange', function () {
//     console.log('location changed!');
// });
window.addEventListener('load', (event) => {
  console.log("test",window.location.href)
  if(window.location.href.includes("info")){
    console.log("true")
    onNavigate('#info')
    rootDiv.innerHTML = routes['#info'];
  }
});
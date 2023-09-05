import Dashboard from "./views/Dashboard.js";


// console.log("js working well")

//  let ss = document.querySelector(".nav_item");
//  console.log(ss);
//  console.log(ss.dataset);

const navigateTo = url =>{
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        // {path: "/", view: () => console.log("viewing dashboard")},
        // {path: "/posts", view: () => console.log("viewing posts")},
        // {path: "/settings", view: () => console.log("viewing settings")}, 
        {path: "/", view: Dashboard }
    ];

    const pageMatches = routes.map((route) => {
        return {
          route, // route: route
          isMatch: route.path === location.pathname,
        };
      });
    // console.log(pageMatches);

    let match = pageMatches.find(pageMatches => pageMatches.isMatch);
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    // console.log(match.route.view())

    
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", ()=> {
    document.body.addEventListener("click", e=> {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});
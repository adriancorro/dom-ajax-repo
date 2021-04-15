const getRepos = function(repoUser) {
  return fetch(`https://api.github.com/repos/codeyourfuture/js-exercises/pulls`)
    .then(data => data.json())
    .then(function(response) {
      if (repoUser) {
        response.filter(rep => {
          if (rep.user.login == `${repoUser}`) {
            let myElement = document.querySelector("#pull-requests-list");
            let paragraph = document.createElement("li");
            paragraph.innerText = rep.title;
            myElement.appendChild(paragraph);
            let a = document.createElement("a");
            a.setAttribute("target", `_blank`);
            a.setAttribute("href", `${rep.html_url}`);
            a.innerText = rep.html_url;
            myElement.appendChild(a);
          }
        });
      }
    });
};

const getReposAll = function() {
  return fetch(`https://api.github.com/repos/codeyourfuture/js-exercises/pulls`)
    .then(data => data.json())
    .then(function(response) {
      response.forEach(function(rep) {
        let myElement = document.querySelector("#pull-requests-list");
        let paragraph = document.createElement("li");
        paragraph.innerText = rep.title;
        myElement.appendChild(paragraph);

        let a = document.createElement("a");
        a.setAttribute("target", `_blank`);
        a.setAttribute("href", `${rep.html_url}`);
        a.innerText = rep.html_url;
        myElement.appendChild(a);

        let b = document.createElement("p");
        myElement.appendChild(b);
      });
    });
};

let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "This is som text";

let elementrequests = document.querySelector("#pull-requests-list");
document.querySelector(".my-auto").insertBefore(btn, elementrequests);
document.querySelector(".my-auto").insertBefore(input, elementrequests);

input.addEventListener("keyup", function(event) {
  const value = event.target.value;
  getRepos(`${value}`);
  let myElement = document.querySelector("#pull-requests-list");

  if (myElement.hasChildNodes()) {
    myElement.removeChild(myElement.firstChild);
    while (myElement.childNodes.length >= 0) {
      myElement.removeChild(myElement.firstChild);
    }
  }

  if (!value) {
    getReposAll();
  }

  // "value" will be the last value of the input field, and will be updated everytime the user types a new letter
});

getReposAll();

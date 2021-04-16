// Write code here to communicate with Github

const getRepos = function(repoName) {
  return fetch(`https://api.github.com/users/${repoName}/repos`)
    .then(data => data.json())
    .then(function(response) {
      return response.map(function(rep) {
        let myElement = document.querySelector("#repos-list");
        let paragraph = document.createElement("li");
        paragraph.innerText = rep.name;
        myElement.appendChild(paragraph);

        let a = document.createElement("a");
        a.setAttribute("target", `_blank`);
        a.setAttribute("href", `${rep.html_url}`);
        a.innerText = rep.html_url;
        myElement.appendChild(a);
        return rep.name;
      });
    });
};

const getNumberRepos = function(repoName) {
  return fetch(`https://api.github.com/users/${repoName}`)
    .then(data => data.json())
    .then(function(response) {
      let reposCount = document.querySelector("#repos-count");
      reposCount.innerText = response.public_repos;
      return response;
    });
};

let userRep = "adriancorro";
getRepos(`${userRep}`);
getNumberRepos(`${userRep}`);

let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "enter a Github username";
btn.setAttribute("id", "btnId");
let elementrequests = document.querySelector(".mb-5");
document.querySelector(".my-auto").insertBefore(btn, elementrequests);
document.querySelector(".my-auto").insertBefore(input, elementrequests);

document.getElementById("btnId").addEventListener(
  "click",
  function(event) {
    let reposCount = document.querySelector("#repos-count");
    reposCount.innerText = "";
    let myElement = document.querySelector("#repos-list");
    if (myElement.hasChildNodes()) {
      while (myElement.childNodes.length >= 0) {
        myElement.removeChild(myElement.firstChild);
      }
    }
  },
  false
);

document.getElementById("btnId").addEventListener(
  "click",
  function(event) {
    userRep = input.value;
    if (!userRep) {
      userRep = "adriancorro";
      getRepos(`${userRep}`);
      getNumberRepos(`${userRep}`);
    } else {
      getRepos(`${userRep}`);
      getNumberRepos(`${userRep}`);
    }
  },
  false
);

let myElement = document.querySelector("#repos-list");
let nuevo_parrafo = document.createElement("p");
//nuevo_parrafo.innerText = `Here is a list of my repos. My user is: ${userRep}`;
document.querySelector(".my-auto").insertBefore(nuevo_parrafo, myElement);

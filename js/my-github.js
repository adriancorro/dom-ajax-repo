// Write code here to communicate with Github

const getRepos = function(repoName) {
  return fetch("https://api.github.com/users/" + repoName + "/repos")
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

let userRep = "adriancorro";
const adriancodeRepos = getRepos(`${userRep}`);
let myElement = document.querySelector("#repos-list");
let nuevo_parrafo = document.createElement("p");
nuevo_parrafo.innerText = `Here is a list of my repertoire. My user is: ${userRep}`;
document.querySelector(".my-auto").insertBefore(nuevo_parrafo, myElement);

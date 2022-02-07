// GET request to the API for project data.
function GetProj() {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://academicapi2022.azurewebsites.net/api/projects",
    true
  );
  request.onload = function () {
    let projects = JSON.parse(this.response);
    projects.forEach((proj) => {
      const content = `
          <div class="container" style="max-width: 350px;">
                <img class="img-thumbnail" src="${proj.img}" />
                <div class="text">
                    <h5 class="font-weight-bold">${proj.title}</h5>
                    <p class="font-italic">${proj.date}</p>
                    <p>${proj.desc}
                    </p>
                </div>
            </div>
          `;
      const div = document.querySelector("#proj");
      div.innerHTML += content;
    });
  };
  request.send();
}
GetProj();

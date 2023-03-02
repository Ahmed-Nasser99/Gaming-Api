export class Ui {
  displaycardGames(gameData) {
    let cartona = ``;
    for (let i = 0; i < gameData.length; i++) {
      cartona += `
          <div class="col">
          <div class="card my-3" data-bs-target ='${gameData[i].id}'>
      
            <div class="card-image mb-3 p-3">
              <img src="${gameData[i].thumbnail}" alt="" width="100%" class="rounded-top-1"/>
            </div>
            <div class="card-capition p-3">
              <div class="d-flex justify-content-between align-items-start textTitle mb-3">
                <p>${gameData[i].title}</p>
                <span class="btn btn-info">Free</span>
              </div>
              <p class="text-center">
                ${gameData[i].short_description}
              </p>
            </div>
            <div class="footerCard">
              <span>MMOARPG</span>
              <span>PC (Windows)</span>
            </div>
          </div>
        </div>
          
          `;
    }
    document.getElementById("demo").innerHTML = cartona;
  }
  displaydetailsGames(detData) {
    let detCartona = `
  <div class=" col-sm-12 col-md-4">
  <img src="${detData.thumbnail}" width="100%" />
</div>
<div class="col-sm-12 col-md-8">
  <div class="capitionDet text-white">
    <span class="fs-3">Title:</span>
    <span class="fs-3">${detData.title}</span>
    <div class="my-3">
      <span>Category:</span>
      <span class="btn btn-info py-0 px-1 text-btn">${detData.genre}</span>
    </div>
    <div class="my-3">
      <span>Platform</span>
      <span class="btn btn-info py-0 px-1 text-btn">${detData.platform}</span>
    </div>
    <div class="my-3">
      <span>Status:</span>
      <span class="btn btn-info py-0 px-1 text-btn">${detData.status}</span>
    </div>
    <p class="det-p">
    ${detData.description}
    </p>
    <a href='${detData.game_url}' target='_blank' class="btn btn-outline-warning text-white">
      Show Game
    </a>
  </div>
</div>
  `;

    $("#detils").html(detCartona);
  }
}



function createCard(title, cname, views , monthOld , duration , themnail) {
  const card = document.createElement("div");
  card.classList.add("card");

 card.innerHTML = `
<div class="thumbnail" style="background-image: url('${themnail}');">
    <div class="card-content">
      <h5 class="h5">${title}</h5>
      <h6 class="h6">${cname}</h6>
      <p class="p">${views} views • ${monthOld} months ago</p>
      <p class="p1">${duration}</p>
      <button class="delete-btn">Delete</button>
      
    </div>
  </div>
`;
 card.querySelector(".delete-btn").addEventListener("click", () => {
    card.remove(); 
  });

  document.querySelector(".output-container").appendChild(card);
}

function handleAddCard() {
  const title = document.getElementById("titleInput").value.trim();
  const cname = document.getElementById("channelInput").value.trim();
  const views = document.getElementById("viewsInput").value.trim();
  const monthOld = document.getElementById("monthOldInput").value.trim();
  const duration = document.getElementById("durationInput").value.trim();
  const themnail = document.getElementById("themnailInput").value.trim();


  if (title && cname && views && monthOld && duration&& themnail) {
    createCard(title, cname ,views, monthOld ,duration,themnail);
    
  } else {
    alert("Please fill in both fields.");
  }
}




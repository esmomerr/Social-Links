const card = document.querySelector(".card");

async function getGithubData(){
    const response = await fetch("https://api.github.com/users/esmomerr")
    const data = await response.json();
    return [data];
}

async function githubData(){
    const userData = await getGithubData();
    for (const cards of userData) {
        card.innerHTML += 
        `
        <img src="${cards.avatar_url}" alt="" class="icon">
        <div class="header">
            <h2 class="header-h2">${cards.name}</h2>
            <span class="header-span">${cards.location}</span>
        </div>

        <span class="bio">${cards.bio}</span>

        <div class="links">
            <a href="https://github.com/esmomerr" class="link" target="_blank">Github</a>
            <a href="https://www.frontendmentor.io/profile/esmomerr" class="link" target="_blank">Frontend Mentor</a>
            <a href="" class="link" target="_blank">Facebook</a>
            <a href="https://www.linkedin.com/in/%C3%B6mer-esin-68921a248/" class="link" target="_blank">Linkedin</a>
            <a href="https://www.instagram.com/_esnomerr/" class="link" target="_blank">Instagram</a>
        </div>
        `
    }
}

githubData()
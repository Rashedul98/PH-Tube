// Creating Dynamic Category Section
const getAllCategoris = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    const data = await response.json();
    displayCategories(data.categories);

}

getAllCategoris();

const displayCategories = (data) => {
    // get container
    const container = document.getElementById("category-container");

    for (const cats of data) {
        const DivOfButton = document.createElement('div');
        DivOfButton.innerHTML = `
        <button class="btn btn-sm  hover:bg-[#FF1F3D] hover:text-white" >${cats.category} </button>
        `
        container.appendChild(DivOfButton);
    }
}

// Creating Dynamic Video Sections

const getAllVideos = async () => {
    const getResponse = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos");
    const datas = await getResponse.json();
    console.log(datas.videos);

    checkVids(datas.videos);

}
getAllVideos();

const checkVids = (videos) => {
    const container = document.getElementById('all-video-container');

    videos.forEach(video => {
        const vidContainer = document.createElement('div');
        vidContainer.innerHTML = `
        <div class="card bg-base-100  shadow-sm">
             <figure>
                <img src="${video.thumbnail}"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">${video.title}</h2>
                <p>${video.description}</p>
            </div>
        </div>

        
        `

        container.appendChild(vidContainer);
    });

}
// class="max-w-[400px] max-h-[200px]"
/**
 *        <img class="w-[200px]" src="${video.thumbnail}" alt="">
            <h1>${video.title}</h1>
 */
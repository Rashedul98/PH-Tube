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
       
            <div class="card bg-base-100">
                <figure class="relative">
                    <img class="w-full h-[200px] object-cover"  src="${video.thumbnail}" alt="Shoes" />
                    <span class="absolute text-sm text-white bottom-2 right-2 px-2 rounded opacity-45 bg-black">3hrs
                        56min ago </span>
                </figure>
                <div class="flex  gap-4 px-2 py-5">
                    <div class="profile">
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <img src="${video.authors[0].profile_picture}" />
                            </div>
                        </div>
                    </div>
                    <div class="intro text-base font-bold">
                        <h1>${video.title}</h1>
                        <p class="flex gap-2 text-gray-400 text-sm font-normal">${video.authors[0].profile_name}<img class="w-5"
                                src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt="">
                        </p>
                        <p class=" text-gray-400 text-sm font-normal">91k Views</p>
                    </div>
                </div>
            </div>
        
        `

        container.appendChild(vidContainer);
    });

}

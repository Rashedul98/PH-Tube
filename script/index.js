const removeActiveclass = () => {
    const activeClasses = document.getElementsByClassName("active");
    for (const cls of activeClasses) {
        cls.classList.remove("active");
    }
}
// Creating Dynamic ALL Category Section
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
        <button id="btn-${cats.category_id}" onclick=(getCategoryVideos(${cats.category_id})) class="btn btn-sm  hover:bg-[#FF1F3D] hover:text-white" >${cats.category} </button>
        `
        container.appendChild(DivOfButton);
    }
}

// Creating Dynamic Video Sections for "All" Button
const getAllVideos = async () => {
    const getResponse = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos");
    const datas = await getResponse.json();
    console.log(datas.videos);

    checkVids(datas.videos);

}

const checkVids = (videos) => {
    const container = document.getElementById('all-video-container');
    removeActiveclass();
    document.getElementById("all-active").classList.add("active")

    container.innerHTML = ``;
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
                        <p class=" text-gray-400 text-sm font-normal">${video.others.views}</p>
                    </div>
                </div>
                <button id="video_details" class="btn" onClick=getVideoDetails("${video.video_id}")>Details</button>
            </div>
        
        `

        container.appendChild(vidContainer);
    });

}

// Creating category wise video section:
const getCategoryVideos = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
    const data = await response.json();
    const btn = `btn-${id}`
    viewCategoryVideo(data.category, btn)
}

const viewCategoryVideo = (categories, id) => {
    console.log(categories);
    removeActiveclass();

    const clickedButton = document.getElementById(id);
    document.getElementsByClassName("active")
    clickedButton.classList.add("active")
    const container = document.getElementById("all-video-container");
    container.innerHTML = ``;
    if (categories.length == 0) {
        container.innerHTML = `
           <div class="col-span-full flex flex-col items-center justify-center m-52 text-center ">
                <img src="/assets/Icon.png" alt="">
                <h2 class="text-2xl font-bold p-8">Oops!! Sorry, There is no content here</h2>
            </div>
    `;
        return;
    }

    for (const cats of categories) {
        // console.log(cats);

        const vidContainer = document.createElement('div');
        vidContainer.innerHTML = `
             <div class="card bg-base-100">
                <figure class="relative">
                    <img class="w-full h-[200px] object-cover"  src="${cats.thumbnail}" alt="Shoes" />
                    <span class="absolute text-sm text-white bottom-2 right-2 px-2 rounded opacity-45 bg-black">3hrs
                        56min ago </span>
                </figure>
                <div class="flex  gap-4 px-2 py-5">
                    <div class="profile">
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <img src="${cats.authors[0].profile_picture}" />
                            </div>
                        </div>
                    </div>
                    <div class="intro text-base font-bold">
                        <h1>${cats.title}</h1>
                        <p class="flex gap-2 text-gray-400 text-sm font-normal">${cats.authors[0].profile_name}<img class="w-5"
                                src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt="">
                        </p>
                        <p class=" text-gray-400 text-sm font-normal">${cats.others.views}</p>
                    </div>
                </div>
                <button id="video_details" class="btn" onClick=getVideoDetails("${cats.video_id}")>Details</button>
            </div>
        `

        container.appendChild(vidContainer);

    }

}

const getVideoDetails = async (video_id) => {

    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${video_id}`)
    const object = await response.json();
    console.log(object);
    getVideoiInfo(object.video)
}

const getVideoiInfo = (obj) => {
    document.getElementById("video_Details").showModal();
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML =
        `
        <div class="card bg-base-100 image-full object-cover shadow-sm">
        <figure>
            <img class="object-cover"
            src="${obj.thumbnail}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${obj.title}</h2>
            <p>${obj.description}</p>
        </div>
        </div>
    `
}

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

// 
// -----------------------------------------------------------------------------
// Trips Array
// -----------------------------------------------------------------------------

const arrTrips = [
    {
        name: "Caribbean",
        price: 20000,
        description: "Sail through the Caribbean's stunning islands on our luxurious cruise, where adventure, relaxation, and culinary delights await, creating unforgettable memories.",
        image: "plant1.png",
        lightAmount: "low",
        addedDate: "2023-03-25",
        onSale: "True",
        origin: "New York"
    },
    {
        name: "White Sprite Succulent",
        price: 200,
        description: "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
        image: "plant2.png",
        lightAmount: "bright",
        addedDate: "2023-01-21",
        onSale: "False",
        origin: "Texas"
    },
    {
        name: "Snake Plant",
        price: 400,
        description: "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
        image: "plant3.png",
        lightAmount: "low",
        addedDate: "2023-02-18",
        onSale: "False",
        origin: "Pretoria"
    },
    {
        name: "Parlour Palm",
        price: 350,
        description: "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
        image: "plant4.png",
        lightAmount: "low",
        addedDate: "2023-07-01",
        onSale: "True",
        origin: "China"
    },
    {
        name: "Japanese Maple",
        price: 1200,
        description: "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
        image: "plant5.png",
        lightAmount: "bright",
        addedDate: "2023-05-13",
        onSale: "False",
        origin: "Japan"
    },
];

$(document).ready(function(){

    console.log("Hello World")

    $("#descriptionText").hide();

    // When the trips card is clicked
    $(".card").click(function(){
        
        // Toggle decription text
        $("#descriptionText").toggle();
        $("priceText").toggle();
    
    })
    
});                        
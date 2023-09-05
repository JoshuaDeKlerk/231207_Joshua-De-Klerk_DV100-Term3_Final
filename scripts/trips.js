// -----------------------------------------------------------------------------
// Trips Array
// -----------------------------------------------------------------------------

const arrTrips = [
    {
        name: "Caribbean",
        price: 20000,
        description: "Sail through the Caribbean's stunning islands on our luxurious cruise, where adventure, relaxation, and culinary delights await, creating unforgettable memories.",
        image: "Cruise1.png",
        destination: "Caribbean",
        duration: "Long",
        trips: "true",
        return: "true",
        location: "Antigua",
    },
    {
        name: "Europe",
        price: 24000,
        description: "Explore Europe's charm and history on unforgettable cruises. Sail along scenic coastlines, visit iconic cities, savor diverse cuisines, and immerse in rich cultures. Discover the beauty of Europe from the comfort of a luxury cruise ship.",
        image: "Cruise2.png",
        destination: "Europe",
        duration: "Short",
        trips: "false",
        return: "false",
        location: "Europe",
    },
    {
        name: "Mediterranean",
        price: 17000,
        description: "Embark on a journey of sun-soaked splendor with Mediterranean cruises. Experience azure waters, ancient wonders, delectable cuisine, and vibrant cultures along this iconic sea. Discover the magic of the Mediterranean.",
        image: "Cruise3.png",
        destination: "Mediterranean",
        duration: "Long",
        trips: "true",
        return: "false",
        location: "Rome",
    },
    {
        name: "Alaska",
        price: 19800,
        description: "Experience the untamed beauty of Alaska on captivating cruises. Sail past glaciers, encounter wildlife, explore rugged landscapes, and soak in the pristine wilderness of the Last Frontier. Alaska awaits your adventure.",
        image: "Cruise4.png",
        destination: "Alaska",
        duration: "Short",
        trips: "false",
        return: "true",
        location: "Alaska",
    },
    {
        name: "Hawaii",
        price: 10360,
        description: "Escape to paradise on Hawaii cruises. Island-hop through lush landscapes, relax on pristine beaches, immerse in Polynesian culture, and enjoy the aloha spirit on this tropical voyage of a lifetime.",
        image: "Cruise5.png",
        destination: "Hawaii",
        duration: "short",
        trips: "true",
        return: "false",
        location: "Hawaii",
    },
    {
        name: "Norway",
        price: 13180,
        description: "Embark on a breathtaking adventure with Norway cruises. Witness stunning fjords, northern lights, picturesque villages, and immerse in Nordic culture. Explore the land of Vikings and natural wonders.",
        image: "Cruise6.png",
        destination: "Norway",
        duration: "Long",
        trips: "true",
        return: "true",
        location: "Norway",
    },
    {
        name: "Bahamas",
        price: 11400,
        description: "Escape to paradise on Bahamas cruises. Explore crystal-clear waters, relax on white-sand beaches, indulge in vibrant local culture, and enjoy water sports in this tropical haven of sun and serenity.",
        image: "Cruise7.png",
        destination: "Bahamas",
        duration: "short",
        trips: "true",
        return: "false",
        location: "Bahamas",
    },
    {
        name: "Bermuda",
        price: 7580,
        description: "Embark on a captivating journey to Bermuda on cruises. Discover pink sand beaches, explore historic towns, and experience island charm and elegance in this tranquil Atlantic paradise.",
        image: "Cruise8.png",
        destination: "Bermuda",
        duration: "Long",
        trips: "true",
        return: "false",
        location: "Bermuda",
    },
    {
        name: "Australia",
        price: 4000,
        description: "Set sail for adventure down under with Australia cruises. Explore diverse landscapes, encounter unique wildlife, visit vibrant cities, and immerse yourself in the rich Aboriginal culture of this vast and captivating continent.",
        image: "Cruise9.png",
        destination: "Australia",
        duration: "Long",
        trips: "false",
        return: "true",
        location: "Australia",
    },
];

let appliedFilter = "Short";

$(document).ready(function(){

    console.log("Hello World")



    // When the trips card is clicked
    $("#tripsContainer").on('click', '.card', function(){
        // Toggle decription text
        $(this).find("#descriptionText").toggle();
        $(this).find("#priceText").toggle();
        $(this).find("#weatherInfo").toggle();
        $(this).find(".card-img-top").toggle();
        $(this).find(".purchaceBtn").toggle();
    })
        

    loadTrips();
    
    filterSortTrips();

});      

// -----------------------------------------------------------------------------
// Load all trips
// -----------------------------------------------------------------------------

function loadTrips() {

    console.log(arrTrips);
    
    // Loop through trips

    for (let i = 0; i < arrTrips.length; i++) {
        const trip = arrTrips[i];

        console.log(trip.name);
    
    
    // Select trip container
    $("#tripsContainer").append($("#tripCardTemplate").html());

    // Create Variable
    
    let currentChild = $("#tripsContainer").children().eq(i+1)

    // Set Content
    $(currentChild).find(".card-img-top").attr('src', '../assets/Trips/' + trip.image);
    $(currentChild).find("#priceText").text("R" + trip.price);
    $(currentChild).find("#nameText").text(trip.name);
    $(currentChild).find("#descriptionText").text(trip.description);

    // hide text
    $(currentChild).find("#descriptionText").hide();
    $(currentChild).find(".purchaceBtn").hide();
       
    }
};

// -----------------------------------------------------------------------------
// When a filter or sort is clicked
// -----------------------------------------------------------------------------

function filterSortTrips() {
    let filteredSortedArrTrips = [...arrTrips]; // Create a copy of the original array to avoid modifying it
    
    // Filter trips based on the selected filter
    if (appliedFilter === "Short") {
        filteredSortedArrTrips = filteredSortedArrTrips.filter(trip => trip.duration.toLowerCase() === "short");
    } else if (appliedFilter === "Long") {
        filteredSortedArrTrips = filteredSortedArrTrips.filter(trip => trip.duration.toLowerCase() === "long");
    } else if (appliedFilter === "Single") {
        filteredSortedArrTrips = filteredSortedArrTrips.filter(trip => trip.trips === "false");
    } else if (appliedFilter === "Multi") {
        filteredSortedArrTrips = filteredSortedArrTrips.filter(trip => trip.trips === "true");
    } else if (appliedFilter === "Round") {
        filteredSortedArrTrips = filteredSortedArrTrips.filter(trip => trip.return === "true");
    } else if (appliedFilter === "Row") {
        // Sort the trips by price in ascending order and get the top 5
        filteredSortedArrTrips = filteredSortedArrTrips.sort((a, b) => a.price - b.price).slice(0, 5);
    }

    loadTrips(filteredSortedArrTrips);
}
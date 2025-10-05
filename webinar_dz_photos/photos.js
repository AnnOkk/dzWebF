const photos = [
    {
        src: "https://photojournal.jpl.nasa.gov/jpeg/PIA25068.jpg",
        alt: "Dust Storm and Jezero Crater",
        caption: "Dust Storm and Jezero Crater — NASA/JPL-Caltech"
    },
    {
        src: "https://photojournal.jpl.nasa.gov/jpegMod/PIA25897_modest.jpg",
        alt: "Looking at the Crater Half Full",
        caption: "Looking at the Crater Half Full — NASA/JPL-Caltech"
    },
    {
        src: "https://photojournal.jpl.nasa.gov/jpegMod/PIA25912_modest.jpg",
        alt: "Curiosity 'Postcard' of Marker Band Valley",
        caption: "Curiosity “Postcard” — NASA/JPL-Caltech/MSSS"
    },
    {
        src: "https://photojournal.jpl.nasa.gov/jpegMod/PIA26632_modest.jpg",
        alt: "Curiosity Landscape While Talking to an Orbiter",
        caption: "Curiosity Landscape — NASA/JPL-Caltech"
    },
    {
        src: "https://photojournal.jpl.nasa.gov/jpegMod/PIA26633_modest.jpg",
        alt: "Rock shaped like coral",
        caption: "Rock “like coral” — NASA/JPL-Caltech"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Phobos_colour_2008.jpg",
        alt: "Phobos moon color view",
        caption: "Phobos — ESA/DLR/FU Berlin (CC BY-SA)"
    }
]

const orgs = [];
photos.forEach((photo) => {
    const part = photo.caption.split("—");
    const right = part[1]?.trim();
    if (right) orgs.push(right);
})
const counts = {};
orgs.forEach((photo) => {
    counts[photo]=(counts[photo]||0)+1;

});

const list = document.createElement("ul");
list.style.listStyle = "square";
list.style.fontFamily = "Arial, sans-serif";
list.style.lineHeight = "1.8";


    for(const org in counts){
        const li = document.createElement("li");
        li.textContent = `${org} : ${counts[org]}`;
        list.appendChild(li);

}
    document.body.appendChild(list);
    document.getElementById("h1").style.fontFamily = "Arial, sans-serif";;




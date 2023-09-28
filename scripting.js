//Samuel Galashev, Pd. 9-10 09/28/23
function createParagraph() {
        const parag = document.createElement("p");
        const paragr = document.createElement("p");
        const paragra = document.createElement("p");
        const paragrap = document.createElement("p");
        const paragrapp = document.createElement("p");
        const paragrappp = document.createElement("p");
        const paragrapppp = document.createElement("p");
        const paragrappppp = document.createElement("p");
        const paragrapppppp = document.createElement("p");
        const paragrappppppp = document.createElement("p");
        parag.textContent = "Palms are Sweaty;";
        paragr.textContent = "Knees Weak, Arms are Heavy;";
        paragra.textContent = "There's Vomit on his Sweater Already;";
        paragrap.textContent = "Mom's Spaghetti; He's Nervous";
        paragrapp.textContent = "But On the Surface He Looks Calm";
        paragrappp.textContent = "and Ready to Drop Bombs;";
        paragrapppp.textContent = "but He Keeps on Forgetting;";
        paragrappppp.textContent = "What He Wrote Down;";
        paragrapppppp.textContent = "the Whole Crowd Goes so Loud";
        paragrappppppp.textContent = "He Opens His Mouth but the Words Wont Come Out";
        document.body.appendChild(parag);
        document.body.appendChild(paragr);
        document.body.appendChild(paragra);
        document.body.appendChild(paragrap);
        document.body.appendChild(paragrapp);
        document.body.appendChild(paragrappp);
        document.body.appendChild(paragrapppp);
        document.body.appendChild(paragrappppp);
        document.body.appendChild(paragrapppppp);
        document.body.appendChild(paragrappppppp);
    }
const buttons = document.querySelectorAll('button')

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}
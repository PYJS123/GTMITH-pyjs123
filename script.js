function openPractice(practiceName) {
    if (practiceName == 'radians') {
        let popupBox = document.createElement("div");
        popupBox.classList.add("popup-box");

        let practiceText = document.createElement("p");
        practiceText.appendChild(document.createTextNode("Radians-degrees conversion practice"));
        practiceText.classList.add("option-title");

        let buttonsBox = document.createElement("div");
        buttonsBox.classList.add("buttons-box");

        let buttonTexts = ["Degrees to radians only", "Radians to degrees only", "Mixed"];
        for (let i = 0; i < 3; i++) {
            let currButton = document.createElement("div");
            let buttonInput = document.createElement("input");
            buttonInput.type = "radio";
            buttonInput.id = buttonTexts[i];
            buttonInput.name = "practiceType";
            buttonInput.value = buttonTexts[i];

            let buttonLabel = document.createElement("label");
            buttonLabel.textContent = buttonTexts[i];
            buttonLabel.for = buttonTexts[i];
            currButton.appendChild(buttonInput);
            currButton.appendChild(buttonLabel);
            buttonsBox.appendChild(currButton);
        }

        let submitButton = document.createElement("input");
        submitButton.type = "submit";
        submitButton.value = "Let's go!";
        submitButton.classList.add("lets-go-button");
        buttonsBox.appendChild(submitButton);

        popupBox.appendChild(practiceText);
        popupBox.appendChild(buttonsBox);

        let coverPage = document.createElement("div")
        coverPage.classList.add("cover-page");

        document.body.appendChild(coverPage);
        document.body.appendChild(popupBox);
    } else {
        throw "Practice name unrecognised";
    }
}
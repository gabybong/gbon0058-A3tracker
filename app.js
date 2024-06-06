document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("myForm"),
        imgInput = document.querySelector(".imgholder img"), // Correctly targeting the img element within imgholder
        file = document.getElementById("imgInput"),
        date = document.getElementById("date"),
        title = document.getElementById("title"),
        goal = document.getElementById("goal"),
        watched = document.getElementById("watched"),
        mood = document.getElementById("mood"),
        entry = document.getElementById("entry"),
        submitBtn = document.querySelector(".submit"),
        userInfo = document.getElementById("data"),
        modal = document.getElementById("trackerForm"),
        modalTitle = document.querySelector("#trackerForm .modal-title");

    let getData = localStorage.getItem('showProfile') ? JSON.parse(localStorage.getItem('showProfile')) : [];

    let isEdit = false, editId;
    displayInfo();

    file.onchange = function () {
        if (file.files[0].size < 1000000) {
            var fileReader = new FileReader();

            fileReader.onload = function (e) {
                var imgUrl = e.target.result;
                console.log("Image URL:", imgUrl); // Debug log
                imgInput.src = imgUrl; // Set the src of the img element
                console.log("Image src set to:", imgInput.src); // Debug log
            };

            fileReader.readAsDataURL(file.files[0]);
        } else {
            alert("This file is too large!");
        }
    };

    function displayInfo() {
        // Clear the table body before appending new rows
        userInfo.innerHTML = "";

        getData.forEach((element, index) => {
            let createElement = `
                <tr class="showDetails">
                    <td>${element.showDate}</td>
                    <td>${element.showTitle}</td>
                    <td><img src="${element.picture}" alt="" width="50" height="50"></td>
                    <td>${element.showGoal}</td>
                    <td>${element.showWatched}</td>
                    <td>${element.showMood}</td>
                    <td>${element.showEntry}</td>
                    <td>
                        <button class="btn btn-success" onclick="editInfo(${index}, '${element.picture}', '${element.showDate}', '${element.showTitle}', '${element.showGoal}', '${element.showWatched}', '${element.showMood}', '${element.showEntry}')" data-bs-toggle="modal" data-bs-target="#trackerForm"><i class="bi bi-pencil-square"></i></button>
                        <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash-fill"></i></button>
                    </td>
                </tr>`;

            userInfo.innerHTML += createElement;
        });
    }

    window.deleteInfo = function(index) { // Ensure deleteInfo is available in the global scope
        if (confirm("Are you sure you want to delete?")) {
            getData.splice(index, 1);
            localStorage.setItem("showProfile", JSON.stringify(getData));
            displayInfo();
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const information = {
            picture: imgInput.src === undefined ? "./images/Profile Icon.webp" : imgInput.src,
            showDate: date.value,
            showTitle: title.value,
            showGoal: goal.value,
            showWatched: watched.value,
            showMood: mood.value,
            showEntry: entry.value
        };

        if (!isEdit) {
            getData.push(information);
        } else {
            isEdit = false;
            getData[editId] = information;
        }

        localStorage.setItem('showProfile', JSON.stringify(getData));
        console.log("Data saved to local storage:", getData); // Debug log

        submitBtn.innerText = "Submit";
        modalTitle.innerHTML = "Fill the Form";

        displayInfo();

        // Optionally reset the form after submission
        form.reset();
        imgInput.src = "./images/Profile Icon.webp"; // Reset the image to default

        // Hide the modal
        modal.style.display = "none";
        document.querySelector(".modal-backdrop").remove(); // Assuming you meant to remove the modal backdrop

        // Log current local storage data
        console.log("Current local storage:", localStorage.getItem('showProfile'));
    });
});

// Execute the following code when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to various elements
    var form = document.getElementById("myForm"), // Form element
        imgInput = document.querySelector(".imgholder img"), // Image input element
        file = document.getElementById("imgInput"), // File input element
        date = document.getElementById("date"), // Date input element
        title = document.getElementById("title"), // Title input element
        goal = document.getElementById("goal"), // Goal input element
        watched = document.getElementById("watched"), // Watched input element
        mood = document.getElementById("mood"), // Mood input element
        entry = document.getElementById("entry"), // Entry input element
        submitBtn = document.querySelector(".submit"), // Submit button element
        userInfo = document.getElementById("data"), // User information element
        modal = document.getElementById("trackerForm"), // Modal element
        modalTitle = document.querySelector("#trackerForm .modal-title"); // Modal title element

    // Retrieve data from local storage or set to an empty array
    let getData = localStorage.getItem('showProfile') ? JSON.parse(localStorage.getItem('showProfile')) : [];

    // Set variables for editing
    let isEdit = false, editId;

    // Display user information
    displayInfo();

    // Event listener for file input change
    file.onchange = function () {
        if (file.files[0].size < 1000000) {
            var fileReader = new FileReader();

            // Read the uploaded file as a data URL
            fileReader.onload = function (e) {
                var imgUrl = e.target.result;
                console.log("Image URL:", imgUrl); // Debug log
                imgInput.src = imgUrl; // Set the src of the img element
                console.log("Image src set to:", imgInput.src); // Debug log
            };

            fileReader.readAsDataURL(file.files[0]); // Read the file as a data URL
        } else {
            alert("This file is too large!"); // Alert the user if the file is too large
        }
    };

    // Function to display user information
    function displayInfo() {
        // Clear the table body before appending new rows
        userInfo.innerHTML = "";

        // Loop through each data element and create table rows
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

            userInfo.innerHTML += createElement; // Append the created element to the table
        });
    }

    // Function to delete user information
    window.deleteInfo = function(index) {
        if (confirm("Are you sure you want to delete?")) {
            getData.splice(index, 1); // Remove the element from the array
            localStorage.setItem("showProfile", JSON.stringify(getData)); // Update local storage
            displayInfo(); // Re-display user information
        }
    }

    // Event listener for form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Create an object with user information
        const information = {
            picture: imgInput.src === undefined ? "./images/Profile Icon.webp" : imgInput.src, // Image URL
            showDate: date.value, // Date value
            showTitle: title.value, // Title value
            showGoal: goal.value, // Goal value
            showWatched: watched.value, // Watched value
            showMood: mood.value, // Mood value
            showEntry: entry.value // Entry value
        };

        // Add or update user information in the array
        if (!isEdit) {
            getData.push(information); // Add new information
        } else {
            isEdit = false; // Reset edit flag
            getData[editId] = information; // Update existing information
        }

        // Update local storage with the updated data
        localStorage.setItem('showProfile', JSON.stringify(getData));

        // Reset form fields
        submitBtn.innerText = "Submit";
        modalTitle.innerHTML = "Fill the Form";
        form.reset();
        imgInput.src = "./images/Profile Icon.webp";

        // Hide the modal
        modal.style.display = "none";
        document.querySelector(".modal-backdrop").remove();

        // Re-display user information
        displayInfo();

        // Log current local storage data
        console.log("Current local storage:", localStorage.getItem('showProfile'));
    });
});

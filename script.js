let btn = document.getElementById("Generatebtn");
let marksInput = document.getElementById("marks");
let marksValue = document.getElementById("marksValue");

// marks value show
marksInput.addEventListener("input", function () {
    marksValue.innerText = marksInput.value;
});

// get values
btn.addEventListener("click", function () {


    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    // gender
    let genderInput = document.querySelector('input[name="gender"]:checked');
    let gender = genderInput ? genderInput.value : "--";

    // course
    let courseInputs = document.querySelectorAll('.checkbox-group input:checked');
    let courses = [];
    courseInputs.forEach(c => courses.push(c.value));

    // marks
    let marks = marksInput.value;

    // show card
    document.getElementById("cardName").innerText = name || "Student Name";
    document.getElementById("cardRoll").innerText = roll ? "Roll No: " + roll : "Roll No: --";
    document.getElementById("cardEmail").innerText = email ? "Email: " + email : "Email: --";
    document.getElementById("cardAge").innerText = age ? "Age: " + age : "Age: --";
    document.getElementById("cardGender").innerText = "Gender: " + gender;
    document.getElementById("CardCourse").innerText = courses.length ? "Course: " + courses.join(", ") : "Course: --";
    document.getElementById("cardMarks").innerText = "Marks: " + marks + "/100";


    //image
    const photoInput = document.getElementById("photo");
    const cardImage = document.getElementById("cardimage");

    if (photoInput.files && photoInput.files[0]) {
        const reder = new FileReader();
        reder.onload = function (e) {
            cardImage.src = e.target.result;
        };
        reder.readAsDataURL(photoInput.files[0]);
    } else {
        cardImage.src = "";
    }
});
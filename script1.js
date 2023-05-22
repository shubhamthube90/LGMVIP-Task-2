var form = document.getElementById("form");
var submit = document.querySelector(".submit");
var elements = form.elements;
var display = document.querySelector(".display");
var i;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    data();
    form.reset();
});

var loadFile = function(event) {
    i = URL.createObjectURL(event.target.files[0]);
}

function data() {
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var name = document.createElement("div");
    var gender = document.createElement("div");
    
    var email = document.createElement("div");
    var skills = document.createElement("div");
    var img = document.createElement("img");

    name.innerHTML = "NAME: " + elements[0].value;

    if (elements[1].checked) {
        gender.innerHTML = "Gender: Male";
    }
    if (elements[2].checked) {
        gender.innerHTML = "Gender: Female";
    }
    
    email.innerHTML = "EMAIL: " + elements[4].value;
    img.src = "images/user-img.jpg";
    img.alt = "student image";
    if (elements[5].value != "") {
        img.src = i;
    }

    var skillsArr = [];
    if (elements[6].checked) {
        skillsArr.push("HTML");
    }
    if (elements[7].checked) {
        skillsArr.push("CSS");
    }
    if (elements[8].checked) {
        skillsArr.push("JS");
    }
    skills.innerHTML = "SKILLS: " + skillsArr.join(", ");

    div1.appendChild(name);
    div1.appendChild(gender);
   
    div1.appendChild(email);
    div1.appendChild(skills);
    div.appendChild(div1);
    div.appendChild(img);
    display.appendChild(div);

    img.classList.add("img");
    div.classList.add("d");
    div1.classList.add("div1");
    display.classList.add("display");
}

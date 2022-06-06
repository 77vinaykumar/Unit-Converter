let cmbtn = document.getElementById("kl");
cmbtn.addEventListener('click', function () {
    let input = document.getElementById("input").value;
    document.getElementById("result").value = input * 30.48 + " " + "cm";
});


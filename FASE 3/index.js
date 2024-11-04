const ucListArray = []; 

function validateEmail() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailMessage = document.getElementById("emailMessage");

    if (emailPattern.test(email)) {
        emailMessage.textContent = "E-mail válido!";
        emailMessage.style.color = "green";
    } else {
        emailMessage.textContent = "E-mail inválido! Por favor, insira um e-mail válido.";
        emailMessage.style.color = "red";
    }
}

function validateCPF() {
    const cpfInput = document.getElementById("cpfInput").value;
    const cpfMessage = document.getElementById("cpfMessage");

    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (cpfPattern.test(cpfInput)) {
        cpfMessage.textContent = "CPF válido!";
        cpfMessage.style.color = "blue";
    } else {
        cpfMessage.textContent = "CPF inválido! O formato deve ser ddd.ddd.ddd-dd";
        cpfMessage.style.color = "red";
    }
}
function updateUCList() {
    const ucList = document.getElementById("ucList");
    ucList.innerHTML = ""; 

    ucListArray.forEach(uc => {
        const li = document.createElement("li");
        li.innerHTML = `${uc} 
            <button onclick="moveUC(this, 'up')">↑</button> 
            <button onclick="moveUC(this, 'down')">↓</button>`;
        ucList.appendChild(li);
    });
}
function addUC() {
    const newUC = prompt("Digite o nome da nova UC:");
    if (newUC) {
        ucListArray.push(newUC); 
        updateUCList(); 
    }
}
function moveUC(button, direction) {
    const li = button.parentElement;
    const index = Array.from(li.parentElement.children).indexOf(li);

    if (direction === 'up' && index > 0) {
        ucListArray.splice(index, 1);
        ucListArray.splice(index - 1, 0, li.firstChild.textContent.trim());
    } else if (direction === 'down' && index < ucListArray.length - 1) {
        
        ucListArray.splice(index, 1);
        ucListArray.splice(index + 1, 0, li.firstChild.textContent.trim());
    } 
    updateUCList(); 
}

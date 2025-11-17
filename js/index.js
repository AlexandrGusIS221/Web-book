const nodeToggleThem = document.querySelector(`#toggleTheme`);

nodeToggleThem.addEventListener( `click`, () => {
    document.body.classList.toggle(`dark`);
    nodeToggleThem.classList.toggle(`dark`);
});

let currentStep = 1;

function openSecretModal() {
    document.getElementById('secretModal').style.display = 'flex';
    currentStep = 1;
    showNextStep(1);
}

function showNextStep(step) {
    document.querySelectorAll('.modal-step').forEach(el => {
        el.style.display = 'none';
    });
    
    document.getElementById(`step${step}`).style.display = 'block';
    currentStep = step;
}

function closeModal() {
    document.getElementById('secretModal').style.display = 'none';
}

document.getElementById('secretTrigger').addEventListener('click', openSecretModal);

document.getElementById('secretModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
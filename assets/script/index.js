const dateInput = document.getElementById('dateInput')
const button = document.getElementById('button')
const error = document.getElementById('error')
const result = document.getElementById('result')

error.style.display = "none"

button.addEventListener('click', () => {

    const dateInputValue = dateInput.value;

    if (!dateInputValue) {
        error.style.display = "block";
        error.style.color = "red";
        error.textContent = "Пожалуйста, выберите дату рождения"
        return;
    } else {
        error.style.display = "none"
    }

    const currentDate = new Date();
    const birthdate = new Date(dateInputValue);

    if (birthdate < currentDate) {
        birthdate.setFullYear(currentDate.getFullYear()+1);
    }

    const difference = Math.ceil((birthdate - currentDate) / (1000*3600*24));
    result.textContent = `До вашего дня рождения осталось ${difference} дней`
    })

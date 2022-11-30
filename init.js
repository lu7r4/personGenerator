window.onload = function()
{
    const initPerson = personGenerator.getPerson(); 
    document.getElementById('nameOutput').innerText = initPerson.name;
    document.getElementById('surnameOutput').innerHTML = initPerson.surname;
    document.getElementById('dataGenderOutput').innerHTML = `${initPerson.gender} ${initPerson.birthDay}`;
    document.getElementById('professionOutput').innerHTML = initPerson.profession;
}

document.querySelector('#update').addEventListener('click', 
    () => {
        location.reload();
})


document.querySelector('#clear').addEventListener('click', 
    () => {
        document.getElementById('nameOutput').innerText = '';
        document.getElementById('surnameOutput').innerHTML = '';
        document.getElementById('dataGenderOutput').innerHTML = '';
        document.getElementById('professionOutput').innerHTML = '';
})
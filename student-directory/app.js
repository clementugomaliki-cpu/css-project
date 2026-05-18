const students = [
    {name: "Jennifer Brown", age: 25, course: "Digital Marketing"},
    {name: "Edwin Johnson", age: 23, course: "Data Analytics"},
    {name: "Whitney Joe-White", age: 22, course: "Cybersecurity"},
    {name: "Prisca Davids", age: 24, course: "Web Development"},
    {name: "Donald Gibbs-Morgan", age: 26, course: "UI/UX Design"}
];

const mainContainer = document.querySelector('.main-container');

function renderStudents(array) {
    mainContainer.innerHTML = '';

    array.forEach(student => {
        const containerDiv = document.createElement('div');
        containerDiv.textContent = `Name: ${student.name} | Age: ${student.age} |  Course: ${student.course}`;
        mainContainer.appendChild(containerDiv);
        const imgDiv = document.createElement('div');
        containerDiv.appendChild(imgDiv);
        imgDiv.classList.add('img');
    });
}
const img = document.querySelector('.img');

const searchInput = document.querySelector('.search-name');

searchInput.addEventListener('input', (event) => {
    const typedValue = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(function(student) {
        return student.name.toLowerCase().includes(typedValue);
        });
    if (filteredStudents.length === 0) {
        mainContainer.innerHTML = '<p>No results found</p>';
    } else {
    renderStudents(filteredStudents);
    }
});


const body = document.body.style;
body.backgroundColor = 'crimson';
body.display = 'flex';
body.justifyContent = 'center';
body.alignItems = 'center';
body.flexDirection = 'column';
body.fontSize = '24px';

mainContainer.style.backgroundColor = 'white';
mainContainer.style.marginBottom = '10px';
mainContainer.style.display = 'grid';
mainContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
mainContainer.style.height = '450px';
mainContainer.style.width = '70%';
mainContainer.style.justifyContent = 'center';
mainContainer.style.gap = '40px';
mainContainer.style.padding = '40px'
mainContainer.style.borderRadius = '20px';

searchInput.style.padding = '10px';
searchInput.style.width = '50%';
searchInput.style.borderRadius = '50px';
searchInput.style.border = 'none';
searchInput.style.backgroundColor = 'lightGrey';
searchInput.style.fontSize = '18px';
searchInput.style.textAlign = 'center';
searchInput.style.cursor = 'pointer';


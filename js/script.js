/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const studentList = document.querySelector("ul.student-list");
const linkList = document.querySelector("ul.link-list");

// This function calculates how many pages are needed to display all the necessary contact details. It then creates each card using an object literal
// which cycles through each picture, names, emails and registered data. The more data you add, the more cards will be automatically added!
function showPage(list, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  studentList.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      const student = list[i];
      const studentLi = `
               <li class="student-item cf">
                   <div class"student-details>
                       <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
                       <h3>${student.name.first} ${student.name.last}</h3>
                       <span class="email">${student.email}</span>
                   </div>
                   <div class="joined-details">
                       <span class="date">Joined: ${student.registered.date}</span>
                   </div>
               </li>
           `;

      studentList.innerHTML += studentLi;
    }
  }
}

// This function creates the buttons needed to cycle through each page repsonsively. The more contacts in the 'address' book, the more buttons will be created. It then calls the
// showPage() function everytime a new button is clicked, therefore showing different contacts on each page.
function addPagination(list) {
  const numOfButtons = Math.ceil(list.length / 9);
  linkList.innerHTML = "";
  for (let i = 0; i < numOfButtons; i++) {
    const button = `
         <li>
            <button type="button">${i + 1}</button>
         </li>
      `;
    linkList.innerHTML += button;
  }

  const firstButton = linkList.firstElementChild;
  firstButton.className = "active";
  linkList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const buttonList = linkList.children;
      const button = event.target;
      for (let i = 0; i < buttonList.length; i++) {
        const buttonElement = buttonList[i].querySelector("button");
        buttonElement.className = "";
      }
      button.className = "active";

      showPage(list, button.textContent);
    }
  });
}

// The showPage() here starts the contact list on page one.
showPage(data, 1);
addPagination(data);

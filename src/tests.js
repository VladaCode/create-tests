import("./pages/tests.css");

window.addEventListener("DOMContentLoaded", () => {
  const addQuestion = document.querySelector(".add-question"),
    sectionQuestions = document.querySelector(".questions"),
    questionElement = document.querySelector(".question");

  sectionQuestions.addEventListener("click", (event) => {
    addNewOptionInQuestion(event); // add new option in question
  });

  addQuestion.addEventListener("click", () => {
    addNewQuestion(); //add new question function
  });

  function addNewQuestion() {
    sectionQuestions.insertAdjacentHTML(
      "beforeend",
      `    <div class="question">
          <input
            class="data_field_question"
            type="text"
            placeholder="Question"
          />
          <div class="options">
            <div class="option">
              <label class="custom-checkbox">
                <input type="checkbox" id="option" />
                <span class="checkmark"></span>
              </label>
              <input
                class="data_field_question"
                type="text"
                placeholder="option1"
              />
            </div>
            <div class="option">
              <label class="custom-checkbox">
                <input type="checkbox" id="option" />
                <span class="checkmark"></span>
              </label>
              <input
                class="data_field_question"
                type="text"
                placeholder="option2"
              />
            </div>
          </div>
          <button class="add-option">+ Add option</button>
          <div class="footer-test">
            <svg
              class="delete-question"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style="fill: rgb(231, 147, 203)"
            >
              <path
                d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"
              ></path>
            </svg>

            <span class="status_option"
              >The correct answer is not selected*</span
            >
          </div>
        </div>`
    );
  }

  function addNewOptionInQuestion(event) {
    if (event.target.classList.contains("add-option")) {
      const parentElement = event.target.closest(".question"),
        optionList = parentElement.querySelector(".options"),
        questionCount = optionList.querySelectorAll(".option").length + 1;

      optionList.insertAdjacentHTML(
        "beforeend",
        `
          <div class="option">
              <label class="custom-checkbox">
                <input type="checkbox" id="option">
                <span class="checkmark"></span>
              </label>
              <input class="data_field_question" type="text" placeholder="option ${questionCount}">
            </div>
        `
      );

      console.log(optionList);
    }
  }
});

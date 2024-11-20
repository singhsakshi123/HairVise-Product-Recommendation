import React, { useEffect, useState } from "react";
import "../Style/Quiz.css";
import axios from "axios";
import Navbar from "../Components/Navbar";

export const Quiz = () => {
  const questions = [
    "Please specify your age group",
    "Please select your gender identity",
    "How would you describe the volume of your hair?",
    "What type of hair do you have?",
    "How would you describe the texture of your scalp?",
    "How would you describe the texture of your hair?",
    "Have you been experiencing hair loss?",
    "For how long have you been experiencing hair loss?",
    "Do you experience any hair shedding?",
    "Have you been experiencing dandruff?",
    "How would you describe the type of your dandruff?",
    "Do you experience itchiness on your scalp?",
    "Have you been experiencing hair greying issue?",
    "Have you undergone any specific hair treatments from the following?",
    "Do you regularly use these treatments on your hair?",
  ];

  const options = [
    ["18-30", "31-45", "46-60", "60+"],
    ["Male", "Female"],
    ["Fine", "Medium", "Thick"],
    ["Wavy", "Straight", "Curly"],
    ["Dry", "Oily", "Normal to oily"],
    ["Rough and Dry", "Silky and smooth", "Full and Lustrous"],
    ["Yes", "No"],
    ["Less than three months", "3 to 6 months", "More than 6 months", "None"],
    ["Rarely", "Occasionally", "Frequently", "None"],
    ["Yes", "No"],
    ["Flaky", "Powdery", "None"],
    ["Rarely or never", "Frequently"],
    ["Yes", "No"],
    ["Keratin treatment", "Colour or henna", "None"],
    ["Yes", "No"],
  ];

  let currentQuestionIndex = 0;
  let selectedOptions = [];

  function selectOption(option) {
    const selectedOption = option.innerText;
    selectedOptions[currentQuestionIndex] = selectedOption;
    console.log(selectedOptions);
    const options = option.parentElement.children;
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("selected");
    }
    option.classList.add("selected");
  }

  function nextQuestion() {
    if (selectedOptions[currentQuestionIndex]) {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        renderQuestion(currentQuestionIndex);
      } else {
        displayRecommendations();
      }
    } else {
      alert("Please select an option");
    }
  }

  function renderQuestion(index) {
    const questionContainer = document.querySelector(".question");
    if (questionContainer) {
      questionContainer.innerHTML = `Question ${index + 1}: ${questions[index]
        }`;
    }

    const optionsContainer = document.getElementById("optionsContainer");
    if (optionsContainer) {
      optionsContainer.innerHTML = "";
      for (let i = 0; i < options[index].length; i++) {
        const option = document.createElement("div");
        option.className = "option";
        option.innerText = options[index][i];
        // option.setAttribute("onclick", "selectOption(this)");
        // option.addEventListener("click", () => selectOption(option));
        option.onclick = () => selectOption(option);
        optionsContainer.appendChild(option);
      }
    }

    const questionIndex = document.getElementById("questionIndex");
    if (questionIndex) {
      questionIndex.innerHTML = `Question ${index + 1} of ${questions.length}`;
    }
  }

  async function displayRecommendations() {
    console.log(selectedOptions)
    let quizData = new FormData();
    quizData.append("HairLoss", selectedOptions[6]);
    quizData.append("Duration", selectedOptions[7]);
    quizData.append("Shedding", selectedOptions[8]);
    quizData.append("Dandruff", selectedOptions[9]);
    quizData.append("Type", selectedOptions[10]);
    quizData.append("ItchyScalp", selectedOptions[11]);
    quizData.append("HairGreying", selectedOptions[12]);
    quizData.append("Treatment", selectedOptions[13]);
    quizData.append("RegularUsage", selectedOptions[14]);
    console.log(quizData);
    // console.log(quizData, "Data");
    // console.log(quizdata, "Data");

    // Send Quiz Data to API in formData to access it as request.form in flask
    let quizdata = {
      HairLoss: selectedOptions[6],
      Duration: selectedOptions[7],
      Shedding: selectedOptions[8],
      Dandruff: selectedOptions[9],
      Type: selectedOptions[10],
      ItchyScalp: selectedOptions[11],
      HairGreying: selectedOptions[12],
      Treatment: selectedOptions[13],
      RegularUsage: selectedOptions[14],
    };
    console.log(quizdata)

    // Call API
    const response = await axios.post(
      "http://localhost:8080/recommend",
      quizData
    );
    // const response = await fetch("http://localhost:8080/recommend", {
    //   method: "POST",
    //   headers: {
    //     "'Content-Type': 'multipart/form-data'",
    //   },
    //   body: quizdata,
    // }).then((response) => response.json());
    console.log(response, "Response");
    // console.log(response.json(), "Response");

    const quizContainer = document.getElementById("quizContainer");
    const recommendationContainer = document.getElementById(
      "recommendationContainer"
    );
    if (quizContainer) {
      quizContainer.style.display = "none";
    }
    if (recommendationContainer) {
      recommendationContainer.style.display = "block";
    }

    const recommendationList = document.getElementById("recommendationList");
    if (recommendationList && response.data.recommended_products) {
      let output = ""
      for (let i = 0; i < response.data.recommended_products.length; i++) {
        
        output += `<p>${response.data.recommended_products[i]}</p></br>`
      }
      recommendationList.innerHTML = output; // You can replace this with actual recommendations
    }
  }
  // Render the first question initially
  useEffect(() => {
    renderQuestion(currentQuestionIndex);
  }, []);
  return (
    <div>
      <Navbar />
      <div id="quizContainer" className="containers">
        <h2 className="question">Question 1: Please specify your age group</h2>
        <div className="options" id="optionsContainer"></div>
        <button id="nextBtn" onClick={nextQuestion}>
          Next
        </button>
        <div id="questionIndex" className="index">
          Question 1 of 14
        </div>
      </div>

      <div
        id="recommendationContainer"
        className="recommendation-container"
        style={{ display: "none" }}
      >
        <h2>Recommended Products</h2>
        <div id="recommendationList"></div>
      </div>
    </div>
  );
};

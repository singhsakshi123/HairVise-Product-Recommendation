import React, { useState } from "react";
import "../Style/Chatbot.css";
import Navbar from "../Components/Navbar";
import axios from "axios";

export const ChatBot = () => {
  const [userInput, setUserInput] = useState("");
  const [responseText, setResponseText] = useState("");
  const msgerForm = get(".msger-inputarea");
  //   const msgerInput = get(".msger-input");
  //   const msgerChat = get(".msger-chat");
  const msgerInput = document.getElementById("textInput");
  const msgerChat = document.querySelector(".msger-chat");

  // Icons made by Freepik from www.flaticon.com
  const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
  const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
  const BOT_NAME = "Hairvise";
  const PERSON_NAME = "You";

  //   msgerForm.addEventListener("submit", (event) => {});

  const handleSubmit = (event) => {
    event.preventDefault();

    const msgText = userInput;
    if (!msgText) return;

    appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
    setUserInput("");
    botResponse(msgText);
  };
  function appendMessage(name, img, side, text) {
    //   Simple solution for small apps
    const msgHTML = `
<div class="msg ${side}-msg">
<div class="msg-img" style="background-image: url(${img})"></div>

<div class="msg-bubble">
  <div class="msg-info">
    <div class="msg-info-name">${name}</div>
    <div class="msg-info-time">${formatDate(new Date())}</div>
  </div>

  <div class="msg-text">${text}</div>
</div>
</div>
`;

    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
  }

  const botResponse = async (rawText) => {
    // Bot Response
    //   $.get("/get", { msg: rawText }).done(function (data) {
    //     console.log(rawText);
    //     console.log(data);
    //     const msgText = data;
    //     appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
    //   });
    const botData = JSON.stringify({ msg: rawText });
    // const response = await axios.get(
    //   "http://localhost:8000/get",
    //   JSON.stringify(botData)
    // );
    const response = await fetch("http://localhost:8000/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: botData,
    })
      .then((response) => response.json())
      .then((responseData) => {
        setResponseText(responseData.response);
        console.log(responseData.response);
        appendMessage(BOT_NAME, BOT_IMG, "left", responseData.response);
      });
    // const response = await axios.get("http://localhost:8000/get", botData);
    console.log(responseText);
  };

  // Utils
  function get(selector, root = document) {
    return root.querySelector(selector);
  }

  function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
  }
  return (
    <div>
      <Navbar />
      <section class="msger">
        <header class="msger-header">
          <div class="msger-header-title">
            <i class="fas fa-bug"></i> Hairvise <i class="fas fa-bug"></i>
          </div>
        </header>

        <main class="msger-chat">
          <div class="msg left-msg">
            <div
              class="msg-img"
              style={{
                backgroundImage:
                  "url(https://image.flaticon.com/icons/svg/327/327779.svg)",
              }}
            ></div>

            <div class="msg-bubble">
              <div class="msg-info">
                <div class="msg-info-name">Hairvise</div>
                <div class="msg-info-time"></div>
              </div>

              <div class="msg-text">Hi, welcome to Hairvise! 😄</div>
            </div>
          </div>
        </main>

        <form class="msger-inputarea">
          <input
            type="text"
            class="msger-input"
            id="textInput"
            placeholder="Enter your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button type="button" class="msger-send-btn" onClick={handleSubmit}>
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

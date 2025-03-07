# ChatMate Project Documentation
- **Lorenzo Lai**
- **Samuel Lucena Losada**
- **Alberto Manser**
- **Dorian Herzig**

| Date     | Version | Summary                                                                                              |
|----------|---------|------------------------------------------------------------------------------------------------------|
| 10.01.2025 | 0.0.0   |   Today we wrote what we wanted to do as a project in the form of a project assesment and started to inform ourselves on what to do.   |
| 17.01.2025 | 0.0.1   |   We made a Lo-fi prototype and started to create a front end for our project. We also started a server to host the chat in.   |
| 24.01.2025 | 0.0.2   |   We made good progress on the functionality of the website.   |
| 10.01.2025 | 0.0.1   |      |
| 10.01.2025 | 0.0.1   |      |
| 10.01.2025 | 0.0.1   |      |
| 10.01.2025 | 0.0.1   |      |


## 1. Project Overview

### 1.1 ChatMate

ChatMte is a way for two and more people to communicate in a fun and easy way. Users can choose their own username and chat toghether over a general chat.

### 1.2 User Stories

| US-№ | Priority | Type            | Description                                                                                           |
|------|----------|-----------------|-------------------------------------------------------------------------------------------------------|
| 1    |  Must        |  Functional               | As a user, I want to choose my own username.                                                                                                      |
| 2    |  Must        |  Functional               | As a user, I would like for names to be at least 3 characters long.                                                                                                      |
| 3    |  Must        |  Functional               | As a user, I want to be able to join a chat through the press of a button.                                                                                                      |
| 4    |  Can         |  Functional               | As a user, I want the design of the website to be responsive, so that I can communicate on my mobile phone as well.                                                                                                      |
| 5    |  Must        |  Functional               | As a user, I want to write a message of whatever length and send it with the click of a button in chat.                                                                                                      |
| 6    |  Must        |  Functional               | As a User, I want to be able to save the chat log for myself witht he click of a button.                                                                                                      |
| 7    |  Must        |  Functional               | As a User, even if I were to join a chat after it had already been started, I wan tto see the previous chat messages.                                                                                                  |
| 8    |  Can         |  Functional               | As a User, I would like to have a dark/light-mode toggle for the website.                                                                                                      |

### 1.3 Test Cases

| TC-№ | Initial State                                | Input                                         | Expected Output                                             |
|------|---------------------------------------------|-----------------------------------------------|--------------------------------------------------------------|
| 1.1  | Please choose a username                    | "Orion89"                                     |   Username accepted                                          |
| 2.1  | Please choose a username                    | "AI"                                          |   Username must be at least 3 characters long                |
| 2.2  | Please choose a username                    | "FuckBoy69"                                   |   Username contains forbidden vocabulary                     |
| 2.3  | Please choose a username                    | "Zac"                                         |   Username accepted                                          |
| 3.1  | Username hasn't been selected               | presses "save and join" button                |   Unable to join, please select a username first             |
| 3.2  | Username has been selected                  | presses "save and join" button                |   User is now in general chat                                |
| 5.1  | User joined the chat                        | "Hello there!" clicks the send button         |   User sent a message and is visible to all other players    |
| 6.1  | User joined the chat                        | presses the "save chat log" button            |   Chat log is saved for the user                             |
| 7.1  | User joined the chat                        | previous messages are visible to the user     |   -                                                          |
| 8.1  | User has opened the website                 | clicks the "change theme" button              |   Mode turns to light or dark                                |

### 1.4 Diagrams



## 2. Project Planning

| AP-№ | Deadline | Responsible | Description | Planned Time |
|------|----------|-------------|-------------|--------------|
| 1.A  |  24.01.2025  | Samuel|Creation Prototyp, Project and Github|120|
| 2.A  |  31.01.2025  | Alberto| Recreation Prototype in HTML and CSS|90|
| 2.B  |  31.01.2025  | Lorenzo & Dorian | Initialize Backend and Create Server|45|
| 3.A  |  21.02.2025  | Samuel | Github Pages Hosting | 45 |
| 3.B  |  21.02.2025  | Lorenzo & Dorian | Create a functional Chat | 225 |
| 4.A  |  28.02.2025  | Alberto | Add function to save chat locally | 225 |
| 4.B  |  28.02.2025  | Samuel  | Add the function for a third user to join and see the previous messages in the chat | 270 |
| 5.A  |  7.03.2025   | Lorenzo & Dorian | Create a responsive design | 180 |
| 5.B  |  7.03.2025   | Samuel & Alberto | Add the function for users to choose their own name | 180 |
| 6.A  |  14.03.2025  | Alle | Backup Zeit und Bugfixing | 225 |

## 3. Implementation

| AP-№ | Date     | Responsible      | Planned Time | Actual Time     |
|------|----------|------------------|--------------|-----------------|
| 1.A  | 24.01.2025         |  Samuel               |  90'            |  90'                |
| 2.A  | 31.01.2025         |  Alberto              |  90'            |  135'               |
| 2.B  | 15.11.2024         |  Lorenzo & Dorian     |  45'            |  45'                |
| 3.A  | 15.11.2024         |  Samuel               |  45'            |  45'                |
| 3.A  | 22.11.2024         |  Lorenzo & Dorian     |  135'           |  120'               |
| 4.A  | 22.11.2024         |  Alberto              |  180'           |  135'               |
| 4.B  | 22.11.2024         |  Samuel               |  225'           |  180'               |
| 5.A  | 29.11.2024         |  Lorenzo & Dorian     |  135'           |  180'               |
| 5.B  | 29.11.2024         |  Samuel & Alberto     |  180'           |  180'               |
| 6.A  | 14.03.2025         |  Alle                 |  225            |  270                |
|
## 4. Test Report and Evaluation

### Test Report

| TC-№ | Test Status | Remarks                                                                 |
|------|-------------|-------------------------------------------------------------------------|
| 1.1  |      OK     |                                                                         |
| 1.2  |      OK     |                                                                         |
| 2.1  |      OK     | Takes real time data                                                    |
| 2.2  |      OK     |                                                                         |
| 3.1  |      OK     |                                                                         |
| 3.2  |      OK     |                                                                         |
| 4.1  |      OK     |                                                                         |
| 4.2  |      OK     |                                                                         |
| 5.1  |      OK     |                                                                         |
| 5.2  |      OK     |                                                                         |
| 5.3  |      OK     |                                                                         |
| 6.1  |      OK     |                                                                         |
| 7.1  |      OK     |                                                                         |
| 7.2  |      OK     |                                                                         |
| 8.1  |      OK     |                                                                         |


# 5. Evaluation
Our porject was a sucess with only minor adjustments needed, such as the implementation of a real data bank, isntead of using the browser local storage to see the last researched locations. We managed to work quite well together and the documentation was updated every day of the LA. In ou opinion, we managed our time and work-packages quite well and were able to finish everything in time.

Overall I would give us a 8.5 out of ten rating for finishing the project and achieving our personal goals.

Here is the link to Samuel's Mahara portfolio: https://portfolio.bbbaden.ch/view/view.php?t=44f0521ba947b66969c2

Here is the link to Lorenzo's Mahara portfolio: https://portfolio.bbbaden.ch/view/view.php?t=0da58f34214e254eb3be

Here is the link to Alberto's Mahara portfolio: https://portfolio.bbbaden.ch/view/view.php?t=bffd5c916a540cac5d5a

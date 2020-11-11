## HACC 2020 Team Impastas

Challenge: COVID-19 Chat Bot

## The MedBae bot is hosted at this address: https://med-bae.vercel.app/

## Inspiration
COVID-19 is a pandemic that has swept through all countries in the world and has had dire consequences on communities globally. Hawaii, being a small island state, is especially prone to extremely negative repercussions if COVID-19 is not taken seriously and handled effectively. In order to help combat COVID-19 and give people easier access to the information and resources to learn more about it, MedBae was born.

## What it does
MedBae is a chatbot that is a one and done stop for all questions related to Hawaii and COVID-19. MedBae is able to figure out what a user is asking and respond with helpful, insightful, and meaningful answers.

## How we built it
MedBae was created using Google's Dialogflow as the brains of the operation. With Dialogflow we were able to implement intents that interpret what the user is trying to convey and respond in a meaningful manner. To create responses, we collected data from the two provided resources: https://hawaiicovid19.com/ and https://health.hawaii.gov/coronavirusdisease2019/. We synthesized the data to the most important aspects and provide information that makes sense to the user based on their question.

## Challenges we ran into

One of the challenges we ran into was getting the data we needed to use for responses. Fortunately, through some expert digging, we found a FAQ PDF at https://health.hawaii.gov/docd/files/2020/01/2019_nCoV_FAQ.pdf. We took this document and used some data manipulation techniques to transform it into a Knowledge Base which Dialogflow can easily handle. We did end up abandoning this path for the project as we discovered that we could not manipulate the intents as easily as we hoped. As it is still a beta feature, additional training phrases couldn't be provided for Knowledge responses. 

## Accomplishments that we're proud of

We're proud that we created a working chatbot that can respond to user input and provide relevant sources to user's pressing questions.

## What we learned

We learned a lot about Dialogflow, leveraging each other's skill sets, time management, and working as a group.

## What's next for MedBae
While MedBae is currently providing users with information and resources to help inform the people of Hawaii, we want it to be more welcoming. Currently, MedBae only understands English and we plan to incorporate the languages that are commonly used around Hawaii. On top of that, we want the actual responses from MedBae to be more feature-rich such as rich text integration and smooth redirection to websites such as covid testing questionnaires.

## Technical Team
Google Cloud Services used:

Dialogflow: We created our chatbot by creating intents that map to responses within Dialogflow’s framework. Rough mapping of frequent user questions to canned responses. 

Timeline: 
October 31st – November 7th: Researched Dialogflow, combed through the provided data sets at the sites, created a plan of intents for the chat bot to handle, and pursued possible solution using Knowledge Base of Dialogflow.

November 8th – November 11th: Finalized iconography, went through the process of training the chat bot with potential questions, implemented context to handle conversational branches, and integrated chatbot into mock website using Dialogflow Messenger and WebDemo.

Future Plans: 
We plan to open the site up for user testing after the technical review and to continue to make improvements. We also are going to make our list of intents more robust. 





## Overview
Track My Shows is a straightforward single-page application designed to help users track their series watch time. Users can set goals for the number of episodes they intend to watch and then log their actual watch time. Additionally, they can reflect on their viewing experience by selecting a mood and writing a short entry for each session. This app aims to encourage intentional watching or binge-watching sessions. It's built using HTMl, Javascript, CSS and local storage.

### Version Control
This project uses git and github for managing significant changes. Here is the github repo link: [](https://github.com/gabybong/gbon0058-A3tracker.git)

## Features
- Overview table to display all tracked data with edit and delete buttons for managing entries.
- Modal pop-up for inputting watch time, mood selection, and writing short reflective entries.
- Goal setting for the number of episodes to watch and logging of actual watch time for comparison.

## Usage
1. Preview the page using github, [](https://github.com/gabybong/gbon0058-A3tracker.git)
2. Open the index.html file in your web browser

Start tracking by clicking on " + Log Watch Session ". If you want to edit and come back, click the pencil button. If you want to delete the entry, click the bin button.

## Limitations
This application uses local storage for data persistence so it is limited to a specific browser and device. 

## Acknowledgements

### Sources
**Libraries**
- Bootstrap 5.3.3
- Bootstrap Icons 1.11.3
  
**Figma Plugins**
  - Google Symbols. Material Symbols.
  - Gary McFarland. Table Creater.

### AI usage acknowledgements
This project received assistance from ChatGPT-3.5 for resolving minor issues, including:

"Can you please assist me with this? My delete button isn't deleting the log and I'm not sure why."
"My edit button is showing an empty form instead of the inserted data. Please assist me with this."
"Can you format the styling so that the upload image is aligned to the left?"
"Can you write a basic README file for this project?"

### Development 
This is the original high-fidelity concept for the UI. However, I was unable to replicate this design in my final web application. Therefore, I will guide you through the screens and its intentions.

The SPA was initally meant to be split into two sections: home and history. 

## Home
The Home section is the primary interface for users. It resembles a note-taking app, where user input is displayed in a card layout.

Each card features a blue bar at the top indicating progress. A half-filled bar signifies that the card needs further attention, as shown by the "complete" button. When the bar is fully filled, the "complete" button changes to "done," signaling that the card is finished. Completed cards are then deleted from the main page and moved to the history page for later viewing when the user presses "done". 

This design allows users to focus on their primary task of tracking sessions and reviewing the most current information on the dashboard. Older information is moved to the history page, keeping the main view uncluttered and dedicated to the latest updates.

![Screenshot of home page figma](/images/home-main.png)
![Screenshot of home page modal figma](/images/home-modal.png)

## History 
The History section comprises all the data logged from the tracked sessions from the home section, offering options for editing or deleting entries as desired. The search bar facilitates filtering and comparison of data or finding specific information. Additionally, users can toggle between table and card views, with the mobile version automatically defaulting to the card view.
![Screenshot of history page card figma](/images/history-card.png)
![Screenshot of history page table figma](/images/history-table.png)


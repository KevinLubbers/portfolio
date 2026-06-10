# My Portfolio
The purpose of this project is to provide code, video, and written explanation for some of the projects I have worked on


This website was built with HTML and CSS. That's it. 

I wanted to showcase how semantic HTML and basic CSS can be beautiful. My day-to-day deals with huge projects with tons of dependencies, so I decided on a change of pace with this one. Super small file size (minus the videos :D)  



## PHP / Laravel / Livewire (Web Dev)
### PCS Ticket System 2.0

Email requests that lacked clear customer and vehicle information were causing unnecessary work and added stress for the PCS Department. This ticket system was created to solve their issues.

How it helps:
- Requires users to enter all necessary information before being able to continue
  - No more wasted time with back and fourth emails trying to extract information
- Routes the ticket to the appropriate team member based on task and manufacturer/division/model
  - No more having to forward emails to the correct recipient and explain the mix-up
- Increased team visibility and accountability with Ticket Dashboard
  - No more excuses of "oh, I didn't know I was supposed to answer that one"
- Analytics provide hard numbers that can be presented to Senior Leadership Team
  - Showcase your same day response rate and resolution rate
- Analytics also show trends that lead to questions that help push the business
  - "Why are so many people asking the same question about XYZ? Maybe there is an underlying cause..." 

Visit the [PCS Ticket System](https://github.com/KevinLubbers/laravel-pcs)

---  

### RecipeHub

Everyone and their mother has their own recipes. I wanted a way for people to be able to store their recipes in the cloud for free! Similar concept to GitHub but instead of uploading code for the world to see, you would be uploading recipes.

Adjust the recipe for your family size with the built in multiplication function. Now, families of all sizes can enjoy every dish on the web.

You can save recipes you randomly find from other people.

Sharing is a breeze too with our copy function! All Ingredients and Measurements are placed into your clipboard, ready to be pasted into a text message or email.

Visit [RecipeHub](https://github.com/KevinLubbers/RecipeHub)

---  

### OcuCal

My wife likes to keep track of everything related to her health. The only issue, everything was spread out between different apps and handwritten charts. She loves being able to see patterns and glean insights she might have missed otherwise but her system was not sustainable.

She asked me to create a calendar where she can view the whole year at-a-glance and turn different filters off and on to see exactly what she wants when she wants, all in one app. Together we created a Progressive Web App named [**OcuCal**](https://https://github.com/KevinLubbers/athena-calendar-app). 

---  

### Laravel Shared Hosting Setup
Shared hosting is the most cost effective way to host a website

I've created a skeleton template and guide for setting up a Laravel project in a shared hosting environment

Also includes bash scripts for setting up automated deployment integration with GitHub, logging and cache clearing included

Visit [Here](https://github.com/KevinLubbers/laravel-shared-hosting-setup)

## Python ETL Scripts
### Daily MilQuote Data Pull
Updates meta-data then creates the .exe and .iso that is distributed and installed world-wide  
Steps:  
1. cron job set to run at 7:15am every Monday-Friday
2. Deletes the contents of a shared OneDrive folder
3. Stores daily back-up of SQL database
4. Updates version control software and creates exe with new data
5. Creates iso back-up of the exe
6. Moves all files created from exe process to the OneDrive folder from Step 2
7. When all files are sync'd (approx 5 min)  
Time Saved: 45 minutes per day / every day  
Eliminated Risk of Delay - Automation runs same time every day

---  

### PCS Library - RPA
A RPA library for interacting with the WinForms Version of PCS Maintenance through keyboard-driven actions.

Can be combined with other scripts that use scraped data or decompiled data from pdfs.

Built with Python using the following libraries: pyautogui, pygetwindow, and pyperclip

---  

### PC Carbook - Base Price and Destination Scraper
Logs in to a website, manipulates elements on the page to display tables of data, scrapes the pertinent content and stores it into an SQLite database

Uses SQL queries to track changes and send users a Teams notification when new data is present

Built with Python using libraries like playwright, sqlite3, dotenv, and the standard library

---  

### PC Carbook - Model Options Scraper
Built from the previously mentioned Base Price and Destination Scraper, this script was created through an iterative design process. 

Still looping through designated Manufacturers, but now we load all of the option data for each model present in the dynamically generated table.

The database schema needed to change slightly to account for the introductions of option_code, option_name, and option_category 

---  

### PC Carbook to PCS
Uses the previously mentioned pcslib Python library to loop through scraped data and enter it into the PCS Maintenance DB.

CLI menu for keeping track of models entered into PCS Maintenance.

---  

### Stellantis PDF Extractor
Extracts unstructured pricing data from OEM Order Guides and stores data into structured(Database) and semi-structured(JSON) format
Key Points:
1. Extracts data using PyMuPDF library and RegEx
2. Transforms raw data into something that can be used
3. Comparison functionality that shows removed options, added options, and changed options
4. After the Data is cleaned, it is ready to be loaded into the Database

## Power Automate Desktop
### Stellantis Order Guide Scraper
  [Watch the video](./videos/stellantisOGscrape.mp4)  
Steps of this automation:
  1. Log into manufacturer website with username and password (stored securely in a password manager)
  2. Retrieve MFA code from email and paste into web form
  3. Loop through every selection of every dropdown (4 dropdowns total)
  4. Each dropdown selection populates the data of the next dropdown
  5. Extract data from all four dropdown's HTML (year, make, model, date of upload, and url)
  6. If the date of upload is less than five days in the past then add to list
  7. Send list as JSON in an API request to Microsoft Teams Webhook which prints a HTML table that displays the scraped data as well as a URL to download the new files  

Time Saved: 30 minutes per day / every day  
Eliminated risk of human error  


---  

### Ford Order Guide Scraper
  [Watch the video](./videos/fordOGscrape.mp4)  
Steps of this automation:
  1. Log into manufacturer website with username and password (stored securely in a password manager)
  2. Navigate to desired pages to scrape (next year, this year, past year) 
  3. Extract data from HTML once the document has fully loaded (year, make, model, date of upload, and url)
  4. If the date of upload is less than five days in the past then add to list
  5. Send list as JSON in an API request to Microsoft Teams Webhook which prints a HTML table that displays the scraped data as well as a URL to download the new files

Time Saved: 30 minutes per day / every day  
Eliminated risk of human error

## WIP - Currently Working on
- [x] ~~Add content to readme~~
- [x] ~~Redo language selection flags~~
- [x] ~~Redo darkmode background~~
- [ ] Update all projects on README
- [ ] Update all projects on index.html
- [ ] Get the videos working properly, currently have to download to watch


 

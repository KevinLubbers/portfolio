# My Portfolio
The purpose of this project is to provide code, video, and written explanation for some of the projects I have worked on


This website was built with HTML and CSS. That's it. 

I wanted to showcase how semantic HTML and basic CSS can be beautiful. My day-to-day deals with huge projects with tons of dependencies, so I decided on a change of pace with this one. Super small file size (minus the videos :D)  



## PHP / Laravel / Livewire
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
### RecipeHub

Everyone and their mother has their own recipes. I wanted a way for people to be able to store their recipes in the cloud for free! Similar concept to GitHub but instead of uploading code for the world to see, you would be uploading recipes.

Adjust the recipe for your family size with the built in multiplication function. Now, families of all sizes can enjoy every dish on the web.

You can save recipes you randomly find from other people.

Sharing is a breeze too with our copy function! All Ingredients and Measurements are placed into your clipboard, ready to be pasted into a text message or email.

## Python / Scripting
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
- [x] Add content to readme
- [x] Redo language selection flags
- [x] Redo darkmode background
- [ ] Add shadows 



 

# My Portfolio
The purpose of this project is to provide code, video, and written explaination for some of the projects I have worked on


This website was built with HTML and CSS. That's it. 

I wanted to showcase how semantic HTML and basic CSS can be beautiful. My day-to-day deals with huge projects with tons of dependencies, so I decided on a change of pace with this one. Super small file size (minus the videos :D)  



## PHP / Laravel / Livewire
### PCS Ticket System 2.0


### RecipeHub

## Python / Scripting
### Daily MilQuote Data Pull

Time Saved: 45 minutes per day / every day  
Eliminated Risk of Delay - Automation runs same time every day

### PCS RPA Library

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
  

### Ford Order Guide Scraper
  [Watch the video](./videos/fordOGscrape.mp4)
Steps of this automation:
  1. Log into manufacturer website with username and password (stored securely in a password manager)
  2. Navigate to desired pages to scrape (next year, this year, past year) 
  3. Extract data from HTML once the document has fully loaded (year, make, model, date of upload, and url)
  4. If the date of upload is less than five days in the past then add to list
  5. Send list as JSON in an API request to Microsoft Teams Webhook which prints a HTML table that displays the scraped data as well as a URL to download the new files

Time Saved: 30 minutes per day / every day

## WIP - Currently Working on
- [ ] Add content to readme
- [x] Redo language selection flags
- [ ] Redo darkmode background
- [ ] Add shadows 



 

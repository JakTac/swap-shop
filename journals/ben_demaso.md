BEN'S DAILY JOURNAL

Day 1 - January 4
    Today was all sorts of challenging, and we basically
    spent the entirety of group time troubleshooting Docker
    Windows issues. This was critical as 3/5 of our group is
    on PC's. Jake, Cody, and Melissa shared for most of the day.

Day 2 - January 5
    Similar to yesterday, we unfortunately had a lot of wasted
    calories on frustrating setup errors. However, by the end
    of the day we were finally making some headway, having a
    couple of routes to show for it. We comtinued programming as
    a full group of 5, with Alonso at the reigns for much of the
    day. He was a huge help with our forward progress, I was the
    coder for the rest of the day.

Day 3 - January 6
    Happy Friday! I hopped into screensharing and being the coder/typer
    with the rest of the group helping spot my typos and errors. We
    made really good progress on auth and Cody took over for the last
    hour or so of the day.

Day 4 - January 9
    After finishing the last routes in our backend and auth all together, it was time to fill out our kanban (Trello) board in Notion and divvy up responsibilities. We decided who would be responsible (main programmer) for each of 10 pages and who would be either pair or trio (we have 5 members) programming with them. We decided which pages would be more challenging forst, assigning them to a trio in lieu of a pair. Then, we discussed the dependency of the pages. Like tomorrow, we're starting with the API and filtering sdince every single page depends on those functionalities.

    This gives us an organized, concise plan of attack for the coming days that was well thought out based on difficulty and dependencies.

Day 5 - January 10
    Melissa crafted a "shared work" journal in this directory for us as we worked all together on the backend from Day 1 to Day 4. We would switch drivers, team code, and tap Riley and SEIRs for assistance when necessary. After building part of the Main Page, Nav, and API integration/filter function all together, we jumped into our pair and trio programming assignments. We built these initial front end/React pages together first as they were critical to the building of all other pages. No API integration means no products to show which means... blank webpages even if we did everything correctly.

    So that seemed like the natural place to start!

    This took a LOT longer than originally thought. We switched off drivers, and while we intended to finish all of the API and filtering functions together today, we didn't get that far. We got hung up especially on the API integration for product items and pictures. We'll keep plugging away.

Day 6 - January 11
    We all planned on splitting off individually to start on our assigned pages, but... that didn't happen. Authorization continues to be hard, Riley was right about it being far and away the most challenging aspect of this build. Alonso drove for putting the finishing touches on the auth backend, while I drove for 2-3 hours working on the auth frontend. We had snags with many errors from "unprocessable entity" and accidently passing user credentials as a string instead of a handleSubmit object (thus putting plain text user data in the URL, oops), to silly issues like trying to log in with a wrong password. Need to work on an error message for that to make it more clear in the future. Not just a console.log, but an actually on screen error.

    Jake drove while working on a couple of Windows quirks, and Melissa continued work on our SwapShop logo.

    With help from Riley, Cooper, and Sarah we finally got our login function working with users created in Swagger. SUCCESS! That felt really good.

    It was another day of really solid work as a team, and I continue to be grateful for the talent of our group and our group dynamics. Folks are smart, willing to put in the work, and are investted in our success. That makes this 4 week project WAY more enjoyable. Things are coming along nicely!

Day 7 - January 12
    Today started with revamping our kanban/Trello board to get all of the team on the same page with future building of, well, pages. THe last two days we continued with a lot more one driver, four pairs of eyes, work than we thought we would originally. The decision to drop the API (way too hard to use to populate user data), hiccups in the auth process, and higher complexity of pages like signup and product filtering.

    But it was good to keep working together!

    After our standup, we put the finishing touches on the frontend signup and decided to punt filtering/search for the weekend and Monday. It feels like we're still in a good spot in terms of finishing on time.

    Once we had lunch, we hopped in a SEIR room because the signup page frontend was continuing to vex us. After an hour we found the capitalization error and things worked well. Once we came back from the hour long Google info session we made great headway on the Create Listing page. This isn't yet totally done, but 95% of the way there.

    Tomorrow we'll really (finally, I've had many false assumptions of how quickly we'd get through the backend and auth) dive into individual work. Definitely looking forward to that.

Day 8 - January 13

    We got started with our sign out function because auth is so freaking difficult. Jake drove at first while the rest of us watched for helpful things to point out. Then we worked with Cody on finishing touches on the Create Listings page.

Day 9 - January 17
    The day before our three-day weekend involved a LOT of frustration. Errors on errors, SEIR help, instructor help, no one able to find the mistake... and then Alonso finds a missing comma or out of place space. This happened at least three times over the course of the day, which is just brutal when you think you know what's actually going on and feeling good about the project.

Day 10 - January 18
    We worked on new routes for the backend, allowing us to display Sale History and more. I spent most of the morning reviewing Project Beta's functional components, and Candice's Redux and React Hooks lectures to allow me to more efficiently implement them.

    I crafted all of the React and JSX code for the Sale History page. That's not to say it works perfectly, of course. Up until lunch I was tweaking the filtering and React dynamic links. That's admittedly one of the newest/weirdest elements of this project for me.

    I still need to add a search functionality, and I worked with Jake extensively on the backend linking to the Sale History page. We needed a boolean property for sold/not sold in our database after it was created. I wanted to add a "date sold" to populate automatically with the time and date that boolean field was clicked, but I'm considering making that a stretch goal.

Day 11 - January 19
    Today was the day of router and function struggles for the Sale History page. We tried adding the boolean field option for sold/not sold in the backend, but when we started testing things in the morning there was a lot to be fixed... ouch. Three SEIR and Riley visits, we learned to run the sold boolean through the update function instead of creating a new dedicate sell item function.

    However, this broke the create listing route which then needed to be fixed.

    By the end of the day, we'd made great progress but I still wouldn't say Sale History is complete. More for tomorrow!

Day 12 - January 20
    What a great day! I got right to work on the Sale History and Profile Page, tigtening up some of the styling and trying to get the filters to cooperate. However I quickly reilized I was doing things out of order and that the Profile Page needed some love first. We needed it to display listings for just the logged in user there, and needed a "Marked as Sold" that connected to yesterday's backend fixes.

    Connecting that "Mark as Sold" button proved challenging and took a couple of hours. Later in the afternoon I was finally able move into specific filtering and automatic refreshes. I also tweaked error messaging during thtis time, and my pair programmer Alonso got this across the finish line with his backend skills.

Day 13 - January 23
    Happy Monday! 5 days until project is due and only a week until the last serious academic responsibilty of the module and final exam! This group project went by *fast.* Far more enjoyable than Module 2. Gracious that was a tough one.

    I started by diving into the Sale History page and mild tweaks on the Profile Page and Nav bar. After a couple hours of work, I was happy with the Sale History page. We now have cards of sold items displayed based on a boolean tied to a button inside a function from from the My Listing page. Profile Page and Nav bar changes were mostly naming edits.

    We then did a review of code cleanliness, getting rid of commented out code, console.logs, and reviewing the console while each page is rendered to see any errors. Jake added a buy button to each listing so long as the logged in user's ID and the seller ID didn't match.

    We're uncertain if we need to add more in the way of a user to seller connection and will get clarity on that from an instructor. We could add contact info as a required field when creating a listing, or do a more complicated solution like a chat system Websocket... although that sounds tough. Time to get into unit tests now... not sure where to start with that other than reviewing explorations.

Day 14 - January 24
    After discussing with Riley we decided not to include seller info and certainly not to add a chat function Websocket. We changed the language of selling and buying to "Request from Seller" and "Mark as Sold" so that we'd strictly be showing active functionalities of our app and not dumby items. Riley discouraged against this as you don't want to show perspective employers something that doesn't work.

    Once we had these language/terminology fixes I hopped back into unit tests. Rewatching Riley's lecture, seeing what I could learn online, looking for best practices and additional suggestions of what tests to create. I eventually settled on create a listing and get all listings.

    With some resources and a plan, I spent the rest of the day working on unit tests once again. While I didn't get everything running perfectly, I got really close. More fun for tomorrow.

Day 15 - January 25
    THE UNIT TESTS ARE COMPLETE! And we are one step closer to having this project wrapped up. Pretty wild. Feels good to be so far along and not rushing on Friday afternoon. Unit tests were admittedly challenging for me. Getting everything configured properly, having everything pass, injecting the right mock data. Riley's recorded lecture was beyond helpful and I couldn't have gotten there without that resource. Alonso debugged with me at the very end (just was missing one parameter), which was obviously helpful. This group project has been a huge confidence boost and great reminder how critical being on a capable and communicative team is. It really makes a difference!

Day 16 - January 26
    I got a later start to the coding day due to some other commitments, but was on later in the morning. Today was some code review and catching up on journaling. We decided as a group (and eventually as a class) to hold off on deploying until after the weekend, when the MVP is submitted.

Day 17 - January 27
    Clean up, clean up, everybody do their share! I finished the linting today with black and flake8 and did a final full verification of functionality. Would've hated to break something cleaning up our code. Not much else to report on, I'll submit via Slack after luch and we'll be good to go! I did spend some time cleaning up the .gitlab-ci.yml file and double-checking the README with Alonso. Did another pass through our #comments for code cleanliness as well. (Code) cleanliness is next to (code) godliness, after all.

    Alonso and I started working on CI/CD with much frustration and confusion. We kept getting failed pipeline after failed pipeline. Add ".get" to os.environ wherever found. Change [DATABASE_URL] to (DATABASE_URL). Googled, reviewed Learn and the cookbook, etc. etc.

    Eventually, we were able to get it so close to passing. Obviously we have our unit tests in the .gitlab-ci.yml file, and 6 of them. 5 of these tests passed, leaving just an AssertionError for "test_get_categories." So we're closer, but not quite there.

    After lunch we took a swing at it again.

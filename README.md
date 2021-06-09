# Treehouse Tech-Degree #6

This was my favourite Javascript project. The previous Treehouse project was the only one I didnt get "Exceeds Expectations" on after being thrown for a loop by a for loop. I had to re-strategize. So I took better notes and really just buckled down. 

The most important thing in this project was flow control. Watching the program in the dev tools was a huge confidence booster. Watching it go from getting the phrase to adding the phrase to the clicking on the buttons to the win conditions was actually very motivating. Once I saw how the pieces were connected it was easy to understand(ish).

1. The application begins on the click of the start button which then will grab a random phrase from an array using a variable as index. That function then uses the spread "operator" to spread the phrase into and array of letters and spacces which is then returned.

2. The next step was passing in letters to the next function which loops over the spread phrase and appends the only the letters to the DOM. This got me a little trouble with a local variable. I had no clue wht closures were (still don't) and had my first expreience with scope so to solve I used a global variable. 

3. The game progresses using an event listener on the parent element that holds the letters. After preventDefault() to stop bubbling, We had to toggle a "chosen" class for styling the chosen buttons and then disabling them so they could not be chosen again. If the letter was in the phrase, chosen would trigger a transition and if it wasn't we had to remove a "heart" or try from the user.

4. The win condition was difficult. I was unsure of where to put it and tried appending new buttons to the overlay with little success with a new event listener. But then I said why dont we just change the button we already got (start button) and simply changed the text content and made a if statement to handle win or lose conditions.

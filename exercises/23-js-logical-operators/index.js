console.log("Connected...");

const hour = prompt("What hour is it? (0 being midnight. 23 being 11pm");

if (hour < 0 || hour > 23 || hour !== hour) {
    confirm("Incorrect input.  Refresh page and try again.");
} else if (hour < 8 || hour > 18) {
    confirm("Sorry.  That time is outside of office hours.");
} else if (hour >= 8 && hour <= 18) {
    confirm("Welcome!  We are open!");
} else {
    confirm("Boy did you break this.  Might wanna look into that.");
}
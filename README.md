Hello, and welcome to my first passion project!

### A Quick Background
I recently discovered that the way I wanted to track my finances
hardly aligned with what was currently available in the market.
The apps just didn't click with me as much as I would have hoped to.
Then the thought of "If I can't find it, then I'll make it".

I was also looking for a way to efficiently divide group expenditures
when someone catches the bill for someone else. Similarly, the
status and setup of the existing apps left something to desire.

# Introducing: Financier
And thus, the motivation to create a personal finance tracking app
came to be. I saw this as the perfect opportunity to experience
building something from the ground up, giving me new knowledge beyond
endpoints and views. I have had some experience developing in both
Python and (React) JS, so I planned to design the app around what I
already know. This would allow me to focus on learning some of the
underlying mechanisms while also allowing me to brush up on stuff like
CSS and HTML since I really want to transition into a more Front End
oriented role.

You can check it out [here](https://adid1297.github.io/financier).

## What can it do?
At the moment, it can:
 - create groups
 - add members to the created groups
 - create an expense which details an expense covered by one group
 member for another
 - suggest a way to settle all the owed money in the group

## Moving forward, an uncomprehensive list of what I want the app to do:
 - allow people to input a payment between two members, and adjusting
  their balance accordingly
 - be able to update & delete groups, members, expenses, and payments
 - allow multiple people to pay for an item
 - allow an item to be for multiple people
 - allow specifying percentages/splits in how much a person pays/owes
 - take in receipts:
    - multiple people can pool an amount to cover the total of the receipt
    - specify who has to pay for each item of the receipt
    - note any additional fees for the items (e.g. service charge)
  - create a way to persist sessions and group info since right now
   it's simply stored within the (Redux) state
  - make web app to be more mobile responsive
  - create native apps

All this with the focus on making it mobile-friendly, super simple, and sleek!

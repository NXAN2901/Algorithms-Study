# How memory works

Imagine you go to a show and need to check your things. A chest of
drawers is available.

Each drawer can hold one element. You want to store two things, so you
ask for two drawers and you store your two things to that drawers.

=> <b> This is basically how your computer’s
memory works. Your computer looks like a giant set of drawers, and
each drawer has an address. </b>

<p align = "center">
    <img src = "../../res/images/array-linkedlist/1.png" width="360" height="240">
    <p align = "center"><i>Slot in memory</i></p>
</p>

Each time you want to store an item in memory, you ask the computer for some space, and it gives you an address where you can store your item.

If you want to store multiple items, there are two basic ways to do so: <b>Array</b> and <b>List</b>.

Sometimes you need to store a list of elements in memory. Suppose you’re writing an app to manage your todos. You’ll want to store the todos as a list in memory. <b>=> Should you use an array, or a linked list? </b>

## Array

Using an array means all your tasks are stored contiguously (right next to each other) in memory.

Suppose you want to add a fourth task. But the next drawer is taken up by someone else’s stuff!

<p align = "center">
    <img src = "../../res/images/array-linkedlist/2.png" width="640" height="240">
</p>

In this case, you need to ask your computer for a different chunk of memory that can fit four tasks. Then you need to move all your tasks there. If you’re out of space and need to move to a new spot in memory every time, adding a new item will be really slow.

```
One easy fix is to "hold seats”: even if you have only 3 items in your task list, you can ask the computer for 10 slots, just in case. 
Then you can add 10 items to your task list without having to move. 

This is a good workaround, but you should be aware of a couple of downsides:

    * You may not need the extra slots that you asked for, and then that memory will be wasted. 
    You aren’t using it, but no one else can use it either.

    * You may add more than 10 items to your task list and have to move anyway.

=> So it’s a good workaround, but it’s not a perfect solution. Linked lists solve this problem of adding items.
```

<i> Example: It’s like going to a movie with your friends and finding a place to sit but another friend joins you, and there’s no place for them. You have to move to a new spot where you all fit. If another friend comes by, you’re out of room again—and you all have to move a second time <b>=> What a pain! </b> </i>

The elements in an array are numbered. This numbering starts from 0, not 1. For example, in this array, 20 is at position 1 and 10 is at position 0.

<p align = "center">
    <img src = "../../res/images/array-linkedlist/3.png" width="320">
</p>

```
The position of an element is called its index. So instead of saying, "20 is at position 1", the correct terminology is, "20 is at index 1".
```

Here are the run times for common operations on arrays and lists:

<p align = "center">
    <img src = "../../res/images/array-linkedlist/4.png" width="320">
</p>

## Linked List

<i><b> With linked lists, your items can be anywhere in memory </b></i>. Each item stores the address of the next item in the list. A bunch of random memory addresses are linked together.

```
It’s like a treasure hunt. You go to the first address, and it says, "The next item can be found at address 123.” So you go to address 123, and it says, "The next item can be found at address 847,” and so on.
```

<p align = "center">
    <img src = "../../res/images/array-linkedlist/5.png" width="640" height="240">
</p>

Adding an item to a linked list is easy: you stick it anywhere in memory and store the address with the previous item.

With linked lists, you never have to move your items. If there’s space in memory, you have space for your linked list.

```
The six of you are trying to find a place to sit, but the theater is packed. There aren’t six seats together. 
Well, sometimes this happens with arrays. Let’s say you’re trying to find 10,000 slots for an array. 
Your memory has 10,000 slots, but it doesn’t have 10,000 slots together. 
You can’t get space for your array! A linked list is like saying, "Let’s split up and watch the movie.”
```

# Arrays and linked lists

Websites with top-10 lists use a scummy tactic to get more page views. Instead of showing you the list on one page, they put one item on each page and make you click Next to get to the next item in the list.

```
For example, Top 10 Best TV Villains won’t show you the entire list on one page. 
Instead, you start at #10 (Newman), and you have to click Next on each page to reach #1 (Gustavo Fring).
This technique gives the websites 10 whole pages on which to show you ads, but it’s boring to click Next 9 times to get to #1.
It would be much better if the whole list was on one page and you could click each person’s name for more info.
```

Linked lists have a similar problem. Suppose you want to read the last item in a linked list. You can’t just read it, because you don’t know what address it’s at. Instead, you have to go to item #1 to get the address for item #2. Then you have to go to item #2 to get the address for item #3. And so on, until you get to the last item.

<i>=> Linked lists are great if you’re going to read all the items one at a time: you can read one item, follow the address to the next item, and so on. But if you’re going to keep jumping around, linked lists are terrible. </i>

Arrays are different. You know the address for every item in your array.

```
For example, suppose your array contains five items, and you know it starts at address 00. What is the address of item #5? 
Simple math tells you: it’s 04.

With a linked list, the elements aren’t next to each other, 
so you can’t instantly calculate the position of the fifth element in memory.

You have to go to the first element to get the address to the second element, 
then go to the second element to get the address of the third element, and so on until you get to the fifth element.
```

<i> => Arrays are great if you want to read random elements, because you can look up any element in your array instantly. </i>

# Inserting into the middle of a list

Suppose you want your todo list to work more like a calendar. Earlier, you were adding things to the end of the list. Now you want to add them in the order in which they should be done.

<p align = "center">
    <img src = "../../res/images/array-linkedlist/6.png" width="480" height="240">
</p>
<p align = "center"> <i> => What’s better if you want to insert elements in the middle: arrays or lists? </i></p>

<p align = "center">

|                                      List                                      |                                                           Array                                                            |
| :----------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
|              Easy to change what the previous element points to.               | Have to shift all the rest of the elements down. if there’s no space, you might have to copy everything to a new location. |
| <img src = "../../res/images/array-linkedlist/7.png" width="640" height="240"> |                       <img src = "../../res/images/array-linkedlist/8.png" width="360" height="240">                       |

</p>

```
=> Lists are better if you want to insert elements into the middle
```

# Deletions

What if you want to delete an element? Again, lists are better, because you just need to change what the previous element points to.

With arrays, everything needs to be moved up when you delete an element.

```
Unlike insertions, deletions will always work. Insertions can fail sometimes when there’s no space left in memory.
But you can always delete an element.
```

Here are the run times for common operations on arrays and linked lists:

 <p align = "center">
    <img src = "../../res/images/array-linkedlist/9.png" width="360" height="240">
</p>

```
It’s worth mentioning that insertions and deletions are O(1) time only if you can instantly access the element to be deleted.

It’s a commonpractice to keep track of the first and last items in a linked list, so it would take only O(1) time to delete those.
```

Which are used more: arrays or lists? Obviously, it depends on the use case. <b> But arrays see a lot of use because they allow <i>"Random Access"</i> </b>

```
There are two different types of access: Random Access and Sequential Access. 
Sequential Access means reading the elements one by one, starting at the first element. 
Random Access means you can jump directly to the specific element.
```

Linked lists can only do sequential access. If you want to read the 10th element of a linked list, you have to read the first 9 elements and follow the links to the 10th element.

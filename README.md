# Sera

Stay streamlined with Sera. Transform the way you work today with an AI-powered focus detector.

## Inspiration
Distractions fill every crevice of our lives. From posts from professors, to emails from employees, to messages from loved ones-- the distractions of the digital world clutter our headspace and thus our working habits. 

As such, we've developed Sera, a blunt assistant to your person, determined to help you focus.

## What it does
Our app uses trained facial recognition models to track a person's face and identify times when they are distracted during their work. Designed to be used in webcam format, Sera alerts the user when they are losing focus to their work, strictly enforcing through an audio alert system. Once the AI detects that the person is looking at the screen and is focused, it stops audio.

## How we built it
Utilizing the TensorFlow face-landmarks-detection model, we implemented a constant webcam video feed that sends and receives data points on the status of the person or people in the video. We built a script that parses the data on the 456 points tracked on the face, and determines, using a predefined criteria, if the person is not paying attention. We implemented this on the front-end side using React.

## Challenges we ran into
The primary challenge was our collective inexperience using React, as well as computer vision models. Much of the time was spent attempting to organize the separate components, and debugging the issues that came with that. When dealing with a large data set like that provided by the model, identifying the most important information in the context of the purpose of the project. 

## Accomplishments that we're proud of
The difficulty we faced resulted in many setbacks and times of demotivation. However, we were able to finish with a complete project that matched our initial vision, and in certain aspects, surpassed it. Unfortunately, we weren't able to make our implementation as seamless as we had liked, but we are still proud of our work.

## What we learned
The importance of organization and understanding the intricacies of why things work cannot be understated, especially when learning new technologies. As a group, we learned much about the development process when using higher level  techniques, like computer vision models. Being deliberate with how we use such models brings forth many questions that need detailed understanding, which is something we've learned in depth throughout the course of this hackathon.

## What's next for Sera
Sera is still very much an incomplete project with much potential. Our plan is to implement additional features and create a finished product with a UI that is easy to use and to the point. 

### PROJECT NAME : SHORT URL

#Tech stack: Nodejs
#DATABASE: MongoDB

Description: ShortUrl is used to make the url links easily shareable.

Design: 

1. Post API : API used to take the url and return the random generated id with the length of 8 alphanumeric value

2. Storing in mongo:
    schema: 1.redirectCode  2.originalUrl

3. Get API: API used to redirect the user to the original URL.


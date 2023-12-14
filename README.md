# Homework-5

Install the react environment which takes a couple of minutes.

```bash
npx create-react-app my-app
```
To run the project type:
```
  cd my-app
  npm start
```

You will see the app running on [http://localhost:3000/](http://localhost:3000/)
Just for learning purposes we will remove most of the clutter. Lets start with the "public" folder.
Remove all files except index.html

![index.html](img/index.png)

Update index.html with the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/jsx"></script>
  </body>
</html>
```

Save and check if the app is running.

Lets clean up src

Delete all the files under "src" except index.js

![src](img/src.png)

Create components folder and add App.jsx and Card.jsx

![components](img/components.png)

Update 'App.jsx'

```jsx
import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
```

Update 'Card.jsx'

```jsx
import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
```

Add contacts.js under the "src" folder with the following content:

```js
const contacts = [
  {
    name: "Kemal",
    imgURL: "https://media.licdn.com/dms/image/C4E03AQE-40IRli5Frg/profile-displayphoto-shrink_200_200/0/1540920894374?e=1684368000&v=beta&t=FO1cANWA7q4nUNZ35HIHCjeiojtVHC6FQkpFbdKxUJg",
    phone: "+1 (501) 442-0274",
    email: "kemal.aydin@franklin.edu"
  },
  {
    name: "Kemal",
    imgURL: "https://media.licdn.com/dms/image/C4E03AQE-40IRli5Frg/profile-displayphoto-shrink_200_200/0/1540920894374?e=1684368000&v=beta&t=FO1cANWA7q4nUNZ35HIHCjeiojtVHC6FQkpFbdKxUJg",
    phone: "+1 (501) 442-0274",
    email: "kemal.aydin@franklin.edu"
  },
  {
    name: "Kemal",
    imgURL: "https://media.licdn.com/dms/image/C4E03AQE-40IRli5Frg/profile-displayphoto-shrink_200_200/0/1540920894374?e=1684368000&v=beta&t=FO1cANWA7q4nUNZ35HIHCjeiojtVHC6FQkpFbdKxUJg",
    phone: "+1 (501) 442-0274",
    email: "kemal.aydin@franklin.edu"
  }
];

export default contacts;
```
If the image does not work, check if you can see the image when you paste it's URL in the browser. If not, open your LinkedIn and use another one for example: your profile image URL.
Update index.js with the following:

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
```

Check if your app is running.

Add styles.css under public folder with the following content:

```jsx
body {
  font-family: sans-serif;
  margin: 0 auto;
  padding: 25px;
  max-width: 400px;
  min-width: 400px;
  background-color: #dfe6e9;
  text-align: center;
}

.heading {
  text-align: center;
  font-size: 2em;
  color: #2d3436;
  margin: 20px 0 30px;
}

.card {
  border-radius: 25px;
  position: relative;
  padding: 25px 15px;
  background-color: #81ecec;
  margin: 50px 0;
  height: 200px;
  box-shadow: 0 2px 5px #ccc;
  text-align: left;
}

.top {
  border-radius: 25px 25px 0 0;
  height: 100px;
  width: 100%;
  background-color: #00cec9;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
}

.name {
  font-size: 2em;
  color: #2d3436;
  display: flex;
  flex: 1;
  margin: 10% 20px 0;
}

.card img {
  margin: 30px 20px 0 0;
}

.circle-img {
  border-radius: 50%;
  border: 7px solid #fff;
  width: 120px;
  height: 120px;
}

.bottom {
  margin-top: 120px;
}

.info {
  margin: 20px 0;
  color: #1a7e76;
}
```

To do:

1. Right now when we add new contacts to the contacts.js it is not displayed. Or when we remove a contact we get an error in App.jsx because the contacts are hard-coded. Please update App.jsx so it can display all the contacts appropriately when there is an addition or deletion in the contacts.js regardless of their count.
2. Add a link for the LinkedIn profile of the contact to the card.
3. Change at least three CSS properties and explain them in the CSS file.
4. Make sure you have at least five contact cards.

Credits: This lab is modified from an example at [https://www.udemy.com/course/the-complete-web-development-bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/17039094#search)

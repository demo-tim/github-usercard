/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const gitHub = document.querySelector(".cards")
// axios
// .get("https://api.github.com/users/timmitzen")
//   .then((response) => {
//     console.log(response);
    
//     const data = response.data
//     document.querySelector(".cards")
//     .appendChild(createGithub(
//       data.name, data.html_url, data.avatar_url, 
//       data.login, data.name, data.bio, data.followers, data.following))//add all the fields
    
//   })
//   .catch((error) => 
//   {
//     console.log(error)
//   })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "torvalds",
  "gaearon",
  "yyx990803",
  "dustinmyers",
  "bigknell"
];

followersArray.map(follower => {
axios.get(`https://api.github.com/users/${follower}`)
      .then(res => {
        const data1 = res.data;
        document.querySelector(".cards").appendChild(createGithub(
        data1.avatar_url , 
        data1.name , 
        data1.login, 
        data1.location, 
        data1.html_url, 
        data1.followers, 
        data1.following, 
        data1.bio))
      })
      
      .catch(err => console.log(err))
      
})


const container = document.querySelector(".cards");

const createGithub = (avatar_url, name, login, location, html_url, followers, following, bio) => {
  const card = document.createElement("div");
  card.classList.add("card");
  
  

  const userImage = document.createElement("img");
  userImage.src = avatar_url;
  card.appendChild(userImage);//appends the image to the card

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  card.appendChild(cardInfo);//append cardinfo to the card
  console.log(cardInfo);

  const user1 = document.createElement("h3");
  user1.classList.add("name");
  cardInfo.appendChild(user1);
  user1.textContent = `${name || "See login if null"}`;
  // appends h3 to cardInfo
  
  const pUserName = document.createElement("p");
  pUserName.classList.add("username");
  cardInfo.appendChild(pUserName);
  pUserName.textContent = login;
 
  const locationP = document.createElement("p");
  cardInfo.appendChild(locationP);
  locationP.textContent = `location: ${location}`;

  const profile = document.createElement("p");
  cardInfo.appendChild(profile);
  profile.textContent = `Profile:`;

  const aProfile = document.createElement("a");
  aProfile.href = html_url;//need to do textContent too
  aProfile.textContent = html_url;
  aProfile.appendChild(profile); //appends aprofile to profile

  const pFollower = document.createElement("p");
  pFollower.textContent = `Followers: ${followers}`;
  pFollower.appendChild(cardInfo);

  const pFollowing = document.createElement("p");
  pFollowing.textContent = `following: ${following}`;
  pFollowing.appendChild(cardInfo)
  
  const bioUser = document.createElement("p");
  bioUser.textContent = `bio: ${bio || "Not available"}`
  bioUser.appendChild(cardInfo);

  return card;
}
axios
.get("https://api.github.com/users/TimMitzen")
  .then((response) => {
    console.log(response);
    const data = response.data
    document.querySelector(".cards")
    .appendChild(createGithub(
      data.avatar_url, 
      data.name, 
      data.login, 
      data.location, 
      data.html_url, 
      data.followers, 
      data.following, 
      data.bio))//add all the fields
    
  })
  .catch((error) => 
  {
    console.log(error)
  })
// const followersArray = [
//   "torvalds",
//   "gaearon",
//   "yyx990803",
//   "dustinmyers",
//   "bigknell"
// ];

// followersArray.map(follower => {
// axios.get(`https://api.github.com/users/${follower}`)
//       .then(res => {
//         const data1 = res.data;
//         document.querySelector(".cards").appendChild(createGithub(
//         data1.avatar_url , 
//         data1.name , 
//         data1.login, data1.location, data1.html_url, 
//         data1.followers, 
//         data1.following, 
//         data1.bio))})
      
//       .catch(err => console.log(err))
      
// })

/* Step 3: Create a function that accepts a single object as its only argument,
        Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
<img src={image url of user} />
<div class="card-info">
  <h3 class="name">{users name}</h3>
  <p class="username">{users user name}</p>
  <p>Location: {users location}</p>
  <p>Profile:  
    <a href={address to users github page}>{address to users github page}</a>
  </p>
  <p>Followers: {users followers count}</p>
  <p>Following: {users following count}</p>
  <p>Bio: {users bio}</p>
</div>
</div>

*/

/* List of LS Instructors Github username's: 
tetondan
dustinmyers
justsml
luishrd
bigknell
*/

// const container = document.querySelector(".cards");

// const createGithub = (avatar_url , name , login, location, html_url, followers, following, bio) => {
// const card = document.createElement("div");
// card.classList.add("card")


// const userImage = document.createElement("img");
// userImage.src = avatar_url; //src is shortcut for image
// card.appendChild(userImage);

// const cardInfo = document.createElement("div");
// cardInfo.classList.add("card-info");
// card.appendChild(cardInfo);

// const user1 = document.createElement("h3");
// user1.classList.add("name");
// cardInfo.appendChild(user1);
// user1.textContent = `${name || "See user Name"}`;//{needs to include the whole thing}

// const userName = document.createElement("p");
// userName.classList.add("username")
// cardInfo.appendChild(userName);
// userName.textContent = login;

// const locations = document.createElement("p")
// cardInfo.appendChild(locations);
// locations.textContent = `Location: ${location || "Not Available"}`;


// const profile = document.createElement("p");
// cardInfo.appendChild(profile);
// profile.textContent = `Profile:`

// const profileA = document.createElement("a");// need href too
// profileA.href = html_url;
// profile.appendChild(profileA);
// profileA.textContent = ` ${html_url}`

// const follower = document.createElement("p");
// cardInfo.appendChild(follower);
// follower.textContent = `Followers: ${followers}`;

// const followings = document.createElement("p");
// cardInfo.appendChild(followings);
// followings.textContent = `Following: ${following}`;

// const bioUser = document.createElement("p");
// cardInfo.appendChild(bioUser);
// bioUser.textContent = `Bio: ${bio || "Not Available"} `;

// return card;
// }


// axios
// .get("https://api.github.com/users/timmitzen")
// .then((response) => {
//   console.log(response);
//   const data = response.data
//   document.querySelector(".cards")
//   .appendChild(createGithub(
//     data.avatar_url , 
//     data.name, 
//     data.login, 
//     data.location, 
//     data.html_url, 
//     data.followers, 
//     data.following, 
//     data.bio))//add all the fields
  
// })
// .catch((error) => 
// {
//   console.log(error)
// })
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>



*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

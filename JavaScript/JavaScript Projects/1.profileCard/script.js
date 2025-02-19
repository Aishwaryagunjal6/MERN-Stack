//1.select target element
//2.create new html elements using document.createElement() method
//3.Add contenet to created element using innerHtml or innerText
//5.add classes or id's if needed
//6.append elements to build structure
//Append to the DOM

const appContainer = document.getElementById("app");
const generateBtn = document.getElementById("generateBtn");


function createProfileCard(){
  //create the profilr card container
  const profileCard = document.createElement('div');
  //add class
  profileCard.className= "profile-card";
  
  //add an image element for profileCard
  const profileImage = document.createElement('img');
  //add imagr to the img tag
  profileImage.src ="https://tse4.mm.bing.net/th?id=OIP.6f5ZEeT1bM05vEOyFk2a7AHaHa&pid=Api&P=0&h=180"

  //create a heading element for title of image
  const profileName = document.createElement('h3');
  profileName.textContent= "Aishwarya Gunjal"

  //create paragraph element for the description
  const profileDescription = document.createElement('p');
  profileDescription.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quam eius ipsum vitae. Maiores assumenda similique sunt ea expedita, voluptatem porro ipsam atque dicta cumque dolorum modi! Culpa, omnis sequi."

  //append the elements to the profile card
  profileCard.appendChild(profileImage)
  profileCard.appendChild(profileName)
  profileCard.appendChild(profileDescription)

  //append the profilecard to the app container
  appContainer.appendChild(profileCard)

  console.log(appContainer)
}


generateBtn.addEventListener('click', createProfileCard);
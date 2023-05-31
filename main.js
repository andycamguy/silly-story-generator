//complete variable and function definitions
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//raw text settings
var storyText = "It was 94 fahrenheit outside, so :itemx: went for a walk. When they got to :itemy:, they stared in horror for a few moments, then :itemz:. Bob saw the whole thing, but was not surprised — :itemx: weighs 300 pounds, and it was a hot day.";
const insertX = [ "Willy the Goblin", "Big Daddy", "Father Christmas" ]
const insertY =[ "the soup kitchen", "Disneyland", "the White House"]
const insertZ =["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem =randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory =.newStory.replace(':insertX:'itemX)
  newStory =.newStory.replace(':insertY:'itemY)
  newStory =.newStory.replace(':insertZ:'itemZ)
  newStory =.newStory.replace(':insertX:'intemX)


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob,name);
  }

  if(document.getElementById("uk").checked) {
    const weight = ${Math.round(300*0.0714286)}+"stone";
    const temperature =  Math.round((94 - 32) * 5/9);
    newStory = newStory.replaceAll('300 pounds', weight);
    newStory = newStory.replaceAll('94 fahrenheit, temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


randomize.addEventListener('click', result);


let personName = document.getElementById("person_Name")
personName.style.color = 'red';
personName.style.textDecoration = 'overline';


let allDates = document.getElementsByClassName("dates")
allDates[0].style.fontStyle = 'oblique';
allDates[0].style.textDecoration = 'line-through';
allDates[1].style.color = 'purple';
allDates[1].style.fontSize = '23px';
allDates[1].style.textTransform = 'uppercase';


document.getElementsByTagName("nav")[0].style.backgroundColor = 'green';
document.getElementsByTagName("nav")[0].style.width = '95px';
document.getElementsByTagName("nav")[0].style.padding = '5px';


let firstTexts = document.getElementsByClassName("main_text_one")
for (let e = 0; e < firstTexts.length; e++) {
    let mainTexts = firstTexts[e];
    mainTexts.style.borderStyle = 'dashed';
    mainTexts.style.borderColor = 'yellow';
    mainTexts.style.borderWidth = '2px';
}
firstTexts[0].style.textDecoration = 'underline';
firstTexts[0].style.textAlign = 'right'
firstTexts[1].style.color = 'red';
firstTexts[2].style.letterSpacing = '5px'


let secondTexts = document.getElementsByClassName("main_text_two")
secondTexts[0].style.lineHeight = '10px';
secondTexts[0].style.borderLeft = 'solid red 3px';
secondTexts[0].style.borderBottom = 'dotted green 5px';
secondTexts[1].style.wordSpacing = '7px'
secondTexts[1].style.letterSpacing = '8px';
secondTexts[1].style.textDecoration = 'underline turquoise'


let onTop = document.getElementById("on_top")
onTop.style.borderStyle = 'solid';
onTop.style.borderColor = 'red';
onTop.style.borderWidth = '1px';
onTop.style.padding = '5px';
onTop.style.width = '80px';
onTop.style.backgroundColor = 'gold';
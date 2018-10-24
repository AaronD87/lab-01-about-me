var pTags = document.querySelectorAll('p').length;
var labelTags = document.querySelectorAll('label').length;
var divTags = document.querySelectorAll('div').length;

var selectedAnswerCheckP = document.getElementById('elements-checkbox-p');
var selectedAnswerCheckLabel = document.getElementById('elements-checkbox-label');
var selectedAnswerCheckDiv = document.getElementById('elements-checkbox-div');

function checkCheckbox() {
    var checkedTags = document.querySelectorAll('input[name="checkbox"]:checked');
    var i;
    for(i = 0; i < checkedTags.length; i++) {
        var number = document.querySelectorAll(checkedTags[i].value).length;

        if(checkedTags[i].value === 'p') {
            selectedAnswerCheckP.textContent = number + ' P Tags';
        } else if(checkedTags[i].value === 'label') {
            selectedAnswerCheckLabel.textContent = number + ' Label Tags';
        } else {
            selectedAnswerCheckDiv.textContent = number + ' Div Tags';
        }
    }
}
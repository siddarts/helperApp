function createListGroupItem(left_text, right_text) {
    var list_group_item = document.createElement('li');
    list_group_item.setAttribute('class', 'list-group-item');

    var left_div = document.createElement('div');
    var right_div = document.createElement('div');
    var clearfix = document.createElement('div');
    left_div.setAttribute('class', 'pull-left');
    right_div.setAttribute('class', 'pull-right');
    clearfix.setAttribute('class', 'clearfix');

    left_div.innerHTML = left_text
    right_div.innerHTML = right_text

    list_group_item.appendChild(left_div);
    list_group_item.appendChild(right_div);
    list_group_item.appendChild(clearfix);

    return list_group_item;
}

function createAlert(text) {
    var alert = document.createElement('div');
    alert.setAttribute('class', 'alert alert-success');
    alert.setAttribute('role', 'alert');

    alert.innerHTML = text;

    return alert;
}

function addAlert(text) {
    var alert = createAlert(text);

    var right_div = document.getElementsByClassName('col-sm-9')[0];
    right_div.insertBefore(alert, right_div.firstChild);

    setTimeout(function() {
        $(alert).fadeOut();
    }, 2000);
}

function addHelpRequest() {
    // Get skill and deadline 
    var skill = document.getElementById('skill').value
    var deadline = document.getElementById('deadline').value

    // Create request text 
    var request = '<strong>' + skill + '</strong>' + ' in ' + deadline;

    // Create list item 
    var listItem = createListGroupItem(request, '');

    // Add list item to current help request section
    var currentHelpRequests = document.getElementById('help_needed');
    currentHelpRequests.appendChild(listItem);
}

// from Sid
function acceptHelp() {
    var listGroupIcon = document.getElementById('accept_help_icon');
    listGroupIcon.setAttribute('id', 'getting_help_icon');

    var icon = listGroupIcon.getElementsByTagName('i')[0];
    icon.innerHTML = 'timer';

    var modalLink = listGroupIcon.getElementsByTagName('a')[0];
    modalLink.setAttribute('data-target', '#finishModalSid');

    var listGroupItem = document.getElementById('accept_help_list_item');
    listGroupItem.setAttribute('id', 'getting_help_list_item');

    // add message - getting help from sdghkj
    // send text to helper message

}

function finishHelp(helper, skill, time) {
    var listGroupItem = document.getElementById('getting_help_list_item');
    var listGroupIcon = document.getElementById('getting_help_icon');
    
    listGroupItem.firstChild.nextSibling.innerHTML = '<strong>' + helper + '</strong>' + ' helped you with ' + '<strong>' + skill + '</strong>'
    listGroupIcon.removeAttribute('id');
    listGroupIcon.innerHTML = '-' + time;

    // Move from help needed list to help received list group
    var currentHelpRequests = document.getElementById('help_needed');
    var helpReceived = document.getElementById('help_received');
    helpReceived.insertBefore(listGroupItem, helpReceived.firstChild);

    // remove icon and replace with amount of time helped 
    // remove modal footer
    // Person who helped awarded 2 horus help credit 
    // move open help request to past help received 
}

function addSkill() {
    var newSkill = document.getElementById('newSkill').value;
    // TO DO: check for inclusion in skill type groups 

    var bootstrapLabel = document.createElement('span');
    bootstrapLabel.setAttribute('class', 'label label-pill label-default')
    bootstrapLabel.innerHTML = newSkill;

    var skillsGroup = document.getElementById('skills_group');
    skillsGroup.appendChild(bootstrapLabel);

    clearSkill();
}

function clearSkill() {
    document.getElementById('newSkill').value = '';
}

function removeRequest(request) {
    request.parentNode.removeChild(request);
}
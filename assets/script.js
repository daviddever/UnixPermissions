function validate() {
    var ownerRead = 0;
    var ownerWrite = 0;
    var ownerExecute = 0;
    var groupRead = 0;
    var groupWrite = 0;
    var groupExecute = 0;
    var otherRead = 0;
    var otherWrite = 0;
    var otherExecute = 0;
    if (document.getElementById('ownerRead').checked) {
        ownerRead = parseInt(100, 2);
    }
    if (document.getElementById('ownerWrite').checked) {
        ownerWrite = parseInt(10, 2);
    }
    if (document.getElementById('ownerExecute').checked) {
        ownerExecute = parseInt(1, 2);
    }
    if (document.getElementById('groupRead').checked) {
        groupRead = parseInt(100, 2);
    }
    if (document.getElementById('groupWrite').checked) {
        groupWrite = parseInt(10, 2);
    }
    if (document.getElementById('groupExecute').checked) { 
        groupExecute = parseInt(1, 2);
    }
    if (document.getElementById('otherRead').checked) {
        otherRead = parseInt(100, 2);
    }
    if (document.getElementById('otherWrite').checked) {
        otherWrite = parseInt(10, 2);
    }
    if (document.getElementById('otherExecute').checked) {
        otherExecute = parseInt(1, 2);
    }
    setOctal(ownerRead, ownerWrite, ownerExecute, groupRead, groupWrite, groupExecute, otherRead, otherWrite, otherExecute);
    setDescription(ownerRead, ownerWrite, ownerExecute, groupRead, groupWrite, groupExecute, otherRead, otherWrite, otherExecute);
}

function setOctal(ownerRead, ownerWrite, ownerExecute, groupRead, groupWrite, groupExecute, otherRead, otherWrite, otherExecute) {
    var octalDigit1 = parseInt((ownerRead + ownerWrite + ownerExecute), 8);
    var octalDigit2 = parseInt((groupRead + groupWrite + groupExecute), 8);
    var octalDigit3 = parseInt((otherRead + otherWrite + otherExecute), 8);

    var octal = octalDigit1.toString() + octalDigit2.toString() + octalDigit3.toString();

    document.getElementById("octal").innerHTML = octal;
}

function setDescription(ownerRead, ownerWrite, ownerExecute, groupRead, groupWrite, groupExecute, otherRead, otherWrite, otherExecute) {
    var owner = ""
    var group = ""
    var other = ""
    if ownerRead > 0 {
        owner = owner + " Read";
    }
    if ownerWrite > 0 {
        owner = owner + " Write";
    }
    if ownerExecute > 0 {
        owner = owner + " Execute";
    }
    if groupRead > 0 {
        group = group + " Read";
    }
    if groupWrite > 0 {
        group = group + " Write";
    }
    if groupExecute > 0 {
        group = group + " Execute";
    }
    if otherRead > 0 {
        other = other + " Read";
    }
    if otherWrite > 0 {
        other = other + " Write";
    }
    if otherExecute > 0 {
        other = other + " Execute";
    }
    document.getElementById("owner").innerHTML = "Owner:" + owner;
    document.getElementById("group").innerHTML = "Group:" + group;
    document.getElementById("other").innerHTML = "Other:" + other;
}

validate()




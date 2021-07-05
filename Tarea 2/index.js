// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states2) {
    if (index == 7) {
        document.getElementById("log").innerHTML += "<br><span style='color:red'>Ha pasado por los 8 estados! </span>";
    } else {
        var currentState = states2[index]
        var location = currentState[0];
        var state = currentState[0] == "A" ? currentState[1] : currentState[2];
        var action_result = reflex_agent(location, state);
        document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
        if (action_result == "CLEAN") {
            if (location == "A") currentState[1] = "CLEAN";
            else if (location == "B") currentState[2] = "CLEAN";
        }
        else if (action_result == "RIGHT") currentState[0] = "B";
        else if (action_result == "LEFT") currentState[0] = "A";
        numeroEstado += 1;
        states2[index] = currentState;
        if (numeroEstado % 4 === 0) {
            index += 1;
            document.getElementById("log").innerHTML += "<br>&nbsp;<span style='color:green'>&nbsp;State: ->".concat(states2[index][0] + ' - ' + states2[index][1] + ' - ' + states2[index][2]).concat("</span>");;
        }
    }

    setTimeout(function () { test(states2); }, 2000);
}


var numeroEstado = 0;
var index = 0;
var states = [
    ["A", "DIRTY", "DIRTY"],
    ["B", "DIRTY", "DIRTY"],
    ["A", "DIRTY", "CLEAN"],
    ["B", "DIRTY", "CLEAN"],
    ["A", "CLEAN", "DIRTY"],
    ["B", "CLEAN", "DIRTY"],
    ["A", "CLEAN", "CLEAN"],
    ["B", "CLEAN", "CLEAN"]
]
    ;
test(states);
// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(allStates) {
    if (index == 7) {
        document.getElementById("log").innerHTML += "<br><span style='color:red'>All 8 states are clean. </span>";
    } else {
        var currentState = allStates[index]
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
        allStates[index] = currentState;
        if (numeroEstado % 4 === 0) {
            index += 1;
            document.getElementById("log").innerHTML += "<br><span style='color:green'>State: ->".concat(allStates[index][0] + ' - ' + allStates[index][1] + ' - ' + allStates[index][2]).concat("</span>");;
        }
    }

    setTimeout(function () { test(allStates); }, 2000);
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
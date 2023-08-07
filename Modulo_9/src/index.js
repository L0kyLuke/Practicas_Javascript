import * as DataBusiness from "./data-business.js";
import * as Utils from "./utils.js";


DataBusiness.getData().then(response => {
    document.getElementById("root").innerText = "";

    const nodes = [];
    const characters = response.results;
    for (let character of characters) {
        const node = Utils.createCharacterRow(character);
        
        node.onclick = function () {
            Utils.showCharacter(character);
        }

        nodes.push(node);
    }

    for (let node of nodes) {
        document.getElementById("root").append(node);
    }
})
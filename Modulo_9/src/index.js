import * as DataBusiness from "./data-business.js";
import * as Utils from "./utils.js";


DataBusiness.getData().then(characters => {
    document.getElementById("root").innerText = "";

    const nodes = [];

    for (let character of Object.values(characters)) {
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
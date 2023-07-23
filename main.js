import { animalPrinter } from "./utility.js";
import prompt from 'prompt';

// Start the prompt
prompt.start();
prompt.get(['number'], function (err, result) {
    var numb = result.number;
    animalPrinter(numb);
});
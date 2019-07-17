import * as data from './data.js'
import * as ui from './ui.js'

function init() {
    setupEventListeners();
}

function setupEventListeners() {
    const $button = document.querySelector('.add-exam');
    $button.addEventListener('click', onCreateExamHandler)
}

function onCreateExamHandler(event) {
    event.preventDefault();

    const dataObj = ui.collectData();

    if (ui.validateData(dataObj)) {
        const exam = data.createExam(dataObj, data.exams);
        ui.updateStudentList(exam);
        ui.updateStatistics(data.exams);
        ui.resetForm();
    }
}

export { init }
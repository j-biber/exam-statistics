

function collectData() {
    const $subject = document.querySelector('.exams');
    const $student = document.querySelector('.full-name');
    const $grade = document.querySelector('.grade');

    return {
        subject: $subject.value,
        student: $student.value,
        grade: $grade.value
    }
}

function validateData(dataObj) {
    const { subject, student, grade } = dataObj;
    const $inputError = document.querySelector('.error-box');

    try {
        if (subject === 'none' || !student || !grade) {
            throw new Error('All fields required!');
        }
        if (!checkStudentInput(student)) {
            throw new Error('Incorrect input. Both first and last name required.');
        }
        if (grade < 1 || grade > 10) {
            throw new Error('Grade must be a number between 1 and 10.')
        }
        else {
            $inputError.innerHTML = '';
            return true;
        }

    } catch (error) {
        $inputError.innerHTML = error.message;
    }
}

function updateStudentList(exam) {
    const $passed = document.querySelector('.passed');
    const $failed = document.querySelector('.failed');
    const li =
        `<li>
                <span class="subject-name">${exam.getExamInfo()}</span>
                <span class="grade-box">${exam.grade}</span>
            </li>`;

    if (exam.hasPassed()) {
        $passed.innerHTML += li;
    } else {
        $failed.innerHTML += li;
    }
}

function updateStatistics(exams) {
    const $passed = document.querySelector('.passed-stats .count');
    const $failed = document.querySelector('.failed-stats .count');
    const $failedPercent = document.querySelector('.percentage');

    const studentsPassedCount = exams.examsPassed.length;
    const studentsFailedCount = exams.examsFailed.length;
    const studenstFailedPercent = Math.round((studentsFailedCount / (studentsFailedCount + studentsPassedCount)) * 100);

    $passed.innerHTML = studentsPassedCount;
    $failed.innerHTML = studentsFailedCount;
    $failedPercent.innerHTML = `${studenstFailedPercent}%`;

    $failedPercent.style.backgroundColor = '#ce5442';
}

function checkStudentInput(input) {
    const regex = /\s+/g;
    const regexWordMatch = /[^a-z]+/gi;

    const inputArray = input.trim().split(regex);

    if (inputArray.length != 2) {
        return false;
    } else {
        return inputArray.every(element => {
            return element.match(regexWordMatch) === null
        });
    }
}

function resetForm() {
    const $form = document.querySelector('.exam-form');
    $form.reset();
}

export {

    collectData,
    validateData,
    updateStudentList,
    updateStatistics,
    resetForm
}
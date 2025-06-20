
const students = [
    {
        name: "Rahul",
        rollNo: 101,
        hindi: 80,
        english: 75,
        maths: 90
    },

    {
        name: "Amit",
        rollNo: 102,
        hindi: 85,
        english: 70,
        maths: 95
    },
    {
        name: "Priya",
        rollNo: 103,
        hindi: 78,
        english: 92,
        maths: 87
    }
]

const marksOfComputer = [88,92,95]

for(let i = 0; i < students.length; i++){
    students[i].computer = marksOfComputer[i]
}

console.log(students)

const marksOfScience = [82,90,88]

for(let i = 0; i < students.length; i++){
    students[i].science = marksOfScience[i]
}

console.log(students)

const kaveriData = {
    name: "Kaveri",
    rollNo: 104,
    hindi: 84,
    english: 88,
    maths: 78,
    computer: 90,
    science: 86
}

console.log(kaveriData)

students.push(kaveriData)
console.log(students)

let totalNoOfSubjects = 5
for(let i = 0; i < students.length; i++){
    students[i].totalMarks = students[i].hindi + students[i].english + students[i].maths + students[i].computer + students[i].science
    students[i].avgMarks = students[i].totalMarks / totalNoOfSubjects
}
console.log(students)

function calculateGrade(){
    for(let i = 0; i < students.length; i++){
        if(students[i].avgMarks >= 90 && students[i].avgMarks <= 100){
          students[i].grade = "A"
      } else if(students[i].avgMarks >= 80 && students[i].avgMarks <= 89){
        students[i].grade = "B"
      } else if(students.avgMarks >= 70 && students[i].avgMarks <= 79){
        students[i].grade = "C"
      } else if(students.avgMarks >= 60 && students[i].avgMarks <= 69){
        students[i].grade = "D"
      } else if(students[i].avgMarks >= 50 && students[i].avgMarks <= 59){
        students[i].grade = "E"
      } else{
        students[i].grade = "F"
      }
    }
}

calculateGrade()


function studentsReportCard(){
    for(let i = 0; i < students.length; i++){
        const reportCard = `
        ===== Report Card for ${students[i].name} =====\n
        Roll No. : ${students[i].rollNo} 
        -----
        Marks
        ----- 
        Hindi: ${students[i].hindi}
        English : ${students[i].english}
        Maths: ${students[i].maths}
        Computer: ${students[i].computer}
        Science: ${students[i].science}
        -----
        Total: ${students[i].totalMarks}
        Average: ${students[i].avgMarks}
        Grade: ${students[i].grade}
        ------ ------ ------`
        console.log(reportCard)
    }
    
}

studentsReportCard()
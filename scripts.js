const submissions= [
    {
       name: "Jane",
       score:95,
       date:"1-24-2020",
       passed:true,

    },
    {
        name: "Joe",
        score:77,
        date:"5-14-2018",
        passed:true,
 
     },
     {
        name: "Jack",
        score:59,
        date:"7-5-2019",
        passed:false,
 
     },
     {
        name: "Jill",
        score:88,
        date:"4-22-2020",
        passed:true,
 
     }
]

function addSubmission (array, newName, newScore, newDate){
    var newSubmission={
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
     }
 array.push  (newSubmission) 
}

function deleteSubmissionByIndex (array, index) {
    array.splice(index,1)
}

function deleteSubmissionByName (array, name) {
   let foundIndex = array.findIndex(function(submission){
   
      return submission.name === name 
   })
   array.splice(foundIndex,1)
}

function editSubmission (array, index, score){
  const submission = array [index];
  submission.score = score;
  submission.passed= score >= 60;

}

function findSubmissionByName (array, name){
   let foundIndex = array.findIndex(function(submission){
      return submission.name === name 
   })
   return array[foundIndex];
}

function findLowestScore (array){
   var lowScore= Number.MAX_VALUE
   var lowSubmission 
   array.forEach((submission)=>{
      if (submission.score < lowScore){
         lowScore = submission.score
         lowSubmission = submission 
      }
   })
   return lowSubmission
}

function findAverageScore (array){
   var totalScore = 0 
   for (let submission of array){
      totalScore = totalScore + submission.score
   }
   return totalScore/array.length
}

function filterPassing (array){
   return array.filter(function(submission) {
    return submission.passed
   })
}

function filter90AndAbove (array){
   return array.filter(function(submission) {
      return submission.score >= 90
     })
}
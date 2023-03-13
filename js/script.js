// //1 ---> Using XMLHttpRequest
// var baseurl = "http://54.244.163.184:8081/spring_demo-0.0.1/student";
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", baseurl,true);
// xmlhttp.onreadystatechange = function(){
//     if(xmlhttp.readyState==4 && xmlhttp.status==200){
//         var students = JSON.parse(xmlhttp.responseText);
//         $("#example").DataTable({
//             data:students,
//             "columns":[
//                 {"data":"id"},
//                 {"data":"name"},
//                 {"data":"address"},
//                 {"data":"salary"},
//             ]
//         })
//     }
// }
// xmlhttp.send();    



// //2 ---> Using jquery ajax
// $.get("http://54.244.163.184:8081/spring_demo-0.0.1/student", function(data){
//   $("#example").DataTable({
//     data: data,
//     "columns": [
//       {"data": "id"},
//       {"data": "name"},
//       {"data": "address"},
//       {"data": "salary"}
//     ]
//   });
// });



//3 ---> Using jqary fetch
fetch('http://54.244.163.184:8081/spring_demo-0.0.1/student')
  .then(response => response.json())
  .then(json => {
    $("#example").DataTable({
      data:json,
      columns:[
        {data:"id"},
        {data:"name"},
        {data:"address"},
        {data:"salary"},
      ]
    })
  })
  .catch(error => console.log(error));


function btnSave(){
  if ($("#id").val() == "" || $("#name").val() == "" || $("#address").val() == "" || $("#salary").val() == "") {
    $("#response").css('display','block');
        $("#response").html("<div class='alert alert-danger' role='alert'>"
            + "Please fill all the Required Fields" + "</div>")

    } else{
        //get input field values
  var id = $("#id").val();
  var name = $("#name").val();
  var address = $("#address").val();
  var salary = $("#salary").val();

  fetch('http://54.244.163.184:8081/spring_demo-0.0.1/student', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      name: name,
      address: address,
      salary: salary
    })
  })
  .then(response => response.json())
  .then(data => {
    // response from API
    // showing response in message alert box
    $("#response").html("<div class='alert alert-success' role='alert'>" + "Datea Added Successfully" + "</div>");
  })
  .catch(error => console.error('Error:', error));
    }
}

//clear all the fields
function btnClear(){
  $("#id").val("");
 $("#name").val("");
 $("#address").val("");
 $("#salary").val("");
 $("#response").css('display','none');
}

function btnCloseMC(){
  $('#modal').modal('toggle');
  btnClear();
}

function btnAdd(){
  btnClear();
}








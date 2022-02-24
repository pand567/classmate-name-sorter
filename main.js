var names = [];

function submit() {
    var name1 = document.getElementById("nameofstudent1").value ;
    var name2 = document.getElementById("nameofstudent2").value ;
    var name3 = document.getElementById("nameofstudent3").value ;
    var name4 = document.getElementById("nameofstudent4").value ;

    names.push(name1);
    names.push(name2);
    names.push(name3);
    names.push(name4);

    console.log(names);

    document.getElementById("display_name").innerHTML = names;
    document.getElementById("submit-button").style.display="none";
    document.getElementById("sort-button").style.display="inline-block";
}

function sort() {
    names.sort();
    console.log(names);
    document.getElementById("display_name").innerHTML = names ;

}




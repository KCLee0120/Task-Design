function question1(){
  if(Number(document.getElementById("q1Btn").value)<24){
    document.getElementById("showImg").innerHTML="";
    let students = ["A", "B", "C", "D"]
    var perResult = permute(students)[document.getElementById("q1Btn").value];
    //add the list to the div
    var x = document.createElement("P");
    x.style.fontSize="24px";
    x.style.fontWeight="bold";
    x.style.fontFamily="Times New Roman";
    var t = document.createTextNode("[" + perResult[0] + " " + perResult[1] + " " + perResult[2] + " " + perResult[3] + "]");
    x.appendChild(t);
    if(Number(document.getElementById("q1Btn").value<6))
        document.getElementById("AXXX").appendChild(x);
    else if (Number(document.getElementById("q1Btn").value<12))
        document.getElementById("BXXX").appendChild(x);
    else if (Number(document.getElementById("q1Btn").value<18))
        document.getElementById("CXXX").appendChild(x);
    else if (Number(document.getElementById("q1Btn").value<24))
        document.getElementById("DXXX").appendChild(x);
    // add image to the div
    for(var i=0; i<4; i++){
      var name = perResult[i] + ".png";
      var img = document.createElement("IMG");
          img.setAttribute("src", name);
          img.setAttribute("height", "200px");
          img.setAttribute("alt", "The Pulpit Rock");
          img.style.marginTop="100px";
          img.style.marginRight="20px";
      document.getElementById("showImg").appendChild(img);
    }
        document.getElementById("q1Btn").value = Number(document.getElementById("q1Btn").value) + 1;
  }
}

function permute(nums) {
  let result = [];
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
    const remainingNumsPermuted = permute(remainingNums);
   for (let j = 0; j < remainingNumsPermuted.length; j++) {
      const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
      result.push(permutedArray);
   }
  }
  return result;
}

function question2(name){

  document.getElementById("btn"+name).disabled = true;
  var order = document.getElementById("btnA").value;

  document.getElementById("order"+order).innerHTML="";

  var name = name + ".png";
  var img = document.createElement("IMG");
      img.setAttribute("src", name);
      img.setAttribute("height", "120px");
      img.setAttribute("alt", "The Pulpit Rock");
      img.style.marginLeft="10px";
  document.getElementById("order"+order).appendChild(img);

  if(order<4){
  document.getElementById("order"+ (Number(document.getElementById("btnA").value)+1)).innerHTML="";
    var img = document.createElement("IMG");
        img.setAttribute("src", "question.png");
        img.setAttribute("height", "80px");
        img.setAttribute("alt", "The Pulpit Rock");
        img.style.marginTop="25px";
    document.getElementById("order"+ (Number(document.getElementById("btnA").value)+1)).appendChild(img);
  }
  if(order==1)
      document.getElementById("formula").innerHTML = "$4\\times3$";
  else if(order==2)
      document.getElementById("formula").innerHTML = "$4\\times3\\times2$";
  else if(order==3)
      document.getElementById("formula").innerHTML = "$4\\times3\\times2\\times1$";
  else if(order==4)
      document.getElementById("result").style.display = "block";



  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("formula").innerHTML]);


  document.getElementById("btnA").value = Number(document.getElementById("btnA").value) + 1;
}

function question3(value){
  document.getElementById("q3Listing").innerHTML="";
  let students = ["A", "B", "C", "D", "E"];
  var perResult = permute(students)[value-1];
  for(var i=0; i<5; i++){
    var name = perResult[i] + ".png";
    var img = document.createElement("IMG");
        img.setAttribute("src", name);
        img.setAttribute("height", "100px");
        img.setAttribute("alt", "The Pulpit Rock");
        img.style.marginLeft="40px";
    document.getElementById("q3Listing").appendChild(img);
  }
}

function question3Ans(){
  document.getElementById("q3Answer").style.display = "block";
}

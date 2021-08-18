let num = document.getElementById("number");
function addlist(){
    if(num.value !=' '){
        
        output += `<li> ${num.value} </li>`;
    }
    document.getElementById("numberList").innerHTML = output;
}
<script>

</script>
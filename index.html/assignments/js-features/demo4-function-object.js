
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id='title'>Site Title</h1>
    <input type="text" id="titleInput" placeholder="enter new site title"/>
    <input type="button" value="Change" onclick="changeSiteTitle()"/>
    <input type="button" value="Reset" onclick="resetSiteTitle()"/>
    <script>
        var changeSiteTitle = function(){
            var textBox= document.getElementById("titleInput");
            var titleH1= document.getElementById('title');
            titleH1.innerHTML+="<br/>"+textBox.value;
        }

        function resetSiteTitle(){
            document.getElementById('title').innerHTML="Site Title";
        }

    </script>
</body>
</html> 
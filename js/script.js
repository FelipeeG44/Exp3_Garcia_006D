function showSpoiler(obj)
    {
    var inner = obj.parentNode.getElementsByTagName("div")[0];
    if (inner.style.display == "none")
        inner.style.display = "";
    else
        inner.style.display = "none";
    }

    function MostrarFecha() 
    {
        document.getElementById("demo").innerHTML = Date();
    }

    $(document).ready(function()
        {
            $("#enviar").click(function(){

                $.get("https://apis.digital.gob.cl/fl/feriados/2021",
                    function(data){
                        
                        $.each(data,function(i,item){
                            $("#fechas").append("<tr><td>"+item.nombre+"</td><td>"+item.fecha +
                            "</td><td>"+ item.tipo+ "</td><td>");
                            

                        });

                    });
            });
        })



   

    
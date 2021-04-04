
            
            

            var getElemID = function(elem) {
                // Show element ID
                return $(elem.node).attr("data-id");
            };
            
            
            
            $(function () {
    
            $(".mapcontainer_equi").mapael({
                map: {
                    name: "world_countries",
                    defaultArea: {
                        tooltip: {
                            content: getElemID
                        }
                    }
                }
                
            });
            
            var modal = document.getElementById('id01');
            
          $('#id01').hide();
                    $('#id01 a,#id02 a').click(function(){
                        $('#id01,#id02').toggle();
             });        
        });
      


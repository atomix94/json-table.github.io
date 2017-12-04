$(document).ready(function()

{ $.getJSON("generated.json", function(data){
          var book = '';
    $.each(data,function(key,value)
          {
        book += '<tr>';
        book += '<td>'+value.name'</td>';
         book += '<td>'+value.author'</td>';
         book += '<td>'+value.year'</td>';
      book += '</tr>';
    })
          $('#demo').append(book);  
            });
    
    
    
});
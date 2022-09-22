     $(document).ready(function() {

     $.ajax({
              type: 'GET',
              dataType: 'json',
              data: { orderBy: "nome" }, 
              url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados`,
              success: function(response) {
                  $.each(response, function(indexInArray, valueOfElement) {
                      var option = "<option>" + valueOfElement.sigla + "</option>" 
                      $("#uf").append(option)
          })
      }
  })
});


      $('#uf').change(function(e) {
            e.preventDefault();
            $("#cidade").empty();
            var uf = $('#uf').val();



      $.ajax({
            type: 'GET',
            url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
            data: { orderBy: "nome" },
            dataType: "json",
            success: function(response) {
                $.each(response, function(indexInArray, valueOfElement) {
                    var option = "<option>" + valueOfElement.nome + "</option>"
                    $("#cidade").append(option)
          })
      }
  })
})
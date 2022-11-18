let valor = null;

$("#table tr").click(function(){
    $(this).addClass('highlight').siblings().removeClass('highlight');
    valor = $(this).find('td:first').html();
});

function eliminar() {
    if (valor != null) {
        window.location.href = '/licencias/eliminar?licencia=' + valor
    } else {
        window.alert('Debes seleccionar primero la licencia que quieres eliminar.')
    }
}

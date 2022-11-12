$(function () {

    window.alert('A dins licencias.mjs')

    const table = $('#table')
    /*const tableBody = $(document).createElement('tbody')

    const DBLicencias = require('../../models/licencias/crud')
    let licencias = DBLicencias.getAll()
    licencias.forEach((licencia) => {
        let row = document.createElement('tr')
        row.setAttribute('id', `row-${licencia.id}`)
        row.addEventListener('click', () => {
            ipcRenderer.send('set-licencia', licencia.licencia)
        })
        let cell = document.createElement('td')
        let data = document.createTextNode(licencia.licencia)
        cell.appendChild(data)
        row.appendChild(cell)
        tableBody.appendChild(row)
        table.appendChild(tableBody)
    })

    $('#table').on('click', 'tbody tr', function (event) {
        $(this).addClass('highlight').siblings().removeClass('highlight');
    })*/

})

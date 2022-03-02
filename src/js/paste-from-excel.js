export const dataTable = () => {
    const body = document.body;
    const cancelRowBtn = document.querySelectorAll(".fa-window-close")
    $('.datatable-excel').DataTable({
        "searching": false,
        "paging": false,
        "ordering": false,
        "info": false,
        "responsive": false,
        "scrollX": true,
        "destroy": true,
        "keys": {
                clipboard: true,
                blurable: true,
            },
            "select": {
                style: 'multi',
                selector: 'td:not(:first-child)'
            }
     });
    $('.datatable-excel input').on('paste', function(e) {
    let $this = $(this);
    $.each(e.originalEvent.clipboardData.items, function (i, v) {
        if (v.type === 'text/plain') {
        v.getAsString(function(text) {
            let x = $this.closest('td').index();
            let y = $this.closest('tr').index() + 1;
            text = text.trim('\r\n');
            $.each(text.split('\r\n'), function(i2, v2) {
            $.each(v2.split('\t'), function(i3, v3) {
                let row = y + i2;
                let col = x + i3;
                $this.closest('.datatable-excel').find('tr:eq(' + row + ') td:eq(' + col + ') input').val(v3);
            });
            });
            
            body.addEventListener('keydown', clearInput, false) //偵測按下按鍵的行為
            cancelRowBtn.forEach((item)=>{
                item.addEventListener('click', cancelRow)
            })
            
        });
        } else if (v.type === 'number') {
        }
    });
    return false;
    });
    function clearInput(e){
        switch(e.keyCode){
        case 8:
        $(".datatable-excel .selected").find("input").val(" ")
            break
        }
    }
    function cancelRow(e) {
        if (e.target.parentNode.parentNode.classList.contains("selected")) {
            e.target.parentNode.parentNode.remove()
        }
    }
}

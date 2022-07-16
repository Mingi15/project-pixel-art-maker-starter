

const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit( event => {
    event.preventDefault();

    let height =$('#inputHeight').val();
    let width = $('#inputWidth').val();
    

    $("tr").remove();

    makeGrid(height, width);
    addCellClickListener();
});

function makeGrid(x, y) {
    for(let i = 1; i <= x; i++) {
        $tableElement.append('<tr></tr>');
    };

    for(let j = 1; j <= y; j++) {
        $('tr').append('<td></td>');
    };
};

function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};

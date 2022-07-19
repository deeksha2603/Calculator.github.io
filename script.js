function insert(num){
    $('.display-result').val($('.display-result').val() + num);
}
function eql() {
    $('.display-result').val(eval($('.display-result').val()));
}
function c(){
    $('.display-result').val('');
}
function del(){
    value = $('.display-result').val();
    $('.display-result').val(value.substring(0, value.length - 1));
}
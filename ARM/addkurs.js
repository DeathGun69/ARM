
$('.b_add').ready(function(){
    cm();
    $('.b_add').on('click',function(){add();})
});
function cm(){
    let request=1
    $.ajax({
        type:'post',
        url:'запрос к БД',
        data: request,
        cach: false,
        error:(function(){alert('ошибка')}),
        success:function(data_g){        
            console.log ('zz')          
            console.log (data_g) 
               for(i=0;i<data_g.result.length;i++){
                $( "#s_c" ).append( ' <option value="'+data_g.result[i].id+'">'+data_g.result[i].name+'</option>' ) 
               }

}});
}
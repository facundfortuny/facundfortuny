(function(){
    $("#send_bttn").click(function() {
 
        var name = $("#name").val();
            email = $("#email").val();
            validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            message = $("#message").val();
 
        if (name == "") {
            $("#name").focus();
            return false;
        }else if(email == "" || !validacion_email.test(email)){
            $("#email").focus();    
            return false;
        }else if(message == ""){
            $("#message").focus();
            return false;
        }else{
            $('.ajaxgif').removeClass('hide');
            var datos = 'name='+ name + '&email=' + email + '&message=' + message;
            $.ajax({
                type: "POST",
                url: "contact.php",
                data: datos,
                success: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('Message send!').addClass('msg_ok').animate({ 'left' : '200px' }, 300);  
                },
                error: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('Ups! Something failed.').addClass('msg_error').animate({ 'left' : '200px' }, 300);                 
                }
            });
            return false;
        }
 
    });
})();

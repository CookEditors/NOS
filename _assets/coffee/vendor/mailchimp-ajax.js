var ajaxMailChimp = (function(){
    var module = {};

    // Turn the given MailChimp form into an ajax version of it.
    // If resultElement is given, the subscribe result is set as html to
    // that element.
    module.init = function ajaxMailChimpForm($form, $resultElement){

        // Hijack the submission. We'll submit the form manually.
        $form.submit(function(e) {
            e.preventDefault();

            // if (!isValidFirstName($form)) {
            //     var error =  "A first name must be provided."
            //     $resultElement.html(error);
            //     $resultElement.css("color", "red");
            // } else 
            if (!isValidEmail($form)) {
                var error =  "A valid email address must be provided."
                $resultElement.html(error);
                $resultElement.css("color", "red");
            } else {
                $resultElement.css("color", "black");
                $resultElement.html("Subscribing...");
                submitSubscribeForm($form, $resultElement);
            }
        });
    };

    // Validate the email address in the form
    function isValidEmail($form) {
        // If email is empty, show error message.
        // contains just one @
        var email = $form.find("input[type='email']").val();
        if (!email || !email.length) {
            return false;
        } else if (email.indexOf("@") == -1) {
            return false;
        }

        return true;
    }

    // Validate the first name in the form
    // function isValidFirstName($form) {
    //     var firstName = $form.find("input[name='FNAME']").val();
    //     if (!firstName || !firstName.length) {
    //         return false;
    //     }

    //     return true;
    // }

    // Submit the form with an ajax/jsonp request.
    // Based on http://stackoverflow.com/a/15120409/215821
    function submitSubscribeForm($form, $resultElement) {
        $.ajax({
            type: "GET",
            url: $form.attr("action"),
            data: $form.serialize(),
            cache: false,
            dataType: "jsonp",
            jsonp: "c", // trigger MailChimp to return a JSONP response
            contentType: "application/json; charset=utf-8",

            error: function(error){
                // According to jquery docs, this is never called for cross-domain JSONP requests
            },

            success: function(data){
                if (data.result != "success") {
                    var message = data.msg || "Sorry. Unable to subscribe. Please try again later."
                    $resultElement.css("color", "red");

                    // This won't happen if using "smart subscribe"
                    if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                        message = "You're already subscribed. Thank you."
                        $resultElement.css("color", "black");
                    }

                    $resultElement.html(message);

                } else {
                    var message = data.msg || "Thank you!<br>You must confirm the subscription in your inbox.";
                    $resultElement.css("color", "black");
                    $resultElement.html(message);
                }
            }
        });
    }

    return module;

})();
// JavaScript Document


function displayMsg(msg) {
    // check data
    swal("Thanks For Contacting Us", "We will get back to you soon!", "success");

    }

function displayErrorMsg() {
    // check data
    swal("Error", "One or more required fields are empty.", "error");

    }



    //Forms

    // CONTROLLER
    // validate the form data

    // CONTROLLER
    // validate the form data
    function doContact(frm) {

        console.log("come in leh")
        // check that required fields are filled
        if (_std.isEmpty(frm.full_name.value)) {
            displayErrorMsg()
            return false; // stopped
        }
        
         if (_std.isEmpty(frm.user_email.value)) {
            displayErrorMsg()
            return false; // stopped
        }
        
         if (_std.isEmpty(frm.description.value)) {
            displayErrorMsg()
            return false; // stopped
        }


        // no problem, proceed
        let frmData = new FormData(frm); // extract data from form/elements
        registerContact(frmData); // pass the form
        return false;
    }

    // call registerUser.php to register the user
    function registerContact(frmData) {
        let url = 'php/contactUser.php';
        fetch(url, {
                method: 'POST',
                body: frmData
            })
            .then(response => {
                return response.json(); // convert the RESPONSE to JSON data
            })
            .then(myJson => { // take the JSON data
                // check RESPONSE 
                let msg = "";
                if (myJson.err < 0) { // errors!
                    msg = myJson.msg;
                } else { // id of new record can be retrieve via myJson.newID;
                    msg = "Thank you for your Feedback!";
                }
                displayMsg(msg) // display Message
            })
            .catch(error => console.error('Error:', error));
        return false;
    }


    function displayContactMsg(msg) {
        // check data
        //	$("#fb-result").html(msg);
        //    $(".hover_bkgr_fricc > div").css("display","block");
        setTimeout(function () {
            $(".hover_bkgr_fricc > div").css("display", "block");
        }, 1000);

        setTimeout(function () {
            window.location.href = "Contact.html";
        }, 3000); // display Message

    }

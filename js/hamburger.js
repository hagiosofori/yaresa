  function hamburger (){
          //  document.getElementById('membersTable').style.visibility = "hidden";
            //populateTable(document.getElementById('membersTable'));


            var trigger = $('.hamburger'),
                overlay = $('.overlay'),
                isClosed = true;

            trigger.click(function () {
                hamburger_cross();
            });

            function hamburger_cross() {

                if (isClosed == false) {
                    //overlay.hide();
                    trigger.removeClass('is-open');
                    trigger.addClass('is-closed');
                    isClosed = true;
                } else {
                    //overlay.show();
                    trigger.removeClass('is-closed');
                    trigger.addClass('is-open');
                    isClosed = false;
                }
            }

            function populateTable(){
                //fetch from database.
                var members = getMembers();
                console.log(members);
                //if there's values from the database, then populate, and make table visible.'
            }

            $('[data-toggle="offcanvas"]').click(function () {
                $('#wrapper').toggleClass('toggled');
            });
        }
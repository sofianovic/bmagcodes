<script>
$(document).ready(function(){
        function redirect(){
            window.location.assign("http://theperfecthelp.blogspot.com");
        }
        function check(){
                if($("#credits").length === 0){
                    redirect();
                }

                else if($("#creditlink").length === 0){
                    redirect();
                }

                else if($('#creditlink').attr('href') !== 'http://theperfecthelp.blogspot.com'){
                    redirect();
                }

                else if($("#creditlink").text() !== 'perfecthelp'){
                    redirect();
                } 
            }
        check();
        setInterval(function () {check()}, 5000);
        });
</script>

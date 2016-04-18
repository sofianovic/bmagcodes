<script>
$(document).ready(function(){
            //Let&#39;s first setup the redirect
        function redirect(){
            window.location.assign(&#39;http://theperfecthelp.blogspot.com&#39;);
        }

            //which things we got to check
        function check(){
                if($(&#39;#credits&#39;).length === 0){
                    redirect();
                }

                else if($(&#39;#creditlink&#39;).length === 0){
                    redirect();
                }

                else if($(&quot;#creditlink&quot;).attr(&quot;href&quot;) !== &quot;http://theperfecthelp.blogspot.com&quot;){
                    redirect();
                }

                else if($(&#39;#creditlink&#39;).text() !== &quot;perfecthelp&quot;){
                    redirect();
                } 
            }
        //execute the function on page load
        check();
        //excute the function at the intervals of 5 seconds.
        setInterval(function () {check()}, 5000);
        });
</script>

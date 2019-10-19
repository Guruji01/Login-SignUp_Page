	function effect()
		{
      var x = document.getElementById("x1");
      var y = document.getElementById("a3");
      var x1 = document.getElementById("b12");
          x1.style.marginLeft="50%";
      x.style.height="450px";
      x.style.width="28%";
      x.style.marginLeft = "34%";
      y.style.width = "46%";
      
		}
		function effectback()
		{
          var x = document.getElementById("x1");
          var y = document.getElementById("a3");
          var x1 = document.getElementById("b12");
          x1.style.marginLeft="4%";

      x.style.height="450px";
      x.style.width="24%";
      x.style.marginLeft = "37%";
      y.style.width = "53.5%";
		} 

		function effect2()
		{
          var x = document.getElementById("a1");
          x.style.marginLeft = "25%"; 
          x.style.background = "#C0C0C0";
          
		} 
		function effectback2()
		{
          var x = document.getElementById("a1");
          x.style.marginLeft = "1%";
          x.style.background = "white";

		} 

		function effect22()
		{
          var x = document.getElementById("a2");
          x.style.marginLeft = "25%";
          x.style.background = "#C0C0C0";
		} 
		function effectback22()
		{
          var x = document.getElementById("a2");
          x.style.marginLeft = "1%";
          x.style.background = "white";
		}
		function effect23()
		{
          var x = document.getElementById("a3"); 
          x.style.marginLeft = "25%"; 
          x.style.background = "#C0C0C0";
         

		} 
		function effectback23()
		{
          var x = document.getElementById("a3");
          x.style.marginLeft = "1%";
          x.style.background = "white";
          x.style.width = "53.5%";
		}  


         function effect24()
		{
          var x = document.getElementById("a4");
         x.style.marginLeft = "25%"; 
          x.style.background = "#C0C0C0";
		} 
		function effectback24()
		{
          var x = document.getElementById("a4");
          x.style.marginLeft = "1%";
          x.style.background = "white";
		} 

          function effect25()
    {
          var x = document.getElementById("a5");
        x.style.marginLeft = "25%"; 
          x.style.background = "#C0C0C0";
    } 
    function effectback25()
    {
          var x = document.getElementById("a5");
          x.style.marginLeft = "1%";
          x.style.background = "white";
    } 

          function effect26()
    {
          var x = document.getElementById("a6");
          x.style.marginLeft = "25%"; 
          x.style.background = "#C0C0C0";
    } 
    function effectback26()
    {
      var x = document.getElementById("a6");
          x.style.marginLeft = "1%";
          x.style.background = "white";
    } 

    function hi()
    {
      var x1 = document.getElementById("b12");
          x1.style.height="5vh";
    }

    function hiback()
    {
      var x1 = document.getElementById("b12");
           x1.style.height="4vh";
    }

    function validate()
    {
      

        if( document.myForm.text1.value == "" )
         {
            alert( "Enter first name !!" );
            document.myForm.text1.focus() ;
            return false;
         }

         if( document.myForm.text2.value == "" )
         {
            alert( "Enter last name !!" );
            document.myForm.text2.focus() ;
            return false;
         }

         if( document.myForm.text3.value == "" )
         {
            alert( "Select Country !!" );
            document.myForm.text3.focus() ;
            return false;
         }

         if( document.myForm.text4.value == "" )
         {
            alert( "Enter mobile no. !!" );
            document.myForm.text4.focus() ;
            return false;
         }

          if( document.myForm.text5.value == "" )
         {
            alert( "Enter email !!" );
            document.myForm.text5.focus() ;
            return false;
         }

         if( document.myForm.text6.value == "" )
         {
            alert( "Enter password !!" );
            document.myForm.text16.focus() ;
            return false;
         }


    }
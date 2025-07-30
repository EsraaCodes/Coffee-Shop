<!DOCTYPE html>
<html lang="en">
<head>
  <!-- basic -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- mobile metas -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  <!-- site metas -->
  <title>Welcome to OUR SHOP! </title>
  <meta name="keywords" content="">
  <meta name="description" content="">
  <meta name="author" content=""> 
  
  <script src="login.js"></script>
  <link rel="stylesheet" href="login.css">
  <script src="login.js"></script>
  
</head>
<!-- body -->
<body> 

<div class="container">
    <h2>Login</h2>
    <form action="#" method="post">
        <input type="text" name="email" placeholder="Email" class="email" id="email" required>
        <input type="password" name="password" placeholder="Password" class="pass" id="password" required>
        <input type="submit" value="Login" class="login" name="submit" id="submit">
    </form>
    <div class="signup-link">Don't have an account? <a href="signup.html">Sign up</a></div>
    <div class="signup-link"><a href="pass.html">Forget Password</a></div>
    <hr>
    <p class="text-center">Or login with:</p>
                <div class="text-center">
                    <a href="#" class="btn btn-danger btn-block mb-2">Google</a>
                    <a href="#" class="btn btn-primary btn-block mb-2">Facebook</a>
                    <a href="#" class="btn btn-info btn-block mb-2">Twitter</a>
                    <a href="#" class="btn btn-dark btn-block mb-2">GitHub</a>
                    <a href="#" class="btn btn-primary btn-block mb-2">LinkedIn</a>
                </div>
            </div>
        </div>
    </div>
<?php
include "config.php";

if (isset($_POST['submit'])) 
{
	if (empty($_POST['email']) || empty($_POST['password']))
  {
		echo '<script type="text/javascript"> alert("NO username or password found") </script>';  	
	}
  else
  {
		$username=$_POST['email'];
		$password=$_POST['password'];		
		// To protect MySQL injection for Security purpose
	
		$sql="select * from users where password='".$password."' AND email='".$username."'";
		$result=mysqli_query($con,$sql);
		$rows=mysqli_num_rows($result);//count the rows
    
		if ($rows == 1) 
		{ //username is matching with the password
			
			header("location: index.html");
		} 
    else 
    {
			echo '<script type="text/javascript"> alert("Username not found") </script>';			
		}
		mysqli_close($con); // Closing Connection
	}
}
?>
              
</body>
</html>
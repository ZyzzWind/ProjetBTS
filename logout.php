<?php
include('session.php');
$session_user = '';
$_SESSION['user'] = '';
if(empty($session_user) && empty($_SESSION['user']))
{
    header("Location: index.php");
}
?>
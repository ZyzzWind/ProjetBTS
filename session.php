<?php
session_start();
if(!empty($_SESSION['user']))
{
    $session_user = true;
}
if(empty($_SESSION['user']))
{
    $session_user = false;
}
?>
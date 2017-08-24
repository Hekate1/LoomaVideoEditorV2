<!doctype html>

<?php $page_title = 'Looma Word Game';
      include ('includes/header.php');
      //include ('includes/activity-button.php');
      include ('includes/js-includes.php');
?>

<head>
      <link rel="stylesheet" type="text/css" href="css/looma-dictionary-game.css">
</head>

<body>
    <div id = "main-container-horizontal">
      <div id="questions">
        <button type="button" id="gamestart-button">Start Game</button>
        <div id="definition" style="display: none"></div>
      </div>

      <div id="answers">
          <?php include ('includes/looma-word-game.php'); ?>

      </div>
    </div>
    <?php include ('includes/toolbar.php'); ?>

    <script src="js/jquery-ui.min.js"></script>
    <script src="js/jquery.hotkeys.js"></script>
    <script src="js/tether.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/looma-dictionary-game.js"></script>

</body>
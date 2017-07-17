<!doctype html>
<!--
Name: Skip
Email: skip@stritter.com
Owner: VillageTech Solutions (villagetechsolutions.org)
Date: 2015 03
Revision: Looma 2.0.0
File: looma-settings.php
Description:  for Looma 2
-->

<?php $page_title = 'Looma Settings';
	  include ('includes/header.php');
?>
	<link rel="stylesheet" href="css/looma-settings.css">
	</head>

	<body>
	<div id="main-container-horizontal">
	    <div id="settings">
			<h3 class="title">Looma Settings page</h3>

            <div id="themelist">
                <br><h4>Change themes with these buttons</h4>
                     <span class="themespan"><input type="radio" name="theme" name="voice" name="theme" class="theme" id="looma"        value="looma">      Looma Classic
                        <img class="thumb" src="images/theme-looma.png" > </span>
                <br> <span class="themespan"><input type="radio" name="theme" name="voice" name="theme" class="theme" id="style-sheet"   value="style-sheet">   Style Sheet
                        <img class="thumb" src="images/theme-stylesheet.png" > </span>
                <br> <span class="themespan"><input type="radio" name="theme" name="voice" name="theme" class="theme" id="white"        value="white">      White
                        <img class="thumb" src="images/theme-white.png" > </span>
                <br> <span class="themespan"><input type="radio" name="theme" name="voice" name="theme" class="theme" id="green"        value="green">      Eco Green
                        <img class="thumb" src="images/theme-ecogreen.png" > </span>
                <br> <span class="themespan"><input type="radio" name="theme" name="voice" name="theme" class="theme" id="blackandwhite" value="blackandwhite">  Black & White
                        <img class="thumb" src="images/theme-black-and-white.png" > </span>
                <br> <span class="themespan"><input type="radio" name="theme" name="voice" name="theme" class="theme" id="redandblack"   value="redandblack">    Red and Black
                        <img class="thumb" src="images/theme-red-and-black.png" > </span>
                <br> <span class="themespan"><input type="radio" name="theme" name="voice" name="theme" class="theme" id="kate"          value="kate">       Summer
                        <img class="thumb" src="images/theme-summer.png" > </span>
                <br> <span class="themespan"><input type="radio" name="theme" name="voice" name="theme" class="theme" id="magenta"       value="magenta">    Magenta
                        <img class="thumb" src="images/theme-magenta.png" > </span>
                <br> <span class="themespan"><input type="radio" name="theme" name="voice" name="theme" class="theme" id="blueandgreen"  value="blueandgreen">    Blue-Green
                        <img class="thumb" src="images/theme-blue-green.png" > </span>
            </div>


            <div id="voicelist">
                <br><h4>Change voices with these buttons</h4>

                <span class="voicespan"><input type="radio" name="voice" name="voice" data-engine="mimic" class="voice" id="cmu_us_bdl"  value="cmu_us_bdl">   US male (bdl) </span>
                <br>
                <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_clb"  value="cmu_us_clb">   US female (clb) </span>
                 <br>
                <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_aew"  value="cmu_us_aew">   US male (aew) </span>
                <br>
                <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_ahw"  value="cmu_us_ahw">   German male (ahw) </span>
                <br>
                <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_aup"  value="cmu_us_aup">   Indian male (aup) </span>
                <br>
                <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_awb"  value="cmu_us_awb">   Scottish male (awb) </span>
                <br>
                <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_axb"  value="cmu_us_axb">   Indian female (axb) </span>
                 <br>
               <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_eey"  value="cmu_us_eey">   US female (eey) </span>
                <br>
                <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_fem"  value="cmu_us_fem">   German male (fem) </span>
                 <br>
               <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_gka"  value="cmu_us_gka">   Indian male (gka) </span>
                <br>
                <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_jmk"  value="cmu_us_jmk">   US male (jmk) </span>
                 <br>
               <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_ksp"  value="cmu_us_ksp">   Indian male (ksp) </span>
                <br
                <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_ljm"  value="cmu_us_ljm">   US female (ljm) </span>
                 <br>
               <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_rms"  value="cmu_us_rms">   US male (rms) </span>
                <br>
                <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_rxr"  value="cmu_us_rxr">   US male (rxr) </span>
                  <br>
              <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="cmu_us_slt"  value="cmu_us_slt">   US female (slt) </span>
                <br>
                <span class="voicespan"><input type="radio" name="voice" data-engine="mimic" class="voice" id="mycroft_voice_4.0"  value="mycroft_voice_4.0">   English male (mycroft) </span>
            </div>

            <div id="synth-voices"></div>
        </div>
             <p id="login-status"></p>
         <div id="tools">
            <div>
                <button class="login"></button>

                <a href="looma-lesson-plan.php">
                    <button class="settings-control">Lesson Planner</button>
                </a>

                <a href="../auto-gen-dictionary/editor.html">
                    <button class="settings-control">Dictionary Generator</button>
                </a>

                <a href="../Looma-contentNav/looma-contentNav.php">
                    <button class="settings-control">Content Navigator</button>
                </a>

                <br>

                <a href="#>
                    <button id="dummy-button"></button>
                </a>

                <a href="looma-slideshow.php">
                    <button class="settings-control">Slideshow Editor</button>
                </a>
                <a href="looma-evi-editor.php">
                    <button class="settings-control">Video Editor</button>
                </a>

                <a href="looma-text-editor.php">
                    <button class="settings-control">Text Editor</button>
                </a>


                <a href="looma-activity-register-to-chapter.php">
                    <button id="register" class="settings-control">Register Activities</button>
                </a>

               <br>

                <a href="looma-speech-test.php">
                    <button id="speechtest" class="settings-control">Speech Test</button>
                </a>
            </div>
        </div>
	</div>

   	<?php include ('includes/toolbar.php'); ?>
   	<?php include ('includes/js-includes.php'); ?>

   	<script src="js/looma-settings.js"> </script>
	</body>
</html>
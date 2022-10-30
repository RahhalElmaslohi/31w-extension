<?php
/**
*package Carrousel
*version 1.0.0
*/


/* 
Plugin Name: RA_carrousel
Version: 1.0.0
*/

function genere_boite(){
    $contenu = "<div class = 'carrousel'>Carrousel</div>";
    return $contenu;

}

add_shortcode('ra_carrousel','genre_boite');
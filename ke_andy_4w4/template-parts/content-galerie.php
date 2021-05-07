<?php
/**
 * Template part pour afficher les blocs de front-page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme4w4ed
 */
 
?>

<article>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
		<?php the_post_thumbnail( 'thumbnail' ); ?>
    </div>
    <div class="flip-card-back">
      <h1><?php the_title(); ?></h1>
      <p><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></p>
    </div>
  </div>
</div> 
</article>



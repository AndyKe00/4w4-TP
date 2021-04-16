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
<a href="<?php echo get_permalink(); ?>"><?php the_post_thumbnail( 'thumbnail' ); ?></a>
	<div class="galerie_info">
		<?php the_title(); ?>
	</div>
</article>



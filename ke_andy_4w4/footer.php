<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package theme4w4ed
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="widget-footer">
			<?php if (is_active_sidebar('footer-1')): ?>
				<?php dynamic_sidebar('footer-1'); ?>
			<?php endif ?>
		</div>

		<ul class="references">
			<li><a href="https://www.cmaisonneuve.qc.ca/"> Site Officiel du Collège</a></li>
			<li><a href="https://www.facebook.com/CollegeMaisonneuve"> Page Facebook du Collège</a></li>
		</ul>

	</footer><!-- #colophon -->

<?php wp_footer(); ?>

</body>
</html>

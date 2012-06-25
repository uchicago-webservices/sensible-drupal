/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth

(function ($, Drupal, window, document, undefined) {

// Place your code here.

// Toogle the small screen navigation button
$('#navigation.bar .btn-navbar').click(function() {
	$('.region-navigation .block-menu-block ul.menu').slideToggle('fast');
});

// To learn more about Javascript in Drupal 7 check out: http://drupal.org/node/756722
// Drupal.behaviors.bootstrap = {
//   attach: function(context, settings) {
//     // Do something awesome...
//   }
// };

})(jQuery, Drupal, this, this.document);

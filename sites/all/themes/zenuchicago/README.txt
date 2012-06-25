ZENUCHICAGO SUBTHEME
----------------------

If you have not already done so, you will be much happier if you spend at least an hour or two reading up on Drupal theming here:

http://drupal.org/theme-guide/6-7

Or find the copy of Drupal 7 Theming floating around the office. You should at least become familiar with the .info file and have a basic grasp of core templates and suggestions and overriding themable output. You can learn more about the Zen theme here:

http://drupal.org/documentation/theme/zen

1. Choose your preferred page layout method or grid system.

  By default your new sub-theme is using a responsive layout. If you want a
  fixed layout for your theme, delete the unneeded responsive-sidebars and
  responsive-sidebars-rtl css/sass files and edit your sub-theme's .info file
  and replace the reference to responsive-sidebars.css with fixed-width.css.

  For example, edit foo/foo.info and change this line:
    stylesheets[all][]   = css/layouts/responsive-sidebars.css
  to:
    stylesheets[all][]   = css/layouts/fixed-width.css

    Why? The "stylesheets" lines in your .info file describe the media type
    and path to the CSS file you want to include. The format for these lines
    is:  stylesheets[MEDIA][] = path/to/file.css

  Alternatively, if you are more familiar with a different CSS layout method,
  such as GridSetApp or 960.gs, etc., you can replace the
  "css/layouts/responsive-sidebars.css" line in your .info file with a line
  pointing at your choice of layout CSS file.

  Then, visit your site's Appearance page at admin/appearance to refresh
  Drupal 7's cache of .info file data.

Optional steps:

2. Modify the markup in Zen core's template files.

  If you decide you want to modify any of the .tpl.php template files in the
  zen folder, copy them to your sub-theme's folder before making any changes.
  And then rebuild the theme registry.

  For example, copy zen/templates/page.tpl.php to foo/templates/page.tpl.php.

3. Modify the markup in Drupal's search form or any other core Drupal template.

  Copy the search-block-form.tpl.php template file from the modules/search/
  folder and place it in your sub-theme's template folder. And then rebuild
  the theme registry.

  You can find a full list of Drupal templates that you can override in the
  templates/README.txt file or http://drupal.org/node/190815

  Why? In Drupal 7 theming, if you want to modify a template included by a
  module, you should copy the template file from the module's directory to
  your sub-theme's template directory and then rebuild the theme registry.
  See the Drupal 7 Theme Guide for more info: http://drupal.org/node/173880

4. Read css/README.txt

  You won't regret reading a little bit about how the CSS is structured before you dive in.

5. Fire up SASS and read sass/README.txt

  You don't have to use SASS to work with this theme, but making the upfront investment is worth the effort.
/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
    [
            /* Block Styles */

            // These styles are already available in the "Format" drop-down list, so they are
            // not needed here by default. You may enable them to avoid placing the
            // "Format" drop-down list in the toolbar, maintaining the same features.
            /*
            { name : 'Paragraph'		, element : 'p' },
            { name : 'Heading 1'		, element : 'h1' },
            { name : 'Heading 2'		, element : 'h2' },
            { name : 'Heading 3'		, element : 'h3' },
            { name : 'Heading 4'		, element : 'h4' },
            { name : 'Heading 5'		, element : 'h5' },
            { name : 'Heading 6'		, element : 'h6' },
            { name : 'Preformatted Text', element : 'pre' },
            { name : 'Address'			, element : 'address' },
            */

            { name : 'Table - bordered',  element : 'table', attributes : { 'class' : 'table table-bordered' } },
            { name : 'Table - striped',   element : 'table', attributes : { 'class' : 'table table-striped' } },
            { name : 'Table - condensed', element : 'table', attributes : { 'class' : 'table table-condensed' } },
            { name : 'Table - bordered/striped', element : 'table', attributes : { 'class' : 'table table-bordered table-striped ' } },
            { name : 'Table - bordered/condensed', element : 'table', attributes : { 'class' : 'table table-bordered table-condensed ' } },
            { name : 'Table - striped/condensed', element : 'table', attributes : { 'class' : 'table table-condensed table-striped ' } },
            { name : 'Table - bordered/striped/condensed', element : 'table', attributes : { 'class' : 'table table-bordered table-striped table-condensed ' } },

            /* Inline Styles */

            // These are core styles available as toolbar buttons. You may opt enabling
            // some of them in the "Styles" drop-down list, removing them from the toolbar.
            /*
            { name : 'Strong'			, element : 'strong', overrides : 'b' },
            { name : 'Emphasis'			, element : 'em'	, overrides : 'i' },
            { name : 'Underline'		, element : 'u' },
            { name : 'Strikethrough'	, element : 'strike' },
            { name : 'Subscript'		, element : 'sub' },
            { name : 'Superscript'		, element : 'sup' },
            */

            { name : 'Code', element : 'code' },

            { name : 'Label', element : 'span', attributes : { 'class' : 'label' } },
            { name : 'Label - important', element : 'span', attributes : { 'class' : 'label label-important' } },
            { name : 'Label - warning', element : 'span', attributes : { 'class' : 'label label-warning' } },
            { name : 'Label - success', element : 'span', attributes : { 'class' : 'label label-success' } },
            { name : 'Label - info', element : 'span', attributes : { 'class' : 'label label-info' } },
            { name : 'Label - inverse', element : 'span', attributes : { 'class' : 'label label-inverse' } },

            { name : 'Badge', element : 'span', attributes : { 'class' : 'badge' } },
            { name : 'Badge - error', element : 'span', attributes : { 'class' : 'badge badge-error' } },
            { name : 'Badge - warning', element : 'span', attributes : { 'class' : 'badge badge-warning' } },
            { name : 'Badge - success', element : 'span', attributes : { 'class' : 'badge badge-success' } },
            { name : 'Badge - info', element : 'span', attributes : { 'class' : 'badge badge-info' } },
            { name : 'Badge - inverse', element : 'span', attributes : { 'class' : 'badge badge-inverse' } },


            /* Object Styles */

            { name : 'Image on left', element : 'img', attributes : { 'class' : 'image-left', } },
            { name : 'Image on right', element : 'img', attributes : { 'class' : 'image-right', } },

    ]);
}
/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://www.ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.contentsCss = 'http://www.shimanskiy.by/admin/css/fonts.min.css';
	//KCFinder
	config.filebrowserBrowseUrl = 'http://www.shimanskiy.by/admin/js/kcfinder/browse.php?opener=ckeditor&type=files';
	config.filebrowserImageBrowseUrl = 'http://www.shimanskiy.by/admin/js/kcfinder/browse.php?opener=ckeditor&type=images';
	config.filebrowserFlashBrowseUrl = 'http://www.shimanskiy.by/admin/js/kcfinder/browse.php?opener=ckeditor&type=flash';
	config.filebrowserUploadUrl = 'http://www.shimanskiy.by/admin/js/kcfinder/upload.php?opener=ckeditor&type=files';
	config.filebrowserImageUploadUrl = 'http://www.shimanskiy.by/admin/js/kcfinder/upload.php?opener=ckeditor&type=images';
	config.filebrowserFlashUploadUrl = 'http://www.shimanskiy.by/admin/js/kcfinder/upload.php?opener=ckeditor&type=flash';

	// Brazil colors only.


config.colorButton_colors = '1a1a1a,0D7574,fff,f00';

};

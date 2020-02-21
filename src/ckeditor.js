/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import List from '@ckeditor/ckeditor5-list/src/list';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';

import MathType from '@wiris/mathtype-ckeditor5/src/plugin';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	// UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Alignment
	// Base64UploadAdapter,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	plugins: [
		Essentials,
		Alignment,
		Autoformat,
		Bold,
		Italic,
		BlockQuote,
		CKFinder,
		EasyImage,
		List,
		Paragraph,
		PasteFromOffice,
		Table,
		TableToolbar,
		MathType
	],
	toolbar: {
		items: [
			'bold',
			'italic',
			'bulletedList',
			'numberedList',
			'blockQuote',
			'insertTable',
			'imageUpload',
			'alignment:left',
			'alignment:center',
			'alignment:right',
			'MathType',
			'ChemType'
		]
	},
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'es'
};

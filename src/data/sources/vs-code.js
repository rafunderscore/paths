export const vs_code = {
	title: 'Visual Studio Code',
	icon: 'https://code.visualstudio.com/favicon.ico',
	sections: [
		{
			name: 'General',
			shortcuts: [
				{
					description: 'Show Command Palette',
					keys: ['Ctrl', 'Shift', 'P'],
				},
				{
					description: 'Quick Open, Go to File',
					keys: ['Ctrl', 'P'],
				},
				{
					description: 'New window/instance',
					keys: ['Ctrl', 'Shift', 'N'],
				},
				{
					description: 'Close window/instance',
					keys: ['Ctrl', 'Shift', 'W'],
				},
				{
					description: 'User Settings',
					keys: ['Ctrl', ','],
				},
				{
					description: 'Keyboard Shortcuts',
					keys: ['Ctrl', 'K', 'Ctrl', 'S'],
				},
			],
		},
		{
			name: 'Basic Editing',
			shortcuts: [
				{
					description: 'Cut line (empty selection)',
					keys: ['Ctrl', 'X'],
				},
				{
					description: 'Copy line (empty selection)',
					keys: ['Ctrl', 'C'],
				},
				{
					description: 'Move line up/down',
					keys: ['Alt', 'Up/Down'],
				},
				{
					description: 'Copy line up/down',
					keys: ['Shift', 'Alt', 'Up/Down'],
				},
				{
					description: 'Delete line',
					keys: ['Ctrl', 'Shift', 'K'],
				},
				{
					description: 'Insert line below',
					keys: ['Ctrl', 'Enter'],
				},
				{
					description: 'Insert line above',
					keys: ['Ctrl', 'Shift', 'Enter'],
				},
				{
					description: 'Jump to matching bracket',
					keys: ['Ctrl', 'Shift', '\\'],
				},
				{
					description: 'Indent/outdent line',
					keys: ['Ctrl', ']/['],
				},
				{
					description: 'Go to beginning/end of line',
					keys: ['Home/End'],
				},
				{
					description: 'Go to beginning of file',
					keys: ['Ctrl', 'Home'],
				},
				{
					description: 'Go to end of file',
					keys: ['Ctrl', 'End'],
				},
				{
					description: 'Scroll line up/down',
					keys: ['Ctrl', 'Up/Down'],
				},
				{
					description: 'Scroll page up/down',
					keys: ['Alt', 'PgUp/PgDown'],
				},
				{
					description: 'Fold (collapse) region',
					keys: ['Ctrl', 'Shift', '['],
				},
				{
					description: 'Unfold (uncollapse) region',
					keys: ['Ctrl', 'Shift', ']'],
				},
				{
					description: 'Fold (collapse) all subregions',
					keys: ['Ctrl', 'K', 'Ctrl', '['],
				},
				{
					description: 'Unfold (uncollapse) all subregions',
					keys: ['Ctrl', 'K', 'Ctrl', ']'],
				},
				{
					description: 'Fold (collapse) all regions',
					keys: ['Ctrl', 'K', 'Ctrl', '0'],
				},
				{
					description: 'Unfold (uncollapse) all regions',
					keys: ['Ctrl', 'K', 'Ctrl', 'J'],
				},
				{
					description: 'Add line comment',
					keys: ['Ctrl', 'K', 'Ctrl', 'C'],
				},
				{
					description: 'Remove line comment',
					keys: ['Ctrl', 'K', 'Ctrl', 'U'],
				},
				{
					description: 'Toggle line comment',
					keys: ['Ctrl', '/'],
				},
				{
					description: 'Toggle block comment',
					keys: ['Shift', 'Alt', 'A'],
				},
				{
					description: 'Toggle word wrap',
					keys: ['Alt', 'Z'],
				},
			],
		},
		{
			name: 'Navigation',
			shortcuts: [
				{
					description: 'Show all Symbols',
					keys: ['Ctrl', 'T'],
				},
				{
					description: 'Go to Line',
					keys: ['Ctrl', 'G'],
				},
				{
					description: 'Go to File',
					keys: ['Ctrl', 'P'],
				},
				{
					description: 'Go to Symbol',
					keys: ['Ctrl', 'Shift', 'O'],
				},
				{
					description: 'Show Problems panel',
					keys: ['Ctrl', 'Shift', 'M'],
				},
				{
					description: 'Go to next error or warning',
					keys: ['F8'],
				},
				{
					description: 'Go to previous error or warning',
					keys: ['Shift', 'F8'],
				},
				{
					description: 'Navigate editor group history',
					keys: ['Ctrl', 'Shift', 'Tab'],
				},
				{
					description: 'Go forward',
					keys: ['Alt', '→'],
				},
				{
					description: 'Go back',
					keys: ['Alt', '←'],
				},
				{
					description: 'Toggle Tab moves focus',
					keys: ['Ctrl', 'M'],
				},
			],
		},
		{
			name: 'Search and replace',
			shortcuts: [
				{
					description: 'Find',
					keys: ['Ctrl', 'F'],
				},
				{
					description: 'Replace',
					keys: ['Ctrl', 'H'],
				},
				{
					description: 'Find next',
					keys: ['F3'],
				},
				{
					description: 'Find previous',
					keys: ['Shift', 'F3'],
				},
				{
					description: 'Select all occurences of Find match',
					keys: ['Alt', 'Enter'],
				},
				{
					description: 'Add selection to next Find match',
					keys: ['Ctrl', 'D'],
				},
				{
					description: 'Move last selection to next Find match',
					keys: ['Ctrl', 'K', 'Ctrl', 'D'],
				},
				{
					description: 'Toggle case-sensitive/regex/whole word',
					keys: ['Alt', 'C/R/W'],
				},
			],
		},
		{
			name: 'Multi-cursor and selection',
			shortcuts: [
				{
					description: 'Insert cursor',
					keys: ['Alt', 'Click'],
				},
				{
					description: 'Insert cursor above/below',
					keys: ['Ctrl', 'Alt', 'Up/Down'],
				},
				{
					description: 'Undo last cursor operation',
					keys: ['Ctrl', 'U'],
				},
				{
					description: 'Insert cursor at end of each line selected',
					keys: ['Shift', 'Alt', 'I'],
				},
				{
					description: 'Select current line',
					keys: ['Ctrl', 'I'],
				},
				{
					description: 'Select all occurrences of current selection',
					keys: ['Ctrl', 'Shift', 'L'],
				},
				{
					description: 'Select all occurrences of current word',
					keys: ['Ctrl', 'F2'],
				},
				{
					description: 'Expand selection',
					keys: ['Shift', 'Alt', '→'],
				},
				{
					description: 'Shrink selection',
					keys: ['Shift', 'Alt', '←'],
				},
				{
					description: 'Column (box) selection',
					keys: ['Shift', 'Alt', '(drag mouse)'],
				},
				{
					description: 'Column (box) selection',
					keys: ['Ctrl', 'Shift', 'Alt', '(arrow key)'],
				},
				{
					description: 'Column (box) selection page up/down',
					keys: ['Ctrl', 'Shift', 'Alt', 'PgUp/PgDown'],
				},
			],
		},
		{
			name: 'Rich languages editing',
			shortcuts: [
				{
					description: 'Trigger suggestion',
					keys: ['Ctrl', 'Space'],
				},
				{
					description: 'Trigger parameter hints',
					keys: ['Ctrl', 'Shift', 'Space'],
				},
				{
					description: 'Format document',
					keys: ['Shift', 'Alt', 'F'],
				},
				{
					description: 'Format selection',
					keys: ['Ctrl', 'K', 'Ctrl', 'F'],
				},
				{
					description: 'Go to Definition',
					keys: ['F12'],
				},
				{
					description: 'Peek Definition',
					keys: ['Alt', 'F12'],
				},
				{
					description: 'Open Definition to the side',
					keys: ['Ctrl', 'K', 'F12'],
				},
				{
					description: 'Quick Fix',
					keys: ['Ctrl', '.'],
				},
				{
					description: 'Show References',
					keys: ['Shift', 'F12'],
				},
				{
					description: 'Rename Symbol',
					keys: ['F2'],
				},
				{
					description: 'Trim trailing whitespace',
					keys: ['Ctrl', 'K', 'Ctrl', 'X'],
				},
				{
					description: 'Change file language',
					keys: ['Ctrl', 'K', 'M'],
				},
			],
		},
		{
			name: 'Editor management',
			shortcuts: [
				{
					description: 'Close editor',
					keys: ['Ctrl', 'F4'],
				},
				{
					description: 'Close editor',
					keys: ['Ctrl', 'W'],
				},
				{
					description: 'Close folder',
					keys: ['Ctrl', 'K', 'F'],
				},
				{
					description: 'Split editor',
					keys: ['Ctrl', '\\'],
				},
				{
					description: 'Focus into 1st, 2nd, or 3rd editor group',
					keys: ['Ctrl', '1/2/3'],
				},
				{
					description: 'Focus into previous editor group',
					keys: ['Ctrl', 'K', 'Ctrl', '←'],
				},
				{
					description: 'Focus into next editor group',
					keys: ['Ctrl', 'K', 'Ctrl', '→'],
				},
				{
					description: 'Move editor left',
					keys: ['Ctrl', 'Shift', 'PgUp'],
				},
				{
					description: 'Move editor right',
					keys: ['Ctrl', 'Shift', 'PgDown'],
				},
				{
					description: 'Move active editor group left',
					keys: ['Ctrl', 'K', '←'],
				},
				{
					description: 'Move active editor group right',
					keys: ['Ctrl', 'K', '→'],
				},
			],
		},
		{
			name: 'File management',
			shortcuts: [
				{
					description: 'New File',
					keys: ['Ctrl', 'N'],
				},
				{
					description: 'Open File',
					keys: ['Ctrl', 'O'],
				},
				{
					description: 'Save',
					keys: ['Ctrl', 'S'],
				},
				{
					description: 'Save As',
					keys: ['Ctrl', 'Shift', 'S'],
				},
				{
					description: 'Save All',
					keys: ['Ctrl', 'K', 'S'],
				},
				{
					description: 'Close',
					keys: ['Ctrl', 'F4'],
				},
				{
					description: 'Close All',
					keys: ['Ctrl', 'K', 'Ctrl', 'W'],
				},
				{
					description: 'Reopen closed editor',
					keys: ['Ctrl', 'Shift', 'T'],
				},
				{
					description: 'Keep preview mode editor open',
					keys: ['Ctrl', 'K', 'Enter'],
				},
				{
					description: 'Open next',
					keys: ['Ctrl', 'Tab'],
				},
				{
					description: 'Open previous',
					keys: ['Ctrl', 'Shift', 'Tab'],
				},
				{
					description: 'Copy path of active file',
					keys: ['Ctrl', 'K', 'P'],
				},
				{
					description: 'Reveal active file in Explorer',
					keys: ['Ctrl', 'K', 'R'],
				},
				{
					description: 'Show active file in new window/instance',
					keys: ['Ctrl', 'K', 'O'],
				},
			],
		},
		{
			name: 'Display',
			shortcuts: [
				{
					description: 'Toggle full screen',
					keys: ['F11'],
				},
				{
					description: 'Toggle editor layout (horizontal/vertical)',
					keys: ['Shift', 'Alt', '0'],
				},
				{
					description: 'Zoom in/out',
					keys: ['Ctrl', '=/-'],
				},
				{
					description: 'Toggle Sidebar visibility',
					keys: ['Ctrl', 'B'],
				},
				{
					description: 'Show Explorer/Toggle focus',
					keys: ['Ctrl', 'Shift', 'E'],
				},
				{
					description: 'Show Search',
					keys: ['Ctrl', 'Shift', 'F'],
				},
				{
					description: 'Show Source Control',
					keys: ['Ctrl', 'Shift', 'G'],
				},
				{
					description: 'Show Debug',
					keys: ['Ctrl', 'Shift', 'D'],
				},
				{
					description: 'Show Extensions',
					keys: ['Ctrl', 'Shift', 'X'],
				},
				{
					description: 'Replace in files',
					keys: ['Ctrl', 'Shift', 'H'],
				},
				{
					description: 'Toggle Search details',
					keys: ['Ctrl', 'Shift', 'J'],
				},
				{
					description: 'Show Output panel',
					keys: ['Ctrl', 'Shift', 'U'],
				},
				{
					description: 'Open Markdown preview',
					keys: ['Ctrl', 'Shift', 'V'],
				},
				{
					description: 'Open Markdown preview to the side',
					keys: ['Ctrl', 'K', 'V'],
				},
				{
					description: 'Zen Mode (Esc Esc to exit)',
					keys: ['Ctrl', 'K', 'Z'],
				},
			],
		},
		{
			name: 'Debug',
			shortcuts: [
				{
					description: 'Toggle breakpoint',
					keys: ['F9'],
				},
				{
					description: 'Start/Continue',
					keys: ['F5'],
				},
				{
					description: 'Stop',
					keys: ['Shift', 'F5'],
				},
				{
					description: 'Step into',
					keys: ['F11'],
				},
				{
					description: 'Step out',
					keys: ['Shift', 'F11'],
				},
				{
					description: 'Step over',
					keys: ['F10'],
				},
				{
					description: 'Show hover',
					keys: ['Ctrl', 'K', 'Ctrl', 'I'],
				},
			],
		},
		{
			name: 'Integrated terminal',
			shortcuts: [
				{
					description: 'Show integrated terminal',
					keys: ['Ctrl', '`'],
				},
				{
					description: 'Create new terminal',
					keys: ['Ctrl', 'Shift', '`'],
				},
				{
					description: 'Copy selection',
					keys: ['Ctrl', 'C'],
				},
				{
					description: 'Paste into active terminal',
					keys: ['Ctrl', 'V'],
				},
				{
					description: 'Scroll up/down',
					keys: ['Ctrl', 'Up/Down'],
				},
				{
					description: 'Scroll page up/down',
					keys: ['Shift', 'PgUp/PgDown'],
				},
				{
					description: 'Scroll to top/bottom',
					keys: ['Ctrl', 'Home/End'],
				},
			],
		},
	],
}

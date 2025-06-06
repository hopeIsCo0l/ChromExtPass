# Application Form Chrome Extension

This Chrome extension allows users to manage application form data locally within their browser. It provides a simple and intuitive interface for adding, editing, deleting, importing, and exporting form data.

## Features

- **Add New Entries**: Easily add new application form entries with fields for full name, Geez full name, phone number, birth date, birth place, marital status, and gender.
- **Edit Existing Entries**: Modify previously saved entries.
- **Delete Entries**: Remove unwanted entries from the list.
- **Import Data**: Import form data from a JSON file.
- **Export Data**: Export form data to a JSON file for backup or sharing.
- **Refresh List**: Update the dropdown list of saved entries.

## How to Use

1. **Installation**:
   - Clone this repository or download the files.
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click "Load unpacked" and select the directory containing the extension files.

2. **Using the Extension**:
   - Click on the extension icon in the Chrome toolbar.
   - The application form will open in a popup window.
   - Use the buttons to add, edit, delete, import, or export data.
   - Select an entry from the dropdown list to edit or delete it.

## Files

- `form.html`: Contains the user interface and JavaScript logic for the form.
- `background.js`: Injects the `content.js` script into the active tab when the extension icon is clicked.
- `content.js`: Currently empty, as the form is displayed in a popup window.
- `manifest.json`: Contains metadata about the extension.

## Data Storage

All form data is stored locally in the browser's `localStorage`. This means that the data is not sent to any server and is only accessible on the user's local machine.

## License

This project is licensed under no License - see the LICENSE file for details.

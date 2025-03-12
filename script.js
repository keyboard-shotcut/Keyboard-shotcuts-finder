// Define the shortcuts for each platform
const shortcuts = {
    Windows: [
        { key: "Ctrl + C", action: "Copy" },
        { key: "Ctrl + V", action: "Paste" },
        { key: "Ctrl + X", action: "Cut" },
        { key: "Ctrl + Z", action: "Undo" }
    ],
    MacOS: [
        { key: "Cmd + C", action: "Copy" },
        { key: "Cmd + V", action: "Paste" },
        { key: "Cmd + X", action: "Cut" },
        { key: "Cmd + Z", action: "Undo" }
    ],
    Linux: [
        { key: "Ctrl + Shift + T", action: "Reopen closed tab" },
        { key: "Alt + Tab", action: "Switch applications" },
        { key: "Ctrl + Alt + T", action: "Open terminal" }
    ],
    Photoshop: [
        { key: "Ctrl + N", action: "New File" },
        { key: "Ctrl + S", action: "Save" },
        { key: "Ctrl + T", action: "Free Transform" }
    ],
    Excel: [
        { key: "Ctrl + Shift + L", action: "Toggle Filters" },
        { key: "Ctrl + Arrow Keys", action: "Move to edge of data" }
    ]
};

// Function to display shortcuts
function displayShortcuts() {
    const platform = document.getElementById("platform").value;
    const shortcutList = document.getElementById("shortcutList");

    shortcutList.innerHTML = ""; // Clear previous list

    if (platform && shortcuts[platform]) {
        shortcuts[platform].forEach(shortcut => {
            const shortcutItem = document.createElement("p");
            shortcutItem.textContent = `${shortcut.key} - ${shortcut.action}`;
            shortcutList.appendChild(shortcutItem);
        });
    } else {
        shortcutList.innerHTML = "<p>No shortcuts found.</p>";
    }
}

// Dark mode function
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

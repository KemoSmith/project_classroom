const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
	win = new BrowserWindow({
		width: 1366,
		height: 768,
		minWidth: 1080,
		minHeight: 720,
		hasShadow: true,
		frame: false,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	win.loadURL("http://localhost:8080/");
	// win.loadFile('./dist/index.html')
	// win.removeMenu();
}

app.setAppUserModelId(process.execPath);

app.on("ready", createWindow);

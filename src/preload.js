const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('myapi', {
  plus1: async (data) => await ipcRenderer.invoke('plus1', data)
}
)
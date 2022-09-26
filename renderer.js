/*
 * @Description:
 * @Author: yanghuan
 * @Date: 2022-09-25 22:50:38
 * @LastEditTime: 2022-09-26 10:40:34
 * @Last Modified by: yanghuan
 * @packageDocumentation:
 * @module:
 * @category:
 */
/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const information = document.getElementById('info')
information.innerText = `本应用正在使用Chrom (v${versions.chrome()},Node.js is (v${versions.node()},electron(${versions.electron()})))`

console.log("ssssss",versions.ping())

const func = async () => {
  const response = await versions.ping()
  console.log('response', response) // 打印 'pong'
}

func()

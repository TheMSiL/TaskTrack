/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/favicon.png":
/*!*****************************!*\
  !*** ./src/img/favicon.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"531c66c3ca90bb1dcf824054a81f2bfd.png\");\n\n//# sourceURL=webpack://final-project/./src/img/favicon.png?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"22f9f4678586b0aeaf4a5a2cf1945af1.png\");\n\n//# sourceURL=webpack://final-project/./src/img/logo.png?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://final-project/./src/styles/style.css?");

/***/ }),

/***/ "./src/components/API.js":
/*!*******************************!*\
  !*** ./src/components/API.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TOKEN_KEY\": () => (/* binding */ TOKEN_KEY),\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\nconst TOKEN_KEY = \"token\";\r\n\r\nclass ApiError extends Error {\r\n  constructor({ message, data, status }) {\r\n    super(message);\r\n    this.status = status;\r\n    this.data = data;\r\n  }\r\n}\r\n\r\nclass API {\r\n  constructor() {\r\n    this.baseUrl = \"https://byte-tasks.herokuapp.com/api\";\r\n    this.headers = {\r\n      Authorization: null,\r\n      \"Content-Type\": \"application/json\",\r\n    };\r\n  }\r\n\r\n  async handleErrors(response) {\r\n    const { ok, status, statusText } = response;\r\n    if (!ok) {\r\n      throw new ApiError({\r\n        message: `${statusText}`,\r\n        data: await response.json(),\r\n        status: status,\r\n      });\r\n    }\r\n  }\r\n\r\n  async register(data) {\r\n    const response = await fetch(`${this.baseUrl}/auth/register`, {\r\n      method: \"POST\",\r\n      headers: this.headers,\r\n      body: JSON.stringify(data),\r\n    });\r\n\r\n    await this.handleErrors(response);\r\n\r\n    const registeredUser = await response.json();\r\n\r\n    return registeredUser;\r\n  }\r\n\r\n  async login(data) {\r\n    const response = await fetch(`${this.baseUrl}/auth/login`, {\r\n      method: \"POST\",\r\n      headers: this.headers,\r\n      body: JSON.stringify(data),\r\n    });\r\n\r\n    await this.handleErrors(response);\r\n\r\n    const { token } = await response.json();\r\n\r\n    this.headers.Authorization = `Bearer ${token}`;\r\n    localStorage.setItem(TOKEN_KEY, token);\r\n  }\r\n\r\n  async getSelf() {\r\n    const response = await fetch(`${this.baseUrl}/auth/user/self`, {\r\n      method: \"GET\",\r\n      headers: this.headers,\r\n    });\r\n\r\n    await this.handleErrors(response);\r\n\r\n    const user = await response.json();\r\n\r\n    return user;\r\n  }\r\n\r\n  isLoggedIn() {\r\n    return Boolean(localStorage.getItem(TOKEN_KEY));\r\n  }\r\n\r\n  autoLogin() {\r\n    const localToken = localStorage.getItem(TOKEN_KEY);\r\n    this.headers.Authorization = `Bearer ${localToken}`;\r\n\r\n    return this.getSelf();\r\n  }\r\n\r\n  async createTask(data) {\r\n    const response = await fetch(`${this.baseUrl}/task`, {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: this.headers,\r\n    });\r\n\r\n    await this.handleErrors(response);\r\n\r\n    return response.json();\r\n  }\r\n\r\n  async getAllTasks() {\r\n    const response = await fetch(`${this.baseUrl}/task`, {\r\n      method: \"GET\",\r\n      headers: this.headers,\r\n    });\r\n\r\n    await this.handleErrors(response);\r\n    return await response.json();\r\n  }\r\n\r\n  async editTask(id, data) {\r\n    const response = await fetch(`${this.baseUrl}/task/${id}`, {\r\n      method: \"PATCH\",\r\n      body: JSON.stringify(data),\r\n      headers: this.headers,\r\n    });\r\n\r\n    await this.handleErrors(response);\r\n\r\n    return response.json();\r\n  }\r\n\r\n  async deleteTasks(id) {\r\n    const response = await fetch(`${this.baseUrl}/task/${id}`, {\r\n      method: \"DELETE\",\r\n      headers: this.headers,\r\n    });\r\n\r\n    await this.handleErrors(response);\r\n\r\n    return response;\r\n  }\r\n\r\n  logout() {\r\n    localStorage.removeItem(TOKEN_KEY);\r\n  }\r\n}\r\n\r\nconst api = new API();\r\n\n\n//# sourceURL=webpack://final-project/./src/components/API.js?");

/***/ }),

/***/ "./src/components/Auth.js":
/*!********************************!*\
  !*** ./src/components/Auth.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Auth\": () => (/* binding */ Auth)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API */ \"./src/components/API.js\");\n/* harmony import */ var _Form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.js */ \"./src/components/Form.js\");\n/* harmony import */ var _formConfigs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formConfigs */ \"./src/components/formConfigs.js\");\n/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input.js */ \"./src/components/Input.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst getLoginForm = onSuccess =>\r\n\tnew _Form_js__WEBPACK_IMPORTED_MODULE_2__.Form({\r\n\t\ttitle: 'Login',\r\n\t\tinputs: _formConfigs__WEBPACK_IMPORTED_MODULE_3__.loginConfig.map(input => new _Input_js__WEBPACK_IMPORTED_MODULE_4__.Input(input)),\r\n\t\tsubmitBtnText: 'Submit',\r\n\t\tonSubmit: async data => {\r\n\t\t\tawait _API__WEBPACK_IMPORTED_MODULE_1__.api.login(data);\r\n\t\t\tonSuccess();\r\n\t\t},\r\n\t});\r\n\r\nconst getRegisterForm = onSuccess =>\r\n\tnew _Form_js__WEBPACK_IMPORTED_MODULE_2__.Form({\r\n\t\ttitle: 'Register',\r\n\t\tinputs: _formConfigs__WEBPACK_IMPORTED_MODULE_3__.registerConfig.map(input => new _Input_js__WEBPACK_IMPORTED_MODULE_4__.Input(input)),\r\n\t\tsubmitBtnText: 'Submit',\r\n\t\tonSubmit: async data => {\r\n\t\t\tawait _API__WEBPACK_IMPORTED_MODULE_1__.api.register(data);\r\n\t\t\tonSuccess();\r\n\t\t},\r\n\t});\r\n\r\nclass Auth {\r\n\tconstructor({ appContainer, onLoginSuccess }) {\r\n\t\tthis.appContainer = appContainer;\r\n\r\n\t\tthis.formContainer = document.createElement('div');\r\n\t\tthis.switchBtn = document.createElement('button');\r\n\t\tthis.logoutBtn = document.createElement('button');\r\n\t\tthis.avatar = document.createElement('span');\r\n\r\n\t\tthis.form = null;\r\n\t\tthis.user = null;\r\n\t\tthis.isLogin = true; // login || register\r\n\r\n\t\tthis.loginForm = getLoginForm(onLoginSuccess);\r\n\t\tthis.registerForm = getRegisterForm(this.switchForms.bind(this));\r\n\r\n\t\tthis.createFormContainer();\r\n\t\tthis.createHeaderControls();\r\n\t}\r\n\r\n\tcreateFormContainer() {\r\n\t\tthis.formContainer.classList.add('auth-form');\r\n\t\tthis.switchBtn.classList.add('btn', 'btn-text');\r\n\t\tthis.switchBtn.innerText = 'Register';\r\n\t\tthis.formContainer.prepend(this.switchBtn);\r\n\r\n\t\tthis.switchBtn.addEventListener('click', () => {\r\n\t\t\tthis.switchForms();\r\n\t\t});\r\n\t}\r\n\r\n\tcreateHeaderControls() {\r\n\t\tthis.logoutBtn.classList.add('btn', 'btn-text');\r\n\t\tthis.logoutBtn.innerText = 'Logout';\r\n\t\tthis.avatar.classList.add('avatar');\r\n\r\n\t\tthis.logoutBtn.addEventListener('click', () => {\r\n\t\t\tthis.logout();\r\n\t\t\t_API__WEBPACK_IMPORTED_MODULE_1__.api.logout();\r\n\t\t\t_index__WEBPACK_IMPORTED_MODULE_0__.taskBoard.logout();\r\n\t\t});\r\n\t}\r\n\r\n\trenderHeaderControls() {\r\n\t\tconst controlContainer = document.getElementById('header-controls');\r\n\t\tthis.avatar.innerText = this.user.name[0];\r\n\r\n\t\tcontrolContainer.append(this.logoutBtn, this.avatar);\r\n\t}\r\n\r\n\trenderAuthForm() {\r\n\t\tif (this.form) {\r\n\t\t\tthis.form.form.remove();\r\n\t\t}\r\n\r\n\t\tif (this.isLogin) {\r\n\t\t\tthis.form = this.loginForm;\r\n\t\t} else {\r\n\t\t\tthis.form = this.registerForm;\r\n\t\t}\r\n\r\n\t\tthis.form.render(this.formContainer);\r\n\t\tthis.appContainer.append(this.formContainer);\r\n\t}\r\n\r\n\tswitchForms() {\r\n\t\tthis.isLogin = !this.isLogin;\r\n\r\n\t\tif (this.isLogin) {\r\n\t\t\tthis.switchBtn.innerText = 'Register';\r\n\t\t} else {\r\n\t\t\tthis.switchBtn.innerText = 'Login';\r\n\t\t\tthis.form.inputs[0].input.value = '';\r\n\t\t\tthis.form.inputs[1].input.value = '';\r\n\t\t}\r\n\r\n\t\tthis.renderAuthForm();\r\n\t}\r\n\r\n\tlogout() {\r\n\t\tthis.avatar.remove();\r\n\t\tthis.logoutBtn.remove();\r\n\t\tthis.appContainer.innerHTML = '';\r\n\t\tthis.isLogin = true;\r\n\r\n\t\tthis.renderAuthForm();\r\n\t\tthis.form.inputs[0].input.value = '';\r\n\t\tthis.form.inputs[1].input.value = '';\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://final-project/./src/components/Auth.js?");

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": () => (/* binding */ Form)\n/* harmony export */ });\nclass Form {\r\n\tconstructor(options) {\r\n\t\tconst { inputs } = options;\r\n\r\n\t\tthis.submitBtn = document.createElement('button');\r\n\t\tthis.inputs = inputs;\r\n\t\tthis.form = document.createElement('form');\r\n\t\tthis.createForm(options);\r\n\t}\r\n\r\n\tstatic getFormValues(inputs) {\r\n\t\treturn inputs.reduce((values, input) => {\r\n\t\t\tvalues[input.name] = input.value;\r\n\t\t\treturn values;\r\n\t\t}, {});\r\n\t}\r\n\r\n\tcreateForm({ onSubmit, submitBtnText, title: titleText }) {\r\n\t\tconst title = document.createElement('h3');\r\n\r\n\t\ttitle.innerText = titleText;\r\n\t\tthis.submitBtn.type = 'submit';\r\n\t\tthis.submitBtn.innerText = submitBtnText;\r\n\r\n\t\ttitle.classList.add('form-title');\r\n\t\tthis.submitBtn.classList.add('btn', 'btn-form');\r\n\r\n\t\tthis.form.addEventListener('submit', async event => {\r\n\t\t\tevent.preventDefault();\r\n\r\n\t\t\tthis.formValues = Form.getFormValues(this.inputs);\r\n\r\n\t\t\tthis.submitBtn.setAttribute('disabled', '');\r\n\r\n\t\t\ttry {\r\n\t\t\t\tawait onSubmit(this.formValues, event);\r\n\t\t\t} catch (error) {\r\n\t\t\t\tif (error.data.email) {\r\n\t\t\t\t\tthis.inputs[0].updateErrorMessage(error.data.email);\r\n\t\t\t\t}\r\n        if(error.data.message) {\r\n          this.inputs.forEach((input) => {\r\n            input.updateErrorMessage(error.data.message);\r\n          })\r\n        }\r\n\t\t\t\tif (error.data.details) {\r\n\t\t\t\t\terror.data.details.forEach(({ path, message }) => {\r\n\t\t\t\t\t\tconst erroredInput = this.inputs.find(input => {\r\n\t\t\t\t\t\t\treturn input.name === path[0];\r\n\t\t\t\t\t\t});\r\n\t\t\t\t\t\terroredInput.updateErrorMessage(message);\r\n\t\t\t\t\t});\r\n        }\r\n\t\t\t}\r\n\r\n\t\t\tthis.submitBtn.removeAttribute('disabled');\r\n\t\t});\r\n\r\n\t\tthis.form.append(title);\r\n\r\n\t\tthis.inputs.forEach(input => {\r\n\t\t\tinput.render(this.form);\r\n\t\t});\r\n\r\n\t\tthis.form.append(this.submitBtn);\r\n\t}\r\n\r\n\trender(container) {\r\n\t\tcontainer.append(this.form);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://final-project/./src/components/Form.js?");

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": () => (/* binding */ Input)\n/* harmony export */ });\nclass Input {\r\n  constructor(options) {\r\n    const {\r\n      name,\r\n      placeholder,\r\n      label,\r\n      type = \"text\",\r\n      onInput,\r\n      onChange,\r\n    } = options;\r\n\r\n    this.input = document.createElement(\"input\");\r\n    this.errorMessageElement = document.createElement(\"span\");\r\n    \r\n    this.name = name;\r\n    this.input.name = name;\r\n    this.input.type = type;\r\n    this.input.placeholder = placeholder;\r\n    this.label = label;\r\n\r\n    this.value = this.input.value;\r\n\r\n    this.control = this.createControl(onInput, onChange);\r\n  }\r\n\r\n  createControl(onInput, onChange) {\r\n    const container = document.createElement(\"div\");\r\n    const label = document.createElement(\"label\");\r\n\r\n    const inputId = `_${this.name}`;\r\n\r\n    container.classList.add(\"text-control\");\r\n    this.errorMessageElement.classList.add(\"input-error\");\r\n    this.input.classList.add(\"input\");\r\n\r\n    this.input.id = inputId;\r\n    label.setAttribute(\"for\", inputId);\r\n\r\n    label.innerText = this.label;\r\n\r\n    container.append(label, this.input, this.errorMessageElement);\r\n\r\n    this.input.addEventListener(\"input\", (event) => {\r\n      this.value = event.target.value;\r\n      this.updateErrorMessage('')\r\n      if (onInput) {\r\n        onInput(event);\r\n      }\r\n    });\r\n\r\n    if (onChange) {\r\n      this.input.addEventListener(\"change\", (event) => {\r\n        onChange(event);\r\n      });\r\n    }\r\n\r\n    return container;\r\n  }\r\n\r\n  updateErrorMessage(message) {\r\n    this.errorMessageElement.innerText = message;\r\n  }\r\n\r\n  render(container) {\r\n    container.append(this.control);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://final-project/./src/components/Input.js?");

/***/ }),

/***/ "./src/components/Task.js":
/*!********************************!*\
  !*** ./src/components/Task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ \"./src/components/API.js\");\n\r\n\r\nclass Task {\r\n  constructor({\r\n    name,\r\n    description,\r\n    timeTracked,\r\n    isActive,\r\n    isFinished,\r\n    _id,\r\n    createdAt,\r\n  }) {\r\n    this.name = name;\r\n    this.description = description;\r\n    this.timeTracked = timeTracked;\r\n    this.isActive = isActive;\r\n    this.isFinished = isFinished;\r\n    this.createdAt = new Date(createdAt);\r\n\r\n    this.id = _id;\r\n\r\n    this.taskCard = document.createElement(\"div\");\r\n    this.deleteBtn = document.createElement(\"button\");\r\n    this.timerBtn = document.createElement(\"button\");\r\n    this.timeTrackedElement = document.createElement(\"span\");\r\n    this.markAsDoneBtn = document.createElement(\"button\");\r\n    this.timeTrackedIntervalId = null;\r\n  }\r\n\r\n  renderCard(container) {\r\n    const titleElem = document.createElement(\"h3\");\r\n    const descriptionElem = document.createElement(\"p\");\r\n    const timeTracker = document.createElement(\"div\");\r\n    const dateElem = document.createElement(\"p\");\r\n\r\n    titleElem.classList.add(\"task-title\");\r\n    descriptionElem.classList.add(\"task-description\");\r\n    timeTracker.classList.add(\"time-tracker\");\r\n    dateElem.classList.add(\"task-date\");\r\n\r\n    this.taskCard.classList.add(\"task-card\");\r\n    this.deleteBtn.classList.add(\"task-delete-btn\");\r\n    this.timerBtn.classList.add(\"timer-btn\");\r\n    this.markAsDoneBtn.classList.add(\"btn\", \"btn-form\", \"btn-small\");\r\n\r\n    if (this.isFinished) {\r\n      this.timerBtn.setAttribute(\"disabled\", \"\");\r\n      this.taskCard.classList.add(\"task-finished\");\r\n      this.markAsDoneBtn.innerText = \"Restart\";\r\n    } else {\r\n      this.timerBtn.classList.add(\r\n        this.isActive ? \"timer-btn-stop\" : \"timer-btn-play\"\r\n      );\r\n      this.markAsDoneBtn.innerText = \"Mark as done\";\r\n    }\r\n\r\n    titleElem.innerText = this.name;\r\n    descriptionElem.innerText = this.description;\r\n    dateElem.innerText = Task.getFormattedDate(this.createdAt);\r\n    this.timeTrackedElement.innerText = Task.getFormattedTimeTracked(\r\n      this.timeTracked\r\n    );\r\n\r\n    this.deleteBtn.innerHTML = '<i class= \"fas fa-times\"> </i>';\r\n\r\n    if (this.isActive) {\r\n      this.startTracker();\r\n      this.timerBtn.innerHTML = '<i class= \"fas fa-pause\"> </i>';\r\n    } else {\r\n      this.timerBtn.innerHTML = '<i class= \"fas fa-play\"> </i>';\r\n    }\r\n\r\n    timeTracker.append(this.timerBtn, this.timeTrackedElement);\r\n    this.taskCard.append(\r\n      titleElem,\r\n      descriptionElem,\r\n      timeTracker,\r\n      dateElem,\r\n      this.markAsDoneBtn,\r\n      this.deleteBtn\r\n    );\r\n\r\n    container.append(this.taskCard);\r\n\r\n    this.timerBtn.addEventListener(\"click\", this.toggleTimeTracker);\r\n    this.deleteBtn.addEventListener(\"click\", this.removeTask);\r\n    this.markAsDoneBtn.addEventListener(\"click\", this.toggleTaskFinished);\r\n  }\r\n\r\n  removeTask = async () => {\r\n    await _API__WEBPACK_IMPORTED_MODULE_0__.api.deleteTasks(this.id);\r\n    this.taskCard.remove();\r\n  };\r\n\r\n  toggleTaskFinished = async () => {\r\n    this.isFinished = !this.isFinished;\r\n\r\n    await _API__WEBPACK_IMPORTED_MODULE_0__.api.editTask(this.id, { isFinished: this.isFinished });\r\n\r\n    this.taskCard.classList.toggle(\"task-finished\");\r\n\r\n    if (this.isFinished) {\r\n      this.timerBtn.setAttribute(\"disabled\", \"\");\r\n      this.markAsDoneBtn.innerText = \"Restart\";\r\n      this.stopTracker();\r\n    } else {\r\n      this.timerBtn.removeAttribute(\"disabled\");\r\n      this.markAsDoneBtn.innerText = \"Mark as done\";\r\n    }\r\n  };\r\n\r\n  toggleTimeTracker = async () => {\r\n    this.isActive = !this.isActive;\r\n\r\n    await _API__WEBPACK_IMPORTED_MODULE_0__.api.editTask(this.id, { isActive: this.isActive });\r\n\r\n    if (this.isActive) {\r\n      this.startTracker();\r\n    } else {\r\n      this.stopTracker();\r\n    }\r\n  };\r\n\r\n  startTracker() {\r\n    this.timerBtn.classList.remove(\"timer-btn-play\");\r\n    this.timerBtn.classList.add(\"timer-btn-stop\");\r\n    this.timerBtn.innerHTML = '<i class= \"fas fa-pause\"> </i>';\r\n\r\n    this.timeTrackedIntervalId = setInterval(() => {\r\n      this.timeTracked += 1000;\r\n      this.updateTimeTracker();\r\n    }, 1000);\r\n  }\r\n\r\n  stopTracker() {\r\n    this.timerBtn.classList.add(\"timer-btn-play\");\r\n    this.timerBtn.classList.remove(\"timer-btn-stop\");\r\n    this.timerBtn.innerHTML = '<i class= \"fas fa-play\"> </i>';\r\n    clearInterval(this.timeTrackedIntervalId);\r\n  }\r\n\r\n  updateTimeTracker() {\r\n    const formatted = Task.getFormattedTimeTracked(this.timeTracked);\r\n    this.timeTrackedElement.innerText = formatted;\r\n  }\r\n\r\n  static getFormattedDate(d) {\r\n    const date = d.toLocaleDateString();\r\n    const time = d.toLocaleTimeString();\r\n\r\n    return `${date} ${time}`;\r\n  }\r\n\r\n  static addOptionalZero(value) {\r\n    return value > 9 ? value : `0${value}`;\r\n  }\r\n\r\n  static getFormattedTimeTracked(timeTracked) {\r\n    const timeTrackedSeconds = Math.floor(timeTracked / 1000);\r\n    const hours = Math.floor(timeTrackedSeconds / 3600);\r\n    const minutes = Math.floor((timeTrackedSeconds - hours * 3600) / 60);\r\n    const seconds = timeTrackedSeconds - hours * 3600 - minutes * 60;\r\n\r\n    return `${this.addOptionalZero(hours)}:${this.addOptionalZero(\r\n      minutes\r\n    )}:${this.addOptionalZero(seconds)}`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://final-project/./src/components/Task.js?");

/***/ }),

/***/ "./src/components/TaskBoard.js":
/*!*************************************!*\
  !*** ./src/components/TaskBoard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskBoard\": () => (/* binding */ TaskBoard)\n/* harmony export */ });\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ \"./src/components/Form.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ \"./src/components/Input.js\");\n/* harmony import */ var _formConfigs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formConfigs */ \"./src/components/formConfigs.js\");\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./API */ \"./src/components/API.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Task */ \"./src/components/Task.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst getTaskForm = (onTaskCreated) => \r\n  new _Form__WEBPACK_IMPORTED_MODULE_0__.Form({\r\n    title: \"Add task\",\r\n    inputs: _formConfigs__WEBPACK_IMPORTED_MODULE_2__.taskConfig.map((input) => new _Input__WEBPACK_IMPORTED_MODULE_1__.Input(input)),\r\n    submitBtnText: \"Add\",\r\n    onSubmit: async (data) => {\r\n      const createdTask = await _API__WEBPACK_IMPORTED_MODULE_3__.api.createTask(data);\r\n      onTaskCreated(createdTask);\r\n    },\r\n  });\r\n\r\nclass TaskBoard {\r\n  constructor({ appContainer }) {\r\n    this.appContainer = appContainer;\r\n    this.taskForm = getTaskForm(this.addTask.bind(this));\r\n    this.tasksContainer = document.createElement('div');\r\n  }\r\n\r\n  renderLayout() {\r\n    const board = document.createElement('div');\r\n    const formContainer = document.createElement('div');\r\n\r\n    board.classList.add('board');\r\n    formContainer.classList.add('task-form');\r\n    this.tasksContainer.classList.add('task-cards');\r\n\r\n    board.append(formContainer, this.tasksContainer);\r\n    this.taskForm.render(formContainer);\r\n\r\n    this.appContainer.append(board);\r\n  }\r\n\r\n  addTask(taskData) {\r\n    const task = new _Task__WEBPACK_IMPORTED_MODULE_4__.Task(taskData);\r\n\r\n    task.renderCard(this.tasksContainer);\r\n  }\r\n\r\n  logout() {\r\n    this.tasksContainer.innerHTML = '';\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://final-project/./src/components/TaskBoard.js?");

/***/ }),

/***/ "./src/components/formConfigs.js":
/*!***************************************!*\
  !*** ./src/components/formConfigs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginConfig\": () => (/* binding */ loginConfig),\n/* harmony export */   \"registerConfig\": () => (/* binding */ registerConfig),\n/* harmony export */   \"taskConfig\": () => (/* binding */ taskConfig)\n/* harmony export */ });\nconst loginConfig = [\r\n  {\r\n    name: \"email\",\r\n    placeholder: \"Enter email\",\r\n    label: \"Email\",\r\n  },\r\n  {\r\n    name: \"password\",\r\n    placeholder: \"Enter password\",\r\n    label: \"Password\",\r\n    type: \"password\",\r\n  },\r\n];\r\n\r\nconst registerConfig = [\r\n  {\r\n    name: \"email\",\r\n    placeholder: \"Enter email\",\r\n    label: \"Email\",\r\n  },\r\n  {\r\n    name: \"name\",\r\n    placeholder: \"Your name\",\r\n    label: \"Name\",\r\n  },\r\n  {\r\n    name: \"password\",\r\n    placeholder: \"Enter password\",\r\n    label: \"Password\",\r\n    type: \"password\",\r\n  },\r\n];\r\n\r\nconst taskConfig = [\r\n  {\r\n    name: \"name\",\r\n    placeholder: \"Task name\",\r\n    label: \"Name\",\r\n  },\r\n  {\r\n    name: \"description\",\r\n    placeholder: \"Task description\",\r\n    label: \"Description\",\r\n  },\r\n];\r\n\n\n//# sourceURL=webpack://final-project/./src/components/formConfigs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskBoard\": () => (/* binding */ taskBoard)\n/* harmony export */ });\n/* harmony import */ var _components_API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/API.js */ \"./src/components/API.js\");\n/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Auth */ \"./src/components/Auth.js\");\n/* harmony import */ var _components_TaskBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TaskBoard.js */ \"./src/components/TaskBoard.js\");\n/* harmony import */ var _img_favicon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/favicon.png */ \"./src/img/favicon.png\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/logo.png */ \"./src/img/logo.png\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst favLink = document.createElement('link');\r\nfavLink.setAttribute('rel', 'shortcut icon');\r\nfavLink.setAttribute('href', `${_img_favicon_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}`);\r\nfavLink.setAttribute('type', 'image/png');\r\nconst headTitle = document.querySelector('title');\r\nheadTitle.insertAdjacentElement('beforebegin', favLink);\r\n\r\nconst logoContainer = document.querySelector('.logo');\r\nlogoContainer.insertAdjacentHTML('afterbegin', `<img src=${_img_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]}>`);\r\n\r\n\r\nconst appContainer = document.getElementById('app');\r\n\r\nconst onLoginSuccess = async () => {\r\n\tappContainer.innerHTML = '';\r\n\tconst user = await _components_API_js__WEBPACK_IMPORTED_MODULE_0__.api.getSelf();\r\n\trenderAppLayout(user);\r\n};\r\n\r\nconst auth = new _components_Auth__WEBPACK_IMPORTED_MODULE_1__.Auth({\r\n\tappContainer,\r\n\tonLoginSuccess,\r\n});\r\n\r\nconst taskBoard = new _components_TaskBoard_js__WEBPACK_IMPORTED_MODULE_2__.TaskBoard({\r\n\tappContainer,\r\n});\r\n\r\nconst renderAppLayout = async user => {\r\n\tauth.user = user;\r\n\tauth.renderHeaderControls();\r\n\ttaskBoard.renderLayout();\r\n\r\n\tconst taskList = await _components_API_js__WEBPACK_IMPORTED_MODULE_0__.api.getAllTasks();\r\n\ttaskList.forEach(task => {\r\n\t\ttaskBoard.addTask(task);\r\n\t});\r\n};\r\n\r\nconst init = async () => {\r\n\tconst isLoggedIn = _components_API_js__WEBPACK_IMPORTED_MODULE_0__.api.isLoggedIn();\r\n\tif (isLoggedIn) {\r\n\t\tconst user = await _components_API_js__WEBPACK_IMPORTED_MODULE_0__.api.autoLogin();\r\n\t\trenderAppLayout(user);\r\n\t} else {\r\n\t\tauth.renderAuthForm();\r\n\t}\r\n};\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://final-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
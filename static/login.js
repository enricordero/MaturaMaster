"use strict"

$(document).ready(function () {
    const aRegisterStudent = $("#register-student")
    const aRegisterTeacher = $("#register-teacher")
    const aLogin = $(".login")
    const loginSection = $("#login-section").show()
    const registerSectionTeacher = $("#register-section-teacher").hide()
    const registerSectionStudent = $("#register-section-student").hide()
    const btnAccedi = $("#btnLogin")
    const btnRegister = $("#btnRegister")

    aLogin.on("click", function(){
        loginSection.show()
        registerSectionStudent.hide()
        registerSectionTeacher.hide()
    })

    aRegisterTeacher.on("click", function(){
        loginSection.hide()
        registerSectionTeacher.show()
        registerSectionStudent.hide()
    })

    aRegisterStudent.on("click", function(){
        loginSection.hide()
        registerSectionTeacher.hide()
        registerSectionStudent.show()
    })

})
//npm install firebase-admin
//npm install firebase
//npm install firebase@8.9.1

const firebase = require('firebase/app');
require('firebase/database'); 
const admin = require('firebase-admin');

var firebaseConfig = {
    apiKey: "AIzaSyAm2Du9ovRq_cVU_2jTzSQs_SsTXoHikG8",
    authDomain: "ltnc-25ea6.firebaseapp.com",
    databaseURL: "https://ltnc-25ea6-default-rtdb.firebaseio.com",
    projectId: "ltnc-25ea6",
    storageBucket: "ltnc-25ea6.appspot.com",
    messagingSenderId: "83914455666",
    appId: "1:83914455666:web:5bcacf284fca1e352620eb",
    measurementId: "G-SGSYMX429F"
};

// Khởi tạo Firebase
const app = firebase.initializeApp(firebaseConfig);
admin.initializeApp();

function checkPhoneNumber(phone) {
    // Lấy danh sách id của tất cả nhân viên từ node cha 'Employees'
    return firebase.database().ref('Employees').once('value')
        .then(employeesSnapshot => {
            let found = false;

            // Lặp qua từng nhân viên
            employeesSnapshot.forEach(employeeSnapshot => {
                const employeePhone = employeeSnapshot.child('phone').val(); // Lấy số điện thoại của nhân viên
                if (employeePhone === phone) {
                    found = true;
                }
            });

            return found ? 1 : 0;
        })
        .catch(error => {
            console.error('Lỗi khi kiểm tra số điện thoại:', error);
            throw error;
        });
}

    class Employee {
        
        static idCounter = 0;

        constructor(id, name, position, degree, specialization, email, phone) {
            this.name = name;
            this.position = position;
            this.degree = degree;
            this.specialization = specialization;
            this.email = email;
            this.phone = phone;
        }
        static createEmployee(name, position, degree, specialization, email, phone) {
            const Employee = {
                name: name,
                position: position,
                degree: degree,
                specialization: specialization,
                email: email,
                phone: phone
            };
            Employee.id = ++this.idCounter;
            const check =  checkPhoneNumber(phone); //Hàm này đang lỗi luôn trả về pending 
            //console.log(check);
            if (!name || !position || !degree || !email || !phone) {
                console.log(name);
                console.log("Các thông tin không được bỏ trống!");
                return;
            }
            if (phone.length === 10) {
                if (check == 0) {console.log("Người dùng đã tồn tại");} //Đang tạm để check để làm tiếp
                else /*if (!check == 1)*/ {
                    switch (position) {
                        case 'Bác sĩ':
                            let doctor = new Doctor();
                            doctor.id= Employee.id,
                            doctor.name = Employee.name;
                            doctor.position= Employee.position;
                            doctor.degree = Employee.degree;
                            doctor.specialization = Employee.specialization;
                            doctor.email = Employee.email;
                            doctor.phone = Employee.phone;
                            doctor.addEmployee(doctor);
                            break;
                        case 'Y tá':
                            let nurse = new Nurse();
                            nurse.id = Employee.id,
                            nurse.name = Employee.name;
                            nurse.position= Employee.position;
                            nurse.degree = Employee.degree;
                            nurse.specialization = Employee.specialization;
                            nurse.email = Employee.email;
                            nurse.phone = Employee.phone;
                            nurse.addEmployee(nurse);
                            break;
                        case 'Điều dưỡng':
                            let nurseAsistant = new NurseAssistant();
                            nurseAsistant.id = Employee.id,
                            nurseAsistant.name = Employee.name;
                            nurseAsistant.position= Employee.position;
                            nurseAsistant.degree = Employee.degree;
                            nurseAsistant.specialization = Employee.specialization;
                            nurseAsistant.email = Employee.email;
                            nurseAsistant.phone = Employee.phone;
                            nurseAsistant.addEmployee(nurseAsistant);
                            break;
                        case 'Trợ lí điều dưỡng':
                            let nurseAide = new NurseAide();
                            nurseAide.id = Employee.id,
                            nurseAide.name = Employee.name;
                            nurseAide.position= Employee.position;
                            nurseAide.degree = Employee.degree;
                            nurseAide.specialization = Employee.specialization;
                            nurseAide.email = Employee.email;
                            nurseAide.phone = Employee.phone;
                            nurseAide.addEmployee(nurseAide);
                            break;
                        default:
                            console.log("Vị trí không tồn tại");
                            break;
                    }
                } 
            } else console.log("Sai SĐT hoặc không có SĐT!"); 
            
        }
    }
  
    class Doctor extends Employee {
        constructor(name, degree, specialization, email, phone) {
            super( name, degree, specialization, email, phone);
        }

        addEmployee(employee) {
            if (employee.specialization.trim() === '') {
                console.log("Thiếu chuyên môn của Bác sĩ!");
                return;
            }
            let employeeCopy = Object.assign({}, employee);
            delete employeeCopy.id;

            firebase.database().ref('Employees/' + employee.id).set(employeeCopy);
        }
    }

    class Nurse extends Employee {
        constructor(id, name, degree, specialization, email, phone) {
            super(id, name, degree, specialization, email, phone);
        }
        addEmployee(employee) {
            let employeeCopy = Object.assign({}, employee);
            delete employeeCopy.id;

            firebase.database().ref('Employees/' + employee.id).set(employeeCopy);
        }
    }
  
    class NurseAssistant extends Employee {
        constructor(id, name, degree, specialization, email, phone) {
            super(id, name, degree, specialization, email, phone);
        }
        addEmployee(employee) {
            let employeeCopy = Object.assign({}, employee);
            delete employeeCopy.id;

            firebase.database().ref('Employees/' + employee.id).set(employeeCopy);
        }
    }
    
    class NurseAide extends Employee {
        constructor(id, name, degree, specialization, email, phone) {
            super(id, name, degree, specialization, email, phone);
        }
        addEmployee(employee) {
            let employeeCopy = Object.assign({}, employee);
            delete employeeCopy.id;

            firebase.database().ref('Employees/' + employee.id).set(employeeCopy);
        }
    }

function addSchedule(day, shift, DoctorID, EmployID, startTime, endTime) {
    firebase.database().ref('Schedules/' + day + '/' + shift).set({
        DoctorID: DoctorID,
        EmployID: EmployID,
        startTime: startTime,
        endTime: endTime
    });
}

function updateName(ID, new_name) {
    var updates = {};
    updates['Employees/' + ID + '/name'] = new_name;
    return firebase.database().ref().update(updates); 
}

function updatePosition(ID, position) {
    var updates = {};
    updates['Employees/' + ID + '/position'] = position;
    return firebase.database().ref().update(updates); 
}

function updateDegree(ID, degree) {
    var updates = {};
    updates['Employees/' + ID + '/degree'] = degree;
    return firebase.database().ref().update(updates); 
}

function updateSpecialization(ID, specialization) {
    var updates = {};
    updates['Employees/' + ID + '/specialization'] = specialization;
    return firebase.database().ref().update(updates); 
}

function deleteEmployee (ID){
    return firebase.database().ref('Employees/' + ID).remove();
}

function updateEmail(ID, email) {
    var updates = {};
    updates['Employees/' + ID + '/email'] = email;
    return firebase.database().ref().update(updates); 
}

function updatePhone(ID, phone) {
    var updates = {};
    updates['Employees/' + ID + '/phone'] = phone;
    return firebase.database().ref().update(updates); 
}

function updateDoctorID(day, shift, newDoctorID) {
    return firebase.database().ref('Schedules/' + day + '/' + shift).update({
        DoctorID: newDoctorID
    });
}

function updateEmployID(day, shift, newEmployID) {
    return firebase.database().ref('Schedules/' + day + '/' + shift).update({
        EmployID: newEmployID
    });
}

//npm install firebase-admin
//npm install firebase
//npm install firebase@8.9.1

const firebase = require('firebase/app');
require('firebase/database'); 
const admin = require('firebase-admin');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const serviceAccount = {
  "type": "service_account",
  "project_id": "ltnc-25ea6",
  "private_key_id": "6fba9cc24e1178e4f8c5223d36f609eb146ef17c",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCvsSWob0XnFwG0\n1pnhVKrPOcfbkZJbaDzAQFVdwuvscbFgrgiKFPZYLHfLhjn0cz2MSAukHfCEiIZb\nKiStzFM+VHaJA3WiJWDKWRBIzG5Qf5uNtuvrB/BHcAQ4b6YW/2vcZxJ+DgKpHrUK\nBqJ8ljM1C9xYng/kIphzZE6rn8W3bdVvhJn84CwVn4KJUkvjCaG0RIg9l8eCcj66\n9lzkN7tEOcdCGnZVgHVCGJyx1R7Qlu+064PXOttmQI9iiPS1AEkEDxyjA3oi3bap\njfgjlU1WAh0v6pzY0z2Vrtireq79X9V35e16Ec2BdZp/gARhe+9wFiLq5cufKg/K\ncvmQecrzAgMBAAECggEAPZUGwZzLMD6Qsw3bny9ZtcwngQ9r8Q0+6hZCtdw6bMTH\nKz+lL508YdioXtbcHpJ8Ot0P84UpBpOCIJdLhv3NGdZqPAlR5LVcUWDZg+LgMegg\nopJA7D96mdeqKwv7eCksafNY+IU5qoTgaTS9JJVTOp8/K3Kv2EPGEwBQUPjuSSYo\nsZyaNTqCWPstT6dVKtfFkw02AUYSkzUtlXSlqb1liJRAr3hE2/SGBs5s8C8wohvP\nxWxzwBtwMKhlIBmD438cUCWG9Gh/KLr0HI2sKM/PkVGsH5gmWr6Y0LjQvivuGNWF\nQmLrfulhkMeV6pV3rDPFYkB4wsj5digYi1waGi30nQKBgQD15GBCJ/HrOTeRiDPH\nfEzk8ZJs/NIiVJLWUKPqwmmjJroq9XkKZGSq/EZyQ1eV+kqB8IxgLlRo2dsbpFfu\nvrqmoovR7suDcibxkqcvriJoD07U5jPxJGIs/AttywB5SfSZth5je7EF3asDttEh\n8y0giROvHp7GjN4e4Hi547aLHQKBgQC26ga9jBKgmH+QX+CKXI1WEuioKqTwRYSY\ngyvQH7WS5a9WoO0WX7Mj6z8kgGuHB0XFfILVFixHkGKOmcJn2OsHNKGWGHNSnG4f\nUCyWlTisgYXFGbqdyXAd7kFQqm5zGN0WaeNsWhMCjsFCU0vqSSMIXKITp1ktNinr\nyFTYphTBTwKBgCsfCrZvVOCAXztZXGM+bCm2J4yPZbZ5iGqnJ6fSwj3HW9yOwdRN\nuM23gg8luiVmCEzzR1rSpSDiG6ekUXtf3VG9rbF6JByAF05D/qfA7O28yYFSgYdn\nbwQei06MzB95FbkjE/80QN4bepMjK1e90osjHt2WDBgbuhRGH0XSJkANAoGBAKuu\nLHVsK2+gstqHovE6vU20obp1jCoYlcOwGkdV+87M1i2xDdaaLEHiY3mXL1Wldc9O\ndl4aWaUx18+Qce+WocI5nBCNEnDPcmzhi3gqxu7jAvNkmsvObfUp0xQrY0+UXq7S\n5CqmwID+DFZ8aByWWNNYXqejwwe0dtRfS4OtHn3xAoGBAOSLYBzk6BGscgEgiLIC\n30LfmTicyaqUWnyCrjuYF06JyCMug7nnF/+0GnhnZRyFQTmLXCb2GsmaOjBenwkE\n27/EXBClFpacFJMdPhBDWVAz7dA/jWhnYogiJ5JZxhXy9TUVyuWB3CNTTTjtIby6\n82OWFUpP+HoXUVPtOQr3a3rN\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-dvoi9@ltnc-25ea6.iam.gserviceaccount.com",
  "client_id": "109502554699607974345",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dvoi9%40ltnc-25ea6.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

const firebaseConfig = {
    apiKey: "AIzaSyAm2Du9ovRq_cVU_2jTzSQs_SsTXoHikG8",
    authDomain: "ltnc-25ea6.firebaseapp.com",
    databaseURL: "https://ltnc-25ea6-default-rtdb.firebaseio.com",
    projectId: "ltnc-25ea6",
    storageBucket: "ltnc-25ea6.appspot.com",
    messagingSenderId: "83914455666",
    appId: "1:83914455666:web:5bcacf284fca1e352620eb",
    measurementId: "G-SGSYMX429F"
};

// Khởi tạo Firebase Admin SDK với cấu hình của bạn
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL
});
firebase.initializeApp(firebaseConfig);
const db = admin.database();
const elistRef = db.ref("/Employees");

    function checkDuplicate(name) {
        return new Promise((resolve, reject) => {
            const deviceRef = elistRef.child(name);

            deviceRef.once('value', (snapshot) => {
                if (snapshot.exists()) {
                    resolve(true); // Thiết bị tồn tại
                } else {
                    resolve(false); // Thiết bị không tồn tại
                }
            }, (error) => {
                reject(error); // Xử lý lỗi nếu có
            });
        });
    }

    class Employee {
        
        static idCounter = 0;

        constructor(ID, name, position, degree, specialization, email, phone) {
            this.name = name;
            this.position = position;
            this.degree = degree;
            this.specialization = specialization;
            this.email = email;
            this.phone = phone;
        }
        
        
        static createEmployee(name, position, degree, specialization, email, phone) {
            const Employee = {
                ID: ++this.idCounter,
                name: name,
                position: position,
                degree: degree,
                specialization: specialization,
                email: email,
                phone: phone
            };

            if (!name || !position || !degree || !email || !phone) {
                console.log("Các thông tin không được bỏ trống!");
                return;
            }

            if (phone.length === 10) {
            checkDuplicate(name).then((exists) => {
                if (exists) {
                    console.log("Nhân viên đã tồn tại trong cơ sở dữ liệu.");
                    // Xử lý khi thiết bị đã tồn tại
                } else {
                    try {
                        switch (position) {
                            case 'Bác sĩ':
                                let doctor = new Doctor();
                                doctor.id= Employee.ID,
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
                                nurse.id = Employee.ID,
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
                                nurseAsistant.id = Employee.ID,
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
                                nurseAide.id = Employee.ID,
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
                        console.log("Thông tin nhân viên đã được khởi tạo thành công.");
                    } 
                    catch (error) {
                            console.error("Lỗi khi khởi tạo thông tin nhân viên:", error);
                        }
                    }
            })
            .catch((error) => {
                console.error("Lỗi khi kiểm tra trùng lặp:", error);
            });

            }

            else console.log("Số điện thoại phải có đủ 10 số");
        }
    }
    
    class Doctor extends Employee {
        constructor(ID, name, degree, specialization, email, phone) {
            super(ID, name, degree, specialization, email, phone);
        }

        addEmployee(employee) {
            if (employee.specialization.trim() === '') {
                console.log("Thiếu chuyên môn của Bác sĩ!");
                return;
            }
            let employeeCopy = Object.assign({}, employee);

            firebase.database().ref('Employees/' + employee.name).set(employeeCopy);
            firebase.database().ref('Employees/' + employee.name + '/name').remove();

        }
    }

    class Nurse extends Employee {
        constructor(ID, name, degree, specialization, email, phone) {
            super(ID, name, degree, specialization, email, phone);
        }
        addEmployee(employee) {
            let employeeCopy = Object.assign({}, employee);

            firebase.database().ref('Employees/' + employee.name).set(employeeCopy);
            firebase.database().ref('Employees/' + employee.name + '/name').remove();

        }
    }
  
    class NurseAssistant extends Employee {
        constructor(ID, name, degree, specialization, email, phone) {
            super(ID, name, degree, specialization, email, phone);
        }
        addEmployee(employee) {
            let employeeCopy = Object.assign({}, employee);

            firebase.database().ref('Employees/' + employee.name).set(employeeCopy);
            firebase.database().ref('Employees/' + employee.name + '/name').remove();

        }
    }
    
    class NurseAide extends Employee {
        constructor(ID, name, degree, specialization, email, phone) {
            super(ID, name, degree, specialization, email, phone);
        }
        addEmployee(employee) {
            let employeeCopy = Object.assign({}, employee);

            firebase.database().ref('Employees/' + employee.name).set(employeeCopy);
            firebase.database().ref('Employees/' + employee.name + '/name').remove();

        }
    }

function setSchedule(day, shift, DoctorID, EmployID, startTime, endTime) {
    firebase.database().ref('Schedules/' + day + '/' + shift).set({
        DoctorID: DoctorID,
        EmployID: EmployID,
        startTime: startTime,
        endTime: endTime
    });
    console.log("Thêm lịch thành công");
}

function updatePosition(id, newPosition) {
    const employeesRef = firebase.database().ref('Employees');
  
    employeesRef.once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const employeeId = childSnapshot.child('id').val();
          if (employeeId === id) {
            const employeeKey = childSnapshot.key;
            const updates = {};
            updates['Employees/' + employeeKey + '/position'] = newPosition; // Cập nhật vị trí của nhân viên

            firebase.database().ref().update(updates)
              .then(() => {
                console.log("Cập nhật vị trí thành công.");
              })
              .catch(error => {
                console.error("Lỗi khi cập nhật vị trí:", error);
              });
            
            // Dừng vòng lặp sau khi tìm thấy nhân viên có ID tương ứng
            return true;
          }
        });
      })
      .catch(error => {
        console.error("Lỗi khi truy vấn dữ liệu:", error);
      });
}

function updateDegree(id, newDegree) {
    const employeesRef = firebase.database().ref('Employees');
  
    employeesRef.once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const employeeId = childSnapshot.child('id').val();
          if (employeeId === id) {
            const employeeKey = childSnapshot.key;
            const updates = {};
            updates['Employees/' + employeeKey + '/degree'] = newDegree; // Cập nhật bậc học của nhân viên

            firebase.database().ref().update(updates)
              .then(() => {
                console.log("Cập nhật bậc học thành công.");
              })
              .catch(error => {
                console.error("Lỗi khi cập nhật bậc học:", error);
              });
            
            // Dừng vòng lặp sau khi tìm thấy nhân viên có ID tương ứng
            return true;
          }
        });
      })
      .catch(error => {
        console.error("Lỗi khi truy vấn dữ liệu:", error);
      });
}

function updateSpecialization(id, newSpecialization) {
    const employeesRef = firebase.database().ref('Employees');
  
    employeesRef.once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const employeeId = childSnapshot.child('id').val();
          if (employeeId === id) {
            const employeeKey = childSnapshot.key;
            const updates = {};
            updates['Employees/' + employeeKey + '/specialization'] = newSpecialization; // Cập nhật chuyên ngành của nhân viên

            firebase.database().ref().update(updates)
              .then(() => {
                console.log("Cập nhật chuyên ngành thành công.");
              })
              .catch(error => {
                console.error("Lỗi khi cập nhật chuyên ngành:", error);
              });
            
            // Dừng vòng lặp sau khi tìm thấy nhân viên có ID tương ứng
            return true;
          }
        });
      })
      .catch(error => {
        console.error("Lỗi khi truy vấn dữ liệu:", error);
      });
}

function deleteEmployee(id) {
    const employeesRef = firebase.database().ref('Employees');

    employeesRef.once('value')
        .then(snapshot => {
            snapshot.forEach(childSnapshot => {
                const employeeId = childSnapshot.child('id').val();
                if (employeeId === id) {
                    const employeeKey = childSnapshot.key;

                    firebase.database().ref('Employees/' + employeeKey).remove()
                        .then(() => {
                            console.log("Xóa nhân viên thành công.");
                        })
                        .catch(error => {
                            console.error("Lỗi khi xóa nhân viên:", error);
                        });

                    // Dừng vòng lặp sau khi tìm thấy nhân viên có ID tương ứng
                    return true;
                }
            });
        })
        .catch(error => {
            console.error("Lỗi khi truy vấn dữ liệu:", error);
        });
}

function deleteEmployee(name) {
    firebase.database().ref('Employees/' + name).remove()
    .then(() => {
        console.log("Xóa nhân viên thành công.");
    })
    .catch(error => {
        console.error("Lỗi khi xóa nhân viên:", error);
    });
}

function updateEmail(id, newEmail) {
    const employeesRef = firebase.database().ref('Employees');
  
    employeesRef.once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const employeeId = childSnapshot.child('id').val();
          if (employeeId === id) {
            const employeeKey = childSnapshot.key;
            const updates = {};
            updates['Employees/' + employeeKey + '/email'] = newEmail; // Cập nhật email của nhân viên

            firebase.database().ref().update(updates)
              .then(() => {
                console.log("Cập nhật email thành công.");
              })
              .catch(error => {
                console.error("Lỗi khi cập nhật email:", error);
              });
            
            // Dừng vòng lặp sau khi tìm thấy nhân viên có ID tương ứng
            return true;
          }
        });
      })
      .catch(error => {
        console.error("Lỗi khi truy vấn dữ liệu:", error);
      });
}

function updatePhone(id, newPhone) {
    const employeesRef = firebase.database().ref('Employees');
  
    employeesRef.once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const employeeId = childSnapshot.child('id').val();
          if (employeeId === id) {
            const employeeKey = childSnapshot.key;
            const updates = {};
            updates['Employees/' + employeeKey + '/phone'] = newPhone; // Cập nhật số điện thoại của nhân viên

            firebase.database().ref().update(updates)
              .then(() => {
                console.log("Cập nhật số điện thoại thành công.");
              })
              .catch(error => {
                console.error("Lỗi khi cập nhật số điện thoại:", error);
              });
            
            // Dừng vòng lặp sau khi tìm thấy nhân viên có ID tương ứng
            return true;
          }
        });
      })
      .catch(error => {
        console.error("Lỗi khi truy vấn dữ liệu:", error);
      });
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

function getEmployeeById(id) {
    const employeesRef = firebase.database().ref('Employees');

    return employeesRef.once('value')
        .then(snapshot => {
            let employeeInfo = null;
            snapshot.forEach(childSnapshot => {
                const employeeId = childSnapshot.child('id').val();
                if (employeeId === id) {
                    const employeeKey = childSnapshot.key;
                    console.log("Thông tin của :", employeeKey);
                    employeeInfo = childSnapshot.val(); 
                    return true; // Dừng vòng lặp khi tìm thấy nhân viên có ID tương ứng
                }
            });
            console.log(employeeInfo); // Trả về thông tin của nhân viên
        })
        .catch(error => {
            console.error("Lỗi khi truy vấn dữ liệu:", error);
            return null; // Trả về null nếu có lỗi xảy ra
        });
}


function getEmployeeByName(name) {
    const employeeRef = firebase.database().ref('Employees/' + name);

    employeeRef.once('value')
        .then(snapshot => {
            const employeeData = snapshot.val();
            if (employeeData) {
                console.log("Thông tin của nhân viên có tên", name, ":", employeeData);
            } else {
                console.log("Không tìm thấy nhân viên có tên", name);
            }
        })
        .catch(error => {
            console.error("Lỗi khi truy vấn dữ liệu:", error);
        });
}

function getEmployeeNameById(id) {
  const employeesRef = firebase.database().ref('Employees');

  return employeesRef.once('value')
      .then(snapshot => {
          let employeeKey = null;
          snapshot.forEach(childSnapshot => {
              const employeeId = childSnapshot.child('id').val();
              if (employeeId === id) {
                  employeeKey = childSnapshot.key;
                  return true; // Dừng vòng lặp khi tìm thấy nhân viên có ID tương ứng
              }
          });
          return employeeKey;
      })
      .catch(error => {
          console.error("Lỗi khi truy vấn dữ liệu:", error);
          return null; // Trả về null nếu có lỗi xảy ra
      });
}
function getSchedule(day, shift) {
  let thu;
  let tenShift;
  switch (day) {
    case 2:
      thu = "Monday";
      break;
    case 3:
      thu = "Tuesday";
      break;
    case 4:
      thu = "Wednesday";
      break;
    case 5:
      thu = "Thursday";
      break;
    case 6:
      thu = "Friday";
      break;
    case 7:
      thu = "Saturday";
      break;
    default:
      console.log("Nhập sai thứ!");
      return;
  }
    switch(shift) {
        case 1:
            tenShift = "Shift1";
            break;
        case 2:
            tenShift = "Shift2";
            break;
        case 3:
            tenShift = "Shift3";
            break;
        default:
            console.log("Nhập sai ca !");
            return;
    }
    const dayRef = firebase.database().ref('Schedules/' + thu + '/' + tenShift);
    
dayRef.once('value')
    .then(snapshot => {
        const scheduleData = snapshot.val();
        if (scheduleData) {
            console.log("Thông tin của ca thứ ", day, " ca ", shift, ":");
            console.log("DoctorID: ", scheduleData.DoctorID);
            console.log("EmployID: ", scheduleData.EmployID);
            console.log("Thời gian bắt đầu: ", scheduleData.startTime);
            console.log("Thời gian kết thúc: ", scheduleData.endTime);
        } else {
            console.log("Không có ca vào thứ", thu, " ca ", tenShift);
        }
    })
    .catch(error => {
        console.error("Lỗi khi truy vấn dữ liệu:", error);
    });
}

const getDataFromFirebase = async (Type) => {
  try {
    const snapshot = await firebase.database().ref(Type).once("value");
    const data = [];
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      data.push(childData);
    });
    return data;
  } catch (error) {
    console.error("Error getting data from Firebase:", error);
    return null;
  }
};

async function createHTMLTable(data) {
  let html = '<table>';
  const employeeNames = await Promise.all(data.map(item => getEmployeeNameById(item.id)));
  html += '<tr><th>ID</th><th>Tên</th><th>Bằng cấp</th><th>Email</th><th>Số điện thoại</th><th>Chức vụ</th><th>Chuyên ngành</th></tr>';

  data.sort((a, b) => a.id - b.id);

for (let i = 0; i < data.length; i++) {
    html += '<tr>';
    html += `<td>${i + 1}</td>`; // ID column
    html += `<td>${employeeNames[i]}</td>`; // Name column
    html += `<td>${data[i].degree}</td>`;
    html += `<td>${data[i].email}</td>`;
    html += `<td>${data[i].phone}</td>`;
    html += `<td>${data[i].position}</td>`;
    html += `<td>${data[i].specialization}</td>`;
    html += '<td>'
    html += `<button onclick="editEmployee('${i + 1}')">Edit</button>`;
    html += `<button onclick="deleteEmployee('${i + 1}')">Delete</button>`;
    html += '</td>'
    html += '</tr>';
}

  html += '</table>';
  return html;
}

// Run the program and get the tableHTML
const getTableHTML = async () => {
  const result = await getDataFromFirebase("Employees");
  const tableHTML = await createHTMLTable(result);
  return tableHTML;
};

    //TEST
// getTableHTML().then(result => {
//   console.log(result);
// });

function searchEmployee(name) {
  // Get the table
  const table = document.getElementById('employeeTable');

  // Loop through all table rows, and hide those who don't match the search query
  for (let i = 1; i < table.rows.length; i++) {
    let td = table.rows[i].getElementsByTagName('td')[1]; // Assuming the name is in the second column
    if (td) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().includes(name.toUpperCase())) {
        table.rows[i].style.display = "";
      } else {
        table.rows[i].style.display = "none";
      }
    }
  }
}

function editEmployee(id) {
  // Get the employee row
  const row = document.getElementById('row' + id);

  // Create a form for editing
  const form = document.createElement('form');
  form.innerHTML = `
      <label>New Info: <input type="text" name="newInfo"></label>
      <button type="submit">Save</button>
  `;

  // Handle form submission
  form.onsubmit = function(e) {
      e.preventDefault();

      // Get the new value
      const newInfo = form.elements.newInfo.value;

      // Update the table
      for (let i = 1; i < row.cells.length; i++) {
          row.cells[i].innerText = newInfo;
      }

      // Remove the form
      form.remove();
  };

  // Append the form to the row
  row.appendChild(form);
}
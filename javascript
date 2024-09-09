// Example list of students for attendance checking
const studentList = ["Alice", "Bob", "Charlie", "David", "Eve"];

function checkAttendance() {
    const studentName = document.getElementById("studentName").value;
    const attendanceResult = document.getElementById("attendanceResult");

    if (studentList.includes(studentName)) {
        attendanceResult.textContent = `✅ ${studentName} is present in the class.`;
        attendanceResult.style.color = "green";
    } else {
        attendanceResult.textContent = `❌ ${studentName} is not present in the class.`;
        attendanceResult.style.color = "red";
    }
}

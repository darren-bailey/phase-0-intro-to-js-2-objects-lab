const employee = {
    name: "George",
    address: "123 Basic",
};
function updateEmployeeWithKeyAndValue(employee, name, value){
    return {
        ...employee,
        [name]: value,
    };
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value){
    employee[name] = value;
    return employee;
};
function deleteFromEmployeeByKey(employee, name){
    return {
        ...name,
    };
};
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
};


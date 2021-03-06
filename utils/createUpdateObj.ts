import * as _ from "lodash";

export const createCompanyUpdateObj = (data, newObj) => {
  const updateObj = {};

  _.mapKeys(newObj, (value, key) => {
    const oldValue = _.get(data, `company.${key}`);
    if (!_.isEqual(oldValue, value)) {
      updateObj[key] = value;
    }
  });

  return updateObj;
};

export const createBranchUpdateObj = (data, newObj) => {
  console.log(data);
  const updateObj = {};

  _.mapKeys(newObj, (value, key) => {
    const oldValue = _.get(data, `branch.${key}`);
    if (!_.isEqual(oldValue, value)) {
      updateObj[key] = value;
    }
  });

  return updateObj;
};

export const createEmployeeUpdateObj = (data, newObj) => {
  const updateObj = {};

  _.mapKeys(newObj, (value, key) => {
    const oldValue = _.get(data, `employee.${key}`);
    if (!_.isEqual(oldValue, value)) {
      updateObj[key] = value;
    }
  });

  return updateObj;
};

export const createEmployeeDisciplineUpdateObj = (data, newObj) => {
  const updateObj = {};

  _.mapKeys(newObj, (value, key) => {
    const oldValue = _.get(data, `employeeDiscipline.${key}`);
    if (!_.isEqual(oldValue, value)) {
      updateObj[key] = value;
    }
  });

  return updateObj;
};

export const createDisciplineGroupUpdateObj = (data, newObj) => {
  const updateObj = {};

  _.mapKeys(newObj, (value, key) => {
    const oldValue = _.get(data, `disciplineGroup.${key}`);
    if (!_.isEqual(oldValue, value)) {
      updateObj[key] = value;
    }
  });

  return updateObj;
};

export const createDisciplineUpdateObj = (data, newObj) => {
  const updateObj = {};

  _.mapKeys(newObj, (value, key) => {
    const oldValue = _.get(data, `discipline.${key}`);
    if (!_.isEqual(oldValue, value)) {
      updateObj[key] = value;
    }
  });

  return updateObj;
};

export const createLicenseCertificationUpdateObj = (data, newObj) => {
  const updateObj = {};

  _.mapKeys(newObj, (value, key) => {
    const oldValue = _.get(data, `licenseCertification.${key}`);
    if (!_.isEqual(oldValue, value)) {
      updateObj[key] = value;
    }
  });

  return updateObj;
};


export const createAuthorizedPersonnelUpdateObj = (data, newObj) => {
  const updateObj = {};

  _.mapKeys(newObj, (value, key) => {
    const oldValue = _.get(data, `authorizedPersonnel.${key}`);
    if (!_.isEqual(oldValue, value)) {
      updateObj[key] = value;
    }
  });

  return updateObj;
};

export const createEmployeeCredentialUpdateObj = (data, newObj) => {
  const updateObj = {};

  _.mapKeys(newObj, (value, key) => {
    const oldValue = _.get(data, `employeeCredential.${key}`);
    if (!_.isEqual(oldValue, value)) {
      updateObj[key] = value;
    }
  });

  return updateObj;
};
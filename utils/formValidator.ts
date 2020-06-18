export const basicRequiredInput = [
  { required: true, message: "This field is required" },
];

export const basicRequiredDropdown = (val) => [
  { required: true },
  {
    validator: (rule, value) => basicDropdownValidator(rule, val),
  },
];

const basicDropdownValidator = (rule, value) => {
  if (!value || value === "Select") {
    return Promise.reject("This field is required");
  }
  return Promise.resolve();
};

export const schema = {
  type: "object",
  properties: {
    firstName: { type: "string", minLength: 1 },
    lastName: { type: "string", minLength: 1 },
    email: { type: "string", minLength: 1 },
    country: { type: "string", enum: ["United States", "Canada", "Mexico"] },
    linkedin: { type: "string", minLength: 1 },
    visas: {
      type: "array",
      uniqueItems: true,
      items: {
        type: "string",
        enum: ["O-1", "EB-1A", "EB-2-NW", "I don't know"],
      },
    },
    inquiry: { type: "string", minLength: 1 },
  },
  required: [
    "firstName",
    "lastName",
    "email",
    "country",
    "linkedin",
    "visas",
    "inquiry",
  ],
};

export const uischema = {
  type: "VerticalLayout",
  elements: [
    { type: "Control", scope: "#/properties/firstName", label: "First Name" },
    { type: "Control", scope: "#/properties/lastName", label: "Last Name" },
    { type: "Control", scope: "#/properties/email", label: "Email" },
    { type: "Control", scope: "#/properties/country", label: "Country" },
    { type: "Control", scope: "#/properties/linkedin", label: "Linkedin" },
    { type: "Control", scope: "#/properties/visas", label: "Visas" },
    { type: "Control", scope: "#/properties/inquiry", label: "Inquiry" },
  ],
};

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  RGBAHue: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBATransparency: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
};

/** Representing a geolocation point with latitude and longitude */
export type Location = {
   __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

export type AssetUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Optional updates to localizations */
  localizations?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AuthorizedPersonnelCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  employeeCredential?: Maybe<EmployeeCredentialCreateManyInlineInput>;
  company?: Maybe<CompanyCreateOneInlineInput>;
  canVerify?: Maybe<Array<Scalars['String']>>;
  employee?: Maybe<EmployeeCreateOneInlineInput>;
};

export type DisciplineGroupUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: DisciplineGroupWhereInput;
  /** Update many input */
  data: DisciplineGroupUpdateManyInput;
};

export type EmployeeDisciplineUpdateManyInlineInput = {
  /** Create and connect multiple EmployeeDiscipline documents */
  create?: Maybe<Array<EmployeeDisciplineCreateInput>>;
  /** Connect multiple existing EmployeeDiscipline documents */
  connect?: Maybe<Array<EmployeeDisciplineConnectInput>>;
  /** Override currently-connected documents with multiple existing EmployeeDiscipline documents */
  set?: Maybe<Array<EmployeeDisciplineWhereUniqueInput>>;
  /** Update multiple EmployeeDiscipline documents */
  update?: Maybe<Array<EmployeeDisciplineUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EmployeeDiscipline documents */
  upsert?: Maybe<Array<EmployeeDisciplineUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple EmployeeDiscipline documents */
  disconnect?: Maybe<Array<EmployeeDisciplineWhereUniqueInput>>;
  /** Delete multiple EmployeeDiscipline documents */
  delete?: Maybe<Array<EmployeeDisciplineWhereUniqueInput>>;
};

export type LicenseCertificationCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  requirement?: Maybe<Scalars['String']>;
  validateDoh?: Maybe<Scalars['Boolean']>;
  disciplines?: Maybe<DisciplineCreateManyInlineInput>;
  employeeCredential?: Maybe<EmployeeCredentialCreateOneInlineInput>;
  company?: Maybe<CompanyCreateOneInlineInput>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** Identifies documents */
export type AuthorizedPersonnelWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AuthorizedPersonnelWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AuthorizedPersonnelWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AuthorizedPersonnelWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  employeeCredential_every?: Maybe<EmployeeCredentialWhereInput>;
  employeeCredential_some?: Maybe<EmployeeCredentialWhereInput>;
  employeeCredential_none?: Maybe<EmployeeCredentialWhereInput>;
  company?: Maybe<CompanyWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  canVerify?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  canVerify_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  canVerify_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  canVerify_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  canVerify_contains_none?: Maybe<Array<Scalars['String']>>;
  employee?: Maybe<EmployeeWhereInput>;
};

/** References Branch record uniquely */
export type BranchWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type EmployeeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EmployeeWhereUniqueInput;
  /** Document to update */
  data: EmployeeUpdateInput;
};

/** A connection to a list of items. */
export type BranchConnection = {
   __typename?: 'BranchConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<BranchEdge>;
  aggregate: Aggregate;
};

export type BranchCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  branchName?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  branchCode?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  zipExt?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneExt?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  contactPhoneExt?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  hasNoClients?: Maybe<Scalars['Boolean']>;
  company?: Maybe<CompanyCreateOneInlineInput>;
  employee?: Maybe<EmployeeCreateManyInlineInput>;
};

/** Identifies documents */
export type DisciplineGroupManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DisciplineGroupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DisciplineGroupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DisciplineGroupWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isAdmin_not?: Maybe<Scalars['Boolean']>;
  allowOverlap?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  allowOverlap_not?: Maybe<Scalars['Boolean']>;
  employeeDiscipline_every?: Maybe<EmployeeDisciplineWhereInput>;
  employeeDiscipline_some?: Maybe<EmployeeDisciplineWhereInput>;
  employeeDiscipline_none?: Maybe<EmployeeDisciplineWhereInput>;
  disciplines_every?: Maybe<DisciplineWhereInput>;
  disciplines_some?: Maybe<DisciplineWhereInput>;
  disciplines_none?: Maybe<DisciplineWhereInput>;
  company?: Maybe<CompanyWhereInput>;
};

export type UserCompanyCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyCreateOneInlineInput>;
};

export type AuthorizedPersonnelUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AuthorizedPersonnelWhereUniqueInput;
  /** Upsert data */
  data: AuthorizedPersonnelUpsertInput;
};

/** An edge in a connection. */
export type CompanyEdge = {
   __typename?: 'CompanyEdge';
  /** The item at the end of the edge. */
  node: Company;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type LicenseCertificationWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LicenseCertificationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LicenseCertificationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LicenseCertificationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  type_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  type_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  type_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  type_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  type_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  type_not_ends_with?: Maybe<Scalars['String']>;
  requirement?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  requirement_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  requirement_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  requirement_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  requirement_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  requirement_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  requirement_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  requirement_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  requirement_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  requirement_not_ends_with?: Maybe<Scalars['String']>;
  validateDoh?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  validateDoh_not?: Maybe<Scalars['Boolean']>;
  disciplines_every?: Maybe<DisciplineWhereInput>;
  disciplines_some?: Maybe<DisciplineWhereInput>;
  disciplines_none?: Maybe<DisciplineWhereInput>;
  employeeCredential?: Maybe<EmployeeCredentialWhereInput>;
  company?: Maybe<CompanyWhereInput>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

/** Identifies documents */
export type BranchWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BranchWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BranchWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BranchWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  branchName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  branchName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  branchName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  branchName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  branchName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  branchName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  branchName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  branchName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  branchName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  branchName_not_ends_with?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  abbreviation_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abbreviation_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  abbreviation_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  abbreviation_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  abbreviation_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  abbreviation_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  abbreviation_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  abbreviation_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  abbreviation_not_ends_with?: Maybe<Scalars['String']>;
  branchCode?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  branchCode_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  branchCode_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  branchCode_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  branchCode_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  branchCode_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  branchCode_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  branchCode_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  branchCode_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  branchCode_not_ends_with?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address1_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address1_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address1_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address1_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address1_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address1_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address1_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address1_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address1_not_ends_with?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address2_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address2_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address2_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address2_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address2_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address2_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address2_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address2_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address2_not_ends_with?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  zip_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zip_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  zip_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  zip_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  zip_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  zip_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  zip_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  zip_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  zip_not_ends_with?: Maybe<Scalars['String']>;
  zipExt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  zipExt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zipExt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  zipExt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  zipExt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  zipExt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  zipExt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  zipExt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  zipExt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  zipExt_not_ends_with?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  city_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  state_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  state_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  state_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  state_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  state_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  state_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  state_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  state_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  state_not_ends_with?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: Maybe<Scalars['String']>;
  phoneExt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phoneExt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneExt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phoneExt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phoneExt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneExt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneExt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phoneExt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneExt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneExt_not_ends_with?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fax_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fax_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fax_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fax_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fax_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fax_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fax_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fax_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fax_not_ends_with?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactName_not_ends_with?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactTitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactTitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactTitle_not_ends_with?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactPhone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactPhone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactPhone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactPhone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactPhone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactPhone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactPhone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactPhone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactPhone_not_ends_with?: Maybe<Scalars['String']>;
  contactPhoneExt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactPhoneExt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactPhoneExt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactPhoneExt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactPhoneExt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactPhoneExt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactPhoneExt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactPhoneExt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactPhoneExt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactPhoneExt_not_ends_with?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactEmail_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactEmail_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactEmail_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactEmail_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactEmail_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactEmail_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactEmail_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactEmail_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactEmail_not_ends_with?: Maybe<Scalars['String']>;
  hasNoClients?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  hasNoClients_not?: Maybe<Scalars['Boolean']>;
  company?: Maybe<CompanyWhereInput>;
  employee_every?: Maybe<EmployeeWhereInput>;
  employee_some?: Maybe<EmployeeWhereInput>;
  employee_none?: Maybe<EmployeeWhereInput>;
};

export type Company = Node & {
   __typename?: 'Company';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Company>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  legalBusinessName?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  doingBusinessAs?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  companyCode?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  nationalProviderIdentifier?: Maybe<Scalars['String']>;
  businessType?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  zipExt?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  contactExt?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  logo?: Maybe<Asset>;
  companyUsers: Array<UserCompany>;
  companyBranches: Array<Branch>;
  employee: Array<Employee>;
  disciplineGroup: Array<DisciplineGroup>;
  discipline: Array<Discipline>;
  authorizedPersonnel: Array<AuthorizedPersonnel>;
  licenseCertification: Array<LicenseCertification>;
  /** List of Company versions */
  history: Array<Version>;
};


export type CompanyDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type CompanyCompanyUsersArgs = {
  where?: Maybe<UserCompanyWhereInput>;
  orderBy?: Maybe<UserCompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CompanyCompanyBranchesArgs = {
  where?: Maybe<BranchWhereInput>;
  orderBy?: Maybe<BranchOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CompanyEmployeeArgs = {
  where?: Maybe<EmployeeWhereInput>;
  orderBy?: Maybe<EmployeeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CompanyDisciplineGroupArgs = {
  where?: Maybe<DisciplineGroupWhereInput>;
  orderBy?: Maybe<DisciplineGroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CompanyDisciplineArgs = {
  where?: Maybe<DisciplineWhereInput>;
  orderBy?: Maybe<DisciplineOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CompanyAuthorizedPersonnelArgs = {
  where?: Maybe<AuthorizedPersonnelWhereInput>;
  orderBy?: Maybe<AuthorizedPersonnelOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CompanyLicenseCertificationArgs = {
  where?: Maybe<LicenseCertificationWhereInput>;
  orderBy?: Maybe<LicenseCertificationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CompanyHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export enum EmployeeDisciplineOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC'
}

/** Identifies documents */
export type BranchManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BranchWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BranchWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BranchWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  branchName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  branchName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  branchName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  branchName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  branchName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  branchName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  branchName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  branchName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  branchName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  branchName_not_ends_with?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  abbreviation_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abbreviation_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  abbreviation_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  abbreviation_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  abbreviation_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  abbreviation_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  abbreviation_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  abbreviation_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  abbreviation_not_ends_with?: Maybe<Scalars['String']>;
  branchCode?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  branchCode_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  branchCode_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  branchCode_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  branchCode_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  branchCode_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  branchCode_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  branchCode_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  branchCode_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  branchCode_not_ends_with?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address1_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address1_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address1_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address1_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address1_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address1_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address1_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address1_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address1_not_ends_with?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address2_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address2_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address2_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address2_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address2_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address2_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address2_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address2_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address2_not_ends_with?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  zip_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zip_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  zip_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  zip_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  zip_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  zip_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  zip_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  zip_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  zip_not_ends_with?: Maybe<Scalars['String']>;
  zipExt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  zipExt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zipExt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  zipExt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  zipExt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  zipExt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  zipExt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  zipExt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  zipExt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  zipExt_not_ends_with?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  city_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  state_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  state_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  state_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  state_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  state_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  state_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  state_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  state_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  state_not_ends_with?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: Maybe<Scalars['String']>;
  phoneExt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phoneExt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneExt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phoneExt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phoneExt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneExt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneExt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phoneExt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneExt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneExt_not_ends_with?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fax_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fax_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fax_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fax_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fax_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fax_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fax_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fax_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fax_not_ends_with?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactName_not_ends_with?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactTitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactTitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactTitle_not_ends_with?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactPhone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactPhone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactPhone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactPhone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactPhone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactPhone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactPhone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactPhone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactPhone_not_ends_with?: Maybe<Scalars['String']>;
  contactPhoneExt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactPhoneExt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactPhoneExt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactPhoneExt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactPhoneExt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactPhoneExt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactPhoneExt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactPhoneExt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactPhoneExt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactPhoneExt_not_ends_with?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactEmail_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactEmail_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactEmail_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactEmail_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactEmail_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactEmail_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactEmail_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactEmail_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactEmail_not_ends_with?: Maybe<Scalars['String']>;
  hasNoClients?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  hasNoClients_not?: Maybe<Scalars['Boolean']>;
  company?: Maybe<CompanyWhereInput>;
  employee_every?: Maybe<EmployeeWhereInput>;
  employee_some?: Maybe<EmployeeWhereInput>;
  employee_none?: Maybe<EmployeeWhereInput>;
};

export type DisciplineGroupCreateManyInlineInput = {
  /** Create and connect multiple existing DisciplineGroup documents */
  create?: Maybe<Array<DisciplineGroupCreateInput>>;
  /** Connect multiple existing DisciplineGroup documents */
  connect?: Maybe<Array<DisciplineGroupWhereUniqueInput>>;
};

export type EmployeeCredential = Node & {
   __typename?: 'EmployeeCredential';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<EmployeeCredential>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  licenseCertification?: Maybe<LicenseCertification>;
  licenseCertificationNumber?: Maybe<Scalars['String']>;
  homeCareRegistryNumber?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Scalars['Date']>;
  expirationDate?: Maybe<Scalars['Date']>;
  institutionProvidingCredential?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  verifiedBy?: Maybe<AuthorizedPersonnel>;
  employee?: Maybe<Employee>;
  images?: Maybe<Asset>;
  /** List of EmployeeCredential versions */
  history: Array<Version>;
};


export type EmployeeCredentialDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type EmployeeCredentialHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** A connection to a list of items. */
export type EmployeeCredentialConnection = {
   __typename?: 'EmployeeCredentialConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<EmployeeCredentialEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type EmployeeDisciplineEdge = {
   __typename?: 'EmployeeDisciplineEdge';
  /** The item at the end of the edge. */
  node: EmployeeDiscipline;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type EmployeeDisciplineConnectInput = {
  /** Document to connect */
  where: EmployeeDisciplineWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AuthorizedPersonnel = Node & {
   __typename?: 'AuthorizedPersonnel';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<AuthorizedPersonnel>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  employeeCredential: Array<EmployeeCredential>;
  company?: Maybe<Company>;
  canVerify: Array<Scalars['String']>;
  employee?: Maybe<Employee>;
  /** List of AuthorizedPersonnel versions */
  history: Array<Version>;
};


export type AuthorizedPersonnelDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type AuthorizedPersonnelEmployeeCredentialArgs = {
  where?: Maybe<EmployeeCredentialWhereInput>;
  orderBy?: Maybe<EmployeeCredentialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type AuthorizedPersonnelHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type DisciplineUpdateOneInlineInput = {
  /** Create and connect one Discipline document */
  create?: Maybe<DisciplineCreateInput>;
  /** Update single Discipline document */
  update?: Maybe<DisciplineUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Discipline document */
  upsert?: Maybe<DisciplineUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Discipline document */
  connect?: Maybe<DisciplineWhereUniqueInput>;
  /** Disconnect currently connected Discipline document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Discipline document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type EmployeeConnectInput = {
  /** Document to connect */
  where: EmployeeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type Query = {
   __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple authorizedPersonnels */
  authorizedPersonnels: Array<AuthorizedPersonnel>;
  /** Retrieve a single authorizedPersonnel */
  authorizedPersonnel?: Maybe<AuthorizedPersonnel>;
  /** Retrieve multiple authorizedPersonnels using the Relay connection interface */
  authorizedPersonnelsConnection: AuthorizedPersonnelConnection;
  /** Retrieve document version */
  authorizedPersonnelVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple branches */
  branches: Array<Branch>;
  /** Retrieve a single branch */
  branch?: Maybe<Branch>;
  /** Retrieve multiple branches using the Relay connection interface */
  branchesConnection: BranchConnection;
  /** Retrieve document version */
  branchVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple companies */
  companies: Array<Company>;
  /** Retrieve a single company */
  company?: Maybe<Company>;
  /** Retrieve multiple companies using the Relay connection interface */
  companiesConnection: CompanyConnection;
  /** Retrieve document version */
  companyVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple disciplines */
  disciplines: Array<Discipline>;
  /** Retrieve a single discipline */
  discipline?: Maybe<Discipline>;
  /** Retrieve multiple disciplines using the Relay connection interface */
  disciplinesConnection: DisciplineConnection;
  /** Retrieve document version */
  disciplineVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple disciplineGroups */
  disciplineGroups: Array<DisciplineGroup>;
  /** Retrieve a single disciplineGroup */
  disciplineGroup?: Maybe<DisciplineGroup>;
  /** Retrieve multiple disciplineGroups using the Relay connection interface */
  disciplineGroupsConnection: DisciplineGroupConnection;
  /** Retrieve document version */
  disciplineGroupVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple employees */
  employees: Array<Employee>;
  /** Retrieve a single employee */
  employee?: Maybe<Employee>;
  /** Retrieve multiple employees using the Relay connection interface */
  employeesConnection: EmployeeConnection;
  /** Retrieve document version */
  employeeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple employeeCredentials */
  employeeCredentials: Array<EmployeeCredential>;
  /** Retrieve a single employeeCredential */
  employeeCredential?: Maybe<EmployeeCredential>;
  /** Retrieve multiple employeeCredentials using the Relay connection interface */
  employeeCredentialsConnection: EmployeeCredentialConnection;
  /** Retrieve document version */
  employeeCredentialVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple employeeDisciplines */
  employeeDisciplines: Array<EmployeeDiscipline>;
  /** Retrieve a single employeeDiscipline */
  employeeDiscipline?: Maybe<EmployeeDiscipline>;
  /** Retrieve multiple employeeDisciplines using the Relay connection interface */
  employeeDisciplinesConnection: EmployeeDisciplineConnection;
  /** Retrieve document version */
  employeeDisciplineVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple licenseCertifications */
  licenseCertifications: Array<LicenseCertification>;
  /** Retrieve a single licenseCertification */
  licenseCertification?: Maybe<LicenseCertification>;
  /** Retrieve multiple licenseCertifications using the Relay connection interface */
  licenseCertificationsConnection: LicenseCertificationConnection;
  /** Retrieve document version */
  licenseCertificationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple userCompanies */
  userCompanies: Array<UserCompany>;
  /** Retrieve a single userCompany */
  userCompany?: Maybe<UserCompany>;
  /** Retrieve multiple userCompanies using the Relay connection interface */
  userCompaniesConnection: UserCompanyConnection;
  /** Retrieve document version */
  userCompanyVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAuthorizedPersonnelsArgs = {
  where?: Maybe<AuthorizedPersonnelWhereInput>;
  orderBy?: Maybe<AuthorizedPersonnelOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryAuthorizedPersonnelArgs = {
  where: AuthorizedPersonnelWhereUniqueInput;
  stage?: Stage;
};


export type QueryAuthorizedPersonnelsConnectionArgs = {
  where?: Maybe<AuthorizedPersonnelWhereInput>;
  orderBy?: Maybe<AuthorizedPersonnelOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryAuthorizedPersonnelVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBranchesArgs = {
  where?: Maybe<BranchWhereInput>;
  orderBy?: Maybe<BranchOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryBranchArgs = {
  where: BranchWhereUniqueInput;
  stage?: Stage;
};


export type QueryBranchesConnectionArgs = {
  where?: Maybe<BranchWhereInput>;
  orderBy?: Maybe<BranchOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryBranchVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCompaniesArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput;
  stage?: Stage;
};


export type QueryCompaniesConnectionArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryCompanyVersionArgs = {
  where: VersionWhereInput;
};


export type QueryDisciplinesArgs = {
  where?: Maybe<DisciplineWhereInput>;
  orderBy?: Maybe<DisciplineOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryDisciplineArgs = {
  where: DisciplineWhereUniqueInput;
  stage?: Stage;
};


export type QueryDisciplinesConnectionArgs = {
  where?: Maybe<DisciplineWhereInput>;
  orderBy?: Maybe<DisciplineOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryDisciplineVersionArgs = {
  where: VersionWhereInput;
};


export type QueryDisciplineGroupsArgs = {
  where?: Maybe<DisciplineGroupWhereInput>;
  orderBy?: Maybe<DisciplineGroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryDisciplineGroupArgs = {
  where: DisciplineGroupWhereUniqueInput;
  stage?: Stage;
};


export type QueryDisciplineGroupsConnectionArgs = {
  where?: Maybe<DisciplineGroupWhereInput>;
  orderBy?: Maybe<DisciplineGroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryDisciplineGroupVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEmployeesArgs = {
  where?: Maybe<EmployeeWhereInput>;
  orderBy?: Maybe<EmployeeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
  stage?: Stage;
};


export type QueryEmployeesConnectionArgs = {
  where?: Maybe<EmployeeWhereInput>;
  orderBy?: Maybe<EmployeeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryEmployeeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEmployeeCredentialsArgs = {
  where?: Maybe<EmployeeCredentialWhereInput>;
  orderBy?: Maybe<EmployeeCredentialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryEmployeeCredentialArgs = {
  where: EmployeeCredentialWhereUniqueInput;
  stage?: Stage;
};


export type QueryEmployeeCredentialsConnectionArgs = {
  where?: Maybe<EmployeeCredentialWhereInput>;
  orderBy?: Maybe<EmployeeCredentialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryEmployeeCredentialVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEmployeeDisciplinesArgs = {
  where?: Maybe<EmployeeDisciplineWhereInput>;
  orderBy?: Maybe<EmployeeDisciplineOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryEmployeeDisciplineArgs = {
  where: EmployeeDisciplineWhereUniqueInput;
  stage?: Stage;
};


export type QueryEmployeeDisciplinesConnectionArgs = {
  where?: Maybe<EmployeeDisciplineWhereInput>;
  orderBy?: Maybe<EmployeeDisciplineOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryEmployeeDisciplineVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLicenseCertificationsArgs = {
  where?: Maybe<LicenseCertificationWhereInput>;
  orderBy?: Maybe<LicenseCertificationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryLicenseCertificationArgs = {
  where: LicenseCertificationWhereUniqueInput;
  stage?: Stage;
};


export type QueryLicenseCertificationsConnectionArgs = {
  where?: Maybe<LicenseCertificationWhereInput>;
  orderBy?: Maybe<LicenseCertificationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryLicenseCertificationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUserCompaniesArgs = {
  where?: Maybe<UserCompanyWhereInput>;
  orderBy?: Maybe<UserCompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryUserCompanyArgs = {
  where: UserCompanyWhereUniqueInput;
  stage?: Stage;
};


export type QueryUserCompaniesConnectionArgs = {
  where?: Maybe<UserCompanyWhereInput>;
  orderBy?: Maybe<UserCompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryUserCompanyVersionArgs = {
  where: VersionWhereInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type BranchUpdateManyInlineInput = {
  /** Create and connect multiple Branch documents */
  create?: Maybe<Array<BranchCreateInput>>;
  /** Connect multiple existing Branch documents */
  connect?: Maybe<Array<BranchConnectInput>>;
  /** Override currently-connected documents with multiple existing Branch documents */
  set?: Maybe<Array<BranchWhereUniqueInput>>;
  /** Update multiple Branch documents */
  update?: Maybe<Array<BranchUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Branch documents */
  upsert?: Maybe<Array<BranchUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Branch documents */
  disconnect?: Maybe<Array<BranchWhereUniqueInput>>;
  /** Delete multiple Branch documents */
  delete?: Maybe<Array<BranchWhereUniqueInput>>;
};

/** An edge in a connection. */
export type EmployeeEdge = {
   __typename?: 'EmployeeEdge';
  /** The item at the end of the edge. */
  node: Employee;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type EmployeeCredentialConnectInput = {
  /** Document to connect */
  where: EmployeeCredentialWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type UserCompanyUpsertInput = {
  /** Create document if it didn't exist */
  create: UserCompanyCreateInput;
  /** Update document if it exists */
  update: UserCompanyUpdateInput;
};

export type EmployeeDisciplineCreateManyInlineInput = {
  /** Create and connect multiple existing EmployeeDiscipline documents */
  create?: Maybe<Array<EmployeeDisciplineCreateInput>>;
  /** Connect multiple existing EmployeeDiscipline documents */
  connect?: Maybe<Array<EmployeeDisciplineWhereUniqueInput>>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

/** A connection to a list of items. */
export type DisciplineGroupConnection = {
   __typename?: 'DisciplineGroupConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<DisciplineGroupEdge>;
  aggregate: Aggregate;
};

export enum EmployeeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  MiddleInitialAsc = 'middleInitial_ASC',
  MiddleInitialDesc = 'middleInitial_DESC',
  MaidenNameAsc = 'maidenName_ASC',
  MaidenNameDesc = 'maidenName_DESC',
  AlsoKnownAsAsc = 'alsoKnownAs_ASC',
  AlsoKnownAsDesc = 'alsoKnownAs_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  BirthdateAsc = 'birthdate_ASC',
  BirthdateDesc = 'birthdate_DESC',
  SocialAsc = 'social_ASC',
  SocialDesc = 'social_DESC',
  SharedEmployeeAsc = 'sharedEmployee_ASC',
  SharedEmployeeDesc = 'sharedEmployee_DESC',
  OriginalHireDateAsc = 'originalHireDate_ASC',
  OriginalHireDateDesc = 'originalHireDate_DESC',
  EarningsTypeAsc = 'earningsType_ASC',
  EarningsTypeDesc = 'earningsType_DESC',
  OrientationDateAsc = 'orientationDate_ASC',
  OrientationDateDesc = 'orientationDate_DESC',
  Address1Asc = 'address1_ASC',
  Address1Desc = 'address1_DESC',
  Address2Asc = 'address2_ASC',
  Address2Desc = 'address2_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  ZipAsc = 'zip_ASC',
  ZipDesc = 'zip_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  Phone1Asc = 'phone1_ASC',
  Phone1Desc = 'phone1_DESC',
  Phone1TypeAsc = 'phone1Type_ASC',
  Phone1TypeDesc = 'phone1Type_DESC',
  Phone1ExtAsc = 'phone1Ext_ASC',
  Phone1ExtDesc = 'phone1Ext_DESC',
  Phone2Asc = 'phone2_ASC',
  Phone2Desc = 'phone2_DESC',
  Phone2TypeAsc = 'phone2Type_ASC',
  Phone2TypeDesc = 'phone2Type_DESC',
  Phone2ExtAsc = 'phone2Ext_ASC',
  Phone2ExtDesc = 'phone2Ext_DESC',
  Phone3Asc = 'phone3_ASC',
  Phone3Desc = 'phone3_DESC',
  Phone3TypeAsc = 'phone3Type_ASC',
  Phone3TypeDesc = 'phone3Type_DESC',
  Phone3ExtAsc = 'phone3Ext_ASC',
  Phone3ExtDesc = 'phone3Ext_DESC',
  OtherPhoneAsc = 'otherPhone_ASC',
  OtherPhoneDesc = 'otherPhone_DESC',
  OtherPhoneTypeAsc = 'otherPhoneType_ASC',
  OtherPhoneTypeDesc = 'otherPhoneType_DESC',
  OtherPhoneExtAsc = 'otherPhoneExt_ASC',
  OtherPhoneExtDesc = 'otherPhoneExt_DESC',
  CurrentStatusAsc = 'currentStatus_ASC',
  CurrentStatusDesc = 'currentStatus_DESC',
  FaxAsc = 'fax_ASC',
  FaxDesc = 'fax_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IsArchivedAsc = 'isArchived_ASC',
  IsArchivedDesc = 'isArchived_DESC'
}

export type EmployeeUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  maidenName?: Maybe<Scalars['String']>;
  alsoKnownAs?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['Date']>;
  social?: Maybe<Scalars['String']>;
  sharedEmployee?: Maybe<Scalars['Boolean']>;
  originalHireDate?: Maybe<Scalars['Date']>;
  earningsType?: Maybe<Scalars['String']>;
  orientationDate?: Maybe<Scalars['Date']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone1?: Maybe<Scalars['String']>;
  phone1Type?: Maybe<Scalars['String']>;
  phone1Ext?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  phone2Type?: Maybe<Scalars['String']>;
  phone2Ext?: Maybe<Scalars['String']>;
  phone3?: Maybe<Scalars['String']>;
  phone3Type?: Maybe<Scalars['String']>;
  phone3Ext?: Maybe<Scalars['String']>;
  otherPhone?: Maybe<Scalars['String']>;
  otherPhoneType?: Maybe<Scalars['String']>;
  otherPhoneExt?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
};

export type EmployeeCredentialUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: EmployeeCredentialWhereInput;
  /** Update many input */
  data: EmployeeCredentialUpdateManyInput;
};

export type EmployeeCredentialUpdateManyInlineInput = {
  /** Create and connect multiple EmployeeCredential documents */
  create?: Maybe<Array<EmployeeCredentialCreateInput>>;
  /** Connect multiple existing EmployeeCredential documents */
  connect?: Maybe<Array<EmployeeCredentialConnectInput>>;
  /** Override currently-connected documents with multiple existing EmployeeCredential documents */
  set?: Maybe<Array<EmployeeCredentialWhereUniqueInput>>;
  /** Update multiple EmployeeCredential documents */
  update?: Maybe<Array<EmployeeCredentialUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EmployeeCredential documents */
  upsert?: Maybe<Array<EmployeeCredentialUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple EmployeeCredential documents */
  disconnect?: Maybe<Array<EmployeeCredentialWhereUniqueInput>>;
  /** Delete multiple EmployeeCredential documents */
  delete?: Maybe<Array<EmployeeCredentialWhereUniqueInput>>;
};

export type Version = {
   __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   * 
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

export type DisciplineUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: DisciplineWhereInput;
  /** Update many input */
  data: DisciplineUpdateManyInput;
};

/** Identifies documents */
export type EmployeeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EmployeeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EmployeeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EmployeeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  middleInitial_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  middleInitial_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  middleInitial_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  middleInitial_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  middleInitial_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  middleInitial_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  middleInitial_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  middleInitial_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  middleInitial_not_ends_with?: Maybe<Scalars['String']>;
  maidenName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  maidenName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  maidenName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  maidenName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  maidenName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  maidenName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  maidenName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  maidenName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  maidenName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  maidenName_not_ends_with?: Maybe<Scalars['String']>;
  alsoKnownAs?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  alsoKnownAs_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  alsoKnownAs_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  alsoKnownAs_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  alsoKnownAs_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  alsoKnownAs_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  alsoKnownAs_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  alsoKnownAs_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  alsoKnownAs_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  alsoKnownAs_not_ends_with?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  gender_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gender_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  gender_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  gender_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  gender_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  gender_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  gender_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  gender_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  gender_not_ends_with?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  birthdate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  birthdate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  birthdate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  birthdate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  birthdate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  birthdate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  birthdate_gte?: Maybe<Scalars['Date']>;
  social?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  social_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  social_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  social_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  social_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  social_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  social_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  social_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  social_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  social_not_ends_with?: Maybe<Scalars['String']>;
  sharedEmployee?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  sharedEmployee_not?: Maybe<Scalars['Boolean']>;
  originalHireDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  originalHireDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  originalHireDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  originalHireDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  originalHireDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  originalHireDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  originalHireDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  originalHireDate_gte?: Maybe<Scalars['Date']>;
  earningsType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  earningsType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  earningsType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  earningsType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  earningsType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  earningsType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  earningsType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  earningsType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  earningsType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  earningsType_not_ends_with?: Maybe<Scalars['String']>;
  orientationDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  orientationDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  orientationDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  orientationDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  orientationDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  orientationDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  orientationDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  orientationDate_gte?: Maybe<Scalars['Date']>;
  address1?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address1_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address1_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address1_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address1_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address1_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address1_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address1_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address1_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address1_not_ends_with?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address2_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address2_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address2_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address2_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address2_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address2_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address2_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address2_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address2_not_ends_with?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  city_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  state_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  state_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  state_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  state_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  state_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  state_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  state_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  state_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  state_not_ends_with?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  zip_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zip_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  zip_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  zip_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  zip_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  zip_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  zip_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  zip_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  zip_not_ends_with?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  country_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  country_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  country_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  country_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  country_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  country_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  country_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  country_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  country_not_ends_with?: Maybe<Scalars['String']>;
  phone1?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone1_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone1_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone1_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone1_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone1_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone1_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone1_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone1_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone1_not_ends_with?: Maybe<Scalars['String']>;
  phone1Type?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone1Type_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone1Type_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone1Type_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone1Type_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone1Type_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone1Type_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone1Type_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone1Type_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone1Type_not_ends_with?: Maybe<Scalars['String']>;
  phone1Ext?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone1Ext_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone1Ext_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone1Ext_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone1Ext_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone1Ext_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone1Ext_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone1Ext_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone1Ext_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone1Ext_not_ends_with?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone2_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone2_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone2_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone2_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone2_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone2_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone2_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone2_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone2_not_ends_with?: Maybe<Scalars['String']>;
  phone2Type?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone2Type_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone2Type_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone2Type_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone2Type_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone2Type_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone2Type_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone2Type_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone2Type_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone2Type_not_ends_with?: Maybe<Scalars['String']>;
  phone2Ext?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone2Ext_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone2Ext_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone2Ext_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone2Ext_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone2Ext_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone2Ext_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone2Ext_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone2Ext_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone2Ext_not_ends_with?: Maybe<Scalars['String']>;
  phone3?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone3_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone3_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone3_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone3_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone3_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone3_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone3_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone3_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone3_not_ends_with?: Maybe<Scalars['String']>;
  phone3Type?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone3Type_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone3Type_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone3Type_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone3Type_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone3Type_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone3Type_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone3Type_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone3Type_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone3Type_not_ends_with?: Maybe<Scalars['String']>;
  phone3Ext?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone3Ext_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone3Ext_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone3Ext_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone3Ext_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone3Ext_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone3Ext_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone3Ext_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone3Ext_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone3Ext_not_ends_with?: Maybe<Scalars['String']>;
  otherPhone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  otherPhone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  otherPhone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  otherPhone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  otherPhone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  otherPhone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  otherPhone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  otherPhone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  otherPhone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  otherPhone_not_ends_with?: Maybe<Scalars['String']>;
  otherPhoneType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  otherPhoneType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  otherPhoneType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  otherPhoneType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  otherPhoneType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  otherPhoneType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  otherPhoneType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  otherPhoneType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  otherPhoneType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  otherPhoneType_not_ends_with?: Maybe<Scalars['String']>;
  otherPhoneExt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  otherPhoneExt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  otherPhoneExt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  otherPhoneExt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  otherPhoneExt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  otherPhoneExt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  otherPhoneExt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  otherPhoneExt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  otherPhoneExt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  otherPhoneExt_not_ends_with?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  currentStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  currentStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  currentStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  currentStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  currentStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  currentStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  currentStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  currentStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  currentStatus_not_ends_with?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fax_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fax_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fax_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fax_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fax_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fax_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fax_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fax_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fax_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isArchived_not?: Maybe<Scalars['Boolean']>;
  branch?: Maybe<BranchWhereInput>;
  company?: Maybe<CompanyWhereInput>;
  images?: Maybe<AssetWhereInput>;
  employeeDiscipline_every?: Maybe<EmployeeDisciplineWhereInput>;
  employeeDiscipline_some?: Maybe<EmployeeDisciplineWhereInput>;
  employeeDiscipline_none?: Maybe<EmployeeDisciplineWhereInput>;
  authorizedPersonnel_every?: Maybe<AuthorizedPersonnelWhereInput>;
  authorizedPersonnel_some?: Maybe<AuthorizedPersonnelWhereInput>;
  authorizedPersonnel_none?: Maybe<AuthorizedPersonnelWhereInput>;
  employeeCredential_every?: Maybe<EmployeeCredentialWhereInput>;
  employeeCredential_some?: Maybe<EmployeeCredentialWhereInput>;
  employeeCredential_none?: Maybe<EmployeeCredentialWhereInput>;
};

export type LicenseCertificationUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: LicenseCertificationWhereUniqueInput;
  /** Document to update */
  data: LicenseCertificationUpdateInput;
};

export type UserCompanyUpdateManyInlineInput = {
  /** Create and connect multiple UserCompany documents */
  create?: Maybe<Array<UserCompanyCreateInput>>;
  /** Connect multiple existing UserCompany documents */
  connect?: Maybe<Array<UserCompanyConnectInput>>;
  /** Override currently-connected documents with multiple existing UserCompany documents */
  set?: Maybe<Array<UserCompanyWhereUniqueInput>>;
  /** Update multiple UserCompany documents */
  update?: Maybe<Array<UserCompanyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple UserCompany documents */
  upsert?: Maybe<Array<UserCompanyUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple UserCompany documents */
  disconnect?: Maybe<Array<UserCompanyWhereUniqueInput>>;
  /** Delete multiple UserCompany documents */
  delete?: Maybe<Array<UserCompanyWhereUniqueInput>>;
};

export enum DisciplineOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  AbbreviationAsc = 'abbreviation_ASC',
  AbbreviationDesc = 'abbreviation_DESC',
  SecurityLevelAsc = 'securityLevel_ASC',
  SecurityLevelDesc = 'securityLevel_DESC'
}

/** Identifies documents */
export type EmployeeCredentialManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EmployeeCredentialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EmployeeCredentialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EmployeeCredentialWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  licenseCertification?: Maybe<LicenseCertificationWhereInput>;
  licenseCertificationNumber?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  licenseCertificationNumber_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  licenseCertificationNumber_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  licenseCertificationNumber_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  licenseCertificationNumber_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  licenseCertificationNumber_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  licenseCertificationNumber_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  licenseCertificationNumber_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  licenseCertificationNumber_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  licenseCertificationNumber_not_ends_with?: Maybe<Scalars['String']>;
  homeCareRegistryNumber?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  homeCareRegistryNumber_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  homeCareRegistryNumber_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  homeCareRegistryNumber_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  homeCareRegistryNumber_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  homeCareRegistryNumber_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  homeCareRegistryNumber_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  homeCareRegistryNumber_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  homeCareRegistryNumber_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  homeCareRegistryNumber_not_ends_with?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  issueDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  issueDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  issueDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  issueDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  issueDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  issueDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  issueDate_gte?: Maybe<Scalars['Date']>;
  expirationDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  expirationDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  expirationDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  expirationDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  expirationDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  expirationDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  expirationDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  expirationDate_gte?: Maybe<Scalars['Date']>;
  institutionProvidingCredential?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  institutionProvidingCredential_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  institutionProvidingCredential_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  institutionProvidingCredential_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  institutionProvidingCredential_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  institutionProvidingCredential_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  institutionProvidingCredential_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  institutionProvidingCredential_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  institutionProvidingCredential_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  institutionProvidingCredential_not_ends_with?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  comment_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  comment_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  comment_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  comment_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  comment_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  comment_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  comment_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  comment_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  comment_not_ends_with?: Maybe<Scalars['String']>;
  verifiedBy?: Maybe<AuthorizedPersonnelWhereInput>;
  employee?: Maybe<EmployeeWhereInput>;
  images?: Maybe<AssetWhereInput>;
};

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type DisciplineGroupCreateOneInlineInput = {
  /** Create and connect one DisciplineGroup document */
  create?: Maybe<DisciplineGroupCreateInput>;
  /** Connect one existing DisciplineGroup document */
  connect?: Maybe<DisciplineGroupWhereUniqueInput>;
};

export type UserCompanyUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  companyLogo_every?: Maybe<CompanyWhereInput>;
  companyLogo_some?: Maybe<CompanyWhereInput>;
  companyLogo_none?: Maybe<CompanyWhereInput>;
  employeeImages_every?: Maybe<EmployeeWhereInput>;
  employeeImages_some?: Maybe<EmployeeWhereInput>;
  employeeImages_none?: Maybe<EmployeeWhereInput>;
  employeeCredentialImages_every?: Maybe<EmployeeCredentialWhereInput>;
  employeeCredentialImages_some?: Maybe<EmployeeCredentialWhereInput>;
  employeeCredentialImages_none?: Maybe<EmployeeCredentialWhereInput>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
   __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

export type DocumentVersion = {
   __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export type CompanyUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CompanyWhereUniqueInput;
  /** Document to update */
  data: CompanyUpdateInput;
};

export type CompanyCreateManyInlineInput = {
  /** Create and connect multiple existing Company documents */
  create?: Maybe<Array<CompanyCreateInput>>;
  /** Connect multiple existing Company documents */
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
};

export type DisciplineUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: DisciplineWhereUniqueInput;
  /** Upsert data */
  data: DisciplineUpsertInput;
};

export type EmployeeCredentialUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EmployeeCredentialWhereUniqueInput;
  /** Document to update */
  data: EmployeeCredentialUpdateInput;
};

export type EmployeeCredentialCreateOneInlineInput = {
  /** Create and connect one EmployeeCredential document */
  create?: Maybe<EmployeeCredentialCreateInput>;
  /** Connect one existing EmployeeCredential document */
  connect?: Maybe<EmployeeCredentialWhereUniqueInput>;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

/** A connection to a list of items. */
export type DisciplineConnection = {
   __typename?: 'DisciplineConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<DisciplineEdge>;
  aggregate: Aggregate;
};

export type EmployeeCredentialCreateManyInlineInput = {
  /** Create and connect multiple existing EmployeeCredential documents */
  create?: Maybe<Array<EmployeeCredentialCreateInput>>;
  /** Connect multiple existing EmployeeCredential documents */
  connect?: Maybe<Array<EmployeeCredentialWhereUniqueInput>>;
};

export type UserCompanyUpdateInput = {
  user?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyUpdateOneInlineInput>;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  companyLogo?: Maybe<CompanyCreateManyInlineInput>;
  employeeImages?: Maybe<EmployeeCreateManyInlineInput>;
  employeeCredentialImages?: Maybe<EmployeeCredentialCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

/** Identifies documents */
export type AuthorizedPersonnelManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AuthorizedPersonnelWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AuthorizedPersonnelWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AuthorizedPersonnelWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  employeeCredential_every?: Maybe<EmployeeCredentialWhereInput>;
  employeeCredential_some?: Maybe<EmployeeCredentialWhereInput>;
  employeeCredential_none?: Maybe<EmployeeCredentialWhereInput>;
  company?: Maybe<CompanyWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  canVerify?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  canVerify_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  canVerify_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  canVerify_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  canVerify_contains_none?: Maybe<Array<Scalars['String']>>;
  employee?: Maybe<EmployeeWhereInput>;
};

/** References AuthorizedPersonnel record uniquely */
export type AuthorizedPersonnelWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CompanyUpsertInput = {
  /** Create document if it didn't exist */
  create: CompanyCreateInput;
  /** Update document if it exists */
  update: CompanyUpdateInput;
};

/** References DisciplineGroup record uniquely */
export type DisciplineGroupWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type EmployeeCredentialUpdateOneInlineInput = {
  /** Create and connect one EmployeeCredential document */
  create?: Maybe<EmployeeCredentialCreateInput>;
  /** Update single EmployeeCredential document */
  update?: Maybe<EmployeeCredentialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EmployeeCredential document */
  upsert?: Maybe<EmployeeCredentialUpsertWithNestedWhereUniqueInput>;
  /** Connect existing EmployeeCredential document */
  connect?: Maybe<EmployeeCredentialWhereUniqueInput>;
  /** Disconnect currently connected EmployeeCredential document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected EmployeeCredential document */
  delete?: Maybe<Scalars['Boolean']>;
};

/** Asset system model */
export type Asset = Node & {
   __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  companyLogo: Array<Company>;
  employeeImages: Array<Employee>;
  employeeCredentialImages: Array<EmployeeCredential>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCompanyLogoArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type AssetEmployeeImagesArgs = {
  where?: Maybe<EmployeeWhereInput>;
  orderBy?: Maybe<EmployeeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type AssetEmployeeCredentialImagesArgs = {
  where?: Maybe<EmployeeCredentialWhereInput>;
  orderBy?: Maybe<EmployeeCredentialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type DisciplineCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  securityLevel?: Maybe<Scalars['Int']>;
  employeeDiscipline?: Maybe<EmployeeDisciplineCreateManyInlineInput>;
  disciplineGroup?: Maybe<DisciplineGroupCreateManyInlineInput>;
  company?: Maybe<CompanyCreateOneInlineInput>;
  licenseCertification?: Maybe<LicenseCertificationCreateManyInlineInput>;
};

export type LicenseCertificationConnectInput = {
  /** Document to connect */
  where: LicenseCertificationWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type DisciplineGroup = Node & {
   __typename?: 'DisciplineGroup';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<DisciplineGroup>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  allowOverlap?: Maybe<Scalars['Boolean']>;
  employeeDiscipline: Array<EmployeeDiscipline>;
  disciplines: Array<Discipline>;
  company?: Maybe<Company>;
  /** List of DisciplineGroup versions */
  history: Array<Version>;
};


export type DisciplineGroupDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type DisciplineGroupEmployeeDisciplineArgs = {
  where?: Maybe<EmployeeDisciplineWhereInput>;
  orderBy?: Maybe<EmployeeDisciplineOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type DisciplineGroupDisciplinesArgs = {
  where?: Maybe<DisciplineWhereInput>;
  orderBy?: Maybe<DisciplineOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type DisciplineGroupHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type EmployeeUpdateOneInlineInput = {
  /** Create and connect one Employee document */
  create?: Maybe<EmployeeCreateInput>;
  /** Update single Employee document */
  update?: Maybe<EmployeeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Employee document */
  upsert?: Maybe<EmployeeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Employee document */
  connect?: Maybe<EmployeeWhereUniqueInput>;
  /** Disconnect currently connected Employee document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Employee document */
  delete?: Maybe<Scalars['Boolean']>;
};

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export type DisciplineUpsertInput = {
  /** Create document if it didn't exist */
  create: DisciplineCreateInput;
  /** Update document if it exists */
  update: DisciplineUpdateInput;
};

/** Identifies documents */
export type EmployeeDisciplineManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EmployeeDisciplineWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EmployeeDisciplineWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EmployeeDisciplineWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  employee?: Maybe<EmployeeWhereInput>;
  disciplineGroup?: Maybe<DisciplineGroupWhereInput>;
  discipline?: Maybe<DisciplineWhereInput>;
  startDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  endDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['Date']>;
};

export type LicenseCertificationUpdateInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  requirement?: Maybe<Scalars['String']>;
  validateDoh?: Maybe<Scalars['Boolean']>;
  disciplines?: Maybe<DisciplineUpdateManyInlineInput>;
  employeeCredential?: Maybe<EmployeeCredentialUpdateOneInlineInput>;
  company?: Maybe<CompanyUpdateOneInlineInput>;
};

export type DisciplineGroupUpdateOneInlineInput = {
  /** Create and connect one DisciplineGroup document */
  create?: Maybe<DisciplineGroupCreateInput>;
  /** Update single DisciplineGroup document */
  update?: Maybe<DisciplineGroupUpdateWithNestedWhereUniqueInput>;
  /** Upsert single DisciplineGroup document */
  upsert?: Maybe<DisciplineGroupUpsertWithNestedWhereUniqueInput>;
  /** Connect existing DisciplineGroup document */
  connect?: Maybe<DisciplineGroupWhereUniqueInput>;
  /** Disconnect currently connected DisciplineGroup document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected DisciplineGroup document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type EmployeeDisciplineUpdateOneInlineInput = {
  /** Create and connect one EmployeeDiscipline document */
  create?: Maybe<EmployeeDisciplineCreateInput>;
  /** Update single EmployeeDiscipline document */
  update?: Maybe<EmployeeDisciplineUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EmployeeDiscipline document */
  upsert?: Maybe<EmployeeDisciplineUpsertWithNestedWhereUniqueInput>;
  /** Connect existing EmployeeDiscipline document */
  connect?: Maybe<EmployeeDisciplineWhereUniqueInput>;
  /** Disconnect currently connected EmployeeDiscipline document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected EmployeeDiscipline document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type BranchEdge = {
   __typename?: 'BranchEdge';
  /** The item at the end of the edge. */
  node: Branch;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type CompanyCreateOneInlineInput = {
  /** Create and connect one Company document */
  create?: Maybe<CompanyCreateInput>;
  /** Connect one existing Company document */
  connect?: Maybe<CompanyWhereUniqueInput>;
};

export type DisciplineGroupUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: DisciplineGroupWhereUniqueInput;
  /** Upsert data */
  data: DisciplineGroupUpsertInput;
};

export type LicenseCertificationUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: LicenseCertificationWhereUniqueInput;
  /** Upsert data */
  data: LicenseCertificationUpsertInput;
};

export type UserCompany = Node & {
   __typename?: 'UserCompany';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<UserCompany>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  /** List of UserCompany versions */
  history: Array<Version>;
};


export type UserCompanyDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type UserCompanyHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type BranchCreateOneInlineInput = {
  /** Create and connect one Branch document */
  create?: Maybe<BranchCreateInput>;
  /** Connect one existing Branch document */
  connect?: Maybe<BranchWhereUniqueInput>;
};

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DisciplineUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: DisciplineWhereUniqueInput;
  /** Document to update */
  data: DisciplineUpdateInput;
};

export type EmployeeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EmployeeWhereUniqueInput;
  /** Upsert data */
  data: EmployeeUpsertInput;
};

export type UserCompanyCreateManyInlineInput = {
  /** Create and connect multiple existing UserCompany documents */
  create?: Maybe<Array<UserCompanyCreateInput>>;
  /** Connect multiple existing UserCompany documents */
  connect?: Maybe<Array<UserCompanyWhereUniqueInput>>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
   __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

/** Identifies documents */
export type DisciplineWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DisciplineWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DisciplineWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DisciplineWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  abbreviation_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abbreviation_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  abbreviation_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  abbreviation_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  abbreviation_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  abbreviation_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  abbreviation_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  abbreviation_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  abbreviation_not_ends_with?: Maybe<Scalars['String']>;
  securityLevel?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  securityLevel_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  securityLevel_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  securityLevel_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  securityLevel_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  securityLevel_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  securityLevel_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  securityLevel_gte?: Maybe<Scalars['Int']>;
  employeeDiscipline_every?: Maybe<EmployeeDisciplineWhereInput>;
  employeeDiscipline_some?: Maybe<EmployeeDisciplineWhereInput>;
  employeeDiscipline_none?: Maybe<EmployeeDisciplineWhereInput>;
  disciplineGroup_every?: Maybe<DisciplineGroupWhereInput>;
  disciplineGroup_some?: Maybe<DisciplineGroupWhereInput>;
  disciplineGroup_none?: Maybe<DisciplineGroupWhereInput>;
  company?: Maybe<CompanyWhereInput>;
  licenseCertification_every?: Maybe<LicenseCertificationWhereInput>;
  licenseCertification_some?: Maybe<LicenseCertificationWhereInput>;
  licenseCertification_none?: Maybe<LicenseCertificationWhereInput>;
};

export enum EmployeeCredentialOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  LicenseCertificationNumberAsc = 'licenseCertificationNumber_ASC',
  LicenseCertificationNumberDesc = 'licenseCertificationNumber_DESC',
  HomeCareRegistryNumberAsc = 'homeCareRegistryNumber_ASC',
  HomeCareRegistryNumberDesc = 'homeCareRegistryNumber_DESC',
  IssueDateAsc = 'issueDate_ASC',
  IssueDateDesc = 'issueDate_DESC',
  ExpirationDateAsc = 'expirationDate_ASC',
  ExpirationDateDesc = 'expirationDate_DESC',
  InstitutionProvidingCredentialAsc = 'institutionProvidingCredential_ASC',
  InstitutionProvidingCredentialDesc = 'institutionProvidingCredential_DESC',
  CommentAsc = 'comment_ASC',
  CommentDesc = 'comment_DESC'
}

export type CompanyConnectInput = {
  /** Document to connect */
  where: CompanyWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type DisciplineUpdateInput = {
  name?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  securityLevel?: Maybe<Scalars['Int']>;
  employeeDiscipline?: Maybe<EmployeeDisciplineUpdateManyInlineInput>;
  disciplineGroup?: Maybe<DisciplineGroupUpdateManyInlineInput>;
  company?: Maybe<CompanyUpdateOneInlineInput>;
  licenseCertification?: Maybe<LicenseCertificationUpdateManyInlineInput>;
};

export type DisciplineGroupUpdateManyInlineInput = {
  /** Create and connect multiple DisciplineGroup documents */
  create?: Maybe<Array<DisciplineGroupCreateInput>>;
  /** Connect multiple existing DisciplineGroup documents */
  connect?: Maybe<Array<DisciplineGroupConnectInput>>;
  /** Override currently-connected documents with multiple existing DisciplineGroup documents */
  set?: Maybe<Array<DisciplineGroupWhereUniqueInput>>;
  /** Update multiple DisciplineGroup documents */
  update?: Maybe<Array<DisciplineGroupUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple DisciplineGroup documents */
  upsert?: Maybe<Array<DisciplineGroupUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple DisciplineGroup documents */
  disconnect?: Maybe<Array<DisciplineGroupWhereUniqueInput>>;
  /** Delete multiple DisciplineGroup documents */
  delete?: Maybe<Array<DisciplineGroupWhereUniqueInput>>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  companyLogo_every?: Maybe<CompanyWhereInput>;
  companyLogo_some?: Maybe<CompanyWhereInput>;
  companyLogo_none?: Maybe<CompanyWhereInput>;
  employeeImages_every?: Maybe<EmployeeWhereInput>;
  employeeImages_some?: Maybe<EmployeeWhereInput>;
  employeeImages_none?: Maybe<EmployeeWhereInput>;
  employeeCredentialImages_every?: Maybe<EmployeeCredentialWhereInput>;
  employeeCredentialImages_some?: Maybe<EmployeeCredentialWhereInput>;
  employeeCredentialImages_none?: Maybe<EmployeeCredentialWhereInput>;
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

export type BranchConnectInput = {
  /** Document to connect */
  where: BranchWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type BranchUpdateOneInlineInput = {
  /** Create and connect one Branch document */
  create?: Maybe<BranchCreateInput>;
  /** Update single Branch document */
  update?: Maybe<BranchUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Branch document */
  upsert?: Maybe<BranchUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Branch document */
  connect?: Maybe<BranchWhereUniqueInput>;
  /** Disconnect currently connected Branch document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Branch document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type EmployeeUpsertInput = {
  /** Create document if it didn't exist */
  create: EmployeeCreateInput;
  /** Update document if it exists */
  update: EmployeeUpdateInput;
};

/** An edge in a connection. */
export type LicenseCertificationEdge = {
   __typename?: 'LicenseCertificationEdge';
  /** The item at the end of the edge. */
  node: LicenseCertification;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type DisciplineManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DisciplineWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DisciplineWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DisciplineWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  abbreviation_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abbreviation_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  abbreviation_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  abbreviation_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  abbreviation_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  abbreviation_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  abbreviation_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  abbreviation_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  abbreviation_not_ends_with?: Maybe<Scalars['String']>;
  securityLevel?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  securityLevel_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  securityLevel_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  securityLevel_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  securityLevel_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  securityLevel_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  securityLevel_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  securityLevel_gte?: Maybe<Scalars['Int']>;
  employeeDiscipline_every?: Maybe<EmployeeDisciplineWhereInput>;
  employeeDiscipline_some?: Maybe<EmployeeDisciplineWhereInput>;
  employeeDiscipline_none?: Maybe<EmployeeDisciplineWhereInput>;
  disciplineGroup_every?: Maybe<DisciplineGroupWhereInput>;
  disciplineGroup_some?: Maybe<DisciplineGroupWhereInput>;
  disciplineGroup_none?: Maybe<DisciplineGroupWhereInput>;
  company?: Maybe<CompanyWhereInput>;
  licenseCertification_every?: Maybe<LicenseCertificationWhereInput>;
  licenseCertification_some?: Maybe<LicenseCertificationWhereInput>;
  licenseCertification_none?: Maybe<LicenseCertificationWhereInput>;
};

export type EmployeeCredentialUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EmployeeCredentialWhereUniqueInput;
  /** Upsert data */
  data: EmployeeCredentialUpsertInput;
};

export type EmployeeDisciplineUpsertInput = {
  /** Create document if it didn't exist */
  create: EmployeeDisciplineCreateInput;
  /** Update document if it exists */
  update: EmployeeDisciplineUpdateInput;
};

export type LicenseCertification = Node & {
   __typename?: 'LicenseCertification';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<LicenseCertification>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  /** Certification or License */
  type?: Maybe<Scalars['String']>;
  /** Required, Optional if another exists, Optional */
  requirement?: Maybe<Scalars['String']>;
  validateDoh?: Maybe<Scalars['Boolean']>;
  disciplines: Array<Discipline>;
  employeeCredential?: Maybe<EmployeeCredential>;
  company?: Maybe<Company>;
  /** List of LicenseCertification versions */
  history: Array<Version>;
};


export type LicenseCertificationDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type LicenseCertificationDisciplinesArgs = {
  where?: Maybe<DisciplineWhereInput>;
  orderBy?: Maybe<DisciplineOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type LicenseCertificationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type UserCompanyUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: UserCompanyWhereInput;
  /** Update many input */
  data: UserCompanyUpdateManyInput;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};

export enum DisciplineGroupOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IsAdminAsc = 'isAdmin_ASC',
  IsAdminDesc = 'isAdmin_DESC',
  AllowOverlapAsc = 'allowOverlap_ASC',
  AllowOverlapDesc = 'allowOverlap_DESC'
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

/** An edge in a connection. */
export type AuthorizedPersonnelEdge = {
   __typename?: 'AuthorizedPersonnelEdge';
  /** The item at the end of the edge. */
  node: AuthorizedPersonnel;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type AuthorizedPersonnelConnectInput = {
  /** Document to connect */
  where: AuthorizedPersonnelWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type AuthorizedPersonnelCreateManyInlineInput = {
  /** Create and connect multiple existing AuthorizedPersonnel documents */
  create?: Maybe<Array<AuthorizedPersonnelCreateInput>>;
  /** Connect multiple existing AuthorizedPersonnel documents */
  connect?: Maybe<Array<AuthorizedPersonnelWhereUniqueInput>>;
};

export type EmployeeDisciplineUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
};


/** A connection to a list of items. */
export type CompanyConnection = {
   __typename?: 'CompanyConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<CompanyEdge>;
  aggregate: Aggregate;
};

export type LicenseCertificationUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  requirement?: Maybe<Scalars['String']>;
  validateDoh?: Maybe<Scalars['Boolean']>;
};


export type BranchUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: BranchWhereInput;
  /** Update many input */
  data: BranchUpdateManyInput;
};

export enum LicenseCertificationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  RequirementAsc = 'requirement_ASC',
  RequirementDesc = 'requirement_DESC',
  ValidateDohAsc = 'validateDoh_ASC',
  ValidateDohDesc = 'validateDoh_DESC'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type DisciplineUpdateManyInlineInput = {
  /** Create and connect multiple Discipline documents */
  create?: Maybe<Array<DisciplineCreateInput>>;
  /** Connect multiple existing Discipline documents */
  connect?: Maybe<Array<DisciplineConnectInput>>;
  /** Override currently-connected documents with multiple existing Discipline documents */
  set?: Maybe<Array<DisciplineWhereUniqueInput>>;
  /** Update multiple Discipline documents */
  update?: Maybe<Array<DisciplineUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Discipline documents */
  upsert?: Maybe<Array<DisciplineUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Discipline documents */
  disconnect?: Maybe<Array<DisciplineWhereUniqueInput>>;
  /** Delete multiple Discipline documents */
  delete?: Maybe<Array<DisciplineWhereUniqueInput>>;
};

export type EmployeeDiscipline = Node & {
   __typename?: 'EmployeeDiscipline';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<EmployeeDiscipline>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  employee?: Maybe<Employee>;
  disciplineGroup?: Maybe<DisciplineGroup>;
  discipline?: Maybe<Discipline>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  /** List of EmployeeDiscipline versions */
  history: Array<Version>;
};


export type EmployeeDisciplineDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type EmployeeDisciplineHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type Branch = Node & {
   __typename?: 'Branch';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Branch>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  branchName?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  branchCode?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  zipExt?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneExt?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  contactPhoneExt?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  hasNoClients?: Maybe<Scalars['Boolean']>;
  company?: Maybe<Company>;
  employee: Array<Employee>;
  /** List of Branch versions */
  history: Array<Version>;
};


export type BranchDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type BranchEmployeeArgs = {
  where?: Maybe<EmployeeWhereInput>;
  orderBy?: Maybe<EmployeeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BranchHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type CompanyUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CompanyWhereInput;
  /** Update many input */
  data: CompanyUpdateManyInput;
};

/** An edge in a connection. */
export type DisciplineGroupEdge = {
   __typename?: 'DisciplineGroupEdge';
  /** The item at the end of the edge. */
  node: DisciplineGroup;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** References EmployeeCredential record uniquely */
export type EmployeeCredentialWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type LicenseCertificationCreateManyInlineInput = {
  /** Create and connect multiple existing LicenseCertification documents */
  create?: Maybe<Array<LicenseCertificationCreateInput>>;
  /** Connect multiple existing LicenseCertification documents */
  connect?: Maybe<Array<LicenseCertificationWhereUniqueInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AuthorizedPersonnelUpdateOneInlineInput = {
  /** Create and connect one AuthorizedPersonnel document */
  create?: Maybe<AuthorizedPersonnelCreateInput>;
  /** Update single AuthorizedPersonnel document */
  update?: Maybe<AuthorizedPersonnelUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AuthorizedPersonnel document */
  upsert?: Maybe<AuthorizedPersonnelUpsertWithNestedWhereUniqueInput>;
  /** Connect existing AuthorizedPersonnel document */
  connect?: Maybe<AuthorizedPersonnelWhereUniqueInput>;
  /** Disconnect currently connected AuthorizedPersonnel document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected AuthorizedPersonnel document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type CompanyUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  legalBusinessName?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  doingBusinessAs?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  companyCode?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  nationalProviderIdentifier?: Maybe<Scalars['String']>;
  businessType?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  zipExt?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  contactExt?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type UserCompanyConnection = {
   __typename?: 'UserCompanyConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserCompanyEdge>;
  aggregate: Aggregate;
};

export type EmployeeCredentialUpsertInput = {
  /** Create document if it didn't exist */
  create: EmployeeCredentialCreateInput;
  /** Update document if it exists */
  update: EmployeeCredentialUpdateInput;
};

/** A connection to a list of items. */
export type EmployeeDisciplineConnection = {
   __typename?: 'EmployeeDisciplineConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<EmployeeDisciplineEdge>;
  aggregate: Aggregate;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type DisciplineConnectInput = {
  /** Document to connect */
  where: DisciplineWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type DisciplineGroupUpdateInput = {
  name?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  allowOverlap?: Maybe<Scalars['Boolean']>;
  employeeDiscipline?: Maybe<EmployeeDisciplineUpdateManyInlineInput>;
  disciplines?: Maybe<DisciplineUpdateManyInlineInput>;
  company?: Maybe<CompanyUpdateOneInlineInput>;
};

/** A connection to a list of items. */
export type EmployeeConnection = {
   __typename?: 'EmployeeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<EmployeeEdge>;
  aggregate: Aggregate;
};

export type EmployeeCredentialCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  licenseCertification?: Maybe<LicenseCertificationCreateOneInlineInput>;
  licenseCertificationNumber?: Maybe<Scalars['String']>;
  homeCareRegistryNumber?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Scalars['Date']>;
  expirationDate?: Maybe<Scalars['Date']>;
  institutionProvidingCredential?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  verifiedBy?: Maybe<AuthorizedPersonnelCreateOneInlineInput>;
  employee?: Maybe<EmployeeCreateOneInlineInput>;
  images?: Maybe<AssetCreateOneInlineInput>;
};


export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export enum AuthorizedPersonnelOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  CanVerifyAsc = 'canVerify_ASC',
  CanVerifyDesc = 'canVerify_DESC'
}

export type EmployeeCredentialUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  licenseCertificationNumber?: Maybe<Scalars['String']>;
  homeCareRegistryNumber?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Scalars['Date']>;
  expirationDate?: Maybe<Scalars['Date']>;
  institutionProvidingCredential?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type UserCompanyUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: UserCompanyWhereUniqueInput;
  /** Upsert data */
  data: UserCompanyUpsertInput;
};


export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** References Employee record uniquely */
export type EmployeeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type AuthorizedPersonnelUpsertInput = {
  /** Create document if it didn't exist */
  create: AuthorizedPersonnelCreateInput;
  /** Update document if it exists */
  update: AuthorizedPersonnelUpdateInput;
};

export type LicenseCertificationUpdateManyInlineInput = {
  /** Create and connect multiple LicenseCertification documents */
  create?: Maybe<Array<LicenseCertificationCreateInput>>;
  /** Connect multiple existing LicenseCertification documents */
  connect?: Maybe<Array<LicenseCertificationConnectInput>>;
  /** Override currently-connected documents with multiple existing LicenseCertification documents */
  set?: Maybe<Array<LicenseCertificationWhereUniqueInput>>;
  /** Update multiple LicenseCertification documents */
  update?: Maybe<Array<LicenseCertificationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LicenseCertification documents */
  upsert?: Maybe<Array<LicenseCertificationUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple LicenseCertification documents */
  disconnect?: Maybe<Array<LicenseCertificationWhereUniqueInput>>;
  /** Delete multiple LicenseCertification documents */
  delete?: Maybe<Array<LicenseCertificationWhereUniqueInput>>;
};

/** Identifies documents */
export type UserCompanyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserCompanyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserCompanyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserCompanyWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  user_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  user_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  user_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  user_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  user_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  user_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  user_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  user_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  user_not_ends_with?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyWhereInput>;
};

export type AuthorizedPersonnelUpdateManyInlineInput = {
  /** Create and connect multiple AuthorizedPersonnel documents */
  create?: Maybe<Array<AuthorizedPersonnelCreateInput>>;
  /** Connect multiple existing AuthorizedPersonnel documents */
  connect?: Maybe<Array<AuthorizedPersonnelConnectInput>>;
  /** Override currently-connected documents with multiple existing AuthorizedPersonnel documents */
  set?: Maybe<Array<AuthorizedPersonnelWhereUniqueInput>>;
  /** Update multiple AuthorizedPersonnel documents */
  update?: Maybe<Array<AuthorizedPersonnelUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AuthorizedPersonnel documents */
  upsert?: Maybe<Array<AuthorizedPersonnelUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple AuthorizedPersonnel documents */
  disconnect?: Maybe<Array<AuthorizedPersonnelWhereUniqueInput>>;
  /** Delete multiple AuthorizedPersonnel documents */
  delete?: Maybe<Array<AuthorizedPersonnelWhereUniqueInput>>;
};

export type CompanyUpdateManyInlineInput = {
  /** Create and connect multiple Company documents */
  create?: Maybe<Array<CompanyCreateInput>>;
  /** Connect multiple existing Company documents */
  connect?: Maybe<Array<CompanyConnectInput>>;
  /** Override currently-connected documents with multiple existing Company documents */
  set?: Maybe<Array<CompanyWhereUniqueInput>>;
  /** Update multiple Company documents */
  update?: Maybe<Array<CompanyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Company documents */
  upsert?: Maybe<Array<CompanyUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Company documents */
  disconnect?: Maybe<Array<CompanyWhereUniqueInput>>;
  /** Delete multiple Company documents */
  delete?: Maybe<Array<CompanyWhereUniqueInput>>;
};

export type DisciplineCreateManyInlineInput = {
  /** Create and connect multiple existing Discipline documents */
  create?: Maybe<Array<DisciplineCreateInput>>;
  /** Connect multiple existing Discipline documents */
  connect?: Maybe<Array<DisciplineWhereUniqueInput>>;
};

export type Employee = Node & {
   __typename?: 'Employee';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Employee>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  maidenName?: Maybe<Scalars['String']>;
  alsoKnownAs?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['Date']>;
  social?: Maybe<Scalars['String']>;
  sharedEmployee?: Maybe<Scalars['Boolean']>;
  originalHireDate?: Maybe<Scalars['Date']>;
  earningsType?: Maybe<Scalars['String']>;
  orientationDate?: Maybe<Scalars['Date']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone1?: Maybe<Scalars['String']>;
  phone1Type?: Maybe<Scalars['String']>;
  phone1Ext?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  phone2Type?: Maybe<Scalars['String']>;
  phone2Ext?: Maybe<Scalars['String']>;
  phone3?: Maybe<Scalars['String']>;
  phone3Type?: Maybe<Scalars['String']>;
  phone3Ext?: Maybe<Scalars['String']>;
  otherPhone?: Maybe<Scalars['String']>;
  otherPhoneType?: Maybe<Scalars['String']>;
  otherPhoneExt?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  branch?: Maybe<Branch>;
  company?: Maybe<Company>;
  images?: Maybe<Asset>;
  employeeDiscipline: Array<EmployeeDiscipline>;
  authorizedPersonnel: Array<AuthorizedPersonnel>;
  employeeCredential: Array<EmployeeCredential>;
  /** List of Employee versions */
  history: Array<Version>;
};


export type EmployeeDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type EmployeeEmployeeDisciplineArgs = {
  where?: Maybe<EmployeeDisciplineWhereInput>;
  orderBy?: Maybe<EmployeeDisciplineOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EmployeeAuthorizedPersonnelArgs = {
  where?: Maybe<AuthorizedPersonnelWhereInput>;
  orderBy?: Maybe<AuthorizedPersonnelOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EmployeeEmployeeCredentialArgs = {
  where?: Maybe<EmployeeCredentialWhereInput>;
  orderBy?: Maybe<EmployeeCredentialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EmployeeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type EmployeeCreateOneInlineInput = {
  /** Create and connect one Employee document */
  create?: Maybe<EmployeeCreateInput>;
  /** Connect one existing Employee document */
  connect?: Maybe<EmployeeWhereUniqueInput>;
};

/** Identifies documents */
export type EmployeeDisciplineWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EmployeeDisciplineWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EmployeeDisciplineWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EmployeeDisciplineWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  employee?: Maybe<EmployeeWhereInput>;
  disciplineGroup?: Maybe<DisciplineGroupWhereInput>;
  discipline?: Maybe<DisciplineWhereInput>;
  startDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  endDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['Date']>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
   __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

export type EmployeeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: EmployeeWhereInput;
  /** Update many input */
  data: EmployeeUpdateManyInput;
};

/** Identifies documents */
export type UserCompanyManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserCompanyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserCompanyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserCompanyWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  user_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  user_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  user_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  user_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  user_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  user_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  user_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  user_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  user_not_ends_with?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyWhereInput>;
};


/** Stage system enumeration */
export enum Stage {
  /** System Published Stage */
  Published = 'PUBLISHED',
  /** System Draft Stage */
  Draft = 'DRAFT'
}

export type BranchUpsertInput = {
  /** Create document if it didn't exist */
  create: BranchCreateInput;
  /** Update document if it exists */
  update: BranchUpdateInput;
};

/** References Company record uniquely */
export type CompanyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type EmployeeDisciplineUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EmployeeDisciplineWhereUniqueInput;
  /** Upsert data */
  data: EmployeeDisciplineUpsertInput;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type BranchUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  branchName?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  branchCode?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  zipExt?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneExt?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  contactPhoneExt?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  hasNoClients?: Maybe<Scalars['Boolean']>;
};

/** References EmployeeDiscipline record uniquely */
export type EmployeeDisciplineWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type UserCompanyUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: UserCompanyWhereUniqueInput;
  /** Document to update */
  data: UserCompanyUpdateInput;
};

export type UserCompanyCreateOneInlineInput = {
  /** Create and connect one UserCompany document */
  create?: Maybe<UserCompanyCreateInput>;
  /** Connect one existing UserCompany document */
  connect?: Maybe<UserCompanyWhereUniqueInput>;
};

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export type AuthorizedPersonnelUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  employeeCredential?: Maybe<EmployeeCredentialUpdateManyInlineInput>;
  company?: Maybe<CompanyUpdateOneInlineInput>;
  canVerify?: Maybe<Array<Scalars['String']>>;
  employee?: Maybe<EmployeeUpdateOneInlineInput>;
};

export type BranchUpdateInput = {
  branchName?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  branchCode?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  zipExt?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneExt?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  contactPhoneExt?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  hasNoClients?: Maybe<Scalars['Boolean']>;
  company?: Maybe<CompanyUpdateOneInlineInput>;
  employee?: Maybe<EmployeeUpdateManyInlineInput>;
};

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type CompanyCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  legalBusinessName?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  doingBusinessAs?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  companyCode?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  nationalProviderIdentifier?: Maybe<Scalars['String']>;
  businessType?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  zipExt?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  contactExt?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  logo?: Maybe<AssetCreateOneInlineInput>;
  companyUsers?: Maybe<UserCompanyCreateManyInlineInput>;
  companyBranches?: Maybe<BranchCreateManyInlineInput>;
  employee?: Maybe<EmployeeCreateManyInlineInput>;
  disciplineGroup?: Maybe<DisciplineGroupCreateManyInlineInput>;
  discipline?: Maybe<DisciplineCreateManyInlineInput>;
  authorizedPersonnel?: Maybe<AuthorizedPersonnelCreateManyInlineInput>;
  licenseCertification?: Maybe<LicenseCertificationCreateManyInlineInput>;
};

export type DisciplineGroupCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  allowOverlap?: Maybe<Scalars['Boolean']>;
  employeeDiscipline?: Maybe<EmployeeDisciplineCreateManyInlineInput>;
  disciplines?: Maybe<DisciplineCreateManyInlineInput>;
  company?: Maybe<CompanyCreateOneInlineInput>;
};

export type EmployeeDisciplineUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: EmployeeDisciplineWhereInput;
  /** Update many input */
  data: EmployeeDisciplineUpdateManyInput;
};

/** Identifies documents */
export type LicenseCertificationManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LicenseCertificationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LicenseCertificationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LicenseCertificationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  type_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  type_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  type_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  type_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  type_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  type_not_ends_with?: Maybe<Scalars['String']>;
  requirement?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  requirement_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  requirement_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  requirement_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  requirement_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  requirement_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  requirement_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  requirement_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  requirement_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  requirement_not_ends_with?: Maybe<Scalars['String']>;
  validateDoh?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  validateDoh_not?: Maybe<Scalars['Boolean']>;
  disciplines_every?: Maybe<DisciplineWhereInput>;
  disciplines_some?: Maybe<DisciplineWhereInput>;
  disciplines_none?: Maybe<DisciplineWhereInput>;
  employeeCredential?: Maybe<EmployeeCredentialWhereInput>;
  company?: Maybe<CompanyWhereInput>;
};

export type Mutation = {
   __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many assets */
  updateManyAssets: BatchPayload;
  /** Delete many Asset documents */
  deleteManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssets: BatchPayload;
  /** Unpublish many Asset documents */
  unpublishManyAssets: BatchPayload;
  /** Create one authorizedPersonnel */
  createAuthorizedPersonnel?: Maybe<AuthorizedPersonnel>;
  /** Update one authorizedPersonnel */
  updateAuthorizedPersonnel?: Maybe<AuthorizedPersonnel>;
  /** Delete one authorizedPersonnel from _all_ existing stages. Returns deleted document. */
  deleteAuthorizedPersonnel?: Maybe<AuthorizedPersonnel>;
  /** Upsert one authorizedPersonnel */
  upsertAuthorizedPersonnel?: Maybe<AuthorizedPersonnel>;
  /** Publish one authorizedPersonnel */
  publishAuthorizedPersonnel?: Maybe<AuthorizedPersonnel>;
  /** Unpublish one authorizedPersonnel from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAuthorizedPersonnel?: Maybe<AuthorizedPersonnel>;
  /** Update many authorizedPersonnels */
  updateManyAuthorizedPersonnels: BatchPayload;
  /** Delete many AuthorizedPersonnel documents */
  deleteManyAuthorizedPersonnels: BatchPayload;
  /** Publish many AuthorizedPersonnel documents */
  publishManyAuthorizedPersonnels: BatchPayload;
  /** Unpublish many AuthorizedPersonnel documents */
  unpublishManyAuthorizedPersonnels: BatchPayload;
  /** Create one branch */
  createBranch?: Maybe<Branch>;
  /** Update one branch */
  updateBranch?: Maybe<Branch>;
  /** Delete one branch from _all_ existing stages. Returns deleted document. */
  deleteBranch?: Maybe<Branch>;
  /** Upsert one branch */
  upsertBranch?: Maybe<Branch>;
  /** Publish one branch */
  publishBranch?: Maybe<Branch>;
  /** Unpublish one branch from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBranch?: Maybe<Branch>;
  /** Update many branches */
  updateManyBranches: BatchPayload;
  /** Delete many Branch documents */
  deleteManyBranches: BatchPayload;
  /** Publish many Branch documents */
  publishManyBranches: BatchPayload;
  /** Unpublish many Branch documents */
  unpublishManyBranches: BatchPayload;
  /** Create one company */
  createCompany?: Maybe<Company>;
  /** Update one company */
  updateCompany?: Maybe<Company>;
  /** Delete one company from _all_ existing stages. Returns deleted document. */
  deleteCompany?: Maybe<Company>;
  /** Upsert one company */
  upsertCompany?: Maybe<Company>;
  /** Publish one company */
  publishCompany?: Maybe<Company>;
  /** Unpublish one company from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCompany?: Maybe<Company>;
  /** Update many companies */
  updateManyCompanies: BatchPayload;
  /** Delete many Company documents */
  deleteManyCompanies: BatchPayload;
  /** Publish many Company documents */
  publishManyCompanies: BatchPayload;
  /** Unpublish many Company documents */
  unpublishManyCompanies: BatchPayload;
  /** Create one discipline */
  createDiscipline?: Maybe<Discipline>;
  /** Update one discipline */
  updateDiscipline?: Maybe<Discipline>;
  /** Delete one discipline from _all_ existing stages. Returns deleted document. */
  deleteDiscipline?: Maybe<Discipline>;
  /** Upsert one discipline */
  upsertDiscipline?: Maybe<Discipline>;
  /** Publish one discipline */
  publishDiscipline?: Maybe<Discipline>;
  /** Unpublish one discipline from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishDiscipline?: Maybe<Discipline>;
  /** Update many disciplines */
  updateManyDisciplines: BatchPayload;
  /** Delete many Discipline documents */
  deleteManyDisciplines: BatchPayload;
  /** Publish many Discipline documents */
  publishManyDisciplines: BatchPayload;
  /** Unpublish many Discipline documents */
  unpublishManyDisciplines: BatchPayload;
  /** Create one disciplineGroup */
  createDisciplineGroup?: Maybe<DisciplineGroup>;
  /** Update one disciplineGroup */
  updateDisciplineGroup?: Maybe<DisciplineGroup>;
  /** Delete one disciplineGroup from _all_ existing stages. Returns deleted document. */
  deleteDisciplineGroup?: Maybe<DisciplineGroup>;
  /** Upsert one disciplineGroup */
  upsertDisciplineGroup?: Maybe<DisciplineGroup>;
  /** Publish one disciplineGroup */
  publishDisciplineGroup?: Maybe<DisciplineGroup>;
  /** Unpublish one disciplineGroup from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishDisciplineGroup?: Maybe<DisciplineGroup>;
  /** Update many disciplineGroups */
  updateManyDisciplineGroups: BatchPayload;
  /** Delete many DisciplineGroup documents */
  deleteManyDisciplineGroups: BatchPayload;
  /** Publish many DisciplineGroup documents */
  publishManyDisciplineGroups: BatchPayload;
  /** Unpublish many DisciplineGroup documents */
  unpublishManyDisciplineGroups: BatchPayload;
  /** Create one employee */
  createEmployee?: Maybe<Employee>;
  /** Update one employee */
  updateEmployee?: Maybe<Employee>;
  /** Delete one employee from _all_ existing stages. Returns deleted document. */
  deleteEmployee?: Maybe<Employee>;
  /** Upsert one employee */
  upsertEmployee?: Maybe<Employee>;
  /** Publish one employee */
  publishEmployee?: Maybe<Employee>;
  /** Unpublish one employee from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEmployee?: Maybe<Employee>;
  /** Update many employees */
  updateManyEmployees: BatchPayload;
  /** Delete many Employee documents */
  deleteManyEmployees: BatchPayload;
  /** Publish many Employee documents */
  publishManyEmployees: BatchPayload;
  /** Unpublish many Employee documents */
  unpublishManyEmployees: BatchPayload;
  /** Create one employeeCredential */
  createEmployeeCredential?: Maybe<EmployeeCredential>;
  /** Update one employeeCredential */
  updateEmployeeCredential?: Maybe<EmployeeCredential>;
  /** Delete one employeeCredential from _all_ existing stages. Returns deleted document. */
  deleteEmployeeCredential?: Maybe<EmployeeCredential>;
  /** Upsert one employeeCredential */
  upsertEmployeeCredential?: Maybe<EmployeeCredential>;
  /** Publish one employeeCredential */
  publishEmployeeCredential?: Maybe<EmployeeCredential>;
  /** Unpublish one employeeCredential from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEmployeeCredential?: Maybe<EmployeeCredential>;
  /** Update many employeeCredentials */
  updateManyEmployeeCredentials: BatchPayload;
  /** Delete many EmployeeCredential documents */
  deleteManyEmployeeCredentials: BatchPayload;
  /** Publish many EmployeeCredential documents */
  publishManyEmployeeCredentials: BatchPayload;
  /** Unpublish many EmployeeCredential documents */
  unpublishManyEmployeeCredentials: BatchPayload;
  /** Create one employeeDiscipline */
  createEmployeeDiscipline?: Maybe<EmployeeDiscipline>;
  /** Update one employeeDiscipline */
  updateEmployeeDiscipline?: Maybe<EmployeeDiscipline>;
  /** Delete one employeeDiscipline from _all_ existing stages. Returns deleted document. */
  deleteEmployeeDiscipline?: Maybe<EmployeeDiscipline>;
  /** Upsert one employeeDiscipline */
  upsertEmployeeDiscipline?: Maybe<EmployeeDiscipline>;
  /** Publish one employeeDiscipline */
  publishEmployeeDiscipline?: Maybe<EmployeeDiscipline>;
  /** Unpublish one employeeDiscipline from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEmployeeDiscipline?: Maybe<EmployeeDiscipline>;
  /** Update many employeeDisciplines */
  updateManyEmployeeDisciplines: BatchPayload;
  /** Delete many EmployeeDiscipline documents */
  deleteManyEmployeeDisciplines: BatchPayload;
  /** Publish many EmployeeDiscipline documents */
  publishManyEmployeeDisciplines: BatchPayload;
  /** Unpublish many EmployeeDiscipline documents */
  unpublishManyEmployeeDisciplines: BatchPayload;
  /** Create one licenseCertification */
  createLicenseCertification?: Maybe<LicenseCertification>;
  /** Update one licenseCertification */
  updateLicenseCertification?: Maybe<LicenseCertification>;
  /** Delete one licenseCertification from _all_ existing stages. Returns deleted document. */
  deleteLicenseCertification?: Maybe<LicenseCertification>;
  /** Upsert one licenseCertification */
  upsertLicenseCertification?: Maybe<LicenseCertification>;
  /** Publish one licenseCertification */
  publishLicenseCertification?: Maybe<LicenseCertification>;
  /** Unpublish one licenseCertification from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLicenseCertification?: Maybe<LicenseCertification>;
  /** Update many licenseCertifications */
  updateManyLicenseCertifications: BatchPayload;
  /** Delete many LicenseCertification documents */
  deleteManyLicenseCertifications: BatchPayload;
  /** Publish many LicenseCertification documents */
  publishManyLicenseCertifications: BatchPayload;
  /** Unpublish many LicenseCertification documents */
  unpublishManyLicenseCertifications: BatchPayload;
  /** Create one userCompany */
  createUserCompany?: Maybe<UserCompany>;
  /** Update one userCompany */
  updateUserCompany?: Maybe<UserCompany>;
  /** Delete one userCompany from _all_ existing stages. Returns deleted document. */
  deleteUserCompany?: Maybe<UserCompany>;
  /** Upsert one userCompany */
  upsertUserCompany?: Maybe<UserCompany>;
  /** Publish one userCompany */
  publishUserCompany?: Maybe<UserCompany>;
  /** Unpublish one userCompany from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishUserCompany?: Maybe<UserCompany>;
  /** Update many userCompanies */
  updateManyUserCompanies: BatchPayload;
  /** Delete many UserCompany documents */
  deleteManyUserCompanies: BatchPayload;
  /** Publish many UserCompany documents */
  publishManyUserCompanies: BatchPayload;
  /** Unpublish many UserCompany documents */
  unpublishManyUserCompanies: BatchPayload;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateAuthorizedPersonnelArgs = {
  data: AuthorizedPersonnelCreateInput;
};


export type MutationUpdateAuthorizedPersonnelArgs = {
  where: AuthorizedPersonnelWhereUniqueInput;
  data: AuthorizedPersonnelUpdateInput;
};


export type MutationDeleteAuthorizedPersonnelArgs = {
  where: AuthorizedPersonnelWhereUniqueInput;
};


export type MutationUpsertAuthorizedPersonnelArgs = {
  where: AuthorizedPersonnelWhereUniqueInput;
  upsert: AuthorizedPersonnelUpsertInput;
};


export type MutationPublishAuthorizedPersonnelArgs = {
  where: AuthorizedPersonnelWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishAuthorizedPersonnelArgs = {
  where: AuthorizedPersonnelWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyAuthorizedPersonnelsArgs = {
  where?: Maybe<AuthorizedPersonnelManyWhereInput>;
  data: AuthorizedPersonnelUpdateManyInput;
};


export type MutationDeleteManyAuthorizedPersonnelsArgs = {
  where?: Maybe<AuthorizedPersonnelManyWhereInput>;
};


export type MutationPublishManyAuthorizedPersonnelsArgs = {
  where?: Maybe<AuthorizedPersonnelManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyAuthorizedPersonnelsArgs = {
  where?: Maybe<AuthorizedPersonnelManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateBranchArgs = {
  data: BranchCreateInput;
};


export type MutationUpdateBranchArgs = {
  where: BranchWhereUniqueInput;
  data: BranchUpdateInput;
};


export type MutationDeleteBranchArgs = {
  where: BranchWhereUniqueInput;
};


export type MutationUpsertBranchArgs = {
  where: BranchWhereUniqueInput;
  upsert: BranchUpsertInput;
};


export type MutationPublishBranchArgs = {
  where: BranchWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishBranchArgs = {
  where: BranchWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyBranchesArgs = {
  where?: Maybe<BranchManyWhereInput>;
  data: BranchUpdateManyInput;
};


export type MutationDeleteManyBranchesArgs = {
  where?: Maybe<BranchManyWhereInput>;
};


export type MutationPublishManyBranchesArgs = {
  where?: Maybe<BranchManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyBranchesArgs = {
  where?: Maybe<BranchManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationUpdateCompanyArgs = {
  where: CompanyWhereUniqueInput;
  data: CompanyUpdateInput;
};


export type MutationDeleteCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type MutationUpsertCompanyArgs = {
  where: CompanyWhereUniqueInput;
  upsert: CompanyUpsertInput;
};


export type MutationPublishCompanyArgs = {
  where: CompanyWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishCompanyArgs = {
  where: CompanyWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyCompaniesArgs = {
  where?: Maybe<CompanyManyWhereInput>;
  data: CompanyUpdateManyInput;
};


export type MutationDeleteManyCompaniesArgs = {
  where?: Maybe<CompanyManyWhereInput>;
};


export type MutationPublishManyCompaniesArgs = {
  where?: Maybe<CompanyManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyCompaniesArgs = {
  where?: Maybe<CompanyManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateDisciplineArgs = {
  data: DisciplineCreateInput;
};


export type MutationUpdateDisciplineArgs = {
  where: DisciplineWhereUniqueInput;
  data: DisciplineUpdateInput;
};


export type MutationDeleteDisciplineArgs = {
  where: DisciplineWhereUniqueInput;
};


export type MutationUpsertDisciplineArgs = {
  where: DisciplineWhereUniqueInput;
  upsert: DisciplineUpsertInput;
};


export type MutationPublishDisciplineArgs = {
  where: DisciplineWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishDisciplineArgs = {
  where: DisciplineWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyDisciplinesArgs = {
  where?: Maybe<DisciplineManyWhereInput>;
  data: DisciplineUpdateManyInput;
};


export type MutationDeleteManyDisciplinesArgs = {
  where?: Maybe<DisciplineManyWhereInput>;
};


export type MutationPublishManyDisciplinesArgs = {
  where?: Maybe<DisciplineManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyDisciplinesArgs = {
  where?: Maybe<DisciplineManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateDisciplineGroupArgs = {
  data: DisciplineGroupCreateInput;
};


export type MutationUpdateDisciplineGroupArgs = {
  where: DisciplineGroupWhereUniqueInput;
  data: DisciplineGroupUpdateInput;
};


export type MutationDeleteDisciplineGroupArgs = {
  where: DisciplineGroupWhereUniqueInput;
};


export type MutationUpsertDisciplineGroupArgs = {
  where: DisciplineGroupWhereUniqueInput;
  upsert: DisciplineGroupUpsertInput;
};


export type MutationPublishDisciplineGroupArgs = {
  where: DisciplineGroupWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishDisciplineGroupArgs = {
  where: DisciplineGroupWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyDisciplineGroupsArgs = {
  where?: Maybe<DisciplineGroupManyWhereInput>;
  data: DisciplineGroupUpdateManyInput;
};


export type MutationDeleteManyDisciplineGroupsArgs = {
  where?: Maybe<DisciplineGroupManyWhereInput>;
};


export type MutationPublishManyDisciplineGroupsArgs = {
  where?: Maybe<DisciplineGroupManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyDisciplineGroupsArgs = {
  where?: Maybe<DisciplineGroupManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateEmployeeArgs = {
  data: EmployeeCreateInput;
};


export type MutationUpdateEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
  data: EmployeeUpdateInput;
};


export type MutationDeleteEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};


export type MutationUpsertEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
  upsert: EmployeeUpsertInput;
};


export type MutationPublishEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyEmployeesArgs = {
  where?: Maybe<EmployeeManyWhereInput>;
  data: EmployeeUpdateManyInput;
};


export type MutationDeleteManyEmployeesArgs = {
  where?: Maybe<EmployeeManyWhereInput>;
};


export type MutationPublishManyEmployeesArgs = {
  where?: Maybe<EmployeeManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyEmployeesArgs = {
  where?: Maybe<EmployeeManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateEmployeeCredentialArgs = {
  data: EmployeeCredentialCreateInput;
};


export type MutationUpdateEmployeeCredentialArgs = {
  where: EmployeeCredentialWhereUniqueInput;
  data: EmployeeCredentialUpdateInput;
};


export type MutationDeleteEmployeeCredentialArgs = {
  where: EmployeeCredentialWhereUniqueInput;
};


export type MutationUpsertEmployeeCredentialArgs = {
  where: EmployeeCredentialWhereUniqueInput;
  upsert: EmployeeCredentialUpsertInput;
};


export type MutationPublishEmployeeCredentialArgs = {
  where: EmployeeCredentialWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishEmployeeCredentialArgs = {
  where: EmployeeCredentialWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyEmployeeCredentialsArgs = {
  where?: Maybe<EmployeeCredentialManyWhereInput>;
  data: EmployeeCredentialUpdateManyInput;
};


export type MutationDeleteManyEmployeeCredentialsArgs = {
  where?: Maybe<EmployeeCredentialManyWhereInput>;
};


export type MutationPublishManyEmployeeCredentialsArgs = {
  where?: Maybe<EmployeeCredentialManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyEmployeeCredentialsArgs = {
  where?: Maybe<EmployeeCredentialManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateEmployeeDisciplineArgs = {
  data: EmployeeDisciplineCreateInput;
};


export type MutationUpdateEmployeeDisciplineArgs = {
  where: EmployeeDisciplineWhereUniqueInput;
  data: EmployeeDisciplineUpdateInput;
};


export type MutationDeleteEmployeeDisciplineArgs = {
  where: EmployeeDisciplineWhereUniqueInput;
};


export type MutationUpsertEmployeeDisciplineArgs = {
  where: EmployeeDisciplineWhereUniqueInput;
  upsert: EmployeeDisciplineUpsertInput;
};


export type MutationPublishEmployeeDisciplineArgs = {
  where: EmployeeDisciplineWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishEmployeeDisciplineArgs = {
  where: EmployeeDisciplineWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyEmployeeDisciplinesArgs = {
  where?: Maybe<EmployeeDisciplineManyWhereInput>;
  data: EmployeeDisciplineUpdateManyInput;
};


export type MutationDeleteManyEmployeeDisciplinesArgs = {
  where?: Maybe<EmployeeDisciplineManyWhereInput>;
};


export type MutationPublishManyEmployeeDisciplinesArgs = {
  where?: Maybe<EmployeeDisciplineManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyEmployeeDisciplinesArgs = {
  where?: Maybe<EmployeeDisciplineManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateLicenseCertificationArgs = {
  data: LicenseCertificationCreateInput;
};


export type MutationUpdateLicenseCertificationArgs = {
  where: LicenseCertificationWhereUniqueInput;
  data: LicenseCertificationUpdateInput;
};


export type MutationDeleteLicenseCertificationArgs = {
  where: LicenseCertificationWhereUniqueInput;
};


export type MutationUpsertLicenseCertificationArgs = {
  where: LicenseCertificationWhereUniqueInput;
  upsert: LicenseCertificationUpsertInput;
};


export type MutationPublishLicenseCertificationArgs = {
  where: LicenseCertificationWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishLicenseCertificationArgs = {
  where: LicenseCertificationWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyLicenseCertificationsArgs = {
  where?: Maybe<LicenseCertificationManyWhereInput>;
  data: LicenseCertificationUpdateManyInput;
};


export type MutationDeleteManyLicenseCertificationsArgs = {
  where?: Maybe<LicenseCertificationManyWhereInput>;
};


export type MutationPublishManyLicenseCertificationsArgs = {
  where?: Maybe<LicenseCertificationManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyLicenseCertificationsArgs = {
  where?: Maybe<LicenseCertificationManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateUserCompanyArgs = {
  data: UserCompanyCreateInput;
};


export type MutationUpdateUserCompanyArgs = {
  where: UserCompanyWhereUniqueInput;
  data: UserCompanyUpdateInput;
};


export type MutationDeleteUserCompanyArgs = {
  where: UserCompanyWhereUniqueInput;
};


export type MutationUpsertUserCompanyArgs = {
  where: UserCompanyWhereUniqueInput;
  upsert: UserCompanyUpsertInput;
};


export type MutationPublishUserCompanyArgs = {
  where: UserCompanyWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishUserCompanyArgs = {
  where: UserCompanyWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyUserCompaniesArgs = {
  where?: Maybe<UserCompanyManyWhereInput>;
  data: UserCompanyUpdateManyInput;
};


export type MutationDeleteManyUserCompaniesArgs = {
  where?: Maybe<UserCompanyManyWhereInput>;
};


export type MutationPublishManyUserCompaniesArgs = {
  where?: Maybe<UserCompanyManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyUserCompaniesArgs = {
  where?: Maybe<UserCompanyManyWhereInput>;
  from?: Array<Stage>;
};

/** A connection to a list of items. */
export type AssetConnection = {
   __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  companyLogo?: Maybe<CompanyUpdateManyInlineInput>;
  employeeImages?: Maybe<EmployeeUpdateManyInlineInput>;
  employeeCredentialImages?: Maybe<EmployeeCredentialUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

/** A connection to a list of items. */
export type AuthorizedPersonnelConnection = {
   __typename?: 'AuthorizedPersonnelConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AuthorizedPersonnelEdge>;
  aggregate: Aggregate;
};

/** A connection to a list of items. */
export type LicenseCertificationConnection = {
   __typename?: 'LicenseCertificationConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<LicenseCertificationEdge>;
  aggregate: Aggregate;
};

export type UserCompanyConnectInput = {
  /** Document to connect */
  where: UserCompanyWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};


/** Identifies documents */
export type CompanyManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CompanyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CompanyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CompanyWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  legalBusinessName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  legalBusinessName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  legalBusinessName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  legalBusinessName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  legalBusinessName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  legalBusinessName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  legalBusinessName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  legalBusinessName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  legalBusinessName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  legalBusinessName_not_ends_with?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  companyId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  companyId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  companyId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  companyId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  companyId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  companyId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  companyId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  companyId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  companyId_not_ends_with?: Maybe<Scalars['String']>;
  doingBusinessAs?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  doingBusinessAs_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  doingBusinessAs_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  doingBusinessAs_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  doingBusinessAs_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  doingBusinessAs_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  doingBusinessAs_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  doingBusinessAs_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  doingBusinessAs_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  doingBusinessAs_not_ends_with?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  abbreviation_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abbreviation_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  abbreviation_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  abbreviation_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  abbreviation_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  abbreviation_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  abbreviation_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  abbreviation_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  abbreviation_not_ends_with?: Maybe<Scalars['String']>;
  companyCode?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  companyCode_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  companyCode_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  companyCode_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  companyCode_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  companyCode_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  companyCode_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  companyCode_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  companyCode_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  companyCode_not_ends_with?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  taxId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  taxId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  taxId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  taxId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  taxId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  taxId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  taxId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  taxId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  taxId_not_ends_with?: Maybe<Scalars['String']>;
  nationalProviderIdentifier?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nationalProviderIdentifier_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nationalProviderIdentifier_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  nationalProviderIdentifier_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  nationalProviderIdentifier_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nationalProviderIdentifier_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nationalProviderIdentifier_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  nationalProviderIdentifier_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nationalProviderIdentifier_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  nationalProviderIdentifier_not_ends_with?: Maybe<Scalars['String']>;
  businessType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  businessType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  businessType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  businessType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  businessType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  businessType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  businessType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  businessType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  businessType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  businessType_not_ends_with?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address1_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address1_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address1_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address1_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address1_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address1_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address1_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address1_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address1_not_ends_with?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address2_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address2_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address2_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address2_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address2_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address2_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address2_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address2_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address2_not_ends_with?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  zip_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zip_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  zip_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  zip_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  zip_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  zip_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  zip_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  zip_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  zip_not_ends_with?: Maybe<Scalars['String']>;
  zipExt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  zipExt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zipExt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  zipExt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  zipExt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  zipExt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  zipExt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  zipExt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  zipExt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  zipExt_not_ends_with?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  city_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  state_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  state_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  state_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  state_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  state_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  state_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  state_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  state_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  state_not_ends_with?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fax_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fax_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fax_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fax_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fax_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fax_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fax_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fax_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fax_not_ends_with?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactName_not_ends_with?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactTitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactTitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactTitle_not_ends_with?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactPhone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactPhone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactPhone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactPhone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactPhone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactPhone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactPhone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactPhone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactPhone_not_ends_with?: Maybe<Scalars['String']>;
  contactExt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactExt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactExt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactExt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactExt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactExt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactExt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactExt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactExt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactExt_not_ends_with?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactEmail_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactEmail_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactEmail_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactEmail_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactEmail_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactEmail_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactEmail_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactEmail_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactEmail_not_ends_with?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  owner_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  owner_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  owner_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  owner_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  owner_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  owner_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  owner_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  owner_not_ends_with?: Maybe<Scalars['String']>;
  logo?: Maybe<AssetWhereInput>;
  companyUsers_every?: Maybe<UserCompanyWhereInput>;
  companyUsers_some?: Maybe<UserCompanyWhereInput>;
  companyUsers_none?: Maybe<UserCompanyWhereInput>;
  companyBranches_every?: Maybe<BranchWhereInput>;
  companyBranches_some?: Maybe<BranchWhereInput>;
  companyBranches_none?: Maybe<BranchWhereInput>;
  employee_every?: Maybe<EmployeeWhereInput>;
  employee_some?: Maybe<EmployeeWhereInput>;
  employee_none?: Maybe<EmployeeWhereInput>;
  disciplineGroup_every?: Maybe<DisciplineGroupWhereInput>;
  disciplineGroup_some?: Maybe<DisciplineGroupWhereInput>;
  disciplineGroup_none?: Maybe<DisciplineGroupWhereInput>;
  discipline_every?: Maybe<DisciplineWhereInput>;
  discipline_some?: Maybe<DisciplineWhereInput>;
  discipline_none?: Maybe<DisciplineWhereInput>;
  authorizedPersonnel_every?: Maybe<AuthorizedPersonnelWhereInput>;
  authorizedPersonnel_some?: Maybe<AuthorizedPersonnelWhereInput>;
  authorizedPersonnel_none?: Maybe<AuthorizedPersonnelWhereInput>;
  licenseCertification_every?: Maybe<LicenseCertificationWhereInput>;
  licenseCertification_some?: Maybe<LicenseCertificationWhereInput>;
  licenseCertification_none?: Maybe<LicenseCertificationWhereInput>;
};

export type EmployeeDisciplineCreateOneInlineInput = {
  /** Create and connect one EmployeeDiscipline document */
  create?: Maybe<EmployeeDisciplineCreateInput>;
  /** Connect one existing EmployeeDiscipline document */
  connect?: Maybe<EmployeeDisciplineWhereUniqueInput>;
};

export type UserCompanyUpdateOneInlineInput = {
  /** Create and connect one UserCompany document */
  create?: Maybe<UserCompanyCreateInput>;
  /** Update single UserCompany document */
  update?: Maybe<UserCompanyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single UserCompany document */
  upsert?: Maybe<UserCompanyUpsertWithNestedWhereUniqueInput>;
  /** Connect existing UserCompany document */
  connect?: Maybe<UserCompanyWhereUniqueInput>;
  /** Disconnect currently connected UserCompany document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected UserCompany document */
  delete?: Maybe<Scalars['Boolean']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type AuthorizedPersonnelUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AuthorizedPersonnelWhereInput;
  /** Update many input */
  data: AuthorizedPersonnelUpdateManyInput;
};

/** Identifies documents */
export type CompanyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CompanyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CompanyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CompanyWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  legalBusinessName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  legalBusinessName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  legalBusinessName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  legalBusinessName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  legalBusinessName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  legalBusinessName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  legalBusinessName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  legalBusinessName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  legalBusinessName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  legalBusinessName_not_ends_with?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  companyId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  companyId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  companyId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  companyId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  companyId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  companyId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  companyId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  companyId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  companyId_not_ends_with?: Maybe<Scalars['String']>;
  doingBusinessAs?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  doingBusinessAs_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  doingBusinessAs_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  doingBusinessAs_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  doingBusinessAs_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  doingBusinessAs_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  doingBusinessAs_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  doingBusinessAs_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  doingBusinessAs_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  doingBusinessAs_not_ends_with?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  abbreviation_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abbreviation_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  abbreviation_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  abbreviation_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  abbreviation_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  abbreviation_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  abbreviation_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  abbreviation_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  abbreviation_not_ends_with?: Maybe<Scalars['String']>;
  companyCode?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  companyCode_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  companyCode_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  companyCode_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  companyCode_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  companyCode_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  companyCode_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  companyCode_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  companyCode_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  companyCode_not_ends_with?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  taxId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  taxId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  taxId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  taxId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  taxId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  taxId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  taxId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  taxId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  taxId_not_ends_with?: Maybe<Scalars['String']>;
  nationalProviderIdentifier?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nationalProviderIdentifier_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nationalProviderIdentifier_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  nationalProviderIdentifier_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  nationalProviderIdentifier_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nationalProviderIdentifier_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nationalProviderIdentifier_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  nationalProviderIdentifier_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nationalProviderIdentifier_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  nationalProviderIdentifier_not_ends_with?: Maybe<Scalars['String']>;
  businessType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  businessType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  businessType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  businessType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  businessType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  businessType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  businessType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  businessType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  businessType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  businessType_not_ends_with?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address1_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address1_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address1_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address1_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address1_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address1_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address1_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address1_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address1_not_ends_with?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address2_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address2_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address2_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address2_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address2_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address2_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address2_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address2_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address2_not_ends_with?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  zip_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zip_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  zip_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  zip_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  zip_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  zip_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  zip_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  zip_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  zip_not_ends_with?: Maybe<Scalars['String']>;
  zipExt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  zipExt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zipExt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  zipExt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  zipExt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  zipExt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  zipExt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  zipExt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  zipExt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  zipExt_not_ends_with?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  city_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  state_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  state_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  state_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  state_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  state_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  state_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  state_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  state_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  state_not_ends_with?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fax_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fax_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fax_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fax_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fax_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fax_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fax_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fax_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fax_not_ends_with?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactName_not_ends_with?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactTitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactTitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactTitle_not_ends_with?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactPhone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactPhone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactPhone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactPhone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactPhone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactPhone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactPhone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactPhone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactPhone_not_ends_with?: Maybe<Scalars['String']>;
  contactExt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactExt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactExt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactExt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactExt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactExt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactExt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactExt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactExt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactExt_not_ends_with?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contactEmail_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactEmail_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contactEmail_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  contactEmail_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactEmail_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactEmail_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contactEmail_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactEmail_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactEmail_not_ends_with?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  owner_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  owner_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  owner_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  owner_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  owner_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  owner_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  owner_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  owner_not_ends_with?: Maybe<Scalars['String']>;
  logo?: Maybe<AssetWhereInput>;
  companyUsers_every?: Maybe<UserCompanyWhereInput>;
  companyUsers_some?: Maybe<UserCompanyWhereInput>;
  companyUsers_none?: Maybe<UserCompanyWhereInput>;
  companyBranches_every?: Maybe<BranchWhereInput>;
  companyBranches_some?: Maybe<BranchWhereInput>;
  companyBranches_none?: Maybe<BranchWhereInput>;
  employee_every?: Maybe<EmployeeWhereInput>;
  employee_some?: Maybe<EmployeeWhereInput>;
  employee_none?: Maybe<EmployeeWhereInput>;
  disciplineGroup_every?: Maybe<DisciplineGroupWhereInput>;
  disciplineGroup_some?: Maybe<DisciplineGroupWhereInput>;
  disciplineGroup_none?: Maybe<DisciplineGroupWhereInput>;
  discipline_every?: Maybe<DisciplineWhereInput>;
  discipline_some?: Maybe<DisciplineWhereInput>;
  discipline_none?: Maybe<DisciplineWhereInput>;
  authorizedPersonnel_every?: Maybe<AuthorizedPersonnelWhereInput>;
  authorizedPersonnel_some?: Maybe<AuthorizedPersonnelWhereInput>;
  authorizedPersonnel_none?: Maybe<AuthorizedPersonnelWhereInput>;
  licenseCertification_every?: Maybe<LicenseCertificationWhereInput>;
  licenseCertification_some?: Maybe<LicenseCertificationWhereInput>;
  licenseCertification_none?: Maybe<LicenseCertificationWhereInput>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

/** References Discipline record uniquely */
export type DisciplineWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type LicenseCertificationCreateOneInlineInput = {
  /** Create and connect one LicenseCertification document */
  create?: Maybe<LicenseCertificationCreateInput>;
  /** Connect one existing LicenseCertification document */
  connect?: Maybe<LicenseCertificationWhereUniqueInput>;
};

export type Discipline = Node & {
   __typename?: 'Discipline';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Discipline>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  securityLevel?: Maybe<Scalars['Int']>;
  employeeDiscipline: Array<EmployeeDiscipline>;
  disciplineGroup: Array<DisciplineGroup>;
  company?: Maybe<Company>;
  licenseCertification: Array<LicenseCertification>;
  /** List of Discipline versions */
  history: Array<Version>;
};


export type DisciplineDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type DisciplineEmployeeDisciplineArgs = {
  where?: Maybe<EmployeeDisciplineWhereInput>;
  orderBy?: Maybe<EmployeeDisciplineOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type DisciplineDisciplineGroupArgs = {
  where?: Maybe<DisciplineGroupWhereInput>;
  orderBy?: Maybe<DisciplineGroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type DisciplineLicenseCertificationArgs = {
  where?: Maybe<LicenseCertificationWhereInput>;
  orderBy?: Maybe<LicenseCertificationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type DisciplineHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type DisciplineGroupUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  allowOverlap?: Maybe<Scalars['Boolean']>;
};

/** An edge in a connection. */
export type UserCompanyEdge = {
   __typename?: 'UserCompanyEdge';
  /** The item at the end of the edge. */
  node: UserCompany;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type CompanyUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CompanyWhereUniqueInput;
  /** Upsert data */
  data: CompanyUpsertInput;
};

export type DisciplineGroupConnectInput = {
  /** Document to connect */
  where: DisciplineGroupWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type DisciplineGroupUpsertInput = {
  /** Create document if it didn't exist */
  create: DisciplineGroupCreateInput;
  /** Update document if it exists */
  update: DisciplineGroupUpdateInput;
};


export type CompanyUpdateInput = {
  legalBusinessName?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  doingBusinessAs?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  companyCode?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  nationalProviderIdentifier?: Maybe<Scalars['String']>;
  businessType?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  zipExt?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  contactExt?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  logo?: Maybe<AssetUpdateOneInlineInput>;
  companyUsers?: Maybe<UserCompanyUpdateManyInlineInput>;
  companyBranches?: Maybe<BranchUpdateManyInlineInput>;
  employee?: Maybe<EmployeeUpdateManyInlineInput>;
  disciplineGroup?: Maybe<DisciplineGroupUpdateManyInlineInput>;
  discipline?: Maybe<DisciplineUpdateManyInlineInput>;
  authorizedPersonnel?: Maybe<AuthorizedPersonnelUpdateManyInlineInput>;
  licenseCertification?: Maybe<LicenseCertificationUpdateManyInlineInput>;
};

export type DisciplineCreateOneInlineInput = {
  /** Create and connect one Discipline document */
  create?: Maybe<DisciplineCreateInput>;
  /** Connect one existing Discipline document */
  connect?: Maybe<DisciplineWhereUniqueInput>;
};

export type EmployeeDisciplineCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  employee?: Maybe<EmployeeCreateOneInlineInput>;
  disciplineGroup?: Maybe<DisciplineGroupCreateOneInlineInput>;
  discipline?: Maybe<DisciplineCreateOneInlineInput>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
};


/** Identifies documents */
export type EmployeeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EmployeeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EmployeeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EmployeeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  middleInitial_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  middleInitial_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  middleInitial_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  middleInitial_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  middleInitial_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  middleInitial_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  middleInitial_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  middleInitial_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  middleInitial_not_ends_with?: Maybe<Scalars['String']>;
  maidenName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  maidenName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  maidenName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  maidenName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  maidenName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  maidenName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  maidenName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  maidenName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  maidenName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  maidenName_not_ends_with?: Maybe<Scalars['String']>;
  alsoKnownAs?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  alsoKnownAs_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  alsoKnownAs_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  alsoKnownAs_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  alsoKnownAs_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  alsoKnownAs_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  alsoKnownAs_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  alsoKnownAs_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  alsoKnownAs_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  alsoKnownAs_not_ends_with?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  gender_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gender_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  gender_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  gender_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  gender_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  gender_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  gender_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  gender_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  gender_not_ends_with?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  birthdate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  birthdate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  birthdate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  birthdate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  birthdate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  birthdate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  birthdate_gte?: Maybe<Scalars['Date']>;
  social?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  social_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  social_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  social_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  social_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  social_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  social_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  social_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  social_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  social_not_ends_with?: Maybe<Scalars['String']>;
  sharedEmployee?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  sharedEmployee_not?: Maybe<Scalars['Boolean']>;
  originalHireDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  originalHireDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  originalHireDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  originalHireDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  originalHireDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  originalHireDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  originalHireDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  originalHireDate_gte?: Maybe<Scalars['Date']>;
  earningsType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  earningsType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  earningsType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  earningsType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  earningsType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  earningsType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  earningsType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  earningsType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  earningsType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  earningsType_not_ends_with?: Maybe<Scalars['String']>;
  orientationDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  orientationDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  orientationDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  orientationDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  orientationDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  orientationDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  orientationDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  orientationDate_gte?: Maybe<Scalars['Date']>;
  address1?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address1_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address1_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address1_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address1_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address1_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address1_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address1_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address1_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address1_not_ends_with?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address2_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address2_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address2_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address2_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address2_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address2_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address2_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address2_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address2_not_ends_with?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  city_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  state_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  state_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  state_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  state_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  state_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  state_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  state_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  state_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  state_not_ends_with?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  zip_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zip_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  zip_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  zip_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  zip_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  zip_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  zip_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  zip_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  zip_not_ends_with?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  country_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  country_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  country_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  country_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  country_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  country_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  country_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  country_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  country_not_ends_with?: Maybe<Scalars['String']>;
  phone1?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone1_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone1_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone1_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone1_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone1_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone1_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone1_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone1_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone1_not_ends_with?: Maybe<Scalars['String']>;
  phone1Type?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone1Type_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone1Type_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone1Type_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone1Type_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone1Type_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone1Type_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone1Type_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone1Type_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone1Type_not_ends_with?: Maybe<Scalars['String']>;
  phone1Ext?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone1Ext_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone1Ext_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone1Ext_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone1Ext_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone1Ext_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone1Ext_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone1Ext_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone1Ext_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone1Ext_not_ends_with?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone2_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone2_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone2_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone2_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone2_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone2_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone2_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone2_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone2_not_ends_with?: Maybe<Scalars['String']>;
  phone2Type?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone2Type_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone2Type_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone2Type_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone2Type_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone2Type_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone2Type_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone2Type_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone2Type_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone2Type_not_ends_with?: Maybe<Scalars['String']>;
  phone2Ext?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone2Ext_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone2Ext_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone2Ext_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone2Ext_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone2Ext_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone2Ext_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone2Ext_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone2Ext_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone2Ext_not_ends_with?: Maybe<Scalars['String']>;
  phone3?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone3_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone3_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone3_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone3_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone3_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone3_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone3_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone3_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone3_not_ends_with?: Maybe<Scalars['String']>;
  phone3Type?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone3Type_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone3Type_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone3Type_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone3Type_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone3Type_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone3Type_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone3Type_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone3Type_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone3Type_not_ends_with?: Maybe<Scalars['String']>;
  phone3Ext?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone3Ext_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone3Ext_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone3Ext_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone3Ext_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone3Ext_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone3Ext_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone3Ext_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone3Ext_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone3Ext_not_ends_with?: Maybe<Scalars['String']>;
  otherPhone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  otherPhone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  otherPhone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  otherPhone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  otherPhone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  otherPhone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  otherPhone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  otherPhone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  otherPhone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  otherPhone_not_ends_with?: Maybe<Scalars['String']>;
  otherPhoneType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  otherPhoneType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  otherPhoneType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  otherPhoneType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  otherPhoneType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  otherPhoneType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  otherPhoneType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  otherPhoneType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  otherPhoneType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  otherPhoneType_not_ends_with?: Maybe<Scalars['String']>;
  otherPhoneExt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  otherPhoneExt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  otherPhoneExt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  otherPhoneExt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  otherPhoneExt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  otherPhoneExt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  otherPhoneExt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  otherPhoneExt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  otherPhoneExt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  otherPhoneExt_not_ends_with?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  currentStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  currentStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  currentStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  currentStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  currentStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  currentStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  currentStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  currentStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  currentStatus_not_ends_with?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fax_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fax_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fax_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fax_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fax_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fax_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fax_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fax_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fax_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isArchived_not?: Maybe<Scalars['Boolean']>;
  branch?: Maybe<BranchWhereInput>;
  company?: Maybe<CompanyWhereInput>;
  images?: Maybe<AssetWhereInput>;
  employeeDiscipline_every?: Maybe<EmployeeDisciplineWhereInput>;
  employeeDiscipline_some?: Maybe<EmployeeDisciplineWhereInput>;
  employeeDiscipline_none?: Maybe<EmployeeDisciplineWhereInput>;
  authorizedPersonnel_every?: Maybe<AuthorizedPersonnelWhereInput>;
  authorizedPersonnel_some?: Maybe<AuthorizedPersonnelWhereInput>;
  authorizedPersonnel_none?: Maybe<AuthorizedPersonnelWhereInput>;
  employeeCredential_every?: Maybe<EmployeeCredentialWhereInput>;
  employeeCredential_some?: Maybe<EmployeeCredentialWhereInput>;
  employeeCredential_none?: Maybe<EmployeeCredentialWhereInput>;
};

/** References UserCompany record uniquely */
export type UserCompanyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type EmployeeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  maidenName?: Maybe<Scalars['String']>;
  alsoKnownAs?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['Date']>;
  social?: Maybe<Scalars['String']>;
  sharedEmployee?: Maybe<Scalars['Boolean']>;
  originalHireDate?: Maybe<Scalars['Date']>;
  earningsType?: Maybe<Scalars['String']>;
  orientationDate?: Maybe<Scalars['Date']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone1?: Maybe<Scalars['String']>;
  phone1Type?: Maybe<Scalars['String']>;
  phone1Ext?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  phone2Type?: Maybe<Scalars['String']>;
  phone2Ext?: Maybe<Scalars['String']>;
  phone3?: Maybe<Scalars['String']>;
  phone3Type?: Maybe<Scalars['String']>;
  phone3Ext?: Maybe<Scalars['String']>;
  otherPhone?: Maybe<Scalars['String']>;
  otherPhoneType?: Maybe<Scalars['String']>;
  otherPhoneExt?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  branch?: Maybe<BranchCreateOneInlineInput>;
  company?: Maybe<CompanyCreateOneInlineInput>;
  images?: Maybe<AssetCreateOneInlineInput>;
  employeeDiscipline?: Maybe<EmployeeDisciplineCreateManyInlineInput>;
  authorizedPersonnel?: Maybe<AuthorizedPersonnelCreateManyInlineInput>;
  employeeCredential?: Maybe<EmployeeCredentialCreateManyInlineInput>;
};

export type EmployeeUpdateManyInlineInput = {
  /** Create and connect multiple Employee documents */
  create?: Maybe<Array<EmployeeCreateInput>>;
  /** Connect multiple existing Employee documents */
  connect?: Maybe<Array<EmployeeConnectInput>>;
  /** Override currently-connected documents with multiple existing Employee documents */
  set?: Maybe<Array<EmployeeWhereUniqueInput>>;
  /** Update multiple Employee documents */
  update?: Maybe<Array<EmployeeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Employee documents */
  upsert?: Maybe<Array<EmployeeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Employee documents */
  disconnect?: Maybe<Array<EmployeeWhereUniqueInput>>;
  /** Delete multiple Employee documents */
  delete?: Maybe<Array<EmployeeWhereUniqueInput>>;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export enum BranchOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  BranchNameAsc = 'branchName_ASC',
  BranchNameDesc = 'branchName_DESC',
  AbbreviationAsc = 'abbreviation_ASC',
  AbbreviationDesc = 'abbreviation_DESC',
  BranchCodeAsc = 'branchCode_ASC',
  BranchCodeDesc = 'branchCode_DESC',
  Address1Asc = 'address1_ASC',
  Address1Desc = 'address1_DESC',
  Address2Asc = 'address2_ASC',
  Address2Desc = 'address2_DESC',
  ZipAsc = 'zip_ASC',
  ZipDesc = 'zip_DESC',
  ZipExtAsc = 'zipExt_ASC',
  ZipExtDesc = 'zipExt_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PhoneExtAsc = 'phoneExt_ASC',
  PhoneExtDesc = 'phoneExt_DESC',
  FaxAsc = 'fax_ASC',
  FaxDesc = 'fax_DESC',
  ContactNameAsc = 'contactName_ASC',
  ContactNameDesc = 'contactName_DESC',
  ContactTitleAsc = 'contactTitle_ASC',
  ContactTitleDesc = 'contactTitle_DESC',
  ContactPhoneAsc = 'contactPhone_ASC',
  ContactPhoneDesc = 'contactPhone_DESC',
  ContactPhoneExtAsc = 'contactPhoneExt_ASC',
  ContactPhoneExtDesc = 'contactPhoneExt_DESC',
  ContactEmailAsc = 'contactEmail_ASC',
  ContactEmailDesc = 'contactEmail_DESC',
  HasNoClientsAsc = 'hasNoClients_ASC',
  HasNoClientsDesc = 'hasNoClients_DESC'
}

export type BranchUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: BranchWhereUniqueInput;
  /** Upsert data */
  data: BranchUpsertInput;
};

export type CompanyUpdateOneInlineInput = {
  /** Create and connect one Company document */
  create?: Maybe<CompanyCreateInput>;
  /** Update single Company document */
  update?: Maybe<CompanyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Company document */
  upsert?: Maybe<CompanyUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Company document */
  connect?: Maybe<CompanyWhereUniqueInput>;
  /** Disconnect currently connected Company document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Company document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type DisciplineUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  securityLevel?: Maybe<Scalars['Int']>;
};

export type DisciplineGroupUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: DisciplineGroupWhereUniqueInput;
  /** Document to update */
  data: DisciplineGroupUpdateInput;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

export type AuthorizedPersonnelUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AuthorizedPersonnelWhereUniqueInput;
  /** Document to update */
  data: AuthorizedPersonnelUpdateInput;
};

/** References LicenseCertification record uniquely */
export type LicenseCertificationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type LicenseCertificationUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: LicenseCertificationWhereInput;
  /** Update many input */
  data: LicenseCertificationUpdateManyInput;
};

/** Identifies documents */
export type DisciplineGroupWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DisciplineGroupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DisciplineGroupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DisciplineGroupWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isAdmin_not?: Maybe<Scalars['Boolean']>;
  allowOverlap?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  allowOverlap_not?: Maybe<Scalars['Boolean']>;
  employeeDiscipline_every?: Maybe<EmployeeDisciplineWhereInput>;
  employeeDiscipline_some?: Maybe<EmployeeDisciplineWhereInput>;
  employeeDiscipline_none?: Maybe<EmployeeDisciplineWhereInput>;
  disciplines_every?: Maybe<DisciplineWhereInput>;
  disciplines_some?: Maybe<DisciplineWhereInput>;
  disciplines_none?: Maybe<DisciplineWhereInput>;
  company?: Maybe<CompanyWhereInput>;
};

export type EmployeeDisciplineUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EmployeeDisciplineWhereUniqueInput;
  /** Document to update */
  data: EmployeeDisciplineUpdateInput;
};

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AuthorizedPersonnelCreateOneInlineInput = {
  /** Create and connect one AuthorizedPersonnel document */
  create?: Maybe<AuthorizedPersonnelCreateInput>;
  /** Connect one existing AuthorizedPersonnel document */
  connect?: Maybe<AuthorizedPersonnelWhereUniqueInput>;
};

export type EmployeeDisciplineUpdateInput = {
  employee?: Maybe<EmployeeUpdateOneInlineInput>;
  disciplineGroup?: Maybe<DisciplineGroupUpdateOneInlineInput>;
  discipline?: Maybe<DisciplineUpdateOneInlineInput>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
};

export type LicenseCertificationUpsertInput = {
  /** Create document if it didn't exist */
  create: LicenseCertificationCreateInput;
  /** Update document if it exists */
  update: LicenseCertificationUpdateInput;
};

export type BranchUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: BranchWhereUniqueInput;
  /** Document to update */
  data: BranchUpdateInput;
};

export type BranchCreateManyInlineInput = {
  /** Create and connect multiple existing Branch documents */
  create?: Maybe<Array<BranchCreateInput>>;
  /** Connect multiple existing Branch documents */
  connect?: Maybe<Array<BranchWhereUniqueInput>>;
};

export enum UserCompanyOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export type EmployeeCreateManyInlineInput = {
  /** Create and connect multiple existing Employee documents */
  create?: Maybe<Array<EmployeeCreateInput>>;
  /** Connect multiple existing Employee documents */
  connect?: Maybe<Array<EmployeeWhereUniqueInput>>;
};

/** An edge in a connection. */
export type EmployeeCredentialEdge = {
   __typename?: 'EmployeeCredentialEdge';
  /** The item at the end of the edge. */
  node: EmployeeCredential;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Aggregate = {
   __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** An edge in a connection. */
export type AssetEdge = {
   __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum CompanyOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  LegalBusinessNameAsc = 'legalBusinessName_ASC',
  LegalBusinessNameDesc = 'legalBusinessName_DESC',
  CompanyIdAsc = 'companyId_ASC',
  CompanyIdDesc = 'companyId_DESC',
  DoingBusinessAsAsc = 'doingBusinessAs_ASC',
  DoingBusinessAsDesc = 'doingBusinessAs_DESC',
  AbbreviationAsc = 'abbreviation_ASC',
  AbbreviationDesc = 'abbreviation_DESC',
  CompanyCodeAsc = 'companyCode_ASC',
  CompanyCodeDesc = 'companyCode_DESC',
  TaxIdAsc = 'taxId_ASC',
  TaxIdDesc = 'taxId_DESC',
  NationalProviderIdentifierAsc = 'nationalProviderIdentifier_ASC',
  NationalProviderIdentifierDesc = 'nationalProviderIdentifier_DESC',
  BusinessTypeAsc = 'businessType_ASC',
  BusinessTypeDesc = 'businessType_DESC',
  Address1Asc = 'address1_ASC',
  Address1Desc = 'address1_DESC',
  Address2Asc = 'address2_ASC',
  Address2Desc = 'address2_DESC',
  ZipAsc = 'zip_ASC',
  ZipDesc = 'zip_DESC',
  ZipExtAsc = 'zipExt_ASC',
  ZipExtDesc = 'zipExt_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  FaxAsc = 'fax_ASC',
  FaxDesc = 'fax_DESC',
  ContactNameAsc = 'contactName_ASC',
  ContactNameDesc = 'contactName_DESC',
  ContactTitleAsc = 'contactTitle_ASC',
  ContactTitleDesc = 'contactTitle_DESC',
  ContactPhoneAsc = 'contactPhone_ASC',
  ContactPhoneDesc = 'contactPhone_DESC',
  ContactExtAsc = 'contactExt_ASC',
  ContactExtDesc = 'contactExt_DESC',
  ContactEmailAsc = 'contactEmail_ASC',
  ContactEmailDesc = 'contactEmail_DESC',
  OwnerAsc = 'owner_ASC',
  OwnerDesc = 'owner_DESC'
}

/** An edge in a connection. */
export type DisciplineEdge = {
   __typename?: 'DisciplineEdge';
  /** The item at the end of the edge. */
  node: Discipline;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

export enum EmployeeStatus {
  Active = 'Active',
  Pending = 'Pending',
  PermanentlyTerminated = 'Permanently_Terminated'
}

export type EmployeeUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  maidenName?: Maybe<Scalars['String']>;
  alsoKnownAs?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['Date']>;
  social?: Maybe<Scalars['String']>;
  sharedEmployee?: Maybe<Scalars['Boolean']>;
  originalHireDate?: Maybe<Scalars['Date']>;
  earningsType?: Maybe<Scalars['String']>;
  orientationDate?: Maybe<Scalars['Date']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone1?: Maybe<Scalars['String']>;
  phone1Type?: Maybe<Scalars['String']>;
  phone1Ext?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  phone2Type?: Maybe<Scalars['String']>;
  phone2Ext?: Maybe<Scalars['String']>;
  phone3?: Maybe<Scalars['String']>;
  phone3Type?: Maybe<Scalars['String']>;
  phone3Ext?: Maybe<Scalars['String']>;
  otherPhone?: Maybe<Scalars['String']>;
  otherPhoneType?: Maybe<Scalars['String']>;
  otherPhoneExt?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  branch?: Maybe<BranchUpdateOneInlineInput>;
  company?: Maybe<CompanyUpdateOneInlineInput>;
  images?: Maybe<AssetUpdateOneInlineInput>;
  employeeDiscipline?: Maybe<EmployeeDisciplineUpdateManyInlineInput>;
  authorizedPersonnel?: Maybe<AuthorizedPersonnelUpdateManyInlineInput>;
  employeeCredential?: Maybe<EmployeeCredentialUpdateManyInlineInput>;
};

export type EmployeeCredentialUpdateInput = {
  licenseCertification?: Maybe<LicenseCertificationUpdateOneInlineInput>;
  licenseCertificationNumber?: Maybe<Scalars['String']>;
  homeCareRegistryNumber?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Scalars['Date']>;
  expirationDate?: Maybe<Scalars['Date']>;
  institutionProvidingCredential?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  verifiedBy?: Maybe<AuthorizedPersonnelUpdateOneInlineInput>;
  employee?: Maybe<EmployeeUpdateOneInlineInput>;
  images?: Maybe<AssetUpdateOneInlineInput>;
};

export type LicenseCertificationUpdateOneInlineInput = {
  /** Create and connect one LicenseCertification document */
  create?: Maybe<LicenseCertificationCreateInput>;
  /** Update single LicenseCertification document */
  update?: Maybe<LicenseCertificationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LicenseCertification document */
  upsert?: Maybe<LicenseCertificationUpsertWithNestedWhereUniqueInput>;
  /** Connect existing LicenseCertification document */
  connect?: Maybe<LicenseCertificationWhereUniqueInput>;
  /** Disconnect currently connected LicenseCertification document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected LicenseCertification document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type BatchPayload = {
   __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type AuthorizedPersonnelUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  canVerify?: Maybe<Array<Scalars['String']>>;
};

/** Identifies documents */
export type EmployeeCredentialWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EmployeeCredentialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EmployeeCredentialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EmployeeCredentialWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  licenseCertification?: Maybe<LicenseCertificationWhereInput>;
  licenseCertificationNumber?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  licenseCertificationNumber_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  licenseCertificationNumber_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  licenseCertificationNumber_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  licenseCertificationNumber_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  licenseCertificationNumber_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  licenseCertificationNumber_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  licenseCertificationNumber_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  licenseCertificationNumber_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  licenseCertificationNumber_not_ends_with?: Maybe<Scalars['String']>;
  homeCareRegistryNumber?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  homeCareRegistryNumber_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  homeCareRegistryNumber_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  homeCareRegistryNumber_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  homeCareRegistryNumber_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  homeCareRegistryNumber_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  homeCareRegistryNumber_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  homeCareRegistryNumber_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  homeCareRegistryNumber_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  homeCareRegistryNumber_not_ends_with?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  issueDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  issueDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  issueDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  issueDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  issueDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  issueDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  issueDate_gte?: Maybe<Scalars['Date']>;
  expirationDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  expirationDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  expirationDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  expirationDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  expirationDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  expirationDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  expirationDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  expirationDate_gte?: Maybe<Scalars['Date']>;
  institutionProvidingCredential?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  institutionProvidingCredential_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  institutionProvidingCredential_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  institutionProvidingCredential_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  institutionProvidingCredential_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  institutionProvidingCredential_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  institutionProvidingCredential_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  institutionProvidingCredential_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  institutionProvidingCredential_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  institutionProvidingCredential_not_ends_with?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  comment_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  comment_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  comment_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  comment_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  comment_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  comment_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  comment_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  comment_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  comment_not_ends_with?: Maybe<Scalars['String']>;
  verifiedBy?: Maybe<AuthorizedPersonnelWhereInput>;
  employee?: Maybe<EmployeeWhereInput>;
  images?: Maybe<AssetWhereInput>;
};

export type Unnamed_1_MutationVariables = {
  data: AuthorizedPersonnelCreateInput;
};


export type Unnamed_1_Mutation = (
  { __typename?: 'Mutation' }
  & { createAuthorizedPersonnel?: Maybe<(
    { __typename?: 'AuthorizedPersonnel' }
    & Pick<AuthorizedPersonnel, 'id' | 'firstName' | 'lastName' | 'title' | 'canVerify'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_2_MutationVariables = {
  data: BranchCreateInput;
};


export type Unnamed_2_Mutation = (
  { __typename?: 'Mutation' }
  & { createBranch?: Maybe<(
    { __typename?: 'Branch' }
    & Pick<Branch, 'id' | 'branchName' | 'branchCode' | 'abbreviation' | 'address1' | 'address2' | 'city' | 'state' | 'zip' | 'zipExt' | 'phone' | 'phoneExt' | 'fax' | 'contactName' | 'contactTitle' | 'contactPhone' | 'contactPhoneExt' | 'contactEmail'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id'>
      & { companyUsers: Array<(
        { __typename?: 'UserCompany' }
        & Pick<UserCompany, 'user'>
      )> }
    )> }
  )> }
);

export type Unnamed_3_MutationVariables = {
  data: CompanyCreateInput;
};


export type Unnamed_3_Mutation = (
  { __typename?: 'Mutation' }
  & { createCompany?: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'legalBusinessName' | 'companyId' | 'doingBusinessAs' | 'abbreviation' | 'companyCode' | 'taxId' | 'nationalProviderIdentifier' | 'businessType' | 'address1' | 'address2' | 'zip' | 'zipExt' | 'city' | 'state' | 'phone' | 'fax' | 'contactName' | 'contactTitle' | 'contactPhone' | 'contactExt' | 'contactEmail' | 'owner' | 'stage'>
  )> }
);

export type Unnamed_4_MutationVariables = {
  data: DisciplineCreateInput;
};


export type Unnamed_4_Mutation = (
  { __typename?: 'Mutation' }
  & { createDiscipline?: Maybe<(
    { __typename?: 'Discipline' }
    & Pick<Discipline, 'id' | 'name' | 'abbreviation' | 'securityLevel'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_5_MutationVariables = {
  data: DisciplineGroupCreateInput;
};


export type Unnamed_5_Mutation = (
  { __typename?: 'Mutation' }
  & { createDisciplineGroup?: Maybe<(
    { __typename?: 'DisciplineGroup' }
    & Pick<DisciplineGroup, 'id' | 'name' | 'isAdmin' | 'allowOverlap'>
    & { disciplines: Array<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
    )>, company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_6_MutationVariables = {
  data: EmployeeCreateInput;
};


export type Unnamed_6_Mutation = (
  { __typename?: 'Mutation' }
  & { createEmployee?: Maybe<(
    { __typename?: 'Employee' }
    & Pick<Employee, 'id' | 'firstName' | 'lastName' | 'middleInitial' | 'maidenName' | 'alsoKnownAs' | 'gender' | 'birthdate' | 'social' | 'sharedEmployee' | 'earningsType' | 'originalHireDate' | 'orientationDate' | 'address1' | 'address2' | 'city' | 'state' | 'zip' | 'country' | 'phone1' | 'phone1Type' | 'phone1Ext' | 'phone2' | 'phone2Type' | 'phone2Ext' | 'phone3' | 'phone3Type' | 'phone3Ext' | 'otherPhone' | 'otherPhoneType' | 'otherPhoneExt' | 'fax' | 'email' | 'currentStatus' | 'isArchived'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )>, branch?: Maybe<(
      { __typename?: 'Branch' }
      & Pick<Branch, 'id' | 'branchName'>
    )>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle' | 'url'>
    )>, employeeDiscipline: Array<(
      { __typename?: 'EmployeeDiscipline' }
      & Pick<EmployeeDiscipline, 'id' | 'startDate' | 'endDate'>
      & { disciplineGroup?: Maybe<(
        { __typename?: 'DisciplineGroup' }
        & Pick<DisciplineGroup, 'id' | 'name' | 'isAdmin' | 'allowOverlap'>
      )>, discipline?: Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
      )> }
    )>, employeeCredential: Array<(
      { __typename?: 'EmployeeCredential' }
      & Pick<EmployeeCredential, 'id' | 'licenseCertificationNumber' | 'homeCareRegistryNumber' | 'issueDate' | 'expirationDate' | 'institutionProvidingCredential' | 'comment'>
      & { licenseCertification?: Maybe<(
        { __typename?: 'LicenseCertification' }
        & Pick<LicenseCertification, 'id' | 'name' | 'code' | 'type' | 'requirement' | 'validateDoh'>
      )>, images?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle' | 'url'>
      )>, verifiedBy?: Maybe<(
        { __typename?: 'AuthorizedPersonnel' }
        & Pick<AuthorizedPersonnel, 'id' | 'firstName' | 'lastName' | 'title'>
      )> }
    )> }
  )> }
);

export type Unnamed_7_MutationVariables = {
  data: EmployeeCredentialCreateInput;
};


export type Unnamed_7_Mutation = (
  { __typename?: 'Mutation' }
  & { createEmployeeCredential?: Maybe<(
    { __typename?: 'EmployeeCredential' }
    & Pick<EmployeeCredential, 'id' | 'licenseCertificationNumber' | 'homeCareRegistryNumber' | 'issueDate' | 'expirationDate' | 'institutionProvidingCredential' | 'comment'>
    & { licenseCertification?: Maybe<(
      { __typename?: 'LicenseCertification' }
      & Pick<LicenseCertification, 'id' | 'name' | 'code' | 'type' | 'requirement' | 'validateDoh'>
    )>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle' | 'url'>
    )>, verifiedBy?: Maybe<(
      { __typename?: 'AuthorizedPersonnel' }
      & Pick<AuthorizedPersonnel, 'id' | 'firstName' | 'lastName' | 'title'>
    )> }
  )> }
);

export type Unnamed_8_MutationVariables = {
  data: EmployeeDisciplineCreateInput;
};


export type Unnamed_8_Mutation = (
  { __typename?: 'Mutation' }
  & { createEmployeeDiscipline?: Maybe<(
    { __typename?: 'EmployeeDiscipline' }
    & Pick<EmployeeDiscipline, 'id' | 'startDate' | 'endDate'>
    & { disciplineGroup?: Maybe<(
      { __typename?: 'DisciplineGroup' }
      & Pick<DisciplineGroup, 'id' | 'name' | 'isAdmin' | 'allowOverlap'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
    )> }
  )> }
);

export type Unnamed_9_MutationVariables = {
  data: LicenseCertificationCreateInput;
};


export type Unnamed_9_Mutation = (
  { __typename?: 'Mutation' }
  & { createLicenseCertification?: Maybe<(
    { __typename?: 'LicenseCertification' }
    & Pick<LicenseCertification, 'id' | 'name' | 'code' | 'type' | 'requirement' | 'validateDoh'>
    & { disciplines: Array<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
    )>, company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_10_MutationVariables = {
  data: UserCompanyCreateInput;
};


export type Unnamed_10_Mutation = (
  { __typename?: 'Mutation' }
  & { createUserCompany?: Maybe<(
    { __typename?: 'UserCompany' }
    & Pick<UserCompany, 'id' | 'user'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_11_MutationVariables = {
  where: AssetWhereUniqueInput;
};


export type Unnamed_11_Mutation = (
  { __typename?: 'Mutation' }
  & { deleteAsset?: Maybe<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'id'>
  )> }
);

export type Unnamed_12_MutationVariables = {
  where: EmployeeWhereUniqueInput;
};


export type Unnamed_12_Mutation = (
  { __typename?: 'Mutation' }
  & { deleteEmployee?: Maybe<(
    { __typename?: 'Employee' }
    & Pick<Employee, 'id'>
  )> }
);

export type Unnamed_13_MutationVariables = {
  where: EmployeeDisciplineWhereUniqueInput;
};


export type Unnamed_13_Mutation = (
  { __typename?: 'Mutation' }
  & { deleteEmployeeDiscipline?: Maybe<(
    { __typename?: 'EmployeeDiscipline' }
    & Pick<EmployeeDiscipline, 'id'>
  )> }
);

export type Unnamed_14_MutationVariables = {
  where: AssetWhereUniqueInput;
};


export type Unnamed_14_Mutation = (
  { __typename?: 'Mutation' }
  & { publishAsset?: Maybe<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'id'>
  )> }
);

export type Unnamed_15_MutationVariables = {
  where: AuthorizedPersonnelWhereUniqueInput;
};


export type Unnamed_15_Mutation = (
  { __typename?: 'Mutation' }
  & { publishAuthorizedPersonnel?: Maybe<(
    { __typename?: 'AuthorizedPersonnel' }
    & Pick<AuthorizedPersonnel, 'id'>
  )> }
);

export type Unnamed_16_MutationVariables = {
  where: BranchWhereUniqueInput;
};


export type Unnamed_16_Mutation = (
  { __typename?: 'Mutation' }
  & { publishBranch?: Maybe<(
    { __typename?: 'Branch' }
    & Pick<Branch, 'id'>
  )> }
);

export type Unnamed_17_MutationVariables = {
  where: CompanyWhereUniqueInput;
};


export type Unnamed_17_Mutation = (
  { __typename?: 'Mutation' }
  & { publishCompany?: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'id'>
  )> }
);

export type Unnamed_18_MutationVariables = {
  where: DisciplineWhereUniqueInput;
};


export type Unnamed_18_Mutation = (
  { __typename?: 'Mutation' }
  & { publishDiscipline?: Maybe<(
    { __typename?: 'Discipline' }
    & Pick<Discipline, 'id'>
  )> }
);

export type Unnamed_19_MutationVariables = {
  where: DisciplineGroupWhereUniqueInput;
};


export type Unnamed_19_Mutation = (
  { __typename?: 'Mutation' }
  & { publishDisciplineGroup?: Maybe<(
    { __typename?: 'DisciplineGroup' }
    & Pick<DisciplineGroup, 'id'>
  )> }
);

export type Unnamed_20_MutationVariables = {
  where: EmployeeWhereUniqueInput;
};


export type Unnamed_20_Mutation = (
  { __typename?: 'Mutation' }
  & { publishEmployee?: Maybe<(
    { __typename?: 'Employee' }
    & Pick<Employee, 'id'>
  )> }
);

export type Unnamed_21_MutationVariables = {
  where: EmployeeCredentialWhereUniqueInput;
};


export type Unnamed_21_Mutation = (
  { __typename?: 'Mutation' }
  & { publishEmployeeCredential?: Maybe<(
    { __typename?: 'EmployeeCredential' }
    & Pick<EmployeeCredential, 'id'>
  )> }
);

export type Unnamed_22_MutationVariables = {
  where: EmployeeDisciplineWhereUniqueInput;
};


export type Unnamed_22_Mutation = (
  { __typename?: 'Mutation' }
  & { publishEmployeeDiscipline?: Maybe<(
    { __typename?: 'EmployeeDiscipline' }
    & Pick<EmployeeDiscipline, 'id'>
  )> }
);

export type Unnamed_23_MutationVariables = {
  where: LicenseCertificationWhereUniqueInput;
};


export type Unnamed_23_Mutation = (
  { __typename?: 'Mutation' }
  & { publishLicenseCertification?: Maybe<(
    { __typename?: 'LicenseCertification' }
    & Pick<LicenseCertification, 'id'>
  )> }
);

export type Unnamed_24_MutationVariables = {
  where: UserCompanyWhereUniqueInput;
};


export type Unnamed_24_Mutation = (
  { __typename?: 'Mutation' }
  & { publishUserCompany?: Maybe<(
    { __typename?: 'UserCompany' }
    & Pick<UserCompany, 'id'>
  )> }
);

export type Unnamed_25_MutationVariables = {
  data: AuthorizedPersonnelUpdateInput;
  where: AuthorizedPersonnelWhereUniqueInput;
};


export type Unnamed_25_Mutation = (
  { __typename?: 'Mutation' }
  & { updateAuthorizedPersonnel?: Maybe<(
    { __typename?: 'AuthorizedPersonnel' }
    & Pick<AuthorizedPersonnel, 'id' | 'firstName' | 'lastName' | 'title' | 'canVerify'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_26_MutationVariables = {
  data: BranchUpdateInput;
  where: BranchWhereUniqueInput;
};


export type Unnamed_26_Mutation = (
  { __typename?: 'Mutation' }
  & { updateBranch?: Maybe<(
    { __typename?: 'Branch' }
    & Pick<Branch, 'id' | 'branchName' | 'branchCode' | 'abbreviation' | 'address1' | 'address2' | 'city' | 'state' | 'zip' | 'zipExt' | 'phone' | 'phoneExt' | 'fax' | 'contactName' | 'contactTitle' | 'contactPhone' | 'contactPhoneExt' | 'contactEmail'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id'>
      & { companyUsers: Array<(
        { __typename?: 'UserCompany' }
        & Pick<UserCompany, 'user'>
      )> }
    )> }
  )> }
);

export type Unnamed_27_MutationVariables = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type Unnamed_27_Mutation = (
  { __typename?: 'Mutation' }
  & { updateCompany?: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'legalBusinessName' | 'companyId' | 'doingBusinessAs' | 'abbreviation' | 'companyCode' | 'taxId' | 'nationalProviderIdentifier' | 'businessType' | 'address1' | 'address2' | 'zip' | 'zipExt' | 'city' | 'state' | 'phone' | 'fax' | 'contactName' | 'contactTitle' | 'contactPhone' | 'contactExt' | 'contactEmail' | 'stage' | 'owner'>
  )> }
);

export type Unnamed_28_MutationVariables = {
  data: DisciplineUpdateInput;
  where: DisciplineWhereUniqueInput;
};


export type Unnamed_28_Mutation = (
  { __typename?: 'Mutation' }
  & { updateDiscipline?: Maybe<(
    { __typename?: 'Discipline' }
    & Pick<Discipline, 'id' | 'name' | 'abbreviation' | 'securityLevel'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_29_MutationVariables = {
  data: DisciplineGroupUpdateInput;
  where: DisciplineGroupWhereUniqueInput;
};


export type Unnamed_29_Mutation = (
  { __typename?: 'Mutation' }
  & { updateDisciplineGroup?: Maybe<(
    { __typename?: 'DisciplineGroup' }
    & Pick<DisciplineGroup, 'id' | 'name' | 'isAdmin' | 'allowOverlap'>
    & { disciplines: Array<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
    )>, company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_30_MutationVariables = {
  data: EmployeeUpdateInput;
  where: EmployeeWhereUniqueInput;
};


export type Unnamed_30_Mutation = (
  { __typename?: 'Mutation' }
  & { updateEmployee?: Maybe<(
    { __typename?: 'Employee' }
    & Pick<Employee, 'id' | 'firstName' | 'lastName' | 'middleInitial' | 'maidenName' | 'alsoKnownAs' | 'gender' | 'birthdate' | 'social' | 'sharedEmployee' | 'earningsType' | 'originalHireDate' | 'orientationDate' | 'address1' | 'address2' | 'city' | 'state' | 'zip' | 'country' | 'phone1' | 'phone1Type' | 'phone1Ext' | 'phone2' | 'phone2Type' | 'phone2Ext' | 'phone3' | 'phone3Type' | 'phone3Ext' | 'otherPhone' | 'otherPhoneType' | 'otherPhoneExt' | 'fax' | 'email' | 'currentStatus' | 'isArchived'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )>, branch?: Maybe<(
      { __typename?: 'Branch' }
      & Pick<Branch, 'id' | 'branchName'>
    )>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle' | 'url'>
    )>, employeeDiscipline: Array<(
      { __typename?: 'EmployeeDiscipline' }
      & Pick<EmployeeDiscipline, 'id' | 'startDate' | 'endDate'>
      & { disciplineGroup?: Maybe<(
        { __typename?: 'DisciplineGroup' }
        & Pick<DisciplineGroup, 'id' | 'name' | 'isAdmin' | 'allowOverlap'>
      )>, discipline?: Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
      )> }
    )>, employeeCredential: Array<(
      { __typename?: 'EmployeeCredential' }
      & Pick<EmployeeCredential, 'id' | 'licenseCertificationNumber' | 'homeCareRegistryNumber' | 'issueDate' | 'expirationDate' | 'institutionProvidingCredential' | 'comment'>
      & { licenseCertification?: Maybe<(
        { __typename?: 'LicenseCertification' }
        & Pick<LicenseCertification, 'id' | 'name' | 'code' | 'type' | 'requirement' | 'validateDoh'>
      )>, images?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle' | 'url'>
      )>, verifiedBy?: Maybe<(
        { __typename?: 'AuthorizedPersonnel' }
        & Pick<AuthorizedPersonnel, 'id' | 'firstName' | 'lastName' | 'title'>
      )> }
    )> }
  )> }
);

export type Unnamed_31_MutationVariables = {
  data: EmployeeCredentialUpdateInput;
  where: EmployeeCredentialWhereUniqueInput;
};


export type Unnamed_31_Mutation = (
  { __typename?: 'Mutation' }
  & { updateEmployeeCredential?: Maybe<(
    { __typename?: 'EmployeeCredential' }
    & Pick<EmployeeCredential, 'id' | 'licenseCertificationNumber' | 'homeCareRegistryNumber' | 'issueDate' | 'expirationDate' | 'institutionProvidingCredential' | 'comment'>
    & { licenseCertification?: Maybe<(
      { __typename?: 'LicenseCertification' }
      & Pick<LicenseCertification, 'id' | 'name' | 'code' | 'type' | 'requirement' | 'validateDoh'>
    )>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle' | 'url'>
    )>, verifiedBy?: Maybe<(
      { __typename?: 'AuthorizedPersonnel' }
      & Pick<AuthorizedPersonnel, 'id' | 'firstName' | 'lastName' | 'title'>
    )> }
  )> }
);

export type Unnamed_32_MutationVariables = {
  data: EmployeeDisciplineUpdateInput;
  where: EmployeeDisciplineWhereUniqueInput;
};


export type Unnamed_32_Mutation = (
  { __typename?: 'Mutation' }
  & { updateEmployeeDiscipline?: Maybe<(
    { __typename?: 'EmployeeDiscipline' }
    & Pick<EmployeeDiscipline, 'id' | 'startDate' | 'endDate'>
    & { disciplineGroup?: Maybe<(
      { __typename?: 'DisciplineGroup' }
      & Pick<DisciplineGroup, 'id' | 'name' | 'isAdmin' | 'allowOverlap'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
    )> }
  )> }
);

export type Unnamed_33_MutationVariables = {
  data: LicenseCertificationUpdateInput;
  where: LicenseCertificationWhereUniqueInput;
};


export type Unnamed_33_Mutation = (
  { __typename?: 'Mutation' }
  & { updateLicenseCertification?: Maybe<(
    { __typename?: 'LicenseCertification' }
    & Pick<LicenseCertification, 'id' | 'name' | 'code' | 'type' | 'requirement' | 'validateDoh'>
    & { disciplines: Array<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
    )>, company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_34_QueryVariables = {
  where: AuthorizedPersonnelWhereUniqueInput;
};


export type Unnamed_34_Query = (
  { __typename?: 'Query' }
  & { authorizedPersonnel?: Maybe<(
    { __typename?: 'AuthorizedPersonnel' }
    & Pick<AuthorizedPersonnel, 'id' | 'firstName' | 'lastName' | 'title' | 'canVerify'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_35_QueryVariables = {
  where?: Maybe<AuthorizedPersonnelWhereInput>;
};


export type Unnamed_35_Query = (
  { __typename?: 'Query' }
  & { authorizedPersonnels: Array<(
    { __typename?: 'AuthorizedPersonnel' }
    & Pick<AuthorizedPersonnel, 'id' | 'firstName' | 'lastName' | 'title' | 'canVerify'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_36_QueryVariables = {
  where: BranchWhereUniqueInput;
};


export type Unnamed_36_Query = (
  { __typename?: 'Query' }
  & { branch?: Maybe<(
    { __typename?: 'Branch' }
    & Pick<Branch, 'id' | 'branchName' | 'branchCode' | 'abbreviation' | 'address1' | 'address2' | 'city' | 'state' | 'zip' | 'zipExt' | 'phone' | 'phoneExt' | 'fax' | 'contactName' | 'contactTitle' | 'contactPhone' | 'contactPhoneExt' | 'contactEmail'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id'>
      & { companyUsers: Array<(
        { __typename?: 'UserCompany' }
        & Pick<UserCompany, 'user'>
      )> }
    )> }
  )> }
);

export type Unnamed_37_QueryVariables = {
  where?: Maybe<CompanyWhereInput>;
};


export type Unnamed_37_Query = (
  { __typename?: 'Query' }
  & { companies: Array<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'legalBusinessName' | 'companyId' | 'doingBusinessAs' | 'abbreviation' | 'companyCode' | 'taxId' | 'nationalProviderIdentifier' | 'businessType' | 'address1' | 'address2' | 'zip' | 'zipExt' | 'city' | 'state' | 'phone' | 'fax' | 'contactName' | 'contactTitle' | 'contactPhone' | 'contactExt' | 'contactEmail' | 'owner' | 'stage'>
    & { logo?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  )> }
);

export type Unnamed_38_QueryVariables = {
  where: CompanyWhereUniqueInput;
};


export type Unnamed_38_Query = (
  { __typename?: 'Query' }
  & { company?: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'legalBusinessName' | 'companyId' | 'doingBusinessAs' | 'abbreviation' | 'companyCode' | 'taxId' | 'nationalProviderIdentifier' | 'businessType' | 'address1' | 'address2' | 'zip' | 'zipExt' | 'city' | 'state' | 'phone' | 'fax' | 'contactName' | 'contactTitle' | 'contactPhone' | 'contactExt' | 'contactEmail' | 'owner' | 'stage'>
    & { logo?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )>, companyUsers: Array<(
      { __typename?: 'UserCompany' }
      & Pick<UserCompany, 'user'>
    )>, companyBranches: Array<(
      { __typename?: 'Branch' }
      & Pick<Branch, 'id' | 'branchName' | 'city' | 'state' | 'phone'>
    )> }
  )> }
);

export type Unnamed_39_QueryVariables = {
  where: DisciplineWhereUniqueInput;
};


export type Unnamed_39_Query = (
  { __typename?: 'Query' }
  & { discipline?: Maybe<(
    { __typename?: 'Discipline' }
    & Pick<Discipline, 'id' | 'name' | 'abbreviation' | 'securityLevel'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_40_QueryVariables = {
  where: DisciplineGroupWhereUniqueInput;
};


export type Unnamed_40_Query = (
  { __typename?: 'Query' }
  & { disciplineGroup?: Maybe<(
    { __typename?: 'DisciplineGroup' }
    & Pick<DisciplineGroup, 'id' | 'name' | 'isAdmin' | 'allowOverlap'>
    & { disciplines: Array<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
    )>, company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_41_QueryVariables = {
  where?: Maybe<DisciplineWhereInput>;
};


export type Unnamed_41_Query = (
  { __typename?: 'Query' }
  & { disciplines: Array<(
    { __typename?: 'Discipline' }
    & Pick<Discipline, 'id' | 'name' | 'abbreviation' | 'securityLevel'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_42_QueryVariables = {
  where?: Maybe<DisciplineGroupWhereInput>;
};


export type Unnamed_42_Query = (
  { __typename?: 'Query' }
  & { disciplineGroups: Array<(
    { __typename?: 'DisciplineGroup' }
    & Pick<DisciplineGroup, 'id' | 'name' | 'isAdmin' | 'allowOverlap'>
    & { disciplines: Array<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'id' | 'name' | 'abbreviation' | 'securityLevel'>
    )> }
  )> }
);

export type Unnamed_43_QueryVariables = {
  where: EmployeeWhereUniqueInput;
};


export type Unnamed_43_Query = (
  { __typename?: 'Query' }
  & { employee?: Maybe<(
    { __typename?: 'Employee' }
    & Pick<Employee, 'id' | 'firstName' | 'lastName' | 'middleInitial' | 'maidenName' | 'alsoKnownAs' | 'gender' | 'birthdate' | 'social' | 'sharedEmployee' | 'earningsType' | 'originalHireDate' | 'orientationDate' | 'address1' | 'address2' | 'city' | 'state' | 'zip' | 'country' | 'phone1' | 'phone1Type' | 'phone1Ext' | 'phone2' | 'phone2Type' | 'phone2Ext' | 'phone3' | 'phone3Type' | 'phone3Ext' | 'otherPhone' | 'otherPhoneType' | 'otherPhoneExt' | 'fax' | 'email' | 'currentStatus' | 'isArchived'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )>, branch?: Maybe<(
      { __typename?: 'Branch' }
      & Pick<Branch, 'id' | 'branchName'>
    )>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle' | 'url'>
    )>, employeeDiscipline: Array<(
      { __typename?: 'EmployeeDiscipline' }
      & Pick<EmployeeDiscipline, 'id' | 'startDate' | 'endDate'>
      & { disciplineGroup?: Maybe<(
        { __typename?: 'DisciplineGroup' }
        & Pick<DisciplineGroup, 'id' | 'name' | 'isAdmin' | 'allowOverlap'>
      )>, discipline?: Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
      )> }
    )>, employeeCredential: Array<(
      { __typename?: 'EmployeeCredential' }
      & Pick<EmployeeCredential, 'id' | 'licenseCertificationNumber' | 'homeCareRegistryNumber' | 'issueDate' | 'expirationDate' | 'institutionProvidingCredential' | 'comment'>
      & { licenseCertification?: Maybe<(
        { __typename?: 'LicenseCertification' }
        & Pick<LicenseCertification, 'id' | 'name' | 'code' | 'type' | 'requirement' | 'validateDoh'>
      )>, images?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle' | 'url'>
      )>, verifiedBy?: Maybe<(
        { __typename?: 'AuthorizedPersonnel' }
        & Pick<AuthorizedPersonnel, 'id' | 'firstName' | 'lastName' | 'title'>
      )> }
    )> }
  )> }
);

export type Unnamed_44_QueryVariables = {
  where: EmployeeCredentialWhereUniqueInput;
};


export type Unnamed_44_Query = (
  { __typename?: 'Query' }
  & { employeeCredential?: Maybe<(
    { __typename?: 'EmployeeCredential' }
    & Pick<EmployeeCredential, 'id' | 'licenseCertificationNumber' | 'homeCareRegistryNumber' | 'issueDate' | 'expirationDate' | 'institutionProvidingCredential' | 'comment'>
    & { licenseCertification?: Maybe<(
      { __typename?: 'LicenseCertification' }
      & Pick<LicenseCertification, 'id' | 'name' | 'code' | 'type' | 'requirement' | 'validateDoh'>
    )>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle' | 'url'>
    )>, verifiedBy?: Maybe<(
      { __typename?: 'AuthorizedPersonnel' }
      & Pick<AuthorizedPersonnel, 'id' | 'firstName' | 'lastName' | 'title'>
    )> }
  )> }
);

export type Unnamed_45_QueryVariables = {
  where?: Maybe<EmployeeCredentialWhereInput>;
};


export type Unnamed_45_Query = (
  { __typename?: 'Query' }
  & { employeeCredentials: Array<(
    { __typename?: 'EmployeeCredential' }
    & Pick<EmployeeCredential, 'id' | 'licenseCertificationNumber' | 'homeCareRegistryNumber' | 'issueDate' | 'expirationDate' | 'institutionProvidingCredential' | 'comment'>
    & { licenseCertification?: Maybe<(
      { __typename?: 'LicenseCertification' }
      & Pick<LicenseCertification, 'id' | 'name' | 'code' | 'type' | 'requirement' | 'validateDoh'>
    )>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle' | 'url'>
    )>, verifiedBy?: Maybe<(
      { __typename?: 'AuthorizedPersonnel' }
      & Pick<AuthorizedPersonnel, 'id' | 'firstName' | 'lastName' | 'title'>
    )> }
  )> }
);

export type Unnamed_46_QueryVariables = {
  where: EmployeeDisciplineWhereUniqueInput;
};


export type Unnamed_46_Query = (
  { __typename?: 'Query' }
  & { employeeDiscipline?: Maybe<(
    { __typename?: 'EmployeeDiscipline' }
    & Pick<EmployeeDiscipline, 'id' | 'startDate' | 'endDate'>
    & { disciplineGroup?: Maybe<(
      { __typename?: 'DisciplineGroup' }
      & Pick<DisciplineGroup, 'id' | 'name' | 'isAdmin' | 'allowOverlap'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
    )> }
  )> }
);

export type Unnamed_47_QueryVariables = {
  where?: Maybe<EmployeeWhereInput>;
};


export type Unnamed_47_Query = (
  { __typename?: 'Query' }
  & { employees: Array<(
    { __typename?: 'Employee' }
    & Pick<Employee, 'id' | 'firstName' | 'lastName' | 'middleInitial' | 'maidenName' | 'alsoKnownAs' | 'gender' | 'birthdate' | 'social' | 'sharedEmployee' | 'earningsType' | 'originalHireDate' | 'orientationDate' | 'address1' | 'address2' | 'city' | 'state' | 'zip' | 'country' | 'phone1' | 'phone1Type' | 'phone1Ext' | 'phone2' | 'phone2Type' | 'phone2Ext' | 'phone3' | 'phone3Type' | 'phone3Ext' | 'otherPhone' | 'otherPhoneType' | 'otherPhoneExt' | 'fax' | 'email' | 'currentStatus' | 'isArchived'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )>, branch?: Maybe<(
      { __typename?: 'Branch' }
      & Pick<Branch, 'id' | 'branchName'>
    )>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle' | 'url'>
    )>, employeeDiscipline: Array<(
      { __typename?: 'EmployeeDiscipline' }
      & Pick<EmployeeDiscipline, 'id' | 'startDate' | 'endDate'>
      & { disciplineGroup?: Maybe<(
        { __typename?: 'DisciplineGroup' }
        & Pick<DisciplineGroup, 'id' | 'name' | 'isAdmin' | 'allowOverlap'>
      )>, discipline?: Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
      )> }
    )>, employeeCredential: Array<(
      { __typename?: 'EmployeeCredential' }
      & Pick<EmployeeCredential, 'id' | 'licenseCertificationNumber' | 'homeCareRegistryNumber' | 'issueDate' | 'expirationDate' | 'institutionProvidingCredential' | 'comment'>
      & { licenseCertification?: Maybe<(
        { __typename?: 'LicenseCertification' }
        & Pick<LicenseCertification, 'id' | 'name' | 'code' | 'type' | 'requirement' | 'validateDoh'>
      )>, images?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle' | 'url'>
      )>, verifiedBy?: Maybe<(
        { __typename?: 'AuthorizedPersonnel' }
        & Pick<AuthorizedPersonnel, 'id' | 'firstName' | 'lastName' | 'title'>
      )> }
    )> }
  )> }
);

export type Unnamed_48_QueryVariables = {
  where: LicenseCertificationWhereUniqueInput;
};


export type Unnamed_48_Query = (
  { __typename?: 'Query' }
  & { licenseCertification?: Maybe<(
    { __typename?: 'LicenseCertification' }
    & Pick<LicenseCertification, 'id' | 'name' | 'code' | 'type' | 'requirement' | 'validateDoh'>
    & { disciplines: Array<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
    )>, company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_49_QueryVariables = {
  where?: Maybe<LicenseCertificationWhereInput>;
};


export type Unnamed_49_Query = (
  { __typename?: 'Query' }
  & { licenseCertifications: Array<(
    { __typename?: 'LicenseCertification' }
    & Pick<LicenseCertification, 'id' | 'name' | 'code' | 'type' | 'requirement' | 'validateDoh'>
    & { disciplines: Array<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'id' | 'name' | 'abbreviation'>
    )>, company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName'>
    )> }
  )> }
);

export type Unnamed_50_QueryVariables = {
  where?: Maybe<UserCompanyWhereInput>;
};


export type Unnamed_50_Query = (
  { __typename?: 'Query' }
  & { userCompanies: Array<(
    { __typename?: 'UserCompany' }
    & Pick<UserCompany, 'id' | 'user'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName' | 'companyId' | 'doingBusinessAs' | 'abbreviation' | 'companyCode' | 'taxId' | 'nationalProviderIdentifier' | 'businessType' | 'address1' | 'address2' | 'zip' | 'zipExt' | 'city' | 'state' | 'phone' | 'fax' | 'contactName' | 'contactTitle' | 'contactPhone' | 'contactExt' | 'contactEmail' | 'owner' | 'stage'>
      & { logo?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
      )> }
    )> }
  )> }
);

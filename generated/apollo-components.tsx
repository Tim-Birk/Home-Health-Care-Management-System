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
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Raw JSON value */
  Json: any;
  Hex: any;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type EmployeeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: EmployeeWhereInput;
  /** Update many input */
  data: EmployeeUpdateManyInput;
};

export type EmployeeUpsertInput = {
  /** Create document if it didn't exist */
  create: EmployeeCreateInput;
  /** Update document if it exists */
  update: EmployeeUpdateInput;
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
  contactEmail?: Maybe<Scalars['String']>;
  userCompany?: Maybe<UserCompany>;
  employee?: Maybe<Employee>;
  owner?: Maybe<Scalars['String']>;
};


export type CompanyDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
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

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
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

/** An edge in a connection. */
export type UserCompanyEdge = {
   __typename?: 'UserCompanyEdge';
  /** The item at the end of the edge. */
  node: UserCompany;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
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
  contactEmail?: Maybe<Scalars['String']>;
  userCompany?: Maybe<UserCompanyCreateOneInlineInput>;
  employee?: Maybe<EmployeeCreateOneInlineInput>;
  owner?: Maybe<Scalars['String']>;
};

/** References Employee record uniquely */
export type EmployeeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

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

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
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

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
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

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

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
};

export type UserCompanyCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyCreateOneInlineInput>;
};

export type EmployeeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EmployeeWhereUniqueInput;
  /** Upsert data */
  data: EmployeeUpsertInput;
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

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

/** An edge in a connection. */
export type AssetEdge = {
   __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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

/** References UserCompany record uniquely */
export type UserCompanyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** System Published Stage */
  Published = 'PUBLISHED',
  /** System Draft Stage */
  Draft = 'DRAFT'
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** An edge in a connection. */
export type CompanyEdge = {
   __typename?: 'CompanyEdge';
  /** The item at the end of the edge. */
  node: Company;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type UserCompanyUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: UserCompanyWhereUniqueInput;
  /** Document to update */
  data: UserCompanyUpdateInput;
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


export type BatchPayload = {
   __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
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
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type CompanyUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CompanyWhereInput;
  /** Update many input */
  data: CompanyUpdateManyInput;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};


export type Aggregate = {
   __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export type UserCompanyUpdateInput = {
  user?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyUpdateOneInlineInput>;
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
  ContactEmailAsc = 'contactEmail_ASC',
  ContactEmailDesc = 'contactEmail_DESC',
  OwnerAsc = 'owner_ASC',
  OwnerDesc = 'owner_DESC'
}

/** An edge in a connection. */
export type EmployeeEdge = {
   __typename?: 'EmployeeEdge';
  /** The item at the end of the edge. */
  node: Employee;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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
  branch?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  branch_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  branch_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  branch_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  branch_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  branch_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  branch_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  branch_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  branch_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  branch_not_ends_with?: Maybe<Scalars['String']>;
  sharedEmployee?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  sharedEmployee_not?: Maybe<Scalars['Boolean']>;
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
  isArchived?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isArchived_not?: Maybe<Scalars['Boolean']>;
  company?: Maybe<CompanyWhereInput>;
};

export type UserCompanyUpsertInput = {
  /** Create document if it didn't exist */
  create: UserCompanyCreateInput;
  /** Update document if it exists */
  update: UserCompanyUpdateInput;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
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
  branch?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  branch_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  branch_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  branch_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  branch_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  branch_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  branch_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  branch_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  branch_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  branch_not_ends_with?: Maybe<Scalars['String']>;
  sharedEmployee?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  sharedEmployee_not?: Maybe<Scalars['Boolean']>;
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
  isArchived?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isArchived_not?: Maybe<Scalars['Boolean']>;
  company?: Maybe<CompanyWhereInput>;
};

export type EmployeeCreateOneInlineInput = {
  /** Create and connect one Employee document */
  create?: Maybe<EmployeeCreateInput>;
  /** Connect one existing Employee document */
  connect?: Maybe<EmployeeWhereUniqueInput>;
};

export type UserCompanyCreateOneInlineInput = {
  /** Create and connect one UserCompany document */
  create?: Maybe<UserCompanyCreateInput>;
  /** Connect one existing UserCompany document */
  connect?: Maybe<UserCompanyWhereUniqueInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
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
  userCompany?: Maybe<UserCompanyWhereInput>;
  employee?: Maybe<EmployeeWhereInput>;
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
};


export type UserCompanyDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
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
  /** Retrieve multiple companies */
  companies: Array<Company>;
  /** Retrieve a single company */
  company?: Maybe<Company>;
  /** Retrieve multiple companies using the Relay connection interface */
  companiesConnection: CompanyConnection;
  /** Retrieve multiple employees */
  employees: Array<Employee>;
  /** Retrieve a single employee */
  employee?: Maybe<Employee>;
  /** Retrieve multiple employees using the Relay connection interface */
  employeesConnection: EmployeeConnection;
  /** Retrieve multiple userCompanies */
  userCompanies: Array<UserCompany>;
  /** Retrieve a single userCompany */
  userCompany?: Maybe<UserCompany>;
  /** Retrieve multiple userCompanies using the Relay connection interface */
  userCompaniesConnection: UserCompanyConnection;
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

export type CompanyUpsertInput = {
  /** Create document if it didn't exist */
  create: CompanyCreateInput;
  /** Update document if it exists */
  update: CompanyUpdateInput;
};

export type EmployeeConnectInput = {
  /** Document to connect */
  where: EmployeeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
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

export type UserCompanyUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
};

/** References Company record uniquely */
export type CompanyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CompanyCreateOneInlineInput = {
  /** Create and connect one Company document */
  create?: Maybe<CompanyCreateInput>;
  /** Connect one existing Company document */
  connect?: Maybe<CompanyWhereUniqueInput>;
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

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
   __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
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

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
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
  branch?: Maybe<Scalars['String']>;
  sharedEmployee?: Maybe<Scalars['Boolean']>;
  earningsType?: Maybe<Scalars['String']>;
  originalHireDate?: Maybe<Scalars['Date']>;
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
  fax?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  company?: Maybe<CompanyCreateOneInlineInput>;
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

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type CompanyCreateManyInlineInput = {
  /** Create and connect multiple existing Company documents */
  create?: Maybe<Array<CompanyCreateInput>>;
  /** Connect multiple existing Company documents */
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
};

export type UserCompanyUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: UserCompanyWhereUniqueInput;
  /** Upsert data */
  data: UserCompanyUpsertInput;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
   __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type AssetUpdateManyLocalizationInput = {
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

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
  branch?: Maybe<Scalars['String']>;
  sharedEmployee?: Maybe<Scalars['Boolean']>;
  earningsType?: Maybe<Scalars['String']>;
  originalHireDate?: Maybe<Scalars['Date']>;
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
  fax?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
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
  userCompany?: Maybe<UserCompanyWhereInput>;
  employee?: Maybe<EmployeeWhereInput>;
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
};

export type CompanyConnectInput = {
  /** Document to connect */
  where: CompanyWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};


export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
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
  contactEmail?: Maybe<Scalars['String']>;
  userCompany?: Maybe<UserCompanyUpdateOneInlineInput>;
  employee?: Maybe<EmployeeUpdateOneInlineInput>;
  owner?: Maybe<Scalars['String']>;
};

export type EmployeeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EmployeeWhereUniqueInput;
  /** Document to update */
  data: EmployeeUpdateInput;
};

export type UserCompanyUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: UserCompanyWhereInput;
  /** Update many input */
  data: UserCompanyUpdateManyInput;
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

export type CompanyUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CompanyWhereUniqueInput;
  /** Upsert data */
  data: CompanyUpsertInput;
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

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type EmployeeCreateManyInlineInput = {
  /** Create and connect multiple existing Employee documents */
  create?: Maybe<Array<EmployeeCreateInput>>;
  /** Connect multiple existing Employee documents */
  connect?: Maybe<Array<EmployeeWhereUniqueInput>>;
};

export type UserCompanyConnectInput = {
  /** Document to connect */
  where: UserCompanyWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type UserCompanyCreateManyInlineInput = {
  /** Create and connect multiple existing UserCompany documents */
  create?: Maybe<Array<UserCompanyCreateInput>>;
  /** Connect multiple existing UserCompany documents */
  connect?: Maybe<Array<UserCompanyWhereUniqueInput>>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
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
  branch?: Maybe<Scalars['String']>;
  sharedEmployee?: Maybe<Scalars['Boolean']>;
  earningsType?: Maybe<Scalars['String']>;
  originalHireDate?: Maybe<Scalars['Date']>;
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
  fax?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  company?: Maybe<Company>;
};


export type EmployeeDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type AssetUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Optional updates to localizations */
  localizations?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
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
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type CompanyUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CompanyWhereUniqueInput;
  /** Document to update */
  data: CompanyUpdateInput;
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
  contactEmail?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};


export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

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
  BranchAsc = 'branch_ASC',
  BranchDesc = 'branch_DESC',
  SharedEmployeeAsc = 'sharedEmployee_ASC',
  SharedEmployeeDesc = 'sharedEmployee_DESC',
  EarningsTypeAsc = 'earningsType_ASC',
  EarningsTypeDesc = 'earningsType_DESC',
  OriginalHireDateAsc = 'originalHireDate_ASC',
  OriginalHireDateDesc = 'originalHireDate_DESC',
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
  FaxAsc = 'fax_ASC',
  FaxDesc = 'fax_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  CurrentStatusAsc = 'currentStatus_ASC',
  CurrentStatusDesc = 'currentStatus_DESC',
  IsArchivedAsc = 'isArchived_ASC',
  IsArchivedDesc = 'isArchived_DESC'
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
  branch?: Maybe<Scalars['String']>;
  sharedEmployee?: Maybe<Scalars['Boolean']>;
  earningsType?: Maybe<Scalars['String']>;
  originalHireDate?: Maybe<Scalars['Date']>;
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
  fax?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  company?: Maybe<CompanyUpdateOneInlineInput>;
};

export type CreateCompanyGraphQlMutationVariables = {
  data: CompanyCreateInput;
};


export type CreateCompanyGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { createCompany?: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'legalBusinessName' | 'companyId' | 'doingBusinessAs' | 'abbreviation' | 'companyCode' | 'taxId' | 'nationalProviderIdentifier' | 'businessType' | 'address1' | 'address2' | 'zip' | 'zipExt' | 'city' | 'state' | 'phone' | 'fax' | 'contactName' | 'contactTitle' | 'contactPhone' | 'contactEmail' | 'owner'>
  )> }
);

export type CreateEmployeeGraphQlMutationVariables = {
  data: EmployeeCreateInput;
};


export type CreateEmployeeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { createEmployee?: Maybe<(
    { __typename?: 'Employee' }
    & Pick<Employee, 'id' | 'firstName' | 'lastName' | 'middleInitial' | 'maidenName' | 'alsoKnownAs' | 'gender' | 'birthdate' | 'social' | 'branch' | 'sharedEmployee' | 'earningsType' | 'originalHireDate' | 'orientationDate' | 'address1' | 'address2' | 'city' | 'state' | 'zip' | 'country' | 'phone1' | 'phone1Type' | 'phone1Ext' | 'phone2' | 'phone2Type' | 'phone2Ext' | 'phone3' | 'phone3Type' | 'phone3Ext' | 'otherPhone' | 'otherPhoneType' | 'otherPhoneExt' | 'fax' | 'email' | 'currentStatus' | 'isArchived'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id'>
    )> }
  )> }
);

export type DeleteUserLikeGraphQlMutationVariables = {
  where: EmployeeWhereUniqueInput;
};


export type DeleteUserLikeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { deleteEmployee?: Maybe<(
    { __typename?: 'Employee' }
    & Pick<Employee, 'id'>
  )> }
);

export type UpdateCompanyGraphQlMutationVariables = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type UpdateCompanyGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { updateCompany?: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'legalBusinessName' | 'companyId' | 'doingBusinessAs' | 'abbreviation' | 'companyCode' | 'taxId' | 'nationalProviderIdentifier' | 'businessType' | 'address1' | 'address2' | 'zip' | 'zipExt' | 'city' | 'state' | 'phone' | 'fax' | 'contactName' | 'contactTitle' | 'contactPhone' | 'contactEmail' | 'owner'>
  )> }
);

export type UpdateEmployeeGraphQlMutationVariables = {
  data: EmployeeUpdateInput;
  where: EmployeeWhereUniqueInput;
};


export type UpdateEmployeeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { updateEmployee?: Maybe<(
    { __typename?: 'Employee' }
    & Pick<Employee, 'id' | 'firstName' | 'lastName' | 'middleInitial' | 'maidenName' | 'alsoKnownAs' | 'gender' | 'birthdate' | 'social' | 'branch' | 'sharedEmployee' | 'earningsType' | 'originalHireDate' | 'orientationDate' | 'address1' | 'address2' | 'city' | 'state' | 'zip' | 'country' | 'phone1' | 'phone1Type' | 'phone1Ext' | 'phone2' | 'phone2Type' | 'phone2Ext' | 'phone3' | 'phone3Type' | 'phone3Ext' | 'otherPhone' | 'otherPhoneType' | 'otherPhoneExt' | 'fax' | 'email' | 'currentStatus' | 'isArchived'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id'>
    )> }
  )> }
);

export type CompaniesGraphQlQueryVariables = {
  where?: Maybe<CompanyWhereInput>;
};


export type CompaniesGraphQlQuery = (
  { __typename?: 'Query' }
  & { companies: Array<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'legalBusinessName' | 'companyId' | 'doingBusinessAs' | 'abbreviation' | 'companyCode' | 'taxId' | 'nationalProviderIdentifier' | 'businessType' | 'address1' | 'address2' | 'zip' | 'zipExt' | 'city' | 'state' | 'phone' | 'fax' | 'contactName' | 'contactTitle' | 'contactPhone' | 'contactEmail' | 'owner'>
  )> }
);

export type CompanyGraphQlQueryVariables = {
  where: CompanyWhereUniqueInput;
};


export type CompanyGraphQlQuery = (
  { __typename?: 'Query' }
  & { company?: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'legalBusinessName' | 'companyId' | 'doingBusinessAs' | 'abbreviation' | 'companyCode' | 'taxId' | 'nationalProviderIdentifier' | 'businessType' | 'address1' | 'address2' | 'zip' | 'zipExt' | 'city' | 'state' | 'phone' | 'fax' | 'contactName' | 'contactTitle' | 'contactPhone' | 'contactEmail' | 'owner'>
  )> }
);

export type EmployeeGraphQlQueryVariables = {
  where: EmployeeWhereUniqueInput;
};


export type EmployeeGraphQlQuery = (
  { __typename?: 'Query' }
  & { employee?: Maybe<(
    { __typename?: 'Employee' }
    & Pick<Employee, 'id' | 'firstName' | 'lastName' | 'middleInitial' | 'maidenName' | 'alsoKnownAs' | 'gender' | 'birthdate' | 'social' | 'branch' | 'sharedEmployee' | 'earningsType' | 'originalHireDate' | 'orientationDate' | 'address1' | 'address2' | 'city' | 'state' | 'zip' | 'country' | 'phone1' | 'phone1Type' | 'phone1Ext' | 'phone2' | 'phone2Type' | 'phone2Ext' | 'phone3' | 'phone3Type' | 'phone3Ext' | 'otherPhone' | 'otherPhoneType' | 'otherPhoneExt' | 'fax' | 'email' | 'currentStatus' | 'isArchived'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id'>
    )> }
  )> }
);

export type EmployeesGraphQlQueryVariables = {
  where?: Maybe<EmployeeWhereInput>;
};


export type EmployeesGraphQlQuery = (
  { __typename?: 'Query' }
  & { employees: Array<(
    { __typename?: 'Employee' }
    & Pick<Employee, 'id' | 'firstName' | 'lastName' | 'middleInitial' | 'maidenName' | 'alsoKnownAs' | 'gender' | 'birthdate' | 'social' | 'branch' | 'sharedEmployee' | 'earningsType' | 'originalHireDate' | 'orientationDate' | 'address1' | 'address2' | 'city' | 'state' | 'zip' | 'country' | 'phone1' | 'phone1Type' | 'phone1Ext' | 'phone2' | 'phone2Type' | 'phone2Ext' | 'phone3' | 'phone3Type' | 'phone3Ext' | 'otherPhone' | 'otherPhoneType' | 'otherPhoneExt' | 'fax' | 'email' | 'currentStatus' | 'isArchived'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id'>
    )> }
  )> }
);

export type UserCompaniesGraphQlQueryVariables = {
  where?: Maybe<UserCompanyWhereInput>;
};


export type UserCompaniesGraphQlQuery = (
  { __typename?: 'Query' }
  & { userCompanies: Array<(
    { __typename?: 'UserCompany' }
    & Pick<UserCompany, 'id' | 'user'>
    & { company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'legalBusinessName' | 'companyId' | 'doingBusinessAs' | 'abbreviation' | 'companyCode' | 'taxId' | 'nationalProviderIdentifier' | 'businessType' | 'address1' | 'address2' | 'zip' | 'zipExt' | 'city' | 'state' | 'phone' | 'fax' | 'contactName' | 'contactTitle' | 'contactPhone' | 'contactEmail' | 'owner'>
    )> }
  )> }
);

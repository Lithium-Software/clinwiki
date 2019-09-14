/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum FieldDisplay {
  DATE = "DATE",
  STAR = "STAR",
  STRING = "STRING",
}

export enum FilterKind {
  BLACKLIST = "BLACKLIST",
  WHITELIST = "WHITELIST",
}

/**
 * Possible set of operations of site view
 */
export enum SiteViewOperation {
  DELETE = "DELETE",
  PUSH = "PUSH",
  SET = "SET",
}

/**
 * An Agg Filter
 */
export interface AggFilterInput {
  field: string;
  values?: string[] | null;
}

/**
 * Autogenerated input type of CreateSite
 */
export interface CreateSiteInput {
  name: string;
  subdomain: string;
  editorEmails?: string[] | null;
  clientMutationId?: string | null;
}

/**
 * Autogenerated input type of DeleteSite
 */
export interface DeleteSiteInput {
  id: number;
  clientMutationId?: string | null;
}

/**
 * Autogenerated input type of ResetPassword
 */
export interface ResetPasswordInput {
  email: string;
  clientMutationId?: string | null;
}

/**
 *     An input type for a search query param (q).
 * This is a tree like structure where leafs are the search terms and
 * tree nodes are the AND / OR conditions.
 */
export interface SearchQueryInput {
  key: string;
  children?: SearchQueryInput[] | null;
}

/**
 * Autogenerated input type of SignIn
 */
export interface SignInInput {
  email: string;
  password: string;
  clientMutationId?: string | null;
}

/**
 * Autogenerated input type of SignUp
 */
export interface SignUpInput {
  email: string;
  password: string;
  defaultQueryString?: string | null;
  clientMutationId?: string | null;
}

/**
 * An atomic mutation of site
 */
export interface SiteViewMutationInput {
  path: string[];
  operation: SiteViewOperation;
  payload: string;
}

/**
 * Column to sort by
 */
export interface SortInput {
  id: string;
  desc?: boolean | null;
}

/**
 * Autogenerated input type of UpdateProfile
 */
export interface UpdateProfileInput {
  firstName?: string | null;
  lastName?: string | null;
  defaultQueryString?: string | null;
  clientMutationId?: string | null;
}

/**
 * Autogenerated input type of UpdateSite
 */
export interface UpdateSiteInput {
  id: number;
  name?: string | null;
  subdomain?: string | null;
  editorEmails?: string[] | null;
  clientMutationId?: string | null;
}

/**
 * Autogenerated input type of UpdateSiteView
 */
export interface UpdateSiteViewInput {
  id: number;
  mutations: SiteViewMutationInput[];
  clientMutationId?: string | null;
}

/**
 * Autogenerated input type of UpdateWikiSections
 */
export interface UpdateWikiSectionsInput {
  nctId: string;
  sections: WikiSectionInput[];
  clientMutationId?: string | null;
}

/**
 * Autogenerated input type of UpdateWorkflowsView
 */
export interface UpdateWorkflowsViewInput {
  mutations: SiteViewMutationInput[];
  clientMutationId?: string | null;
}

/**
 * A wiki section input
 */
export interface WikiSectionInput {
  name: string;
  content: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

export interface Data<T> {
    data: T
}
export interface organizationWrap {
    organization: OrganizationData;
}
export interface OrganizationData {
    name: string;
    url: string;
}
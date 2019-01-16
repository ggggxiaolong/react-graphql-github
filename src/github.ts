export interface Data<T> {
    data: T
}
export interface OrganizationWrap {
    organization: OrganizationData;
}
export interface OrganizationData {
    name: string;
    url: string;
    repository: RepositoryData;
}
export interface RepositoryData {
    name: string;
    url: string;
}

export interface OrganizationProps{
    organization: OrganizationData;
    error: string | null;
}